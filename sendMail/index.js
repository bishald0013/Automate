import express, { json } from "express";
import sgMail from "@sendgrid/mail";

const app = express();
app.use(express.json());

const port = 5001;

const API_KEY =
  "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";

sgMail.setApiKey(API_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/sendMail", (req, res) => {
  try {
    const { from, sendTo, subject, title, body } = req.body;

    const message = {
      to: sendTo,
      from: {
        name: "Hello from Bishal",
        email: from,
      },
      subject: subject,
      title: title,
      html: `<span>${body}</span>`,
    };

    sgMail
      .send(message)
      .then(() => console.log("Email sent successfully"))
      .catch((err) => console.log(err.message));

    res.send({ message: "email sent successfully" });
  } catch (error) {
    res.send({ message: error });
  }
});

app.listen(port, () => console.log("listening on port " + port));
