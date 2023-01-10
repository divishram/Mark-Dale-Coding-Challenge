// Assume Google data is retrieved using e.values[num] like GitHub sample
let googleData = {
  retirementAge: "65",
  emergencyFund: "5000",
  income: "42000.50",
};

/**
 * Convert Google form data into numeric values
 * @param {object} data Google data
 * @returns {object}    Obj with converted numeric values
 */
function convertTextToNumeric(data) {
  Object.keys(data).forEach((key) => {
    data[key] = parseFloat(data[key]); // use float so decimal places show
  });

  return data;
}

/*
Company can store result of function in variable and
apply calculations to modify object and transpose onto Google doc
e.g. increase retirement age
*/

let result = convertTextToNumeric(googleData);
console.log(result)
// output: { retirementAge: 65, emergencyFund: 5000, income: 42000.5, word: 22 }

// increase retirment by 5 years
result["retirementAge"] += 5;
console.log(result["retirementAge"]);
// output: 70


// Taken from GitHub code
const file = DriveApp.getFileById(templateID);
var folder = DriveApp.getFolderById(folderID)
var copy = file.makeCopy(investorName + ' Investment Policy', folder);
var doc = DocumentApp.openById(copy.getId());
var body = doc.getBody();
body.replaceText('%RetirementAge%', result["retirementAge"]);
body.replaceText('%EmergencyFund%', result["emergencyFund"]);
body.replaceText('%income%', result["income"])
doc.saveAndClose();
