const { Router } = require('express');
const { show_menu } = require("../controllers/menuController");

const router = Router();
router.get('/pika', (req, res) => {
    console.log("Check pika");
    res.json({ message: 'Pika Pika' });
})

router.get('/welcome', (req, res) => {
    console.log("Check #1");
    res.json({ message: "welcome to this new page" });
})

router.get('/show_menu', show_menu);

module.exports = router;