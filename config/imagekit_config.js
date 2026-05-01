// config/imagekit.js
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMG_PUBLIC_KEY,
    privateKey: process.env.IMG_PRIVATE_KEY,
    urlEndpoint: process.env.IMG_ENDPOINT
});

module.exports = imagekit;