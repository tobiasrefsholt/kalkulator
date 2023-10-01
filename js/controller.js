function handleClick(input) {
    model.fields.display += '' + input;
    console.log(input);
    updateView();
}