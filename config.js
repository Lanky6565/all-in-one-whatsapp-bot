const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2347039570336" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347039570336";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_53_09_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMCxcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWVFBSS3pla1ArNlFuWHdCMi9nQlcwcVEwY2N2WmYrMDhKMjYxYVh1RkY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXb0tDc2tSM1JpdTkyeG01a0M0dlVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5ZDdhY2YzLTk5MjgtNGY0Zi04ZDQwLTgwZGUwMTBiNWZhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyMzYsXG4gICAgICA5NCxcbiAgICAgIDI1LFxuICAgICAgMjI3LFxuICAgICAgNDcsXG4gICAgICAxMjAsXG4gICAgICAxMDUsXG4gICAgICAyMTksXG4gICAgICAxMzMsXG4gICAgICAxMDYsXG4gICAgICAyNDYsXG4gICAgICAyMjMsXG4gICAgICA3LFxuICAgICAgMjMxLFxuICAgICAgMjQ4LFxuICAgICAgMjksXG4gICAgICAyMTcsXG4gICAgICAxNjQsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDIyNSxcbiAgICAgIDE3NixcbiAgICAgIDEzMyxcbiAgICAgIDI1NSxcbiAgICAgIDk0LFxuICAgICAgMjYsXG4gICAgICAxODUsXG4gICAgICAxOTEsXG4gICAgICAyMTUsXG4gICAgICAxMTEsXG4gICAgICAxMjEsXG4gICAgICAyNixcbiAgICAgIDIsXG4gICAgICAxMDEsXG4gICAgICAxMTIsXG4gICAgICA4MixcbiAgICAgIDIzMSxcbiAgICAgIDEwNCxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRODdGR0FOWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzOTU3MDMzNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjI1Njg4NzQyMjk4Mzg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZlU4SjhHRUtMOW9iY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdoeHFYVitsQ0N5TmE0RENXOWo5VHFFaS9qbWl0emxtV2lGd2FmMXFOR289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid1hMSWNrMi91dVRxL3M0WWVacXRlZ2twaDhIRlNaN0RYdlFiWHBEendjVG5pYzgyKzcvYUN3RVN5ZlFJc1M5alVWZlB0d0k1YzdCcFN3T0lIOVlPRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamhUQkVKd1NHYmhEMXRlK1NuWm5xN1pyNWpzK0t6YjFRbVFQdlBkdVVHems0MmR5Vmt6dkw0QW80TDM3S0w3N0tzM3prcW8yb21nMS81YVdFZW9hRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzOTU3MDMzNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjUxMjgwNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
