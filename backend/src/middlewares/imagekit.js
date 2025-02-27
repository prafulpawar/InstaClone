const ImageKit = require("imagekit");
const config = require('../config/config')

const imagekit = new ImageKit({
  publicKey: config.PUBLICKEY,
  privateKey: config.PRIVATEKEY,
  urlEndpoint: config.URLENDPOINT
});

module.exports = imagekit;


// const ImageKit = require("imagekit");

// const imagekit = new ImageKit({
//   publicKey: "public_LNIlzOqM08uBmhifUNAHXyBY2E4=",
//   privateKey: "private_dUNKlXmEhEqn0O+Q5R49xXeHRBs=",
//   urlEndpoint: "https://ik.imagekit.io/38y0an21cj",
// });

// module.exports = imagekit;