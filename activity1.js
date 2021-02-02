var score = 0;
function update(){
score = score + 1;
document.getElementById("score_display").innerHTML = score;
}
function save(){
localStorage.setItem("Score",score);
}
function next(){
window.location = "activity2.html";
}