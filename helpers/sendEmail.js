const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, META_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
};

// async function sendEmail() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: `"Volodymyr Sobko" <${META_EMAIL}>`, // sender address
//     to: "Sobkowowa@gmail.com", // list of receivers
//     subject: "Test", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<p><strong>Test email</strong>from localhost: 3000</p>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
// }

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: META_EMAIL };
  await transport.sendMail(email);
};

module.exports = sendEmail;
