function calculate(form) {
    let value = form.inputbox.value;
    const type = form.type.value;
    document.getElementById('result').innerHTML = result(value, type);
}

function result(value, type) {
    switch (type) {
        case 'sin':
            return Math.sin(value)
        case 'round':
            return Math.round(value)
        case 'cos':
            return Math.cos(value)
        case 'tan':
            return Math.tan(value)
        case 'abs':
            return Math.abs(value)
        case 'acos':
            return Math.acos(value)
        case 'cbrt':
            return Math.cbrt(value)
        case 'atan':
            return Math.atan(value)
        case 'fround':
            return Math.fround(value)
        case 'trunc':
            return Math.trunc(value)
        case 'sqrt':
            return Math.sqrt(value)
    }
}