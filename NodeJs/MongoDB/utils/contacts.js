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

const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((target) => {
        return target.nama === nama;
    });
    return contact;
};

//menimpa data lama dnegan baru
const saveContact = (contacts) => {
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts), "utf8");
};

const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContact(contacts);
};

const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((e) => e.nama === nama);
};

module.exports = { loadContact, findContact, addContact, cekDuplikat };
