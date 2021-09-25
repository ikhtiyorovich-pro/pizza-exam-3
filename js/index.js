//Query selectorlar
var elFormWrapper = document.querySelector(".form__wrapper"); // Formni o'rab turuvchi div
var elResultWrapper = document.querySelector(".result__wrapper"); // Formni o'rab turuvchi div
var elForm = document.querySelector(".form"); // Form
var elBreadWrapper = document.querySelector(".bread-wrapper"); // Non qalin yupqaligi fieldseti
var elPizzaSizeWrapper = document.querySelector(".pizza-size-wrapper"); // Nonning kotta kichikligi fieldseti sm da
var elPizzaTop = document.querySelector(".top");
var elPizzaTopSalts = document.querySelector(".pizza-top-salts");
var elAdditionalFieldset = document.querySelector(".additional-wrapper");
var elSaltsResultItem = document.querySelector(".salts-result-item");
var elAdditionalResultItem = document.querySelector(".additional-result-item");

var elBreadParagraph = document.querySelector(".bread-paragraph");
var elSizeParagraph = document.querySelector(".size-paragraph");
var elSaltsParagraph = document.querySelector(".salts-paragraph");

//Create elementlar
var elBreadSelect = document.createElement("select"); // Qalin yupqa selecti
var elBreadLabel = document.createElement("label"); // Qalin yupqa selectidagi label
var elBreadOptionthin = document.createElement("option"); // Qalin yupqa selectidagi yupqa non optioni
var elBreadOptionthick = document.createElement("option"); // Qalin yupqa selectidagi qalin non optioni
var elInputAndLabelWrapper = document.createElement("div");

//Append Childlar
elForm.appendChild(elBreadWrapper);
elForm.appendChild(elPizzaSizeWrapper);
elForm.appendChild(elPizzaTop);
elForm.appendChild(elAdditionalFieldset);
elBreadWrapper.appendChild(elBreadLabel);
elBreadWrapper.appendChild(elBreadSelect);
elBreadSelect.appendChild(elBreadOptionthin);
elBreadSelect.appendChild(elBreadOptionthick);
elPizzaSizeWrapper.appendChild(elInputAndLabelWrapper);
elPizzaTop.appendChild(elPizzaTopSalts);


elBreadSelect.setAttribute("class", "select");

elBreadOptionthin.textContent = "Yupqa"; // Selectdagi yupqa non text contenti
elBreadOptionthick.textContent = "Qalin"; // Selectdagi qalin non text contenti


elBreadOptionthin.className = "thin-bread";

elBreadParagraph.textContent = elBreadSelect.value;
var pizza = function (evt) {
  evt.preventDefault();
  elBreadParagraph.textContent = elBreadSelect.value;
};
elBreadSelect.addEventListener("change", pizza);
// =======================================================================================================================

var radioSize = ["25sm", "30sm", "35sm"];
var checkedRadio = [];

for (var i = 0; i < radioSize.length; i++) {
  var newElRadioLabel = document.createElement("label");
  var newElRadioCheckbox = document.createElement("input");
  var newElRadioSpan = document.createElement("span");

  newElRadioCheckbox.setAttribute("class", "btn");

  newElRadioCheckbox.type = "radio";
  newElRadioCheckbox.id = i;
  newElRadioCheckbox.name = "Pitsaning kotta kichikligi";
  newElRadioCheckbox.value = radioSize[i];
  newElRadioSpan.textContent = radioSize[i];
  newElRadioLabel.className = "radio-label";
  newElRadioSpan.className = "radio-span";

  newElRadioCheckbox.addEventListener("change", function (evt) {
    evt.preventDefault();

    elSizeParagraph.textContent = this.value;

    // console.log(elSizeParagraph.textContent = this.value);
  });

  elPizzaSizeWrapper.appendChild(newElRadioLabel);
  newElRadioLabel.appendChild(newElRadioCheckbox);
  newElRadioLabel.appendChild(newElRadioSpan);
}

// =======================================================================================================================
// =======================================================================================================================

var salts = [
  "Pomidor",
  "Sosiska",
  "Zaytun",
  "Tuzlangan bodring",
  "Qo'ziqorin",
  "Qazi",
  "Kolbasa",
];
var checkedSalts = [];

for (var i = 0; i < salts.length; i++) {
  var newElSaltsLabel = document.createElement("label");
  var newElSaltsCheckbox = document.createElement("input");
  var newElSaltsSpan = document.createElement("span");

  newElSaltsCheckbox.type = "checkbox";
  newElSaltsCheckbox.id = i;
  newElSaltsCheckbox.value = salts[i];
  newElSaltsSpan.textContent = salts[i];
  newElSaltsLabel.className = "salts-label";
  newElSaltsSpan.className = "salts-span";

  newElSaltsLabel.appendChild(newElSaltsCheckbox);
  newElSaltsLabel.appendChild(newElSaltsSpan);
  elPizzaTopSalts.appendChild(newElSaltsLabel);

  newElSaltsCheckbox.addEventListener("change", function () {
    elSaltsResultItem.textContent = "";

    if (checkedSalts.includes(this.value)) {
      var productIndex = checkedSalts.indexOf(this.value);
      checkedSalts.splice(productIndex, 1);
    } else {
      checkedSalts.push(this.value);
    }

    elSaltsResultItem.innerHTML = null;

    for (var hi = 0; hi < checkedSalts.length; hi++) {
      var elSaltsResultList = document.createElement("li");
      elSaltsResultList.className = "result-top-salts";
      elSaltsResultList.textContent = checkedSalts[hi];

      elSaltsResultItem.appendChild(elSaltsResultList);
    }
  });
}

// =======================================================================================================================

var additional = ["Qalampir", "Ketchup", "Mayonez"];
var checkedAdditionals = [];

for (var i = 0; i < additional.length; i++) {
  var newElAdditionalsLabel = document.createElement("label");
  var newElAdditionalsCheckbox = document.createElement("input");
  var newElAdditionalsSpan = document.createElement("span");

  newElAdditionalsCheckbox.type = "checkbox";
  newElAdditionalsCheckbox.id = i;
  newElAdditionalsCheckbox.required = false;
  newElAdditionalsCheckbox.value = additional[i];
  newElAdditionalsSpan.textContent = additional[i];
  newElAdditionalsLabel.className = "additional-label";
  newElAdditionalsSpan.className = "additional-span";

  newElAdditionalsLabel.appendChild(newElAdditionalsCheckbox);
  newElAdditionalsLabel.appendChild(newElAdditionalsSpan);
  elAdditionalFieldset.appendChild(newElAdditionalsLabel);

  newElAdditionalsCheckbox.addEventListener("change", function () {
    elAdditionalResultItem.textContent = "";

    if (checkedAdditionals.includes(this.value)) {
      var productIndex = checkedAdditionals.indexOf(this.value);
      checkedAdditionals.splice(productIndex, 1);
    } else {
      checkedAdditionals.push(this.value);
    }

    elSaltsResultItem.innerHTML = null;
    // =================
    console.log(checkedAdditionals);
    for (var xi = 0; xi < checkedAdditionals.length; xi++) {
      var elAdditionalsResultList = document.createElement("li");
      elAdditionalsResultList.className = "result-top-salts";
      elAdditionalsResultList.textContent = checkedAdditionals[xi];

      elAdditionalResultItem.appendChild(elAdditionalsResultList);
    }
  });
}

// =======================================================================================================================

// var checkBoxes = document.querySelectorAll('[type="checkbox"]');

// Non qalinligi

console.log(elForm);
