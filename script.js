document.addEventListener("DOMContentLoaded", init);

function init() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", calculate);
}

function calculate() {
    clearError();

    const a = getNumber("a");
    const b = getNumber("b");

    if (a === null || b === null) {
        showError("Uzupełnij obie liczby.");
        return;
    }

    const operation = document.getElementById("op").value;
    const result = compute(a, b, operation);

    if (result === null) return;

    displayResult(result);
}

function getNumber(id) {
    const value = document.getElementById(id).value;
    if (value.trim() === "") return null;
    return Number(value);
}

function compute(a, b, op) {
    switch (op) {
        case "add":
        return a + b;
        case "sub":
        return a - b;
        case "mul":
        return a * b;
        case "div":
        if (b === 0) {
            showError("Błąd: dzielenie przez zero.");
            return null;
        }
        return a / b;
        default:
        showError("Nieznane działanie.");
        return null;
    }
}

function displayResult(value) {
    document.getElementById("result").innerText = format(value);
}

function format(n) {
    return Number.isInteger(n) ? n : n.toFixed(4);
}

function showError(text) {
    document.getElementById("msg").innerText = text;
}

function clearError() {
    document.getElementById("msg").innerText = "";
}
