function calculateScore(){
    const reach = document.getElementById("reach").value;
    const impact = document.getElementById("impact").value;
    const confidence = document.getElementById("confidence").value;
    const effort = document.getElementById("effort").value;
    displayScore((reach * impact * confidence)/ effort);
}

function displayScore(score){
    document.getElementById("scoreDisplay").innerHTML = score;
}