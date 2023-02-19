function getFullName(firstname, lastname) {
  return firstname + " " + lastname;
}

let fullname = getFullName("Arya", "Stark");

let expectedFullname = "Arya Stark";

if (fullname !== expectedFullname) {
  throw new Error(`${fullname} is not equal to ${expectedFullname}`);
}

let fullname1 = getFullName("John", "Snow");

let expectedFullname1 = "John Snow";

if (fullname1 !== expectedFullname1) {
  throw new Error(`${fullname1} is not equal to ${expectedFullname1}`);
}
