const express = require("express");
const app = express();
require("dotenv").config();
app.listen(3001, () => {
  console.log("Server Started");
});
// const client = require("twilio")(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );
// app.post("/send/whatssapp", (req, res) => {
//   //   const msg = req.body.msg;

//   client.messages
//     .create({
//       from: "whatsapp:+14155238886",
//       to: "whatsapp:+21656065074",
//       body: "blablablabla",
//     })
//     .then((message) => res.send(message))
//     .catch((err) => {
//       console.log(err);
//       res.send(err);
//     });
// });

// // const msg91 = new (require("msg91-v5"))(
// //   "386805AeDip82n8pV639b26d7P1",
// //   "radhia0204",
// //   "1"
// // );
// // //OR
// // const mobileNumbers = "88XXXX67XX";

// // //OR
// // const messages = "Your order is placed.Thank You.";

// // const options = {
// //   mobiles: mobileNumbers, // Mandatory param along with country dial code
// //   DLT_TE_ID: "540XXXXXXX1057XX", //Mandatory if applicable
// //   message: messages, //Mandatory
// // };
// // msg91
// //   .sendSMS(options)
// //   .then(() => {
// //     console.log("success");
// //   })
// //   .catch(() => {
// //     console.log("failed");
// //   });

// // var msg91 = require("msg91")("639b2cd0b3dbc73b19135622");

// // // Mobile No can be a single (XXXXXXXXXX) number or csv string (XXXXXXXXXX, XXXXXXXXXX)
// // // Variables with the same name defind in SMS template

// // var args = {
// //   flow_id: "639b2aa56c1c487ef45d1732",
// //   sender: "radhia0204",
// //   mobiles: "+21656065074",
// //   code: "ichrak",
// // };

// // msg91.sendSMS(args, function (err, response) {
// //   console.log(err);
// //   console.log(response);
// // });

const bodyParser = require("body-parser");
// ...
app.use(bodyParser()); // support encoded bodies

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
app.use(fileUpload());
app.use(
  fileUpload({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `${__dirname}/public/files/temp`,
  })
);
app.post("/upload/image", (req, res, next) => {
  let uploadFile = req.files.file;
  const name = uploadFile.name;
  const md5 = uploadFile.md5();
  const saveAs = `${md5}_${name}`;
  uploadFile.mv(`${__dirname}/public/files/${saveAs}`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json({ status: "uploaded", name, saveAs });
  });
});
