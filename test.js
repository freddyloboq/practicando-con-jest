const {multiplicar} = require("./app")

test("A ver si de verdad multiplica -> ", ()=>{
  expect(multiplicar(8, "8")).toBe(64);
})

test("el tipo de dato de a debe ser numero -> ", () => {
  expect(multiplicar(8, "8")).toBe(64);
});