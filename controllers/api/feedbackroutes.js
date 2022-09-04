//feedback
const router = require("express").Router();
const sendEmail = require("../../utils/sendEmail");
router.post("/", async (req, res) => {
  console.log(req.body);
  const message = JSON.stringify(req.body);
  try {
    await sendEmail({
      subject: "Feedback",
      html: message,
    });
    console.log("Email sent");
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
