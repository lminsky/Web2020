let button = document.getElementById("submitButton");
button.addEventListener("click", getWords);


function getWords() {
  var inputs = document.getElementsByTagName("input");
  for(i in inputs) {
    if(inputs[i].value == "") {
      return alert("Make sure you fill out every field");
    }
  }

  document.getElementById("word0").innerHTML = document.getElementById("word0Entry").value;
  document.getElementById("word1").innerHTML = document.getElementById("word1Entry").value;
  document.getElementById("word2").innerHTML = document.getElementById("word2Entry").value;
  document.getElementById("word3").innerHTML = document.getElementById("word3Entry").value;
  document.getElementById("word4").innerHTML = document.getElementById("word4Entry").value;
  document.getElementById("word5").innerHTML = document.getElementById("word5Entry").value;
  document.getElementById("word6").innerHTML = document.getElementById("word6Entry").value;
  document.getElementById("word7").innerHTML = document.getElementById("word7Entry").value;
  document.getElementById("word8").innerHTML = document.getElementById("word8Entry").value;
  document.getElementById("word9").innerHTML = document.getElementById("word9Entry").value;
  document.getElementById("word10").innerHTML = document.getElementById("word10Entry").value;
  document.getElementById("word11").innerHTML = document.getElementById("word11Entry").value;

  document.getElementById("results").style.display = "block";
}