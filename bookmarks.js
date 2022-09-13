import createCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

const card5 = createCard("question 5", "answer 5", "tag 5");
cardContainer.append(card5);

const card6 = createCard("question 6", "answer 6", "tag 6");
cardContainer.append(card6);

const card7 = createCard("question 7", "answer 7", "tag 7");
cardContainer.append(card7);
