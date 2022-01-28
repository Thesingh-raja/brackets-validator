const inputString = document.querySelector(".text-box");
const check = document.querySelector(".check");
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")

check.addEventListener('click', () => {
    yes.style.display = "none";
    no.style.display = "none";
    const result = iterateToCheck(inputString.value);
    if (result === true) yes.style.display = "block";
    else no.style.display = "block";
})

function iterateToCheck(input) {
    let arr = [];
    for (var i = 0; i < input.length; i++) {
        if (openers(input[i])) {
            arr.push(input[i]);
        } else if (closers(input[i], arr)) {
            arr.pop();
        }
    }
    return arr.length === 0;
}

function openers(character) {
    return character === '(' || character === '{' || character === '[';
}

function closers(closing, arr) {
    var open = arr[arr.length - 1];
    return (open === "(" && closing === ")") || (open === "[" && closing === "]") || (open === "{" && closing === "}");
}