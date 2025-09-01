function convert() {
    const str = document.getElementById("input").value.trim();
    const checkedInput = document.querySelector('input[name="format"]:checked');
    const divRes = document.querySelector("#result");
    let res = "";

    if (!checkedInput || !str) {
        divRes.textContent = "Incorrrect parameters";
        // divRes.style.color = 'red'
        window.alert("Incorrect input or choice");
        return;
    }

    const inputChoices = {
        binary: 2,
        octal: 8,
        decimal: 10,
        hex: 16,
    };
    const choice = inputChoices[checkedInput.value];

    for (let i = 0; i < str.length; i++) {
        let type = str.charCodeAt(i).toString(choice);

        if (choice === 2) {
            type = type.padStart(8, "0");
        } else if (choice === 8 || choice === 10) {
            type = type.padStart(3, "0");
        } else if (choice === 16) {
            type = type.padStart(2, "0");
        }

        res += type + " ";
    }

    console.log(res);
    divRes.textContent = res;
}
