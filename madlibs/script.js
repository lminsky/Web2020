let button = document.getElementById("submitButton");
button.addEventListener("click", getWords);


function getWords() {
  for(let i = 0; i < 12; i = i + 1) {
    document.getElementById("word" + i).innerHTML = document.getElementById("word" + i + "Entry").value;
  }
  var spans = document.getElementsByTagName("span");
  var inputs = document.getElementsByTagName("input");
  console.log(spans);
  console.log(inputs);
  document.getElementById("results").style.display = "block";
}