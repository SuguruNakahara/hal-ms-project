function setContent () {
  const title = document.querySelector('.graphText h1');
  const text = document.querySelector('.graphText p');
  const img = document.querySelector('.graphText img');

  if (false) { // red

    title.innerHTML = "赤";
    text.innerHTML = 
    "あなたの声は全体的に赤が強く、とても情熱的な声をしています。<br>あなたの声は人に元気を与え、物事に対しての意欲を高めることのできる声です。";
    img.src = "../img/red.png";

  } else if (false) { // orange

    title.innerHTML = "オレンジ";
    text.innerHTML = 
    "あなたの声は全体的にオレンジが強く、とても親しみやすい声をしています。<br>あなたの声は柔らかく、聞く人に思いやりや安心感を与えることのできる声です。";
    img.src = "../img/orange.png";

  } else if (false) { // green

    title.innerHTML = "緑";
    text.innerHTML = 
    "あなたの声は全体的に緑が強く、とても穏やかな声をしています。<br>あなたの声は聞く人に落ち着きを与え、辛い気持ちに癒しを与えることのできる声です。";
    img.src = "../img/green.png";

  } else if (false) { // blue

    title.innerHTML = "青";
    text.innerHTML = 
    "あなたの声は全体的に青が強く、とてもさわやかな声をしています。<br>あなたの声は涼やかで、聞く人を冷静にさせあなたを知性的なイメージを与える声です。";
    img.src = "../img/blue.png";

  } else if (false) { // purple

    title.innerHTML = "紫";
    text.innerHTML = 
    "あなたの声は全体的に紫が強く、とても魅惑的な声をしています。<br>あなたの声は聞く人の感受性を高め、感性を豊かにすることのできる声です。";
    img.src = "../img/purple.png";

  } else { // yellow

    title.innerHTML = "黄色";
    text.innerHTML = 
    "あなたの声は全体的に黄色が強く、とても活発的な声をしています。<br>あなたの声は聞く人の集中力を高め、沈んだ気分を明るくすることのできる声です。";
    img.src = "../img/yellow.png";

  }
}