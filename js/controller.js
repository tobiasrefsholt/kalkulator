"use strict";

function handleClick(input) {
    switch (input) {
        case "=":
            equal();
            break;
        case "⌫":
            let length = model.fields.display.length;
            console.log(length);    
            model.fields.display = model.fields.display.substring(0, length-1);
            model.fields.calculation = model.fields.calculation.substring(0, length-1);
            break;
        case "x":
            model.fields.display += input;
            model.fields.calculation += "*";
            break;
        case "C":
            model.fields.display = '';
            model.fields.calculation = '';
            model.app.display = '';
            model.app.calculation = '';
            break;
        case "CE":
            model.fields.display = model.app.display;
            model.fields.calculation = model.app.calculation;
            break;
        case "%":
            break;
        case "+/-":
            equal();
            model.fields.calculation *= (-1);
            equal();
            break;
        default:
            model.fields.display += '' + input;
            model.fields.calculation += '' + input;
    }

    updateView();
}

function equal() {
    const regex = new RegExp("([0-9+*/()])");
    if (!regex.test(model.fields.calculation)) {
        model.fields.calculation = '';
        model.fields.display = '';
        return;
    }
    model.fields.calculation = '' + eval(model.fields.calculation);
    model.app.calculation = '' + model.fields.calculation;
    model.app.display = '' + eval(model.app.calculation);
    model.fields.display = '' + eval(model.app.calculation);
}
