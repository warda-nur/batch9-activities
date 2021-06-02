//   TIME   //
(function () {
  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
      h = checkTime(today.getHours()),
      m = checkTime(today.getMinutes());
    document.getElementById("time").innerHTML = h + ":" + m;
    t = setTimeout(function () {
      startTime();
    }, 500);
  }
  startTime();
})();

///// GREETING

const docGreeting = document.querySelector(".greeting");

function generateGreeting() {
  var h = new Date().getHours();
  var greeting = "Hello";

  if (h < 12) {
    greeting = "Good Morning, ";
  } else if (h < 18) {
    greeting = "Good Afternoon, ";
  } else {
    greeting = "Good Evening, ";
  }

  docGreeting.textContent = greeting;
}

// Name
const docIconName = document.querySelector("#icon-name");
const docName = document.querySelector(".name");

// Focus on name field
docIconName.addEventListener("click", () => {
  docName.focus();
});

// Prevent newline char on name field
docName.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

// Focus Text

// Transform focus input
const focusInput = document.querySelector("#focus-input");
const goalText = document.querySelector("#goal-text");

const focusContainer = document.querySelector(".focus-container");
const goalContainer = document.querySelector(".goal-container");

focusInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    // Execute only on Enter
    // validation
    if (this.value == "") {
      alert("Input cannot be empty");
      return false;
    } else addGoal();
  }
});

// Goal function
function addGoal() {
  goalText.textContent = focusInput.value;
  focusInput.value = "";

  focusContainer.classList.toggle("hide");
  goalContainer.classList.toggle("show");
}

// Add strikethrough text and rotate icon when checkbox is checked
const checkboxGoal = document.querySelector("#checkbox");
checkboxGoal.onclick = function () {
  var sib = this.nextElementSibling;
  sib.classList.toggle("checked");
};

// Remove item on click of 'x'
const removeGoal = document.querySelector("#goal-remove");
removeGoal.onclick = function () {
  // reset to initial
  var sib = this.previousElementSibling;
  sib.textContent = "";
  if (sib.classList.contains("checked")) {
    sib.classList.toggle("checked");
  }
  checkboxGoal.checked = false;

  // Bring containers back
  focusContainer.classList.toggle("hide");
  goalContainer.classList.toggle("show");
};

// Inspirational Quotes
var quotesList = [
  `“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
  `“He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.” — Pablo Picasso`,
  `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.” — Eleanor Roosevelt`,
  `“When you change your thoughts, remember to also change your world.” — Norman Vincent Peale`,
  `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.” — Walter Anderson`,
  `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” — Diane McLaren`,
  `“Success is not final; failure is not fatal: It is the courage to continue that counts.” — Winston S. Churchill`,
  `“It is better to fail in originality than to succeed in imitation.” — Herman Melville`,
  `“The road to success and the road to failure are almost exactly the same.” — Colin R. Davis`,
  `“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau`,
  `“All our dreams can come true, if we have the courage to pursue them.” — Walt Disney`,
];

const docQuoteText = document.querySelector("#quotes-text");
const docQuoteAuthor = document.querySelector("#quotes-author");

function generateRandomQuote() {
  var i = Math.floor(Math.random() * quotesList.length);
  var randomQuote = quotesList[i];

  // Extract Quote
  var index = randomQuote.indexOf(`”`) + 1;
  var quoteRawText = randomQuote.slice(0, index);
  var quoteRawAuthor = randomQuote.slice(index + 1);

  // Append to HTML
  docQuoteText.textContent = quoteRawText;
  docQuoteAuthor.textContent = quoteRawAuthor;
}

// Next quote
const docNextQuoteIcon = document.querySelector("#next-quote-icon");
docNextQuoteIcon.addEventListener("click", generateRandomQuote);

// Modal
const docQuotesModal = document.querySelector("#quotes-modal");
const docAddQuoteIcon = document.querySelector("#add-quote-icon");
const docQuotesCancel = document.querySelector("#quote-cancel");

// Open/Close Modal
docAddQuoteIcon.onclick = () => {
  docQuotesModal.style.display = "block";
};
docQuotesCancel.onclick = () => {
  docQuotesModal.style.display = "none";
};

// On Modal Submit: Add quote to DOM and Array
const docQuotesSubmit = document.querySelector("#quote-submit");
const modalTextArea = document.querySelector("#quote-texts");
const modalAuthor = document.querySelector("#quote-author");

docQuotesSubmit.addEventListener("click", (e) => {
  var quote = `“` + modalTextArea.value + `”`;
  var author = "— " + modalAuthor.value;

  // Validate first and then add quote & author to Array and display in the HTML
  if (quote.length > 2 && author.length > 2) {
    var wholeQuote = quote + author;
    quotesList.push(wholeQuote);

    docQuoteText.textContent = quote;
    docQuoteAuthor.textContent = author;

    docQuotesModal.style.display = "none";
  } else {
    return;
  }
});
