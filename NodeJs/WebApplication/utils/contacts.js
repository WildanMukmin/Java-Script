const fs = require("fs");
const dirPath = "./data";
const dataPath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", "utf8");
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(fileBuffer);
    return contacts;
};
module.exports = { loadContact };
