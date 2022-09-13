import createCard from "./components/card/card.js";
import cards from "./components/card-list/card-content.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

cards.forEach((card) => {
  const newCard = createCard(card.question, card.answer, card.tags);
  cardContainer.append(newCard);
});
