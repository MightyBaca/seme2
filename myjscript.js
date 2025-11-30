const page = location.pathname.split('/').pop();
const onHome = !page || page === 'index.html';
//circle animation
if (onHome) {
  $(function () {
    const $c  = $('#circle');
    const h   = $(window).height() - 20;
    const col = ['green', 'purple'];
    let   idx = 0;
    function bounce() {
      idx = (idx + 1) % col.length;
      $c.css('background', col[idx])
        .animate({ top: idx % 2 ? h : 0 }, 1500, 'swing', bounce);
    }
    bounce();
  });
}

/* Build navigation once DOM is ready */
if (page !== 'Zak.Inf.html') { /* skip */ } else
  document.addEventListener('DOMContentLoaded', () => {
    const nav   = document.getElementById('nav');
    const heads = document.querySelectorAll('h2[id]');
    heads.forEach(h => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href   = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      nav.appendChild(li);
    });
    const sidebar = document.getElementById('sidebar');
    document.getElementById('toggle').addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') sidebar.classList.remove('open');
    });
  });

/*Dropdown list select form */
if (page !== 'Kontakt.html') { /* skip */ } else
{
  var select = document.getElementById("Vyber_Triedy");
  var options = ["Netuším","5a", "5b", "5c", "6a", "6b +"];
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }
}


/*Form validation*/
if (page !== 'Kontakt.html') { /* skip */ } else
  function FormValid() {
    let x = document.getElementById("InName").value;
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


