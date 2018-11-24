function setContent (number) {
  const title = document.querySelector('.graphText h1');
  const text = document.querySelector('.graphText p');
  const img = document.querySelector('.graphText img');

  if (number == 0) { // red

    title.innerHTML = "red";
    text.innerHTML = 
    "あなたの声は全体的に赤が強く、とても情熱的な声をしています。<br>" +
    "あなたの声は人に元気を与え、物事に対しての意欲を高めることのできる一面を持っています。";
    img.src = "../img/red.png";

  } else if (number == 1) { // orange

    title.innerHTML = "orange";
    text.innerHTML = 
    "あなたの声は全体的にオレンジが強く、とても親しみやすい声をしています。<br>" +
    "あなたの声は柔らかく、聞く人に思いやりや安心感を与えることのできる一面を持っています。";
    img.src = "../img/orange.png";

  } else if (number == 2) { // yellow

    title.innerHTML = "yellow";
    text.innerHTML = 
    "あなたの声は全体的に黄色が強く、とても活発的な声をしています。<br>" +
    "あなたの声は聞く人の集中力を高め、沈んだ気分を明るくすることのできる一面を持っています。";
    img.src = "../img/yellow.png";

  } else if (number == 3) { // green

    title.innerHTML = "green";
    text.innerHTML = 
    "あなたの声は全体的に緑が強く、とても穏やかな声をしています。<br>" +
    "あなたの声は聞く人に落ち着きを与え、辛い気持ちに癒しを与えることのできる一面を持っています。";
    img.src = "../img/green.png";

  } else if (number == 4) { // blue

    title.innerHTML = "blue";
    text.innerHTML = 
    "あなたの声は全体的に青が強く、とてもさわやかな声をしています。<br>" +
    "あなたの声は涼やかで、聞く人を冷静にさせあなたを知性的なイメージを与える一面を持っています。";
    img.src = "../img/blue.png";

  } else { // purple

    title.innerHTML = "purple";
    text.innerHTML = 
    "あなたの声は全体的に紫が強く、とても魅惑的な声をしています。<br>" +
    "あなたの声は聞く人の感受性を高め、感性を豊かにすることのできる一面を持っています。";
    img.src = "../img/purple.png";

  }
}