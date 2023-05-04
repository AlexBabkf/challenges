console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((dict) => dict.id == 2);
console.log(onlyCardWithIdTwo);
const allCardsWith3Tags = cards.filter((dict) => dict.tags.length == 3);

const allCardsThatAreNotBookmarked = cards.filter((dict) => !dict.isBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (dict) =>
    dict.isBookmarked &&
    (dict.tags.map((tag) => tag == "js") ||
      dict.tags.map((tag) => tag == "HTML"))
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
