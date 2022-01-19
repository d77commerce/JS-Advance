function test() {
  let phones = {
    Ivan: "232322323",
    "Petar petrov": "45346456456",
    "Erol DEmirov": "432111212110998",
  };
  for (const key in phones) {
    console.log(key);
    console.log(phones[key]);
  }
}
test();
