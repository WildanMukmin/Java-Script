const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const dirPath = "./data";
const dataPath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", "utf8");
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts), "utf8");
    rl.close();
};
module.exports = { tulisPertanyaan, simpanContact };
