const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/g2z8ok.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "> *`ʜᴇʟʟᴏ, ɪ ᴀᴍ ᴏʟᴜ ᴍᴅ ᴠ1 ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ😼👋`*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
