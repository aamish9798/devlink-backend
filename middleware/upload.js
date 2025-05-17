const multer = require("multer");

const storage = multer.memoryStorage(); // Use memory buffer
const upload = multer({ storage });

module.exports = upload;
