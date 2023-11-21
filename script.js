let num = document.getElementById("num");

function submit() {
    let thankYou = document.getElementById("thank-you-card");
    let input = document.getElementById("input-card");
    input.style.display = "none";
    thankYou.style.display = "flex";
}

function getValue() {
    let radio = document.querySelector('input[name="rating"]:checked');
    if (radio) {
        num.innerHTML = radio.value;
    }else{
        console.log("error");
    }
}

function combinedFunctions(){
    submit();
    getValue();
}