const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = ["2349038608039"];
global.OwnerNumber = ["2349038608039"];
global.ownertag = ["2349038608039"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "MAKINO-MD-V2";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"kFvtTFW+pMOPu7fsh+338GvKFldUIZSrigBH9UQiG0o="},"public":{"type":"Buffer","data":"golovQrY7xgGrfyXm671FjyZPDgPfxkFd14IF16PvkM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6AhH+663bHF+hPmwmS2ML49yfJvM6k4XSHhxh/+OGEs="},"public":{"type":"Buffer","data":"nJG6PVfCWgXe32+m6Di5PaHhkLlsiIvnvgVRpvofdSI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8Mz0Yvur84H6fKGFzfLrocwLu9XznuROLEB+CDgr4Eg="},"public":{"type":"Buffer","data":"M/bmgsNfnKy5SN17diufTFM9/weNF2mZOfbCiu3gL2U="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yPa07DyaqYclP+NTMYe0Ea09aTHWmMrkgflCCO7x9HM="},"public":{"type":"Buffer","data":"JboQ6oMH4CNmgMdGdQgwgG8RKZ+KA6W+Z5eo7oox2VI="}},"signature":{"type":"Buffer","data":"Qt8ArXQ6CxLvbIHXBbQJHqF78XfpsNU4M1+ePJ4SOwx2ZSdzNBXQajmZiD/z0ueI6wm40PRyPbvxt5pXn5aCDQ=="},"keyId":1},"registrationId":190,"advSecretKey":"ZKSNat997KKZNcGlYr8mKUOEU9641otxTTS6MU0kvnM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Gpq2U_uMSeacbtuQm19sgA","phoneId":"a7233eb8-dcaa-4330-a977-411ab1652081","identityId":{"type":"Buffer","data":"vG0okkUNVTk6M2vHbfMhr3llQFg="},"registered":false,"backupToken":{"type":"Buffer","data":"RF4HI0EJcQpkaQYRUSIao+k3HKo="},"registration":{},"account":{"details":"CJKJ3QsQyML3tQYYASAAKAA=","accountSignatureKey":"v74h18FiGqf7Vo02XY8+mBBREnt6y9f2gDkn3GH5Jxg=","accountSignature":"c7WQ6I+1aT5cvX69NuisH7F9DkouYYwTGTFBH/csCPcZ7bcIcsnalt+Fqmr3HTHITKHVqIYrgoMNRChbjb+dAw==","deviceSignature":"Jf4cKibFmeUlIFw1SW/GRIrhK5EvNah6mWCUycyPYK7zVvSDjdPnY/PH1oNlgrPjlIr8HFei6jIopMQfA4pWDQ=="},"me":{"id":"2349038608039:96@s.whatsapp.net"},"signalIdentities":[{"identifier":{"name":"2349038608039:96@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb++IdfBYhqn+1aNNl2PPpgQURJ7esvX9oA5J9xh+ScY"}}],"platform":"iphone","lastAccountSyncTimestamp":1723720021}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
