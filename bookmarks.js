import createCard from "./components/card/card.js";
import cards from "./components/card-list/card-content.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

// cards.forEach((card) => {
//   if (card.bookmarked) {
//     const newCard = createCard(card.question, card.answer, card.tags);
//     newCard
//       .querySelector('[data-js="bookmark-button"]')
//       .classList.add("bookmark--active");
//     cardContainer.append(newCard);
//   }
// });

cards
  .filter((card) => (card.bookmarked ? true : false))
  .forEach((item) => {
    const newCard = createCard(item.question, item.answer, item.tags);
    newCard
      .querySelector('[data-js="bookmark-button"]')
      .classList.add("bookmark--active");
    cardContainer.append(newCard);
  });
