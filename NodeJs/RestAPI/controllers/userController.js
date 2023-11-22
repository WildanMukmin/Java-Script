// controller user
const loginUser = (req, res) => {
    res.send("ini login").status(200);
    console.log("ini login");
};
const singupUser = (req, res) => {
    res.send("ini singup").status(200);
    console.log("ini singup");
};

module.exports = { singupUser, loginUser };
