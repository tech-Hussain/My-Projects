# LinkedIn Lead Extractor User Guide

## Introduction

The LinkedIn Lead Extractor is a desktop application designed to help you extract lead information from LinkedIn based on specified search filters. It utilizes browser automation to perform searches and collect data, which can then be exported to CSV or Excel files for further use.

## Getting Started

1.  **Launching the Application:** Locate and run the application executable.
2.  **Initial Setup:** On the first launch, the application will check for a suitable Chrome profile directory for automation. If not found, it may launch a Chrome instance for you to log in and set up your profile. Follow any on-screen instructions regarding this initial setup. Once setup is complete, close Chrome and restart the application.

## Logging In

The application requires you to log in to your LinkedIn account to perform extractions.

*   **Manual Login:**
    1.  In the "LinkedIn Login" section, ensure the "Manual Login" tab is selected.
    2.  Enter your LinkedIn Email and Password in the provided fields.
    3.  Click the "Login to LinkedIn" button.
    4.  The "Activity Log" will show the login status.
*   **Launching Chrome Manually:** If you encounter issues with the automated login or need to perform manual steps in Chrome (like completing a security check), you can click the "Launch Chrome Manually" button. This will open a Chrome instance controlled by the application, allowing you to interact with LinkedIn directly.

## Extracting Leads

To extract leads, you need to specify search filters and start the process.

1.  **Applying Filters:**
    *   In the "Search Filters" section, enter the desired criteria in the input fields:
        *   **Job Title:** Filter leads by job title (e.g., "Marketing Director").
        *   **Location:** Filter leads by location (e.g., "New York").
        *   **Industry:** Filter leads by industry (e.g., "Technology").
        *   **Number of Leads to Extract:** Set the maximum number of leads you want to extract.
        *   **Start Page:** Specify the starting page number for the LinkedIn search results.
        *   **End Page:** Specify the ending page number for the LinkedIn search results.
2.  **Starting Extraction:** Click the "Start Extraction" button in the "Search Filters" section.
3.  **Monitoring Progress:** The "Activity Log" section will show the progress of the extraction process, including status messages and a progress bar.

## Managing Leads

Extracted leads are displayed in a table within the application.

*   **Viewing Leads:** The "Extracted Leads Preview" table shows the information collected for each lead (Full Name, Job Title, Company, Location, Email, Phone, LinkedIn URL).
*   **Clear All Leads:** To remove all currently extracted leads from the table and clear the saved data, click the "Clear All Leads" button in the "Activity Log" section.

## Exporting Leads

Once leads are extracted, you can export them for use in other applications.

1.  **Choose Export Format:** In the "Activity Log" section, click either the "Export to CSV" or "Export to Excel" button. The button corresponding to your preferred export format (set in Settings) might be highlighted.
2.  **Save File:** A dialog will appear asking you to choose where to save the exported file and its name. Select the location and provide a filename, then click "Save".
3.  **Completion:** The application will export the data to the selected file. Monitor the "Activity Log" for confirmation.
