let output = document.getElementById("text")
function display(num){
  output.value += num;
}
function Delete(){
  output.value= output.value.slice(0,-1);
}
function message(){
 alert("You cannot establish the connection at this time.");
}