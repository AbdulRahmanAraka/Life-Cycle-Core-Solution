// Google Apps Script for Form Submission
// Instructions:
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Copy this entire code and paste it
// 4. Update the EMAIL_TO variable below
// 5. Deploy as Web App (Deploy > New deployment > Web app)
// 6. Copy the Web App URL and paste it in ContactPage.tsx

const EMAIL_TO = 'contact@lifecyclecore.com';
const SHEET_NAME = 'Form Submissions';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow(['Timestamp', 'Full Name', 'Company Name', 'Work Email', 'Project Overview']);
      sheet.getRange('A1:E1').setFontWeight('bold').setBackground('#4285f4').setFontColor('#ffffff');
    }
    
    // Add data to sheet
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.companyName,
      data.workEmail,
      data.overview
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 5);
    
    // Send email notification
    sendEmailNotification(data);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  const subject = `New Consultation Request from ${data.fullName}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
      <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px;">New Consultation Request</h1>
      </div>
      
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          You have received a new consultation request from your website.
        </p>
        
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #475569; font-weight: bold; width: 150px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1e293b;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #475569; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0; color: #1e293b;">${data.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #475569; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; color: #2563eb;">
                <a href="mailto:${data.workEmail}" style="color: #2563eb; text-decoration: none;">${data.workEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #475569; font-weight: bold; vertical-align: top;">Project Overview:</td>
              <td style="padding: 10px 0; color: #1e293b; line-height: 1.6;">${data.overview}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #475569; font-weight: bold;">Submitted:</td>
              <td style="padding: 10px 0; color: #1e293b;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center;">
          <a href="mailto:${data.workEmail}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Reply to ${data.fullName}
          </a>
        </div>
        
        <p style="color: #94a3b8; font-size: 12px; margin-top: 30px; text-align: center;">
          This email was sent from your Lifecycle Core Solutions website contact form.
        </p>
      </div>
    </div>
  `;
  
  const plainBody = `
New Consultation Request

Full Name: ${data.fullName}
Company: ${data.companyName}
Email: ${data.workEmail}
Project Overview: ${data.overview}
Submitted: ${new Date().toLocaleString()}

Reply to: ${data.workEmail}
  `;
  
  MailApp.sendEmail({
    to: EMAIL_TO,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: 'Lifecycle Core Solutions'
  });
}

// Test function (optional)
function testSubmission() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        fullName: 'John Doe',
        companyName: 'Acme Corporation',
        workEmail: 'john.doe@acme.com',
        overview: 'We need help with PLM implementation for our manufacturing operations.',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  doPost(testData);
}
