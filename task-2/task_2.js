// DIV
const divEl = document.createElement("div");
divEl.setAttribute("id","card");
// H2
const h2El = document.createElement("h2");
h2El.textContent = "Gandalf";
// a
const aEl = document.createElement("a");
aEl.href = "#";     // or  aEl.setAttribute("href","#");
aEl.textContent = "Go to profile";


divEl.append(h2El,aEl);
document.body.appendChild(divEl);