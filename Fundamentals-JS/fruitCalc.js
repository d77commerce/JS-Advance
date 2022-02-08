function calcFruitPrice(fruit, grams, pricePerKg) {
  let printFruit = fruit;
  let Kg = grams / 1000;
  let money = pricePerKg * Kg;
  console.log(
    `I need $${money.toFixed(2)} to buy ${Kg.toFixed(
      2
    )} kilograms ${printFruit}.`
  );
}
calcFruitPrice("Apple", 1500, 1.2);
