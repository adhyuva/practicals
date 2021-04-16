function makeInput(element,target,type,id,placeholder ) {
    let div = document.getElementById(target);
    let InputElement = document.createElement(element);
    div.appendChild(InputElement);
    InputElement.setAttribute("id", id);
    InputElement.setAttribute("placeholder", placeholder);
    InputElement.setAttribute("type", type);
}
function makeBreak(target){
    let br = document.getElementById(target);
    let InputElement = document.createElement("br");
    br.appendChild(InputElement);
}
function makeButton (element,target,type,id,value,functionName) {
    let div = document.getElementById(target);
    let InputElement = document.createElement(element);
    div.appendChild(InputElement);
    InputElement.setAttribute("id", id);
    InputElement.setAttribute("value", value);
    InputElement.setAttribute("type", type);
    InputElement.setAttribute("onClick", functionName);
}
makeInput("input", "form", "number" , "family", "Members in Family");
makeBreak("form");makeBreak("form");
makeInput("input", "form", "number" , "age", "Age");
makeBreak("form");makeBreak("form");
makeInput("input", "form", "text" , "season", "Favorite Season");
makeBreak("form");makeBreak("form");
makeInput("input", "form", "text" , "fname", " First Name");
makeBreak("form");makeBreak("form");
makeInput("input", "form", "text" , "lname",  "Last Name");
makeBreak("form");makeBreak("form");
makeInput("input", "form", "email" , "email", "Email");
makeBreak("form");makeBreak("form");
makeButton("input", "form", "button", "submit", "submit", "output()");
function output() {
    let insert = document.getElementById("form");
    let Element = document.createElement("p");
    insert.appendChild(Element);
    Element.setAttribute("id", "output");
    let family = document.getElementById("family").value;
    let age = document.getElementById("age").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let season = document.getElementById("season").value;
    let confirm = document.getElementById("output");
    confirm.innerHTML= "";
    confirm.innerHTML += "You have " + family + " members in your family," +
     " you are " + age + " years old," +
     " your name is " + fname + " " + lname + "," +
     " your email is " + email + " and your favorite season is " + season + ".";
}
