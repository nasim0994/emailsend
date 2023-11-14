const nodemailer = require("nodemailer");

exports.processRegister = async (req, res) => {
  try {
    const userInfo = req.body;

    let token = "112ew3wfsetegdewfniehgfvb874tydbfuy4etr";

    // // 4. send verify link by email
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "nuaimhasan@outlook.com",
        pass: "glkcgoarrjvpforq",
      },
    });

    try {
      const mailOptions = {
        from: "nuaimhasan@outlook.com",
        to: userInfo.email,
        subject: "Verification Email by Aestheticcloth",
        html: `<h2>Hello</h2>`,
      };

      const info = await transporter.sendMail(mailOptions);

      if (!info?.messageId) {
        return res.status(400).json({
          success: false,
          message: "Email send fail",
        });
      }
    } catch (error) {
      throw new Error(error);
    }

    res.status(200).json({
      success: true,
      message: `Please go to your email ${userInfo.email} and verify your Aesthetic Cloth account`,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
