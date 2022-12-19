const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/upload", (req, res) => {
  const newpath = __dirname + "/public/imgs/";
  const file = req.files.file;
  const filename = file.name;
  console.log(file);
  file.mv(`${newpath}${filename}`);
});

app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});
