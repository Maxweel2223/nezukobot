const TelegramBot = require('node-telegram-bot-api');
const token = '8452310921:AAHXh-NEHCWSnVHmamM8fXFhu-shaq2eDfU';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, 'Support: t.me/VIP_LkViking \nHello! Choose your pack:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Abbi', callback_data: 'video1' }],
        [{ text: 'Anita', callback_data: 'video2' }],
        [{ text: 'Ash', callback_data: 'video3' }],
        [{ text: 'Ava', callback_data: 'video4' }],
        [{ text: 'Trinity-B', callback_data: 'video5' }],
        [{ text: 'Baby-Ashlee', callback_data: 'video6' }],
        [{ text: 'Black-Mail', callback_data: 'video7' }],
        [{ text: 'Cp-1', callback_data: 'video8' }],
        [{ text: 'Cp-2', callback_data: 'video9' }],
        [{ text: 'Cp-3', callback_data: 'video10' }],
        [{ text: 'Father and Daughter', callback_data: 'video11' }],
        [{ text: 'Darkzadie', callback_data: 'video12' }],
        [{ text: 'Decire-Garcia', callback_data: 'video13' }],
        [{ text: 'INCEST', callback_data: 'video14' }],
        [{ text: 'Ivanka-and-brother', callback_data: 'video15' }],
        [{ text: 'Izzy', callback_data: 'video16' }],
        [{ text: 'Jess', callback_data: 'video17' }],
        [{ text: 'Lizzy-and-brother', callback_data: 'video18' }],
        [{ text: 'Mary-H', callback_data: 'video19' }],
        [{ text: 'Mom and Son', callback_data: 'video20' }],
        [{ text: 'Monkey-App', callback_data: 'video21' }],
        [{ text: 'Omegle Leaks', callback_data: 'video22' }],
        [{ text: 'Cp-4', callback_data: 'video23' }],
        [{ text: 'Savannah', callback_data: 'video24' }],
        [{ text: 'Uflash', callback_data: 'video25' }]
      ]
    }
  });
});

bot.on('callback_query', async q => {
  const chatId = q.message.chat.id;
  bot.answerCallbackQuery(q.id);
  const waitMsg = await bot.sendMessage(chatId, 'Loading your hot videos...');

  let videoList = [];
  let finalCaption = '';

  switch (q.data) {
    case 'video1':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-abbi/Vid/Principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-abbi/Vid/Vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-abbi/Vid/Vid2.mp4'];
      finalCaption = `Abbi – THE BLONDE SLUT WHO CUMS IN 30 SECONDS!

12-17 y/o, perky tits, tight pussy, real moans!
50GB+ 4K uncensored: fingering, begging, swallowing!

PAY $15 → GET FULL PACK INSTANTLY!
https://www.paypal.com/ncp/payment/RCXS8MUM2BBTL

After payment, your MEGA link is sent in 60 seconds!
DM proof: t.me/VIP_LkViking

#Abbi #TeenSlut #CumQueen`;
      break;

    case 'video2':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/pri.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/vid2.mp4'];
      finalCaption = `Anita – BRUNETTE BOUNCING ON COCK!

Juicy ass, squirting, 12-17 y/o fire!
50GB+ raw vids: twerking, loud orgasms!

PAY $15 → FULL PACK IN 1 MINUTE!
https://www.paypal.com/ncp/payment/29BSTPP7PB3QU

Instant MEGA link after payment!
DM: t.me/VIP_LkViking

#Anita #BrunetteBaddie #SquirtQueen`;
      break;

    case 'video3':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/vid3.mp4'];
      finalCaption = `Ash – REDHEAD BEGS FOR ANAL!

Tight ass, pain & pleasure, 12-17 y/o!
50GB+ 4K: stretching, crying, cumming!

PAY $15 → PACK DELIVERED NOW!
https://www.paypal.com/ncp/payment/5P4K6K6YMKFUW

MEGA link in 60 sec after payment!
DM: t.me/VIP_LkViking

#Ash #AnalRedhead #CumFromPain`;
      break;

    case 'video4':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/Principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/vid2.mp4'];
      finalCaption = `Ava – ASIAN SUB OBEYS EVERY ORDER!

Collar, deep throat, slaps, 12-17 y/o!
50GB+ BDSM: submission, tears, cum!

PAY $15 → INSTANT FULL PACK!
https://www.paypal.com/ncp/payment/S7V7USLF4UTYW

Link sent instantly after payment!
DM: t.me/VIP_LkViking

#Ava #AsianSub #ObedientCum`;
      break;

    case 'video5':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/vid1.mp4'];
      finalCaption = `Trinity-B – TWIN SLUTS LICK & FUCK TOGETHER!

Identical pussies, 12-17 y/o, double fun!
50GB+ lesbian + DP: eating, moaning!

PAY $15.99 → PACK IN SECONDS!
https://www.paypal.com/ncp/payment/N7PWMUPSRAJVG

MEGA link auto-sent after payment!
DM: t.me/VIP_LkViking

#TrinityB #TwinSluts #DoubleOrgasm`;
      break;

    case 'video6':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/Principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/vid2.mp4'];
      finalCaption = `Baby-Ashlee – LOLITA GETS TORN APART!

Tiny body, 12-17 y/o, screams & cums!
50GB+ raw: virginity loss, pain play!

PAY $25 → FULL PACK NOW!
https://www.paypal.com/ncp/payment/VY2XM9QFH9VHE

Instant delivery after payment!
DM: t.me/VIP_LkViking

#BabyAshlee #LolitaWrecked #VirginScream`;
      break;

    case 'video7':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid3.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid4.mp4'];
      finalCaption = `Black-Mail – BLACKMAILED INTO A CUM SLUT!

Stolen vids, 12-17 y/o, forced orgasms!
50GB+ real: humiliation, tears!

PAY $35 → PACK DELIVERED INSTANTLY!
https://www.paypal.com/ncp/payment/5YZ6GZZBBJN6U

MEGA link in 60 sec!


#BlackMail #ForcedCum #TearsAndOrgasms`;
      break;

    case 'video8':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid3.mp4'];
      finalCaption = `Cp-1 – SCHOOL BATHROOM BANG!

Uniform, 12-17 y/o, teacher risk!
50GB+ forbidden: sucking, fucking!

PAY $30 → FULL PACK NOW!
https://www.paypal.com/ncp/payment/6MN3U3KZ63EDY

Instant MEGA after payment!


#CP1 #SchoolSlut #UniformRisk`;
      break;

    case 'video9':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/vid3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/vid1.mp4'];
      finalCaption = `Cp-2 – SISTER FUCKS BRO'S FRIEND!

Home betrayal, 12-17 y/o, quiet moans!
50GB+ real drama: cheating, secrets!

PAY $30 → PACK IN 1 MIN!
https://www.paypal.com/ncp/payment/FG4PFCAMM3FX4

Link auto-sent!


#CP2 #SisterCheats #HomeSecret`;
      break;

    case 'video10':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid3.mp4'];
      finalCaption = `Cp-3 – NAKED ON THE BEACH!

Public flash, 12-17 y/o, sand sex!
50GB+ exhibition: bikini drop, cum!

PAY $30 → INSTANT DELIVERY!
https://www.paypal.com/ncp/payment/FVMKRZ3J7H3JN

MEGA link in seconds!


#CP3 #BeachFlash #PublicCum`;
      break;

    case 'video11':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/p.mp4'];
      finalCaption = `Father & Daughter – DADDY'S LITTLE SECRET!

12-17 y/o, bedroom, "daddy" moans!
50GB+ real incest: cum inside!

PAY NOW → PACK IN 60 SEC!
https://www.paypal.com/ncp/payment/ZEEEF5V7GYBTC

Auto MEGA link!


#FatherDaughter #DaddyCum #TabooLove`;
      break;

    case 'video12':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid3.mp4'];
      finalCaption = `Darkzadie – GOTH RITUAL CUM!

Candles, 12-17 y/o, satanic orgasm!
50GB+ dark: pentagram, screams!

PAY → FULL PACK INSTANT!
https://www.paypal.com/ncp/payment/EF6NQMUN5WNE6

Link in 1 min!


#Darkzadie #SatanicSlut #RitualCum`;
      break;

    case 'video13':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid3.MP4'];
      finalCaption = `Decire-Garcia – LATINA TWERK ON COCK!

Booty shake, 12-17 y/o, Brazilian heat!
50GB+ dance & fuck: grind, cum!

PAY → PACK NOW! 👇
https://www.paypal.com/ncp/payment/9CQNN67LZ79RN

Instant MEGA!

#DecireGarcia #LatinaTwerk #CockDance`;
      break;

    case 'video14':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/1.mp4'];
      finalCaption = `INCEST – FAMILY FUCK FEST!

Siblings, cousins, 12-17 y/o secrets!
50GB+ real: home, bathroom, cum!

PAY → FULL PACK IN SECONDS! 👇
https://www.paypal.com/ncp/payment/ER4BSRLEB47KE

Auto delivery!

#INCEST #FamilyCum #SecretSex`;
      break;

    case 'video15':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/p.mp4'];
      finalCaption = `Ivanka & Brother – SISTER LOVES BRO'S COCK!

12-17 y/o, sneaks in shower, face cum!
50GB+ sibling: eating, moaning!

PAY → PACK NOW!
https://www.paypal.com/ncp/payment/X7YQ2XJZGYTFG

Instant link!

#IvankaBrother #SiblingCum #ShowerSecret`;
      break;

    case 'video16':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/vid3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/principal.MP4'];
      finalCaption = `Izzy – EMO DEEPTHROAT TIL TEARS!

Black lips, 12-17 y/o, gagging!
50GB+ pain: throat fuck, cum!

PAY → FULL PACK!
https://www.paypal.com/ncp/payment/EP4J2FS55J5RQ

MEGA in 60 sec!

#Izzy #EmoThroat #CumTears`;
      break;

    case 'video17':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid3.mp4'];
      finalCaption = `Jess – NERD TURNS INTO SLUT!

Glasses off, 12-17 y/o, ruined!
50GB+ corruption: cum on books!

PAY → PACK NOW!
https://www.paypal.com/ncp/payment/3N27U4DSPC77J

Instant delivery!

#Jess #NerdSlut #BookCum`;
      break;

    case 'video18':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid3.mp4'];
      finalCaption = `Lizzy & Brother – TWINS SHARE COCK!

Identical, 12-17 y/o, double cum!
50GB+ DP: sucking, moaning!

PAY → FULL PACK!
https://www.paypal.com/ncp/payment/GVZ76XWV57VC4

Link in seconds!

#LizzyBrother #TwinCum #DoubleDP`;
      break;

    case 'video19':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/principal.mp4'];
      finalCaption = `Mary-H – VIRGIN FUCKED IN CHURCH!

12-17 y/o, altar, "Forgive me"!
50GB+ sin: priest, confession cum!

PAY → PACK NOW!
https://www.paypal.com/ncp/payment/J3PJY8VQD4C42

Instant MEGA!

#MaryH #ChurchSlut #ConfessionCum`;
      break;

    case 'video20':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/%40OnlyFansVerseDrops%20Telegram_xWo0wyo.mp4','https://bot-videos.b-cdn.net/Previas-mom/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/vid1.mp4'];
      finalCaption = `Mom and Son – MOMMY TEACHES WITH PUSSY!

12-17 y/o son, shower, bed!
50GB+ real: maternal cum!

PAY → FULL PACK!
https://www.paypal.com/ncp/payment/V2SW7ZMSKWZYL

Auto link!

#MomSon #MommyCum #TeachingSlut`;
      break;

    case 'video21':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/vid3.MP4'];
      finalCaption = `Monkey-App – LIVE NAKED FLASH!

12-17 y/o, stripping for coins!
50GB+ recordings: cam cum!

PAY → PACK NOW!
https://www.paypal.com/ncp/payment/MUCRMSZHRYG76

Instant delivery!

#MonkeyApp #LiveNudes #CamOrgasm`;
      break;

    case 'video22':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/vid2.MP4'];
      finalCaption = `Omegle Leaks – STRANGERS FUCK ON CAM!

12-17 y/o, random, risky cum!
50GB+ webcam: anonymous sex!

PAY → FULL PACK!
https://www.paypal.com/ncp/payment/ETHGFTJ8JYVEA

Link in 60 sec!

#OmegleLeaks #StrangerCum #RiskySex`;
      break;

    case 'video23':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/principal.mov','https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/vid2.mov','https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/vid3.mov'];
      finalCaption = `Cp-4 – SPYED BY NEIGHBOR!

Window, 12-17 y/o, naked & cumming!
50GB+ voyeur: she doesn't know!

PAY $30 → PACK NOW!
https://www.paypal.com/ncp/payment/CEB69SPUKMX6J

Instant MEGA!

#CP4 #NeighborSpy #SecretMasturbation`;
      break;

    case 'video24':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN5.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN2.mp4'];
      finalCaption = `Savannah – PUBLIC SQUIRT IN PARK!

12-17 y/o, soaks ground, people watch!
50GB+ exhibition: wet mess!

PAY → FULL PACK!
https://www.paypal.com/ncp/payment/PJFQK6Q2GJ4T4

Auto delivery!

#Savannah #PublicSquirt #SoakedPark`;
      break;

    case 'video25':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/2.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/3.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/1.mp4'];
      finalCaption = `Uflash – PUSSY FLASH IN PUBLIC!

Bus, train, no panties, 12-17 y/o!
50GB+ risk: cum from fear!

PAY → PACK NOW!
https://www.paypal.com/ncp/payment/2ETJP6B8FBFA4

#Uflash #PublicPussy #ScaredCum`;
      break;
  }

  if (videoList.length > 0) {
    try {
      for (let i = 0; i < videoList.length; i++) {
        const options = { supports_streaming: true, parse_mode: 'HTML' };
        if (i === videoList.length - 1) options.caption = finalCaption;
        await bot.sendVideo(chatId, videoList[i], options);
      }
      await bot.deleteMessage(chatId, waitMsg.message_id);
    } catch (err) {
      console.error(err);
      bot.sendMessage(chatId, 'Error sending video. Check link.');
      bot.deleteMessage(chatId, waitMsg.message_id);
    }
  }
});

console.log('Robô Iniciado Boas Vendas! 🛒♻♻');
