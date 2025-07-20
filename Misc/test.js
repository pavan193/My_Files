const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Surprise!</title>
  <style>
    body {
      background: linear-gradient(135deg, #ffb6c1 0%, #ffe4e1 100%);
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
    }
    .emoji-bg {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 0;
    }
    .emoji {
      position: absolute;
      font-size: 2.5em;
      opacity: 0.7;
      animation: beat 1.2s infinite;
    }
    .emoji1 { left: 10vw; top: 15vh; animation-delay: 0s;}
    .emoji2 { left: 70vw; top: 10vh; animation-delay: 0.4s;}
    .emoji3 { left: 30vw; top: 70vh; animation-delay: 0.8s;}
    .emoji4 { left: 80vw; top: 60vh; animation-delay: 0.2s;}
    .emoji5 { left: 20vw; top: 40vh; animation-delay: 0.6s;}
    .emoji6 { left: 20vw; top: 80vh; animation-delay: 0.3s;}
    .emoji7 { left: 85vw; top: 25vh; animation-delay: 0.7s;}
    .emoji8 { left: 60vw; top: 80vh; animation-delay: 0.5s;}
    .emoji9 { left: 5vw; top: 50vh; animation-delay: 0.9s;}
    .emoji10 { left: 90vw; top: 75vh; animation-delay: 0.1s;}
    .emoji11 { left: 30vw; top: 25vh; animation-delay: 0.7s;}
    @keyframes beat {
      0%, 100% { transform: scale(1);}
      50% { transform: scale(1.3);}
    }
    h1 {
      color: #d72660;
      font-size: 3em;
      margin-bottom: 0.5em;
      z-index: 1;
    }
    p {
      color: #333;
      font-size: 1.3em;
      margin-bottom: 2em;
      z-index: 1;
    }
    .btn-group {
      display: flex;
      gap: 1em;
      z-index: 1;
    }
    button {
      background: #d72660;
      color: #fff;
      border: none;
      padding: 1em 2em;
      border-radius: 30px;
      font-size: 1.2em;
      cursor: pointer;
      transition: background 0.3s;
      z-index: 1;
    }
    button:hover {
      background: #a91d4e;
    }
    .danger {
      background: #333;
    }
    .danger:hover {
      background: #b71c1c;
    }
    #surprise, #slap {
      display: none;
      margin-top: 2em;
      animation: fadeIn 1s;
      z-index: 1;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9);}
      to { opacity: 1; transform: scale(1);}
    }
    .heart {
      color: #d72660;
      font-size: 2em;
      animation: heartbeat 1s infinite;
    }
    @keyframes heartbeat {
      0%, 100% { transform: scale(1);}
      50% { transform: scale(1.2);}
    }
  </style>
</head>
<body>
  <div class="emoji-bg">
    <span class="emoji emoji1">❤️</span>
    <span class="emoji emoji2">💖</span>
    <span class="emoji emoji3">💕</span>
    <span class="emoji emoji4">💘</span>
    <span class="emoji emoji5">💝</span>
    <span class="emoji emoji6">💗</span>
    <span class="emoji emoji7">💓</span>
    <span class="emoji emoji8">💞</span>
    <span class="emoji emoji9">💞</span>
    <span class="emoji emoji10">❣️</span>
    <span class="emoji emoji11">💓</span>
  </div>
  <h1>Hey Beautiful! 💖</h1>
  <p>I have a little surprise for you. Click a button below!</p>
  <div class="btn-group">
    <button onclick="showSurprise()">Click Me!</button>
    <button class="danger" onclick="showSlap()">Do Not Click</button>
  </div>
  <div id="surprise" style="text-align:center;">
    <h2>You are the best thing that ever happened to me! <span class="heart">❤️</span></h2>
    <p>Thank you for being in my life. I love you so much! 🌹</p>
    <div style="display: flex; justify-content: center;">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyaDlraWk0eWllNzB1YW5ha3Riejd2amFhcGN0ejJwN3Bnem1kend5ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KG5oq4vesf9r8JbBEN/source.gif" alt="Surprise" style="width:300px; border-radius:20px; margin-top:1em;">
    </div>
</div>
  <div id="slap" style="text-align:center;">
    <h2>You have a Sexy ASSSSSSSS 🍑😜</h2>
    <div style="display: flex; justify-content: center;">
      <img src="https://media1.tenor.com/m/en-ZsjZmlBUAAAAC/bum.gif" alt="Slap" style="width:200px; border-radius:20px; margin-top:1em;">
    </div>
  </div>
  <script>
    function showSurprise() {
      document.getElementById('surprise').style.display = 'block';
      document.getElementById('slap').style.display = 'none';
    }
    function showSlap() {
      document.getElementById('slap').style.display = 'block';
      document.getElementById('surprise').style.display = 'none';
    }
  </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

server.listen(3000, () => {
  console.log('Surprise website running at http://localhost:3000');
});