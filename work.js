var art = document.querySelector("article");
var section = document.querySelector("section");
var WeDev = document.getElementById("web-dev");
var py = document.getElementById("py");
var c = document.getElementById("c");
var react = document.getElementById("react");

function getParameter(x) {
  params = window.location.href.split("?")[1].split("&");
  for (i = 0; i < params.length; i++) {
    // ["id","example"]
    e = params[i].split("=");
    if (e[0] == x) {
      return e[1];
    }
  }
}

WeDev.addEventListener("click", () => {
  location.href = "./work.html?id=0b34a4b7-c3df-40c1-af56-61bf021341a1";
});
py.addEventListener("click", () => {
  location.href = "./work.html?id=ad9eff9c-5860-4584-ac58-06b3f926099a";
});
c.addEventListener("click", () => {
  location.href = "./work.html?id=4ca8fb2b-b5f4-4836-8b74-5646185c10ff";
});
react.addEventListener("click",()=>{
  location.href = "./work.html?id=3255d2e9-d554-4196-bc05-79e611a50748"
})
var id = getParameter("id");

// all project
if (id === "37855687-96b7-4681-ac7d-2da799c57267") {
  console.log(id);
  ImgUrl = [];
  H1 = [];
  P = [];
  aHrefText = [];
  aHrefLink = [];
  for (i = 0; i < i; i++) {
    art.innerHTML = `
    <div>
        <img src="" alt="">
        <h1> </h1>
        <p> </p>
        <a href=''> </a>
    </div>
   `;
  }
}
// web development
if (id === "0b34a4b7-c3df-40c1-af56-61bf021341a1") {
  img = [
    "/images/animal-photo.png",
    "/images/football (1).png",
    "/images/praying.png",
    "/images/password.png",
    "/images/portfolio.png",
    "/images/joker.png",
    "/images/web_dev.png",
    "/images/gamil2.png",
    "/images/phone-book.png",
    "/images/keyboard.png",
    "/images/id-card.png",
    "/images/folder.png",
    "/images/colorfull.png",
    "/images/dogger_Website.png",
    "/images/web-design (1).png",
    "/images/design.png",
    "/images/coffe.png",
    "/images/f.jpg",
    "/images/quiz.png",
    "/images/quiz (1).png",
    "/images/shopping.png",
    "/images/sad.png",
    "/images/portfolio.png",
    "/images/coming-soon.png",
    "/images/design2.png",
    "/images/samsung.png",
    "/images/bitcoin.png",
    "/images/brain.png",
    "/images/landing-page.png",
    "/images/fortnite.png",
    "/images/app-development (1).png",
    "/images/card.png",
    "/images/best-choice.png",
    "/images/dices.png",
    "/images/ux.png",
    "/images/web-development.png",
    "/images/angry.png",
    "/images/global-warming.png",
    "/images/chat.png",
    "/images/iphone-5.png",
    "/images/cat.png",
    "/images/music-notes.png",
    "/images/coding (1).png",
    "/images/vfdsvgfdfsgd.png",
    "/images/correction.png",
    "/images/blueprint.png",
    "/images/model.png",
    "/images/reduction.png",
    "/images/internet.png",
    "/images/mc.avif",
    "/images/iphone-12.png",
    "/images/favicon (1).png",  
    "/images/favicon (2).png", // anime blaze
    "/images/illustration.png",
    "/images/ui-ux.png",
    "/images/app.png",
    "/images/picture.png",
    "/images/cat (1).png",
    "",
    "/images/hotel.png",
    "/images/unnamed-removebg-preview.png",
    "/images/rolex.png",
    "/images/image.png",
    "/images/ipad.png",
    "/images/apple.png",
    "/images/rock-paper-scissors.png",
    "/images/youtube.png",
    "/images/fds.png",
    "/images/img.png",
    "/images/gcdd.png",
    "/images/vsffiyv.png",
    "/images/gihfs.jpeg",
    "/images/falcon icon.png",
    "/images/fQGFDF.png",
    "/images/deadpool.png",
  ]
  heading = [
    "animal photo",
    "football quiz",
    "islam quiz",
    "password </br> generator",
    "portolio",
    "jokes genrator",
    "web dev info",
    "pass and email generator",
    "contact form",
    "follow the keybourd",
    "KONOVA",
    "eventro",
    "colorful",
    'dogger website',
    "seelife webdesign",
    "comodo website",
    "coffe",
    "",
    "",
    "",
    "",
    "",
    "portfolio 2",
    "comming soon",
    "SIERRA",
    "",
    "crypto",
    "brain test",
    "echo",
    "fortnite",
    "appy",
    "",
    "",
    "",
    "",
    "",
    "",
    "colid",
    "",
    "iphone 13",
    "cat fact",
    "music player",
    "startup",
    "qr code",
    "image filter",
    "mortana web design",
    "glint",
    "who cost more",
    "urban",
    "mc-donald",
    "iphone 15",
    "",
    "animeblaze",
    "appco",
    "appru",
    "calc",
    "detect width and height",
    "#save cat",
    "emoji pedia 😎",
    "hotel design",
    "football guess game",
    "rolex design",
    "who will win a million",
    "ipad 9",
    "apple watch ultra 2",
    "rock paper sicissor",
    "youtube clone",
    "bitcoin",
    "danvo",
    "webdesign",
    "husd",
    "abo flah",
    "falcon",
    "itachi",
    "deadpool",
  ]
  paragraph = [
    "animal photo using api",
    "football quiz pt2",
    "ask you aslamatic qustion",
    "made in 2023",
    "an old portfolio",
    "jokes generator with api",
    "fake info about random people",
    "random pass and email genrator",
    "just a design (but bad)",
    "just a design",
    "get random name ",
    "just a design",
    "convert colors (hex to hsl,rgba to hex etc...)",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "jamil and hana",
    "computer component <br> quiz",
    "would you rather",
    "shein api",
    "guess the anime",
    "an old portfolio",
    "just a design",
    "just a design",
    "s 24 ultra",
    "just a design",
    "part 4",
    "just a design",
    "just a design",
    "just a design",
    "genrate an id <br> using api",
    "would you rather",
    "dice rolling",
    "bussiness <br> responsive",
    "joyride",
    "guess the emoji",
    "just a design",
    "chat application",
    "just a design",
    "using api",
    "just a design",
    "just a design",
    "using api",
    "filter the img",
    "just a design",
    "just a design",
    "wich obj cost more",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "html,css,js",
    "",
    "just a design",
    "big libary of emoji from api",
    "just a design",
    "game",
    "just a design",
    "game",
    "just a design",
    "just a design",
    "game",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
    "just a design",
  ]
  ahref = [
    "https://github.com/iamDynamic/animal-PHOTO",
    "https://github.com/iamDynamic/-football-quiz-pt-2",
    "https://github.com/iamDynamic/islam-quiz",
    "https://github.com/iamDynamic/password-generator-2023",
    "https://github.com/iamDynamic/protofoli-2024",
    "https://github.com/iamDynamic/Random-Joke-Generator--HTML--CSS---Javascript",
    "https://github.com/iamDynamic/Web-Devloper-Fake-Info",
    "https://github.com/iamDynamic/email-and-password-generator",
    "https://github.com/iamDynamic/contact-us",
    "https://github.com/iamDynamic/Follow-The-Keyword",
    "https://github.com/iamDynamic/Bussiness-Names-Generator",
    "https://github.com/iamDynamic/Artistry-website",
    "https://github.com/iamDynamic/colorfull-responsive-website",
    "https://github.com/iamDynamic/Dogger-Rsoinsive-Website",
    "https://github.com/iamDynamic/seelife-responsive-website",
    "https://github.com/iamDynamic/comodo-games-design-responive-website",
    "https://github.com/iamDynamic/Coffe-Shop",
    "https://github.com/iamDynamic/jamil-and-hana",
    "https://github.com/iamDynamic/Ali-Games",
    "https://github.com/iamDynamic/would-you-rather-2024-",
    "https://github.com/iamDynamic/Shein-In-Website-Using-Api",
    "https://github.com/iamDynamic/Guess-the-anime",
    "https://github.com/iamDynamic/My-Protfolio-2024",
    "https://github.com/iamDynamic/comming-soon",
    "https://github.com/iamDynamic/SIERRA",
    "https://github.com/iamDynamic/sasung-s24-ultra-ads",
    "https://github.com/iamDynamic/crypoto",
    "https://github.com/iamDynamic/brain-test",
    "https://github.com/iamDynamic/Echo",
    "https://github.com/iamDynamic/fortnite-ads",
    "https://github.com/iamDynamic/appy-ads",
    "https://github.com/iamDynamic/ID-Gnerator-2024",
    "https://github.com/iamDynamic/would-you-rather-2024-",
    "https://github.com/iamDynamic/dice-rolling",
    "https://github.com/iamDynamic/bussneis-responvice",
    "https://github.com/iamDynamic/joyride-design",
    "https://github.com/iamDynamic/guess-the",
    "https://github.com/iamDynamic/COLID",
    "https://github.com/iamDynamic/chat-applications",
    "https://github.com/iamDynamic/Iphone-13-respionsive-website",
    "https://github.com/iamDynamic/Animals-World",
    "https://github.com/iamDynamic/Music-Player",
    "https://github.com/iamDynamic/startup",
    "https://github.com/iamDynamic/Qr-Code",
    "https://github.com/iamDynamic/image-fiilter",
    "https://github.com/iamDynamic/Montana-webdesign-",
    "https://github.com/iamDynamic/Glint---webdesign-",
    "https://github.com/iamDynamic/Who-Cost-More",
    "https://github.com/iamDynamic/Urban",
    "https://github.com/iamDynamic/Mc-Donalds-WD",
    "https://github.com/iamDynamic/Iphone-15-webdesign-",
    "https://github.com/iamDynamic/CloudMasters",
    "https://github.com/iamDynamic/Anime-Blaze",
    "https://github.com/iamDynamic/appco",
    "https://github.com/iamDynamic/Appru_WD",
    "https://github.com/iamDynamic/calc",
    "https://github.com/iamDynamic/Chaenge-1",
    "https://github.com/iamDynamic/Save-Cats",
    "https://github.com/iamDynamic/EmojiPedia",
    "https://github.com/iamDynamic/Hotel-design",
    "https://github.com/iamDynamic/Football-Game",
    "https://github.com/iamDynamic/rolex-design",
    "https://github.com/iamDynamic/million",
    "https://github.com/iamDynamic/Ipad-9",
    "https://github.com/iamDynamic/Apple-Watch-Ultra-2",
    "https://github.com/iamDynamic/Rock-Paper-Scissor",
    "https://github.com/iamDynamic/Youtube-Clone",
    "https://github.com/iamDynamic/webdesign-locotype--html-css-",
    "https://github.com/iamDynamic/webdesign-danvo-",
    "https://github.com/iamDynamic/webdesign",
    "https://github.com/iamDynamic/husd--webdesign-",
    "https://github.com/iamDynamic/aboflah_webdesign",
    "https://github.com/iamDynamic/falcon-website-design-",
    "https://github.com/iamDynamic/uchiha-itachi--web-design-",
    "https://github.com/iamDynamic/deadpool-website-webdesign-",
  ]


  for(i=0;i<img.length;i++){
    section.innerHTML += 
    `
      <div>
      <img src='${img[i]}' >
      <h1>${heading[i]}</h1>
      <p>${paragraph[i]}</p>
      <a href='${ahref[i]}'> visit code(github)</div>
    </div>
    `
  }
}
// python
if (id === "ad9eff9c-5860-4584-ac58-06b3f926099a") {
  ImgUrl3 = [
    "/images/soccer.png",
    "/images/guess-game.png",
    "/images/weather.png",
    "/images/to-do-list (1).png",
    "/images/timer.png",
    "/images/rps.png",
    "/images/list.png",
    "/images/ninja.png",
    "/images/email.png",
    "/images/qr-code.png",
    "/images/cracking.png",
    "/images/madlibs.png",
    "/images/schedule.png",
    "/images/play.png",
  ];
  H13 = [
    "yalla shout", 
    "guess game",
    "weather api",
    "todo list",
    "python timer",
    "rock paper </br> scissor",
    "todo list 2.0",
    "naruto api",
    "email sender",
    "qr code api",
    "pass attack",
    "madlibs game",
    "celender ",
    "youtube dowload video mp3",
  ]
  P3 = [
    "data taken by api",
    "qustion and answers",
    "data taken from api",
    "todo list(0.1)",
    "cli timer with m/s",
    "game as cli code",
    "now you can store </br> your data and see them later",
    "i made this api",
    "send email",
    "api qr code",
    "crack the pass",
    "just a game",
    "simple code",
    "dowload mp3 youtue"
];
  aHrefLink3 = [
    "https://github.com/iamDynamic/Yalla_Shout_Api/blob/main/main.py",
    "https://github.com/iamDynamic/word-game-python-/blob/main/main.py",
    "https://github.com/iamDynamic/weather-api-with-py/blob/main/main.py",
    "https://github.com/iamDynamic/todo-list-python-",
    "https://github.com/iamDynamic/timer",
    "https://github.com/iamDynamic/Rock--Paper--Scissors-Game",
    "https://github.com/iamDynamic/todo-list-python-/blob/main/todo%20list%20update(0.2)/data.txt",
    "https://github.com/iamDynamic/naruto-api-by-ali",
    "https://github.com/iamDynamic/send-email-python-",
    "https://github.com/iamDynamic/qr-code--api--Python-",
    "https://github.com/iamDynamic/pass-attack-python-",
    "https://github.com/iamDynamic/madlibs-game-",
    "https://github.com/iamDynamic/celender-python-",
    "https://github.com/iamDynamic/youtube-dowload-mp3",
  ];
  console.log(id);
  for (i = 0; i < ImgUrl3.length; i++) {
    art.innerHTML += `
      <div>
          <img src="${ImgUrl3[i]}" alt="">
          <h1>${H13[i]}</h1>
          <p>${P3[i]}</p>
          <a href='${aHrefLink3[i]}'>visit code</a>
      </div>
     `;
  }
}
// c
if (id === "4ca8fb2b-b5f4-4836-8b74-5646185c10ff") {
  ImgUrl4 = ["/images/office.png"];
  H14 = ["calc"];
  P4 = ["made with c lang"];
  aHrefLink4 = [
    "https://github.com/iamDynamic/math-calc--c-lang-/blob/main/main.c",
  ];
  console.log(id);
  for (i = 0; i < ImgUrl4.length; i++) {
    art.innerHTML += `
      <div>
          <img src="${ImgUrl4[i]}" alt="">
          <h1>${H14[i]}</h1>
          <p>${P4[i]}</p>
          <a href='${aHrefLink4[i]}'>visit code</a>
      </div>
     `;
  }
}
// react
if(id === "3255d2e9-d554-4196-bc05-79e611a50748"){
  iimgs = [
    "/images/solar-system.png",
  ]
  h1h = [
    "solar balls",
  ]
  pp = [
    "just a design",
  ]
  a = [
    "https://github.com/iamDynamic/SolarBalls--react-/tree/main/React",
  ]

  for(i=0;i<iimgs.length;i++){
    art.innerHTML += 
    `
    <div>
    <img src='${iimgs[i]}'>
    <h1> ${h1h[i]} </h1>
    <p> ${pp[i]} </p>
    <a href = '${a[i]}'> visit </a>
    `
  }
}