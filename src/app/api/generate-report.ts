import { NextResponse } from "next/server";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

// Handle POST request
export async function POST(req: Request) {
  const { url } = await req.json(); // Get the URL from the request body

  if (!url) {
    return NextResponse.json({ message: "URL is required" }, { status: 400 });
  }

  // Path to store the Lighthouse report HTML (public folder)
  const outputDir = path.resolve("./public");
  const outputPath = path.join(outputDir, "lighthouse-report.html");

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

  return new Promise((resolve, reject) => {
    exec(
      `lighthouse ${url} --output-path=${outputPath} --output html --verbose`, // Added verbose
      { timeout: 60000 }, // Optional: 1-minute timeout for the exec process
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return resolve(
            NextResponse.json(
              { message: `Error executing Lighthouse: ${error.message}` },
              { status: 500 },
            ),
          );
        }

        // Log stdout to check for normal output
        if (stdout) {
          console.log(`stdout: ${stdout}`);
        }

        // Log stderr and treat warnings or non-critical messages as warnings
        if (stderr) {
          console.warn(`stderr (warning): ${stderr}`);
          // If stderr contains critical errors, return 500 error
        }

        // If Lighthouse runs successfully, return the path to the report
        const reportUrl = `/lighthouse-report.html`;
        return resolve(NextResponse.json({ reportUrl }, { status: 200 }));
      },
    );
  });
}
