const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
           
            service: 'gmail',            
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from:'"pramila sundaram " <pramilasundaram8@gmail.com>',
            to: email,
            subject: subject,
            html:`<div><h4 class="text-center mb-4">RESET PASSWORD</h4>                  
                  <p>click the link below to reset your password</p>
                  <p>${message}</p>
                  </div>`,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;