const express = require('express');
const route = express.Router();
route.get('/beauty', (req, res) => {
    const products = [
        {
            id: "lipstick",
            productname: "LipStick",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/6/g/0/4-2-pro-matte-creamy-matte-lipstick-luxurious-texture-long-original-imah8bhy2dw7mh3w.jpeg?q=70"
        },
        {
            id: "nailpolish",
            productname: "Nail Polish",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/nail-polish/r/h/3/13-fast-dry-normal-nail-polish-long-lasting-waterproof-clear-original-imahgyzug2r7mydn.jpeg?q=70"
        },
        {
            id: "foundation",
            productname: "Foundation",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/a/s/v/-original-imah62bzjcxzsbup.jpeg?q=70"
        },
        {
            id: "mascara",
            productname: "Mascara",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/c/z/o/15-0-2in1-volumizing-and-lengthening-long-lasting-mascara-mars-original-imahckyz5gmahqyc.jpeg?q=70"
        },
        {
            id: "eyeliner",
            productname: "Eyeliner",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/eye-liner/s/z/h/0-35-non-transfer-kajal-eyeliner-matte-finish-waterproof-smudge-original-imah52xegjt33nqt.jpeg?q=70"
        },
        {
            id: "blush",
            productname: "Blush",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/blush/z/l/4/25-blush-and-highlighter-palette-for-face-makeup-matte-finish-original-imagt8dpvvc2ybgz.jpeg?q=70"
        },
        {
            id: "compact",
            productname: "Compact Powder",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/compact/w/x/q/25-100-water-proof-pencake-28no-dark-beige-olivia-original-imahj257mysyqxsk.jpeg?q=70"
        },
        {
            id: "concealer",
            productname: "Concealer",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/concealer/7/r/f/-original-imagzfcvwj2frzf8.jpeg?q=70"
        },
        {
            id: "lipbalm",
            productname: "Lip Balm",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lip-balm/t/u/n/4-lightening-lip-balm-vitamin-e-liquorice-coconut-oil-provides-original-imagz5ugyrh5hzam.jpeg?q=70"
        },
        {
            id: "highlighter",
            productname: "Highlighter",
            img:"https://rukminim2.flixcart.com/image/612/612/xif0q/highlighter/g/g/o/-original-imahfwygtfxengey.jpeg?q=70"
        }
    ]
    res.send(products);
})
module.exports = route;