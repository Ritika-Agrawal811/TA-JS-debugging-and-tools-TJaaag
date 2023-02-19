function addNumbers(numA, numB) {
  return numA + numB;
}

function multiplyNumbers(numA, numB) {
  return numA * numB;
}

function test(message, callback) {
  try {
    callback();
    console.log("%cSuccess: ", "color:green ; font-weight:900", message);
  } catch (error) {
    console.error(error);
    console.log("%cFailure: ", "color:red; font-weight:900", message);
  }
}

function expect(actual) {
  return {
    isTypeEqualTo: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(
          `${typeof actual} is not equal to expected ${expected}`
        );
      }
    },
  };
}

test("Add 10 and 15 to get a number", () => {
  expect(addNumbers(10, 15)).isTypeEqualTo("number");
});

test("Add 18 and 10 to get a number", () => {
  expect(addNumbers(18, 10)).isTypeEqualTo("string");
});

test("Add 20 and 15 to get a number", () => {
  expect(addNumbers(20, 15)).isTypeEqualTo("null");
});

test("Multiple 10 and 15 to get a number", () => {
  expect(multiplyNumbers(10, 15)).isTypeEqualTo("number");
});

test("Multiply 18 and 10 to get a number", () => {
  expect(multiplyNumbers(18, 10)).isTypeEqualTo("string");
});

test("Multiply 20 and 15 to get a number", () => {
  expect(multiplyNumbers(20, 15)).isTypeEqualTo("null");
});
