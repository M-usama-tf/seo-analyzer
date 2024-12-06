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
export async function POST(req: Request): Promise<Response | undefined> {
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

  // Execute Lighthouse for speed, seo, and full-seo separately
  exec(
    `lighthouse ${url} --output-path=${path.join(
      outputDir,
      speedReportName,
    )} --output html  --chrome-flags="--headless" --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent`,
    execOptions,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error (Speed): ${error}`);
        return NextResponse.json(
          { message: `Error executing Speed Lighthouse: ${error.message}` },
          { status: 500 },
        );
      }
      // Log stdout to check for normal output
      if (stdout) {
        console.log(`stdout (Speed): ${stdout}`);
      }

      // Log stderr and treat warnings or non-critical messages as warnings
      if (stderr) {
        console.warn(`stderr (Speed warning): ${stderr}`);
      }

      // Execute Lighthouse for SEO
      exec(
        `lighthouse ${url} --output-path=${path.join(
          outputDir,
          seoReportName,
        )} --output html --only-categories=seo --chrome-flags="--headless" --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent`,
        execOptions,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error (SEO): ${error}`);
            return NextResponse.json(
              {
                message: `Error executing SEO Lighthouse: ${error.message}`,
              },
              { status: 500 },
            );
          }

          // Log stdout to check for normal output
          if (stdout) {
            console.log(`stdout (SEO): ${stdout}`);
          }

          // Log stderr and treat warnings or non-critical messages as warnings
          if (stderr) {
            console.warn(`stderr (SEO warning): ${stderr}`);
          }

          // Execute Lighthouse for full SEO (combined categories)
          exec(
            `lighthouse ${url} --output-path=${path.join(
              outputDir,
              fullSeoReportName,
            )} --output html --chrome-flags="--headless" --screenEmulation.disabled --throttling-method=provided --no-emulatedUserAgent`,
            execOptions,
            (error, stdout, stderr) => {
              if (error) {
                console.error(`exec error (Full SEO): ${error}`);
                return NextResponse.json(
                  {
                    message: `Error executing Full SEO Lighthouse: ${error.message}`,
                  },
                  { status: 500 },
                );
              }

              // Log stdout to check for normal output
              if (stdout) {
                console.log(`stdout (Full SEO): ${stdout}`);
              }

              // Log stderr and treat warnings or non-critical messages as warnings
              if (stderr) {
                console.warn(`stderr (Full SEO warning): ${stderr}`);
              }

              // Return the dynamic report URLs
              const reportUrls = {
                speedReportUrl: `/${speedReportName}`,
                seoReportUrl: `/${seoReportName}`,
                fullSeoReportUrl: `/${fullSeoReportName}`,
              };

              return NextResponse.json(reportUrls, { status: 200 });
            },
          );
        },
      );
    },
  );
}
