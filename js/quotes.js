const sentences = [
  {
    sentence:
      "개인능력이 떨어지는걸 다른사람의 탓으로 돌리지 말아주세요.",
  },
  {
    sentence: "인간이 5명이나 모이면 반드시 1명은 쓰레기가 있다.",
  },
  {
    sentence: "게으름은 모든 나쁜 습관의 어머니지만, 그래도 어머니이기에 게으름도 존경해야 할 필요가 있어.",
  },
  {
    sentence: "누군가를 괴물로 만드는 것은 그들의 얼굴이 아니라 그들 스스로 그들의 인생에서 내리는 선택이야.",
  },
  {
    sentence:
      "포기하는 순간 너의 꿈과 다른 모든 것이 사라지게 될 거야",
  },
  {
    sentence:
      "이야기의 좋고 나쁨은 결말의 완성도로 결정되지.",
  },
  {
    sentence: "자신을 믿지 않는 녀석 따위는 노력할 가치도 없다!",
  },
  {
    sentence:
      "두번째 작품은 대부분 졸작이기 마련이지",
  },
  {
    sentence: "자신의 한계를 넘어서는 것을 통해서 성장하는 거야. 그리고 그것을 깨닫는 것도 훈련의 일부이지.",
  },
  {
    sentence: "나를 과소평가하지마. 나는 포기하지도 도망가지도 않을 것이니까",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const fadeEffect = document.querySelector(".fadeEffect");

const sayBtn = document.querySelector(".change-sentence");
function choiceSay() {
  const todaysQuote = sentences[Math.floor(Math.random() * sentences.length)];
  // const todaysQuote = sentences[9];
  quote.innerText = todaysQuote.sentence;
  // author.innerText = todaysQuote.author;
  fadeEffect.classList.remove("effect");
  void fadeEffect.offsetWidth;
  fadeEffect.classList.add("effect");
}
choiceSay();
sayBtn.addEventListener("click", choiceSay);
