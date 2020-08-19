let testInventory = {
  a: ['banana', 'pear', 'apple'],
  b: 2,
  c: 3
};

console.log(typeof(testInventory));

testInventory.bananas = false;

for (let [key, value] of Object.entries(testInventory)) {
  console.log(key, value);
}

console.log(testInventory[2]);