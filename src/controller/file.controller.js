const uploadFile = require("../middleware/upload");
const fs = require("fs");

/* -------------------------------------------------------------------------- */
/*                          UPLOAD A FILE CONTROLLER                          */
/* -------------------------------------------------------------------------- */

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                         FETCH ALL FILES CONTROLLER                         */
/* -------------------------------------------------------------------------- */

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: "http://localhost:8080/" + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

/* -------------------------------------------------------------------------- */
/*                           FETCH SINGLE FILE CONTROLLER                     */
/* -------------------------------------------------------------------------- */

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

/* -------------------------------------------------------------------------- */
/*                          DELETE CONTROLLER                                 */
/* -------------------------------------------------------------------------- */

const removeFile = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  const path = directoryPath + fileName;

  try {
    fs.unlinkSync(path);
    res.status(200).json({
      message: " FILE DELETED ",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  upload,
  getListFiles,
  download,
  removeFile,
};
