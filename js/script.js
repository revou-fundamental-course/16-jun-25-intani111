console.log("Javascript is working!");

function greet() {
const WelcomeSpeech = document.getElementById("welcome-speech");
console.log(WelcomeSpeech);
WelcomeSpeech.innerHTML = "Welcome to the Javascript recap!"
}

function calcluas() {
    // get the value of alat and tinggi from the input fields
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    // check if both fields are filled
    console.log(alas, tinggi);
    if (alas != '' && tinggi != ''){
        // if both fields are filled
        console.log('Calculating area..');
        // calculate the area
    }
    else{alert("please fill both fields")}
}
