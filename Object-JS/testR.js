function test() {
  let age = 33;
  let phones = {
    Ivan: "232322323",
    Peta: "45346456456",
    erol: "432111212110998",
    age,
    fun: function one() {
      return this.age + 2;
    },
  };
  for (const key in phones) {
    console.log(key);
    console.log(phones[key]);
  }

  console.log(fun);
}
test();
