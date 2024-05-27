const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check for empty inputs
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  // Check for invalid numbers
  if (isNaN(numDividend) || isNaN(numDivider)) {
    console.error(new Error("Invalid input: Non-numeric value provided"));
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    throw new Error("Invalid input: Non-numeric value provided");
  }

  // Check for negative divider
  if (numDivider <= 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(new Error("Invalid division: Divider should be a positive number"));
    return;
  }

  const divisionResult = Math.floor(numDividend / numDivider);
  result.innerText = divisionResult;
});
