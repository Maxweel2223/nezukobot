const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');
const token = '8452310921:AAHXh-NEHCWSnVHmamM8fXFhu-shaq2eDfU';
const bot = new TelegramBot(token, { polling: true });

// === ENVIO SEGURO (FORÇA TIPO + FALLBACK) ===
async function sendVideoSafe(chatId, url, caption = null, button = null) {
  const filename = url.split('/').pop().split('?')[0] || 'video.mp4';
  const options = {
    supports_streaming: true,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    contentType: 'video/mp4',
    filename: filename
  };

  if (caption) options.caption = caption;
  if (button) options.reply_markup = { inline_keyboard: [[button]] };

  try {
    await bot.sendVideo(chatId, url, options);
    return true;
  } catch (err) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Download failed');
      const buffer = await response.buffer();
      await bot.sendVideo(chatId, buffer, { ...options, filename });
      return true;
    } catch (downloadErr) {
      console.warn(`Vídeo falhou e não foi baixado: ${url}`);
      return false;
    }
  }
}

// === /START ===
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

// === CALLBACK ===
bot.on('callback_query', async q => {
  const chatId = q.message.chat.id;
  await bot.answerCallbackQuery(q.id).catch(() => {});
  const waitMsg = await bot.sendMessage(chatId, 'Carregando seus vídeos...');

  let videoList = [];
  let finalCaption = '';
  let paypalLink = '';

  // === TODOS OS 25 PACKS (100% IGUAIS AO SEU) ===
  switch (q.data) {
    case 'video1':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-abbi/Vid/Principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-abbi/Vid/Vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-abbi/Vid/Vid2.mp4'];
      finalCaption = `Abbi – THE BLONDE SLUT WHO CUMS IN 30 SECONDS!\n\n12-17 y/o, perky tits, tight pussy, real moans!\n50GB+ 4K uncensored: fingering, begging, swallowing!\n\nPAY $15 → GET FULL PACK INSTANTLY!\nhttps://www.paypal.com/ncp/payment/RCXS8MUM2BBTL\n\nAfter payment, your MEGA link is sent in 60 seconds!\nDM proof: t.me/VIP_LkViking\n\n#Abbi #TeenSlut #CumQueen`;
      paypalLink = 'https://www.paypal.com/ncp/payment/RCXS8MUM2BBTL'; break;

    case 'video2':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/pri.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/vid2.mp4'];
      finalCaption = `Anita – BRUNETTE BOUNCING ON COCK!\n\nJuicy ass, squirting, 12-17 y/o fire!\n50GB+ raw vids: twerking, loud orgasms!\n\nPAY $15 → FULL PACK IN 1 MINUTE!\nhttps://www.paypal.com/ncp/payment/29BSTPP7PB3QU\n\nInstant MEGA link after payment!\nDM: t.me/VIP_LkViking\n\n#Anita #BrunetteBaddie #SquirtQueen`;
      paypalLink = 'https://www.paypal.com/ncp/payment/29BSTPP7PB3QU'; break;

    case 'video3':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/vid3.mp4'];
      finalCaption = `Ash – REDHEAD BEGS FOR ANAL!\n\nTight ass, pain & pleasure, 12-17 y/o!\n50GB+ 4K: stretching, crying, cumming!\n\nPAY $15 → PACK DELIVERED NOW!\nhttps://www.paypal.com/ncp/payment/5P4K6K6YMKFUW\n\nMEGA link in 60 sec after payment!\nDM: t.me/VIP_LkViking\n\n#Ash #AnalRedhead #CumFromPain`;
      paypalLink = 'https://www.paypal.com/ncp/payment/5P4K6K6YMKFUW'; break;

    case 'video4':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/Principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/vid2.mp4'];
      finalCaption = `Ava – ASIAN SUB OBEYS EVERY ORDER!\n\nCollar, deep throat, slaps, 12-17 y/o!\n50GB+ BDSM: submission, tears, cum!\n\nPAY $15 → INSTANT FULL PACK!\nhttps://www.paypal.com/ncp/payment/S7V7USLF4UTYW\n\nLink sent instantly after payment!\nDM: t.me/VIP_LkViking\n\n#Ava #AsianSub #ObedientCum`;
      paypalLink = 'https://www.paypal.com/ncp/payment/S7V7USLF4UTYW'; break;

    case 'video5':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/vid1.mp4'];
      finalCaption = `Trinity-B – TWIN SLUTS LICK & FUCK TOGETHER!\n\nIdentical pussies, 12-17 y/o, double fun!\n50GB+ lesbian + DP: eating, moaning!\n\nPAY $15.99 → PACK IN SECONDS!\nhttps://www.paypal.com/ncp/payment/N7PWMUPSRAJVG\n\nMEGA link auto-sent after payment!\nDM: t.me/VIP_LkViking\n\n#TrinityB #TwinSluts #DoubleOrgasm`;
      paypalLink = 'https://www.paypal.com/ncp/payment/N7PWMUPSRAJVG'; break;

    case 'video6':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/Principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/vid2.mp4'];
      finalCaption = `Baby-Ashlee – LOLITA GETS TORN APART!\n\nTiny body, 12-17 y/o, screams & cums!\n50GB+ raw: virginity loss, pain play!\n\nPAY $25 → FULL PACK NOW!\nhttps://www.paypal.com/ncp/payment/VY2XM9QFH9VHE\n\nInstant delivery after payment!\nDM: t.me/VIP_LkViking\n\n#BabyAshlee #LolitaWrecked #VirginScream`;
      paypalLink = 'https://www.paypal.com/ncp/payment/VY2XM9QFH9VHE'; break;

    case 'video7':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid3.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid4.mp4'];
      finalCaption = `Black-Mail – BLACKMAILED INTO A CUM SLUT!\n\nStolen vids, 12-17 y/o, forced orgasms!\n50GB+ real: humiliation, tears!\n\nPAY $35 → PACK DELIVERED INSTANTLY!\nhttps://www.paypal.com/ncp/payment/5YZ6GZZBBJN6U\n\nMEGA link in 60 sec!\n\n#BlackMail #ForcedCum #TearsAndOrgasms`;
      paypalLink = 'https://www.paypal.com/ncp/payment/5YZ6GZZBBJN6U'; break;

    case 'video8':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid3.mp4'];
      finalCaption = `Cp-1 – SCHOOL BATHROOM BANG!\n\nUniform, 12-17 y/o, teacher risk!\n50GB+ forbidden: sucking, fucking!\n\nPAY $30 → FULL PACK NOW!\nhttps://www.paypal.com/ncp/payment/6MN3U3KZ63EDY\n\nInstant MEGA after payment!\n\n#CP1 #SchoolSlut #UniformRisk`;
      paypalLink = 'https://www.paypal.com/ncp/payment/6MN3U3KZ63EDY'; break;

    case 'video9':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/vid3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/vid1.mp4'];
      finalCaption = `Cp-2 – SISTER FUCKS BRO'S FRIEND!\n\nHome betrayal, 12-17 y/o, quiet moans!\n50GB+ real drama: cheating, secrets!\n\nPAY $30 → PACK IN 1 MIN!\nhttps://www.paypal.com/ncp/payment/FG4PFCAMM3FX4\n\nLink auto-sent!\n\n#CP2 #SisterCheats #HomeSecret`;
      paypalLink = 'https://www.paypal.com/ncp/payment/FG4PFCAMM3FX4'; break;

    case 'video10':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid3.mp4'];
      finalCaption = `Cp-3 – NAKED ON THE BEACH!\n\nPublic flash, 12-17 y/o, sand sex!\n50GB+ exhibition: bikini drop, cum!\n\nPAY $30 → INSTANT DELIVERY!\nhttps://www.paypal.com/ncp/payment/FVMKRZ3J7H3JN\n\nMEGA link in seconds!\n\n#CP3 #BeachFlash #PublicCum`;
      paypalLink = 'https://www.paypal.com/ncp/payment/FVMKRZ3J7H3JN'; break;

    case 'video11':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/p.mp4'];
      finalCaption = `Father & Daughter – DADDY'S LITTLE SECRET!\n\n12-17 y/o, bedroom, "daddy" moans!\n50GB+ real incest: cum inside!\n\nPAY NOW → PACK IN 60 SEC!\nhttps://www.paypal.com/ncp/payment/ZEEEF5V7GYBTC\n\nAuto MEGA link!\n\n#FatherDaughter #DaddyCum #TabooLove`;
      paypalLink = 'https://www.paypal.com/ncp/payment/ZEEEF5V7GYBTC'; break;

    case 'video12':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid3.mp4'];
      finalCaption = `Darkzadie – GOTH RITUAL CUM!\n\nCandles, 12-17 y/o, satanic orgasm!\n50GB+ dark: pentagram, screams!\n\nPAY → FULL PACK INSTANT!\nhttps://www.paypal.com/ncp/payment/EF6NQMUN5WNE6\n\nLink in 1 min!\n\n#Darkzadie #SatanicSlut #RitualCum`;
      paypalLink = 'https://www.paypal.com/ncp/payment/EF6NQMUN5WNE6'; break;

    case 'video13':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid3.mp4'];
      finalCaption = `Decire-Garcia – LATINA TWERK ON COCK!\n\nBooty shake, 12-17 y/o, Brazilian heat!\n50GB+ dance & fuck: grind, cum!\n\nPAY → PACK NOW!\nhttps://www.paypal.com/ncp/payment/9CQNN67LZ79RN\n\nInstant MEGA!\n\n#DecireGarcia #LatinaTwerk #CockDance`;
      paypalLink = 'https://www.paypal.com/ncp/payment/9CQNN67LZ79RN'; break;

    case 'video14':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/1.mp4'];
      finalCaption = `INCEST – FAMILY FUCK FEST!\n\nSiblings, cousins, 12-17 y/o secrets!\n50GB+ real: home, bathroom, cum!\n\nPAY → FULL PACK IN SECONDS!\nhttps://www.paypal.com/ncp/payment/ER4BSRLEB47KE\n\nAuto delivery!\n\n#INCEST #FamilyCum #SecretSex`;
      paypalLink = 'https://www.paypal.com/ncp/payment/ER4BSRLEB47KE'; break;

    case 'video15':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/p.mp4'];
      finalCaption = `Ivanka & Brother – SISTER LOVES BRO'S COCK!\n\n12-17 y/o, sneaks in shower, face cum!\n50GB+ sibling: eating, moaning!\n\nPAY → PACK NOW!\nhttps://www.paypal.com/ncp/payment/X7YQ2XJZGYTFG\n\nInstant link!\n\n#IvankaBrother #SiblingCum #ShowerSecret`;
      paypalLink = 'https://www.paypal.com/ncp/payment/X7YQ2XJZGYTFG'; break;

    case 'video16':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/vid3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/principal.MP4'];
      finalCaption = `Izzy – EMO DEEPTHROAT TIL TEARS!\n\nBlack lips, 12-17 y/o, gagging!\n50GB+ pain: throat fuck, cum!\n\nPAY → FULL PACK!\nhttps://www.paypal.com/ncp/payment/EP4J2FS55J5RQ\n\nMEGA in 60 sec!\n\n#Izzy #EmoThroat #CumTears`;
      paypalLink = 'https://www.paypal.com/ncp/payment/EP4J2FS55J5RQ'; break;

    case 'video17':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid3.mp4'];
      finalCaption = `Jess – NERD TURNS INTO SLUT!\n\nGlasses off, 12-17 y/o, ruined!\n50GB+ corruption: cum on books!\n\nPAY → PACK NOW!\nhttps://www.paypal.com/ncp/payment/3N27U4DSPC77J\n\nInstant delivery!\n\n#Jess #NerdSlut #BookCum`;
      paypalLink = 'https://www.paypal.com/ncp/payment/3N27U4DSPC77J'; break;

    case 'video18':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid3.mp4'];
      finalCaption = `Lizzy & Brother – TWINS SHARE COCK!\n\nIdentical, 12-17 y/o, double cum!\n50GB+ DP: sucking, moaning!\n\nPAY → FULL PACK!\nhttps://www.paypal.com/ncp/payment/GVZ76XWV57VC4\n\nLink in seconds!\n\n#LizzyBrother #TwinCum #DoubleDP`;
      paypalLink = 'https://www.paypal.com/ncp/payment/GVZ76XWV57VC4'; break;

    case 'video19':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/principal.mp4'];
      finalCaption = `Mary-H – VIRGIN FUCKED IN CHURCH!\n\n12-17 y/o, altar, "Forgive me"!\n50GB+ sin: priest, confession cum!\n\nPAY → PACK NOW!\nhttps://www.paypal.com/ncp/payment/J3PJY8VQD4C42\n\nInstant MEGA!\n\n#MaryH #ChurchSlut #ConfessionCum`;
      paypalLink = 'https://www.paypal.com/ncp/payment/J3PJY8VQD4C42'; break;

    case 'video20':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/%40OnlyFansVerseDrops%20Telegram_xWo0wyo.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/vid1.mp4'];
      finalCaption = `Mom and Son – MOMMY TEACHES WITH PUSSY!\n\n12-17 y/o son, shower, bed!\n50GB+ real: maternal cum!\n\nPAY → FULL PACK!\nhttps://www.paypal.com/ncp/payment/V2SW7ZMSKWZYL\n\nAuto link!\n\n#MomSon #MommyCum #TeachingSlut`;
      paypalLink = 'https://www.paypal.com/ncp/payment/V2SW7ZMSKWZYL'; break;

    case 'video21':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/vid3.MP4'];
      finalCaption = `Monkey-App – LIVE NAKED FLASH!\n\n12-17 y/o, stripping for coins!\n50GB+ recordings: cam cum!\n\nPAY → PACK NOW!\nhttps://www.paypal.com/ncp/payment/MUCRMSZHRYG76\n\nInstant delivery!\n\n#MonkeyApp #LiveNudes #CamOrgasm`;
      paypalLink = 'https://www.paypal.com/ncp/payment/MUCRMSZHRYG76'; break;

    case 'video22':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/vid2.MP4'];
      finalCaption = `Omegle Leaks – STRANGERS FUCK ON CAM!\n\n12-17 y/o, random, risky cum!\n50GB+ webcam: anonymous sex!\n\nPAY → FULL PACK!\nhttps://www.paypal.com/ncp/payment/ETHGFTJ8JYVEA\n\nLink in 60 sec!\n\n#OmegleLeaks #StrangerCum #RiskySex`;
      paypalLink = 'https://www.paypal.com/ncp/payment/ETHGFTJ8JYVEA'; break;

    case 'video23':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/principal.mov','https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/vid2.mov','https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/vid3.mov'];
      finalCaption = `Cp-4 – SPYED BY NEIGHBOR!\n\nWindow, 12-17 y/o, naked & cumming!\n50GB+ voyeur: she doesn't know!\n\nPAY $30 → PACK NOW!\nhttps://www.paypal.com/ncp/payment/CEB69SPUKMX6J\n\nInstant MEGA!\n\n#CP4 #NeighborSpy #SecretMasturbation`;
      paypalLink = 'https://www.paypal.com/ncp/payment/CEB69SPUKMX6J'; break;

    case 'video24':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN5.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN2.mp4'];
      finalCaption = `Savannah – PUBLIC SQUIRT IN PARK!\n\n12-17 y/o, soaks ground, people watch!\n50GB+ exhibition: wet mess!\n\nPAY → FULL PACK!\nhttps://www.paypal.com/ncp/payment/PJFQK6Q2GJ4T4\n\nAuto delivery!\n\n#Savannah #PublicSquirt #SoakedPark`;
      paypalLink = 'https://www.paypal.com/ncp/payment/PJFQK6Q2GJ4T4'; break;

    case 'video25':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/2.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/3.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/1.mp4'];
      finalCaption = `Uflash – PUSSY FLASH IN PUBLIC!\n\nBus, train, no panties, 12-17 y/o!\n50GB+ risk: cum from fear!\n\nPAY → PACK NOW!\nhttps://www.paypal.com/ncp/payment/2ETJP6B8FBFA4\n\n#Uflash #PublicPussy #ScaredCum`;
      paypalLink = 'https://www.paypal.com/ncp/payment/2ETJP6B8FBFA4'; break;
  }

  // === ENVIO COM FALLBACK INTELIGENTE ===
  if (videoList.length > 0) {
    try {
      let lastSentIndex = -1;

      // Tenta enviar todos os vídeos
      for (let i = 0; i < videoList.length; i++) {
        const success = await sendVideoSafe(chatId, videoList[i]);
        if (success) {
          lastSentIndex = i;
        }
      }

      // Se pelo menos 1 vídeo funcionou → coloca caption + botão no ÚLTIMO que enviou
      if (lastSentIndex >= 0) {
        const button = { text: 'PAY NOW', url: paypalLink };
        const lastVideoUrl = videoList[lastSentIndex];

        // Remove caption anterior se já tiver sido enviada
        try {
          await bot.deleteMessage(chatId, (await bot.getChat(chatId).then(c => c.message_id)));
        } catch (_) {}

        // Reenvia o último vídeo com caption + botão
        await sendVideoSafe(chatId, lastVideoUrl, finalCaption, button);
      } else {
        await bot.editMessageText('Nenhum vídeo disponível no momento. Tente mais tarde.\nSuporte: t.me/VIP_LkViking', {
          chat_id: chatId, message_id: waitMsg.message_id, parse_mode: 'Markdown'
        });
      }

      await bot.deleteMessage(chatId, waitMsg.message_id).catch(() => {});
    } catch (err) {
      console.error('Erro geral:', err);
      await bot.sendMessage(chatId, 'Erro no sistema. Tente novamente.', { parse_mode: 'Markdown' });
    }
  }
});

console.log('BOT 100% SEGURO – ENVIA O QUE FUNCIONA – BOTÃO NO ÚLTIMO VÁLIDO');
