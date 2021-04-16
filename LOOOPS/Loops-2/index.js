function ifLoop() {
    let question = document.getElementById("question").value;
    let right = document.getElementById("right");
    let wrong = document.getElementById("wrong");
    if(question == "12"){
      right.style.display= "block";
      wrong.style.display = "none";
    }else if (question == ""){
      alert("Here's a hint, when mutlpying exponets with the same number, you add them.")
    }else{
      right.style.display= "none";
      wrong.style.display = "block";
    }
  }
  function forLoop () {
    let number = document.getElementById("multiply").value;
    let output = document.getElementById("output");
    output.innerHTML = "";
    for (let i = 1; i <= 10; i++){
      output.innerHTML += "<br/> " + i + ") " + number + " X " + i + "=" + (number*i);
    }
  }