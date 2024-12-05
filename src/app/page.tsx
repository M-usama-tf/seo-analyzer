"use client";

import { useState } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [reportUrls, setReportUrls] = useState<{
    speed: string | null;
    seo: string | null;
    fullSeo: string | null;
    xlsxReportUrl: string | null;
  }>({
    speed: null,
    seo: null,
    fullSeo: null,
    xlsxReportUrl: null,
  });
  const words = `Your website's SEO performance has been evaluated, and we recommend focusing on optimizing keywords, improving page speed, and enhancing mobile responsiveness to boost rankings and drive more organic traffic.
`;

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>("speed"); // Default tab

  // Handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Function to generate the SEO report by calling the API route
  const generateSeoReport = async () => {
    if (!inputValue) {
      alert("Please enter a valid URL.");
      return;
    }

    setLoading(true); // Start loading

    try {
      // Send a POST request to the API route in Next.js
      const response = await fetch("/api/generate-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        setReportUrls({
          speed: data.speedReportUrl || null,
          seo: data.seoReportUrl || null,
          fullSeo: data.fullSeoReportUrl || null,
          xlsxReportUrl: data.xlsxReportUrl || null,
        });
      } else {
        alert("Error generating the report. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error generating the report. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle tab selection
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="text-black p-6">
      <h1 className="text-2xl text-center font-bold mb-6">Seo & Page speed</h1>
      <div className="space-y-4">
        {/* Input and Label */}
        <div className="flex justify-center items-center flex-col">
          <input
            id="seo-input"
            type="text"
            className=" shadow-lg border border-gray-200 p-2 rounded-md w-1/2"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="e.g. https://example.com"
            disabled={loading}
          />

          <div className="flex justify-end w-1/2">
            <button
              onClick={generateSeoReport}
              className="bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                // Round loader icon while loading
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M4 12a8 8 0 0116 0"
                      className="opacity-75"
                    />
                  </svg>
                  <p>Generating...</p>
                </>
              ) : (
                "Generate the Report"
              )}
            </button>
          </div>
          <div className="w-1/2">
            {loading && (
              <TextGenerateEffect words={words} className="text-sm" />
            )}
          </div>
        </div>
        {/* Button to generate the report */}
        {/* Display the tabs */}
        {reportUrls.speed && reportUrls.seo && reportUrls.fullSeo && (
          <div className="mt-6">
            <div className="flex space-x-4 mb-4">
              <button
                className={`p-2 rounded-md ${
                  selectedTab === "speed"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleTabClick("speed")}
              >
                Speed Report
              </button>
              <button
                className={`p-2 rounded-md ${
                  selectedTab === "seo"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleTabClick("seo")}
              >
                SEO Report
              </button>
              {/* <button
                className={`p-2 rounded-md ${
                  selectedTab === "fullSeo"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleTabClick("fullSeo")}
              >
                Full SEO Report
              </button> */}
            </div>
            Display the selected report
            {selectedTab === "speed" && reportUrls.speed && (
              <div className="p-4 border-2 border-gray-300 rounded-md">
                <h2 className="text-xl font-semibold">Speed Report</h2>
                <iframe
                  src={reportUrls.speed} // Use the returned URL for Speed report
                  width="100%"
                  height="600px"
                  title="Speed Report"
                />
              </div>
            )}
            {selectedTab === "seo" && reportUrls.seo && (
              <div className="p-4 border-2 border-gray-300 rounded-md mt-4">
                <h2 className="text-xl font-semibold">SEO Report</h2>
                <iframe
                  src={reportUrls.seo} // Use the returned URL for SEO report
                  width="100%"
                  height="1000px"
                  title="SEO Report"
                />
              </div>
            )}
            {/* {selectedTab === "fullSeo" && reportUrls.fullSeo && (
              <div className="p-4 border-2 border-gray-300 rounded-md mt-4">
                <h2 className="text-xl font-semibold">Full SEO Report</h2>

                {reportUrls.xlsxReportUrl && (
                  <div className="mt-4">
                    <p>
                      <strong>Download Full SEO Report as XLSX:</strong>{" "}
                      <a
                        href={reportUrls.xlsxReportUrl}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800"
                        download
                      >
                        Download XLSX
                      </a>
                    </p>
                  </div>
                )}

              </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}
