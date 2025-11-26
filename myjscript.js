/* Build navigation once DOM is ready */
document.addEventListener('DOMContentLoaded', () => {
  const nav   = document.getElementById('nav');
  const heads = document.querySelectorAll('h2[id]'); // ← change selector if needed

  heads.forEach(h => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href   = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    nav.appendChild(li);
  });

  /* open / close sidebar */
  const sidebar = document.getElementById('sidebar');
  document.getElementById('toggle').addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  /* optional: close sidebar after picking a link (remove if you want it to stay open) */
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') sidebar.classList.remove('open');
  });
});

/*Dropdown list select form */
var select = document.getElementById("Vyber_Triedy");
var options = ["Netuším","5a", "5b", "5c", "6a", "6b +"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}


/*Form validation*/
function FormValid() {
  // Get the value of the input field with ID: InName
  let x = document.getElementById("InName").value;
  // If x is empty
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let MF=/\S+@\S+\.\S+/;
  let y=document.getElementById("InMail").value;
  if(!(MF.test(y))){
    alert("Please fill out email with correct form: 'example@example.ex'");
    return false;
  }
  let z = document.getElementById("Mess").value;
  if (z == "") {
    alert("Please type in a message");
    return false;
  }
}