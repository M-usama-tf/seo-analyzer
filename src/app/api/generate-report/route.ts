import { NextResponse } from "next/server";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

// Helper function to sanitize the URL and create a valid file name
function sanitizeUrlToFileName(url: string) {
  // Replace non-alphanumeric characters (except . and -) with underscores
  return url.replace(/[^a-zA-Z0-9.-]/g, "_");
}

// Handle POST request
// Helper function to execute a command and return a Promise
function execPromise(command: string, options: any): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`exec error: ${error.message}`));
        return;
      }
      if (stderr) {
        console.warn(`stderr: ${stderr}`);
      }
      resolve(stdout.toString());
    });
  });
}

export async function POST(req: Request): Promise<Response> {
  const { url } = await req.json(); // Get the URL from the request body

  if (!url) {
    return NextResponse.json({ message: "URL is required" }, { status: 400 });
  }

  // Create a dynamic report name using a sanitized URL or a timestamp
  const sanitizedUrl = sanitizeUrlToFileName(url);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // ISO format without ":" or "."

  // Generate dynamic names for each report type
  const speedReportName = `speed-report-${sanitizedUrl}-${timestamp}.html`;
  const seoReportName = `seo-report-${sanitizedUrl}-${timestamp}.html`;
  const fullSeoReportName = `full-seo-report-${sanitizedUrl}-${timestamp}.html`;

  // Path to store the Lighthouse reports HTML (public folder)
  const outputDir = path.resolve("./public");

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    try {
      fs.mkdirSync(outputDir, { recursive: true });
    } catch (err) {
      console.error("Failed to create output directory", err);
      return NextResponse.json(
        { message: "Failed to create output directory" },
        { status: 500 },
      );
    }
  }

  // Options to increase maxBuffer limit to 30MB
  const execOptions = {
    maxBuffer: 1024 * 1024 * 30, // 30MB buffer size
  };

  try {
    // Run the lighthouse commands in sequence, waiting for each one to complete
    await execPromise(
      `lighthouse ${url} --output-path=${path.join(
        outputDir,
        speedReportName,
      )} --output html --chrome-flags="--headless" --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent`,
      execOptions,
    );

    await execPromise(
      `lighthouse ${url} --output-path=${path.join(
        outputDir,
        seoReportName,
      )} --output html --only-categories=seo --chrome-flags="--headless" --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent`,
      execOptions,
    );

    await execPromise(
      `lighthouse ${url} --output-path=${path.join(
        outputDir,
        fullSeoReportName,
      )} --output html --chrome-flags="--headless" --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent`,
      execOptions,
    );

    // Return the dynamic report URLs after all reports have been generated
    const reportUrls = {
      speedReportUrl: `/${speedReportName}`,
      seoReportUrl: `/${seoReportName}`,
      fullSeoReportUrl: `/${fullSeoReportName}`,
    };

    return NextResponse.json(reportUrls, { status: 200 });
  } catch (error: any) {
    console.error("Error generating reports:", error);
    return NextResponse.json(
      { message: `Error generating reports: ${error.message}` },
      { status: 500 },
    );
  }
}
