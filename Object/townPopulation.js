function townPopulation(input) {
  outputTowns = {};

  for (let townArr of input) {
    let allTowns = townArr.split(" <-> ");
    let town = allTowns[0];
    let population = allTowns[1];
    population = Number(population);
    if (outputTowns[town] == undefined) {
      outputTowns[town] = 0;
    }
    outputTowns[town] += population;
  }
  for (const key in outputTowns) {
    console.log(`${key} : ${outputTowns[key]}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
