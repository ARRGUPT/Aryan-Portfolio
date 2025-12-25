const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form submission
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Email to Aryan (notification about new contact)
    const notificationEmail = {
      to: 'guptaaryan28106@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL, // Must be verified sender in SendGrid
      subject: `🔔 New Contact: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 30px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #6366f1; margin: 0; font-size: 28px;">📬 New Message Received!</h1>
          </div>
          
          <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <h2 style="color: #e2e8f0; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 600; width: 100px;">Name:</td>
                <td style="padding: 10px 0; color: #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #ffffff; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Subject:</td>
                <td style="padding: 10px 0; color: #f1f5f9;">${subject}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 12px; padding: 25px;">
            <h3 style="color: #22d3ee; margin: 0 0 15px 0; font-size: 16px;">💬 Message</h3>
            <p style="color: #e2e8f0; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(148, 163, 184, 0.2);">
            <p style="color: #64748b; font-size: 12px; margin: 0;">Received from your Portfolio Contact Form</p>
          </div>
        </div>
      `
    };

    // Auto-reply email to the user
    const autoReplyEmail = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Thanks for reaching out, ${name}! 🚀`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 30px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #6366f1; margin: 0; font-size: 28px;">Hey ${name}! 👋</h1>
          </div>
          
          <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <p style="color: #e2e8f0; line-height: 1.8; margin: 0 0 15px 0;">
              Thank you for reaching out! I've received your message and I'm excited to connect with you.
            </p>
            <p style="color: #e2e8f0; line-height: 1.8; margin: 0 0 15px 0;">
              I typically respond within <span style="color: #22d3ee; font-weight: 600;">24-48 hours</span>. In the meantime, feel free to check out my work or connect with me on social media.
            </p>
          </div>
          
          <div style="background: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #94a3b8; margin: 0 0 10px 0; font-size: 14px;">YOUR MESSAGE:</h3>
            <p style="color: #cbd5e1; line-height: 1.6; margin: 0; font-style: italic;">"${message}"</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://github.com/ARRGUPT" style="display: inline-block; background: #6366f1; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 0 10px;">View My Work</a>
            <a href="https://www.linkedin.com/in/aryan-gupta-635965302/" style="display: inline-block; background: transparent; color: #6366f1; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; border: 2px solid #6366f1; margin: 0 10px;">Connect on LinkedIn</a>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid rgba(148, 163, 184, 0.2);">
            <p style="color: #f1f5f9; font-weight: 600; margin: 0 0 5px 0;">Aryan Gupta</p>
            <p style="color: #f1f5f9; font-size: 14px; margin: 0;">Data Scientist & AI Developer</p>
            <p style="font-size: 12px; margin: 10px 0 0 0;">
              <a href="mailto:guptaaryan28106@gmail.com" style="color: #ffffff !important; text-decoration: none;">guptaaryan28106@gmail.com</a>
              <span style="color: #ffffff;"> | +91 80811 28481</span>
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      sgMail.send(notificationEmail),
      sgMail.send(autoReplyEmail)
    ]);

    console.log('✅ Emails sent successfully to:', email);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! Check your inbox for confirmation.' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    if (error.response) {
      console.error('SendGrid Error:', error.response.body);
    }
    
    res.status(500).json({ 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

module.exports = router;
