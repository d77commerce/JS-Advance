function words(input) {
  let word = input
    .toUpperCase()
    .split(/[\W]+/)
    .filter((w) => w.length > 0)
    .join(", ");
  console.log(word);
}
words("Hi, how are you?");
