//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cutepixel33@gmail.com";
global.location = "Ghana,Accra.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "233256793164";
global.sudo = process.env.SUDO || "233256793164";
global.owner = process.env.OWNER_NUMBER || "233256793164";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhyVEhjc3JKZ3lsYWZ1TEFyYTNldUdHMUJvY1NieStZTnVOaWxTbGozcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0d1NWxMeU9ZRFpmL2g1NEN2bGVwRlhYSmF4dUZFVWcwU2E4dVUxKzRtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SXRVcXBRaCtYRmFoa0g4MWxlTE51UnF0VGxDaWIrWnI4ZDdnY0gwL0ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SlcreWRXVm54VEtKUHBzZ1ZEWmh2aGN0SXZFMjFSem05V3I5R25rZ0VZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHWldWVHQyUTY4T2pldE14MTVsdm0yYTBiYVRYN2Jqb2xEUmEzYUs1Rk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktSYTFUTlIyaloxQ0RLSUxSUFA5aVlGaFVQeFFBQ09hc3d6V2JoYnBobUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RFekQwSWtUSm5mb21aazZIKzY2ZHMxczNJRkc5NStJaXJ0Vk9QWHhsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEM4b2V4c1BLdlZ2bUdsYXF4THhkMmdnWlZaRzlxdlBsaGFsUDRGcUlIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkwZE1EdzlRZ2ViSm10V1NDcHB6NitWZjBrVm9VSGRQbG9VbjN3aVZVSTVDVVRZamM3ei9icFd6b2U0bUZDbU5RL05pTzFKOW1seVJFYVh0ZEt3QkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJGVjdlRXhPVElZOWEyWVVsRDlraE13TlE0UUxmRSt2K0NJUXRsTUZyb2ZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLdFFqZExJdlFvZWRhUzBhMzFRaHR3IiwicGhvbmVJZCI6IjAwNDMxYzE3LTNhNTktNDE1MC1hNmUzLWMyZDYzMjZjNmU1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6UjRWR01rSkpZYmZyOFdXb0IwVi80aVBmdm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVJRc1Zubmxqc2xJOFdxUUxMWDI3NGJzOTdjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNZU1pYOVpGIiwibWUiOnsiaWQiOiIyMzMyNTY3OTMxNjQ6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liQnhZZ0VFTkhhcWJRR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRrNlVSSFc1N1UwRnZBV3JvUHFMOVJGOHpLai9uWVY2UHFPLy8rdEVlV1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVEKy9TZnFlOUdIaTUraWlIZ0JYQzByMnBCRVFYMXFWc20vRVFNZ00wdDBIUitsalcrMGNwck9CTzJ0YzNEUnZDZmtmNlVoMjdyRlYzVDV3NmROMERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1c24xZ1ZFQm5DaEI5bmh0TG4zMTFFRHh3aHk4UUQrNFdudEtvdDd3ZzdkMFhvNmJUNlhuVmpOZ1FFSGs4cDl1T1h2ZXkvdmNlNjgvdksvbHQ4TkpEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzI1Njc5MzE2NDo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlSk9sRVIxdWUxTkJid0ZxNkQ2aS9VUmZNeW8vNTJGZWo2anYvL3JSSGxsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzQ3OTk4fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Here We Go🥺",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "Blue",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
