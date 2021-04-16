function ifLoopFunction () {
    let favColor = document.getElementById("favColor").value;
    let ifContent = document.getElementById("ifLoopContent");
    if(favColor == "green"){
      ifContent.innerHTML = "  <font color='green'> FavColor ="+ favColor + "</font>";
    }else if (favColor == "red"){
       ifContent.innerHTML = "  <font color='red'> FavColor = "+ favColor + "</font>";
    }else if (favColor == "orange"){
      ifContent.innerHTML = "  <font color='orange'> FavColor ="+ favColor + "</font>";
    }else if (favColor == "pink"){
      ifContent.innerHTML = "  <font color='pink'> FavColor ="+ favColor + "</font>";
    }else if (favColor == "purple"){
      ifContent.innerHTML = "  <font color='purple'> FavColor ="+ favColor + "</font>";
    }else if (favColor == "yellow"){
      ifContent.innerHTML = "  <font color='yellow'> FavColor ="+ favColor + "</font>";
    }else if (favColor == "blue"){
      ifContent.innerHTML = "  <font color='blue'> FavColor ="+ favColor + "</font>";
    }else{
      ifContent.innerHTML = "  <font color='gray'>"+ "If did not type green, red, orange, yellow, pink, purple or blue, that's not valid." + "</font>";
    }
  }
  function forLoop() {
    let number = document.getElementById("repeat").value;
    let fLoop = document.getElementById("forLoopContent");
    fLoop.innerHTML = "";
    for(let i = 1; i <= number; i++ ){
      fLoop.innerHTML += "<br/>" + i ; 
    }
  }
  function code() {
    let html = document.getElementById("html").value;
    let output = document.getElementById("output");
    output.innerHTML = html;
  }
  function check () {
    // varibles for question
    let question1 = document.getElementById("question1").value;
    let question2 = document.getElementById("question2").value;
    let question3 = document.getElementById("question3").value;
    let question4 = document.getElementById("question4").value;
    let question5 = document.getElementById("question5").value;
    let question6 = document.getElementById("question6").value;
    let question7 = document.getElementById("question7").value;
    let question8 = document.getElementById("question8").value;
    let question9 = document.getElementById("question9").value;
    let question10 = document.getElementById("question10").value;
    // score
    let score = 0;
    let output = document.getElementById("score");
    // add it up!
    if (question1 == "4"){
      score += 1;
      }
    if (question2 == "9"){
      score += 1;
      }
      if (question3 == "16"){
      score += 1;
      }
      if (question4 == "25"){
      score += 1;
      }
      if (question5 == "36"){
      score += 1;
      }
      if (question6 == "49"){
      score += 1;
      }
      if (question7 == "64"){
      score += 1;
      }
      if (question8 == "81"){
      score += 1;
      }
      if (question9 == "100"){
      score += 1;
      }
      if (question10 == "1210000"){
      score += 1;
      }
      output.innerHTML = "Score:" + score + "/10";
      if (score == 10){
        output.innerHTML += " <br/> Awesome! You know your facts!  <br/> <img src='fireworks.gif'>";
      }else if (score >= 8){
        output.innerHTML += " <br/> You got some stuff!";
      }else if (score >= 6){
        output.innerHTML += " <br/> You need a bit more pratice.";
      }else{
        output.innerHTML += " <br/> You do not know square roots. <br/> <img src='wrong.gif'>";
      }
      
  }