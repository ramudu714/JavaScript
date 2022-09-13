
console.log("hi");

var inputBox = document.getElementById('chatinput');

inputBox.onkeyup = function () {


    let txtOrig = inputBox.value;

    let txtFinal = txtOrig.replace(/[^a-zA-Z0-9 ]/g, "");

    console.log(txtOrig);

    console.log(txtFinal);

    document.getElementById('printchatbox').innerHTML = txtFinal;
}