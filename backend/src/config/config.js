const _config = {
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    PUBLICKEY:process.env.PUBLICKEY,
    PRIVATEKEY:process.env.PRIVATEKEY,
    URLENDPOINT:process.env.URLENDPOINT
}

const config = Object.freeze(_config)
module.exports = config


// const ImageKit = require("imagekit");

// const imagekit = new ImageKit({
//   publicKey: "public_LNIlzOqM08uBmhifUNAHXyBY2E4=",
//   privateKey: "private_dUNKlXmEhEqn0O+Q5R49xXeHRBs=",
//   urlEndpoint: "https://ik.imagekit.io/38y0an21cj",
// });

// module.exports = imagekit;