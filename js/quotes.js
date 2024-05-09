const albumCovers = [
  "answer.jpeg",
  "d.jpeg",
  "mbml2.jpeg",
  "ms7.jpeg",
  "persona.jpeg",
  "sla.jpeg",
  "tear.jpeg",
  "yf.jpeg",
  "ynwa.jpeg",
  "hopeworld.jpeg",
  "mono.jpeg",
  "her.jpeg",
];

const quotes = [
  {
    cover: albumCovers[4],
    link: "https://youtu.be/Fw7C6IsDYgI",
    quote: "가장 깊은 밤에 더 빛나는 별빛 💫 밤이 깊을수록 더 빛나는 별빛",
    author: "BTS, Mikrokosmos",
  },
  {
    cover: albumCovers[0],
    link: "https://youtu.be/9mwRYgMmSGE",
    quote:
      "어제의 나 오늘의 나 내일의 나, I'm learning how to love myself, 빠짐없이 남김없이 모두 다 나.",
    author: "BTS, Answer: Love Myself",
  },
  {
    cover: albumCovers[0],
    link: "https://youtu.be/9mwRYgMmSGE",
    quote:
      "왜 자꾸만 감추려고만 해 니 가면 속으로, 내 실수로 생긴 흉터까지 다 내 별자린데.",
    author: "BTS, Answer: Love Myself",
  },
  {
    cover: albumCovers[7],
    link: "https://youtu.be/4ujQOR2DMFM",
    quote:
      "Live your life. It’s yours anyway. Don’t try too hard. It’s okay to lose.",
    author: "BTS, Fire",
  },
  {
    cover: albumCovers[8],
    link: "https://youtu.be/DG6DtnDnQu4",
    quote:
      "이제 알겠어 후회하며 늙어 가는 건 break up. 나는 택했어 조건 없는 믿음을 가지겠어.",
    author: "BTS, Outro : Wings",
  },
  {
    cover: albumCovers[2],
    link: "https://youtu.be/ugrXP_YT9j0",
    quote:
      "Never mind 쉽진 않지만 가슴에 새겨놔. 부딪힐 것 같으면 더 세게 밟아 임마.",
    author: "BTS, INTRO: Never Mind",
  },
  {
    cover: albumCovers[11],
    link: "https://youtu.be/K2pLIcGHUEE",
    quote: "희망이 있는 곳엔 반드시 시련이 있네",
    author: "BTS, 바다(Hidden Track)",
  },
  {
    cover: albumCovers[5],
    link: "https://youtu.be/k-J_LxWLXeo",
    quote:
      "해가 뜨기 전 새벽이 가장 어두우니까, 먼 훗날에 넌 지금의 널 절대로 잊지 마.",
    author: "BTS, Tomorrow",
  },
  {
    cover: albumCovers[6],
    link: "https://youtu.be/38k5zr1e0HI",
    quote:
      "내가 나인 게 싫은 날, 영영 사라지고 싶은 날, 문을 하나 만들자 너의 맘 속에다.",
    author: "BTS, Magic Shop",
  },
  {
    cover: albumCovers[6],
    link: "https://youtu.be/38k5zr1e0HI",
    quote:
      "필 땐 장미꽃처럼 흩날릴 땐 벚꽃처럼 질 땐 나팔꽃처럼 아름다운 그 순간처럼",
    author: "BTS, Magic Shop",
  },
  {
    cover: albumCovers[3],
    link: "https://youtu.be/Nr3ot5gSvkM",
    quote:
      "그래도 이 하루가 끝나잖아 초침과 분침이 겹칠 때 세상은 아주 잠깐 숨을 참아 Zero o'clock",
    author: "BTS, 00:00",
  },
  {
    cover: albumCovers[9],
    link: "https://youtu.be/zUsmV8ogRrU",
    quote:
      "If I 누군가에게 힘 누군가에게 빛 I wish, i could be a Piece Of Peace",
    author: "J-hope, P.O.P(Piece Of Peace) Pt.1",
  },
  {
    cover: albumCovers[10],
    link: "https://youtu.be/WQ70DH_fCRI",
    quote: "지나가 언젠가 분명히 확실히",
    author: "RM, 지나가",
  },
  {
    cover: albumCovers[0],
    link: "https://youtu.be/w5_X-QFwmoo",
    quote: "너의 수고는 너 자신만 알면 돼.",
    author: "JIN, Self Interview, 2015",
  },
  {
    cover: albumCovers[6],
    link: "https://youtu.be/38k5zr1e0HI",
    quote:
      "나와 나의 여러분은 결국 이길 것이다. 아무도 모르는 새 아주 자연스럽게",
    author: "RM, May 15, 2015",
  },
  {
    cover: albumCovers[1],
    link: "https://youtu.be/NvK9APEhcdk",
    quote: "Team work makes the dream work !",
    author: "RM, Sep 8, 2020",
  },
];

const albumCover = document.querySelector("#recommend-song");

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteChangeBtn = document.querySelector("#quote-change");

const a = document.createElement("a");
const coverImage = document.createElement("img");

function handleQuoteChange() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  a.href = todaysQuote.link;
  a.title = "Go to Listen to music.";
  a.target = "_blank";
  a.ariaLabel = "YouTube link to the song";
  coverImage.src = `cover/${todaysQuote.cover}`;
  coverImage.alt = "album cover";
  a.appendChild(coverImage);
  albumCover.appendChild(a);
  quote.innerText = `“${todaysQuote.quote}”`;
  author.innerText = todaysQuote.author;
}

quoteChangeBtn.addEventListener("click", handleQuoteChange);
window.addEventListener("DOMContentLoaded", handleQuoteChange);
