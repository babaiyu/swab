const quotes = [
  {
    quote: 'Maka sesungguhnya bersama kesulitan itu ada kemudahan',
    author: 'QS Al Insyirah 5',
  },
  {
    quote: 'Berpikirlah positif, tidak peduli seberapa keras kehidupanmu',
    author: 'Ali bin Abi Thalib',
  },
  {
    quote:
      'Kita adalah makhluk yang suka menyalahkan dari luar, tidak menyadari bahwa masalah biasanya dari dalam',
    author: 'Abu Hamid Al Ghazali',
  },
  {
    quote: 'Balas dendam terbaik adalah menjadikan dirimu lebih baik.',
    author: 'Ali bin Abi Thalib',
  },
  {
    quote:
      'Jangan berduka, apa pun yang hilang darimu akan kembali lagi dalam wujud lain',
    author: 'Jalaludin Rumi',
  },
  {
    quote:
      'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita',
    author: 'QS At Taubah 40',
  },
  {
    quote:
      'Orang yang terkaya adalah orang yang menerima pembagian (taqdir) dari Allah dengan senang hati',
    author: 'Ali bin Husein',
  },
  {
    quote:
      'Untuk semua kepedihan yang kau alami, bersabar dan bertahanlah, karena Allah tahu di mana batas kemampuanmu',
    author: 'unkwown',
  },
  {
    quote:
      'Perempuan itu sama seperti bunga. Mereka harus diperlakukan dengan lembut, baik, dan penuh kasih sayang',
    author: 'Ali bin Abi Thalib',
  },
];

let quotation = document.getElementById('myquotes');
let author = document.getElementById('myauthor');
let i = 0;
let speed = 50;

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  function slowWrite() {
    let theQuote = random.quote;
    if (i < random.quote.length) {
      quotation.innerHTML += theQuote.charAt(i);
      i++;
      setTimeout(slowWrite, speed);
    }
  }
  slowWrite();
  author.innerText = random.author;
}

export default randomQuote();
