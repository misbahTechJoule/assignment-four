function calculateMoney(tickets) {
  if (tickets < 0) {
    return "Number of tickets can not be negative. Please provide a postive number for tickets";
  }
  if (typeof tickets !== "number") {
    return "Please provide a number";
  }
  const ticketPrice = 120;
  const totalCost = 500 + 8 * 50;
  return tickets * ticketPrice - totalCost;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const goodLetters = ["a", "y", "i", "e", "o", "u", "w"];
  const lowerCaseName = name.toLowerCase();
  const lastLetter = lowerCaseName[name.length - 1];
  for (const goodLetter of goodLetters) {
    if (goodLetter === lastLetter) {
      return "Good Name";
    }
  }
  return "Bad Name";
}

function deleteInvalids(elements) {
  if (!Array.isArray(elements)) {
    return "The input is not an array. Please provide an array";
  }
  return elements.filter((element) => {
    if (typeof element === "number" && element !== NaN) {
      return element;
    }
  });
}

function password(passwordObj) {
  if (
    !passwordObj.hasOwnProperty("name") ||
    !passwordObj.hasOwnProperty("siteName") ||
    !passwordObj.hasOwnProperty("birthYear")
  ) {
    return "invalid";
  } else if (passwordObj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  return (
    passwordObj.siteName[0].toUpperCase() +
    passwordObj.siteName.slice(1) +
    "#" +
    passwordObj.name +
    "@" +
    passwordObj.birthYear
  );
}

function monthlySavings(allPayments, livingCost) {
  if (!Array.isArray(allPayments) || typeof livingCost !== "number") {
    return "invalid input";
  }

  const paymentsAfterTax = allPayments.map((payment) => {
    if (payment >= 3000) {
      return payment - payment * 0.2;
    } else {
      return payment;
    }
  });

  const savings = paymentsAfterTax.reduce((a, b) => a + b) - livingCost;

  return savings >= 0 ? savings : "earn more";
}
