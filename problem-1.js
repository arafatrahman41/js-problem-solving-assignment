function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number") {
    return "Invalid input. Please provide a number";
  } else if (ticketSale < 0) {
    return "Invalid input. Please provide positive number";
  }

  const TicketPrice = 120;
  const perDayTicketSell = ticketSale * TicketPrice;
  const perDayExpense = 500 + 8 * 50;
  const result = perDayTicketSell - perDayExpense;
  return result;
}

// console.log(calculateMoney());