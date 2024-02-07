// problem one
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

console.log(calculateMoney(-93));
