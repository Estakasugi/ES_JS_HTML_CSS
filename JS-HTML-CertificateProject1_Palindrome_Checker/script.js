const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const palindromeRes = document.getElementById('result');

function checkEmptyInpt() {
    const checkInput = userInput;
    if (!checkInput.value) {
        alert("Please input a value");
        return null;
    }
};


function cleanInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
};


function checkPalindrome() {
    checkEmptyInpt();
    
    let stringInput = String(userInput.value);
    let strToCheck = cleanInput(stringInput).toLowerCase();
    let i = 0;
    let j = strToCheck.length - 1;
    let res = true;

    while (i < j) {
        if (strToCheck[i] != strToCheck[j]) {
        res = false;
        break;
        }
        i++;
        j--;
    }

    if (res) {
        palindromeRes.innerHTML = `
        <p>${stringInput} is a palindrome</p>
        `;
    } else {
        palindromeRes.innerHTML = `
        <p>${stringInput} is not a palindrome</p>
        `;
    }

};

checkButton.addEventListener("click", checkPalindrome);