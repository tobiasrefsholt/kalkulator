"use strict";

window.addEventListener("load", () => {
    updateView();
})

function updateView() {
    document.getElementById('app').innerHTML = /* html */ `
        ${getCalculatorHTML()}
    `;
    addEventListenerOnNumpad();
}

function getCalculatorHTML() {
    return /* html */ `
        <div class="calculator">
            <div class="display">${model.fields.display || 0}</div>
            <div class="numpad">
                <div>%</div>
                <div>CE</div>
                <div>C</div>
                <div>⌫</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>X</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>-</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>+</div>
                <div>+/-</div>
                <div>0</div>
                <div>.</div>
                <div class="colored">=</div>
            </div>
        </div>
    `;
}

function addEventListenerOnNumpad() {
    const buttonsList = document.querySelectorAll(".numpad div");
    const buttons = [...buttonsList];
    for (let button of buttons) {
        button.addEventListener("click", (e) => {
            handleClick(button.innerHTML);
        })
    }
}