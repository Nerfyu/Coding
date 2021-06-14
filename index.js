const axios = require("axios")
const urls = ["https://replit.com/@AMGame/Aril-Bot-Discord-Indonesia"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
