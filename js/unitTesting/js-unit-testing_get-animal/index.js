export function getAnimal(str) {
  if (str == "cats") {
    return "I totally love cats!";
  } else if (!str) {
    return "I do not like animals at all!";
  }
  return `I like ${str}!`;
}
