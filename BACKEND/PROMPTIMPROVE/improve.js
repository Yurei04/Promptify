function improvePrompt() {
    const textPrompt = document.getElementById("input-text").value;
    const convertion = textPrompt.split(/[,.!?;]/).map(convertion => convertion.trim()).filter(convertion => convertion);
    let list = "<ul>";

    convertion.forEach(converted => {
        list += `<li>${converted}</li>`
    });

    list += `</ul>`
}

function createPrompt() {

}

function rulesPrompt() {

}