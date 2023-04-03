function add() {
    const b = document.getElementById("1").value;
    const desc = document.getElementById("2").value;
    const cat = document.getElementById("3").value;
  
    const myb = {
      b,
      desc,
      cat
    };
  
    const str = JSON.stringify(myb);
    let key;
  
    if (localStorage.length === 0) {
      key = 1;
    } else {
      key = parseInt(localStorage.key(localStorage.length - 1)) + 1;
    }
  
    localStorage.setItem(key.toString(), str);
    myb.key = key.toString();
  
    const u = document.querySelector(".list");
    let l = document.createElement("li");
    let st = myb.b + "$" + "  " + myb.desc + "  " + myb.cat + " ";
    l.textContent = st;
    l.className = "list-group-item";
    let Delete = document.createElement("input");
    Delete.type = "button";
    Delete.value = "Delete";
    Delete.className = "btn btn-danger btn-sm";
    Delete.onclick = () => {
      localStorage.removeItem(myb.key);
      u.removeChild(l);
    };
    let ed = document.createElement("input");
    ed.type = "button";
    ed.className = "btn btn-warning btn-sm mr-2";
    ed.value = "Edit";
    l.appendChild(ed);
    l.appendChild(Delete);
    u.appendChild(l);
  }
  
  function displayItems() {
    const u = document.querySelector(".list");
    for (let i = 0; i < localStorage.length; i++) {
      let item = localStorage.getItem(localStorage.key(i));
      let myb = JSON.parse(item);
      let l = document.createElement("li");
      let st = myb.b + "$" + "  " + myb.desc + "  " + myb.cat + " ";
      l.textContent = st;
      l.className = "list-group-item";
      let Delete = document.createElement("input");
      Delete.type = "button";
      Delete.value = "Delete";
      Delete.className = "btn btn-danger btn-sm";
      Delete.onclick = () => {
        localStorage.removeItem(myb.key);
        u.removeChild(l);
      };
      let ed = document.createElement("input");
      ed.type = "button";
      ed.className = "btn btn-warning btn-sm mr-2";
      ed.value = "Edit";
      l.appendChild(ed);
      l.appendChild(Delete);
      u.appendChild(l);
    }
  }
  
  displayItems();
  