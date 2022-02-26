let capitilizeString = (names) => {
  let output = new Array();
  for (let name of names) {
    //name.slice(0, 1).toUpperCase().concat(name.slice(1, name.length));
    let firstChar = name.slice(0, 1).toUpperCase();
    //Slice -> firstparam -> start(inclusive) , second param end (exclusive)
    // let restChars = name.slice(1, name.length);
    let restChars = name.slice(1);
    const capitialzedStr = firstChar.concat(restChars);
    output.push(capitialzedStr);
  }
  console.log("Capitilzed Strings are ... ", output);
};

// capitilizeString(["My", "name", "is", "raghav"]);
