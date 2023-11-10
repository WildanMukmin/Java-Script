const contacts = require("./contacts.js");

const main = async () => {
    const nama = await contacts.tulisPertanyaan("Masukan Nama Anda : ");
    const email = await contacts.tulisPertanyaan("Masukan Email Anda : ");
    const noHp = await contacts.tulisPertanyaan("masukan Nomor Hp Anda : ");

    contacts.simpanContact(nama, email, noHp);
};

main();
