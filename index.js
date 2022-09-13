import createCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-list"]');
// const answerButton = document.querySelector('[data-js="answer-button"]');
// const answer = document.querySelector('[data-js="card-answer"]');
// const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

// answerButton.addEventListener("click", () => {
//   if (answer.classList.contains("card__answer--active")) {
//     answer.classList.remove("card__answer--active");
//     answerButton.textContent = "Show answer";
//   } else {
//     answer.classList.add("card__answer--active");
//     answerButton.textContent = "Hide answer";
//   }
// });

// bookmarkButton.addEventListener("click", () => {
//   bookmarkButton.classList.toggle("bookmark--active");
// });

const card1 = createCard("question 1", "answer 1", "tag 1");
cardContainer.append(card1);

const card2 = createCard("question 2", "answer 2", "tag 2");
cardContainer.append(card2);

const card3 = createCard("question 3", "answer 3", "tag 3");
cardContainer.append(card3);

const card4 = createCard("question 4", "answer 4", "tag 4");
cardContainer.append(card4);
