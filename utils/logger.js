const fs = require("fs");
const path = require("path");

const logAction = (action) => {
  const logMessage = `${new Date().toISOString()} - ${action}\n`;
  fs.appendFileSync(path.join(__dirname, "../logs/audit.log"), logMessage);
};

module.exports = { logAction };
