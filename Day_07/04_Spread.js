let spreadTest = () => {
  const odd = [1, 3, 5];
  const even = [2, 4, 6];

  const combined = odd.concat(even);
  console.log("odd nums ", odd);
  console.log("even nums ", even);
  console.log("combined nums ", combined);

  const spreadCombined = [...odd, ...even];
  console.log("spreadCombined nums : ", spreadCombined);

  const spreadCombinedWithNumsBetween = [
    12,
    34,
    56,
    ...odd,
    17,
    27,
    ...even,
    45,
    56,
    100,
  ];
  console.log(
    "spreadCombinedWithNumsBetween nums : ",
    spreadCombinedWithNumsBetween
  );
};

// spreadTest();
//REST Parameter
function addNumbers(a, b, ...others) {
  let result = a + b;
  for (let eachValue of others) {
    result += eachValue;
  }

  console.log("addNumbers -> ", result);
  return result;
}


addNumbers(10, 20);
addNumbers(10, 20, 30);
addNumbers(10, 20, 30, 10, 23);
addNumbers(10, 20, 30, 10, 15, 16, 45);

//REST Parameter
function addNumbersVariation(...others) {
  let result = 0;
  for (let eachValue of others) {
    result += eachValue;
  }

  console.log("addNumbersVariation -> ", result);
  return result;
}

addNumbersVariation(10, 20);
addNumbersVariation(10, 20, 30);
addNumbersVariation(10, 20, 30, 10, 23);
addNumbersVariation(10, 20, 30, 10, 15, 16, 45);
