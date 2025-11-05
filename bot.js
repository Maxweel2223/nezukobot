const TelegramBot = require('node-telegram-bot-api');
const token = '8452310921:AAHXh-NEHCWSnVHmamM8fXFhu-shaq2eDfU';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, 'Support: t.me/rbzin22 \nHello! Choose your pack:', {
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

12-17 y/o, doll body, perky tits, tight wet pussy!
50GB+ real vids: fingering, moaning, begging for cock!
4K uncensored, she swallows EVERY drop!

VIP ONLY – For real pervs!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#Abbi #TeenSlut #CumQueen`;
      break;

    case 'video2':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/pri.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-anita/Vid/vid2.mp4'];
      finalCaption = `Anita – THE BRUNETTE WHO SUCKS YOUR SOUL OUT!

Juicy ass, dripping pussy, 12-17 y/o pure fire!
50GB+ vids: twerking on dick, loud moans, squirting hard!
4K raw, she loves getting wrecked!

VIP FOR REAL MEN ONLY!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#Anita #BrunetteBaddie #WreckedPussy`;
      break;

    case 'video3':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ash/Vid/vid3.mp4'];
      finalCaption = `Ash – THE REDHEAD WHO BEGS FOR ANAL!

Perfect body, 12-17 y/o, tight ass, loves pain!
50GB+ vids: ass stretching, crying & cumming!
4K no limits, she squirts from anal!

VIP FOR HARDCORE ONLY!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#Ash #RedheadAnal #CumFromAss`;
      break;

    case 'video4':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/Principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ava/Vid/vid2.mp4'];
      finalCaption = `Ava – THE ASIAN SUB WHO OBEYS EVERY COMMAND!

Slanted eyes, 12-17 y/o, loves being called "slut"!
50GB+ vids: collar, deep throat, face slaps!
4K BDSM, she cums from submission!

VIP FOR DOMS ONLY!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#Ava #AsianSub #ObedientSlut`;
      break;

    case 'video5':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-b/Vid/vid1.mp4'];
      finalCaption = `Trinity-B – THE TWIN SLUTS WHO DO EVERYTHING TOGETHER!

Two identical pussies, 12-17 y/o, licking & fucking!
50GB+ vids: double penetration, eating each other!
4K lesbian hardcore, they cum in sync!

VIP FOR TWIN LOVERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#TrinityB #TwinSluts #DoubleCum`;
      break;

    case 'video6':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/Principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-baby/Vid/vid2.mp4'];
      finalCaption = `Baby-Ashlee – THE LOLITA WHO LOVES GETTING TORN AT 14!

Tiny body, dirty mind, 12-17 y/o pure filth!
50GB+ vids: losing virginity, screaming, cumming hard!
4K uncut, she begs for pain!

VIP FOR THE SICK ONLY!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#BabyAshlee #LolitaWrecked #VirginBlood`;
      break;

    case 'video7':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid3.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-black/Vid/vid4.mp4'];
      finalCaption = `Black-Mail – THE BLACK GIRL BLACKMAILED INTO A SLUT!

Stolen vids, 12-17 y/o, crying & cumming!
50GB+ vids: blackmail, humiliation, forced orgasms!
4K real, she breaks and loves it!

VIP FOR SADISTS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#BlackMail #ForcedSlut #CumThroughTears`;
      break;

    case 'video8':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp1/Vid/vid3.mp4'];
      finalCaption = `Cp-1 – CAUGHT FUCKING IN SCHOOL BATHROOM!

Uniform, 12-17 y/o, sucking in stalls, banging in halls!
50GB+ vids: school, teacher, real risk!
4K forbidden, she loves getting caught!

VIP FOR PERV TEACHERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#CP1 #SchoolSlut #UniformCum`;
      break;

    case 'video9':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/principal.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/vid3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp2/Vid/vid1.mp4'];
      finalCaption = `Cp-2 – LITTLE SISTER FUCKS BROTHER'S BEST FRIEND!

At home, 12-17 y/o, sneaking, quiet moans!
50GB+ vids: betrayal, home, real family drama!
4K secret, she loves cheating!

VIP FOR CHEATERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#CP2 #SisterCheats #HomeWrecker`;
      break;

    case 'video10':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-cp3/Vid/vid3.mp4'];
      finalCaption = `Cp-3 – FILMED NAKED ON THE BEACH!

Bikini falls, 12-17 y/o, flashing, sucking in sand!
50GB+ vids: public, sun, ocean sex!
4K exhibitionist, she loves eyes on her!

VIP FOR FLASHERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#CP3 #BeachNudes #PublicCum`;
      break;

    case 'video11':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dad/Vid/p.mp4'];
      finalCaption = `Father & Daughter – DADDY'S GIRL LOVES HIS BIG COCK!

12-17 y/o, bedroom secrets, "daddy" moans!
50GB+ vids: real incest, muffled screams!
4K taboo, she begs for cum inside!

VIP FOR DADDY'S PERVS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#FatherDaughter #DaddyInside #TabooCum`;
      break;

    case 'video12':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-dark/Vid/vid3.mp4'];
      finalCaption = `Darkzadie – GOTH GIRL CUMS IN SATANIC RITUAL!

Candles, 12-17 y/o, pentagram, masturbating for the devil!
50GB+ vids: dark, occult, ritual orgasms!
4K evil, she screams in ecstasy!

VIP FOR SATANISTS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#Darkzadie #GothSlut #SatanicCum`;
      break;

    case 'video13':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-garcia/Vid/vid3.MP4'];
      finalCaption = `Decire-Garcia – LATINA TWERKING ON COCK!

Booty shake, 12-17 y/o, funk, drops it low!
50GB+ vids: dance, grind, cock in face!
4K Brazilian heat, she cums dancing!

VIP FOR TWERK LOVERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#DecireGarcia #LatinaTwerk #CockDance`;
      break;

    case 'video14':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-incest/Vid/1.mp4'];
      finalCaption = `INCEST – BROTHERS, COUSINS, UNCLES: FAMILY FUCK FEST!

12-17 y/o, home secrets, bathrooms, bedrooms!
50GB+ vids: sibling sex, uncle-niece, cousin love!
4K real, no one knows!

VIP FOR FAMILY PERVS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#INCEST #FamilyFuck #SecretCum`;
      break;

    case 'video15':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-ivank/Vid/p.mp4'];
      finalCaption = `Ivanka & Brother – BLONDE SISTER CAN'T RESIST BRO'S COCK!

Next room, 12-17 y/o, sneaks into his shower naked!
50GB+ vids: brother eats sister, cums on face!
4K secret, she loves her bro!

VIP FOR SIBLING LOVERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#IvankaBrother #SisterFaceCum #SiblingSecret`;
      break;

    case 'video16':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/vid3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-izzy/Vid/principal.MP4'];
      finalCaption = `Izzy – EMO GIRL DEEPTHROATS TIL SHE CRIES!

Black lipstick, 12-17 y/o, gagging, tears!
50GB+ vids: emo, throat fuck, cum in throat!
4K pain play, she loves suffering!

VIP FOR EMO PERVS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#Izzy #EmoThroat #CumTears`;
      break;

    case 'video17':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-jess/Vid/vid3.mp4'];
      finalCaption = `Jess – NERD TAKES OFF GLASSES AND BECOMES A WHORE!

Books, 12-17 y/o, after study she spreads wide!
50GB+ vids: nerd corruption, cum on books!
4K transformation, she loves being ruined!

VIP FOR NERD CORRUPTERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#Jess #NerdSlut #CumOnBooks`;
      break;

    case 'video18':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-lizzy/Vid/vid3.mp4'];
      finalCaption = `Lizzy & Brother – TWIN SISTERS SHARE EVERYTHING... EVEN COCK!

Same face, 12-17 y/o, one sucks while other cums!
50GB+ vids: twins, brother, double penetration!
4K identical, they cum together!

VIP FOR TWIN PERVS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#LizzyBrother #TwinCock #DoubleOrgasm`;
      break;

    case 'video19':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/vid2.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-marry/Vid/principal.mp4'];
      finalCaption = `Mary-H – VIRGIN DEFLOWERED BEHIND THE ALTAR!

Holy girl, 12-17 y/o, "Forgive me God" moans!
50GB+ vids: church, priest, confessional cum!
4K sin, she loves punishment!

VIP FOR SINNERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#MaryH #ChurchSlut #CumInConfession`;
      break;

    case 'video20':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/%40OnlyFansVerseDrops%20Telegram_xWo0wyo.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-mom/Vid/vid1.mp4'];
      finalCaption = `Mom and Son – MOMMY TEACHES SON WITH HER BODY!

12-17 y/o son, she "helps" in shower, bed, kitchen!
50GB+ vids: real incest, mom cums teaching!
4K maternal, she loves being naughty mom!

VIP FOR MOMMY'S BOYS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#MomSon #MommySlut #TeachingCum`;
      break;

    case 'video21':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/vid1.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-monkey/Vid/vid3.MP4'];
      finalCaption = `Monkey-App – GIRLS FLASH EVERYTHING LIVE!

12-17 y/o, live stream, stripping for coins!
50GB+ recordings: live nudes, on-cam orgasms!
4K online, they cum for you!

VIP FOR LIVE PERVS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#MonkeyApp #LiveFlash #CamCum`;
      break;

    case 'video22':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/principal.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/vid1.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-omegle/Vid/vid2.MP4'];
      finalCaption = `Omegle Leaks – STRANGERS FUCK ON WEBCAM!

12-17 y/o, random chat, spreading for strangers!
50GB+ recordings: webcam, anonymous, risky cum!
4K danger, she loves the thrill!

VIP FOR ANON PERVS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

#OmegleLeaks #StrangerFuck #RiskyCum`;
      break;

    case 'video23':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/principal.mov','https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/vid2.mov','https://bot-videos.b-cdn.net/SubPacks/Previas-pc4/Vid/vid3.mov'];
      finalCaption = `Cp-4 – FILMED BY NEIGHBOR THROUGH WINDOW!

12-17 y/o, naked, masturbating, doesn't know!
50GB+ vids: voyeur, hidden, secret orgasms!
4K real, she's clueless!

VIP FOR VOYEURS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant drop!
DM: t.me/VIP_LkViking

#CP4 #NeighborSpy #SecretCum`;
      break;

    case 'video24':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN3.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN5.mp4','https://bot-videos.b-cdn.net/SubPacks/Previas-savannah/Vid/SVN2.mp4'];
      finalCaption = `Savannah – BLONDE SQUIRTS IN PUBLIC PARK!

12-17 y/o, soaks the ground, people watching!
50GB+ vids: squirting, public, exhibition!
4K wet mess, she loves the crowd!

VIP FOR SQUIRT LOVERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant access!
DM: t.me/VIP_LkViking

#Savannah #PublicSquirt #SoakedGround`;
      break;

    case 'video25':
      videoList = ['https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/2.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/3.MP4','https://bot-videos.b-cdn.net/SubPacks/Previas-Uflash/Vid/1.mp4'];
      finalCaption = `Uflash – PUSSY FLASH ON BUS, TRAIN, STREET!

12-17 y/o, no panties, upskirt in public!
50GB+ vids: public flash, risky, cum from fear!
4K danger, she cums scared!

VIP FOR FLASHERS!
$25 Pack | $90 5x | $150 Full
BTC/USDT → Instant link!
DM: t.me/VIP_LkViking

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

console.log('Bot started: 25 PACKS – FULL ENGLISH – ULTRA HOT CAPTIONS!');