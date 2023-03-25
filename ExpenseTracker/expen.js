function add(){
    
    const b=document.getElementById("1").value
    const desc=document.getElementById("2").value
    const cat=document.getElementById("3").value;

    const myb={
        b,
        desc,
        cat
    }
   
const str=JSON.stringify(myb);
const t=Date.now();
    localStorage.setItem(t,str);
    


displayItems();

// const u = document.querySelector(".list");
// let l = document.createElement("li");
// let st = myb.b + "$" + "  " + myb.desc + "  " + myb.cat + " ";
// l.textContent = st;
// l.className = "list-group-item";
// let Delete = document.createElement("input");
// Delete.type = "button";
// Delete.value = "Delete";
// Delete.className = "btn btn-danger btn-sm";
// Delete.onclick = () => {
//   localStorage.removeItem(t);
//   u.removeChild(l);
//   // displayItems();
// };
// let ed = document.createElement("input");
// ed.type = "button";
// ed.className = "btn btn-warning btn-sm mr-2";
// ed.value = "Edit";
// ed.onclick= () => {
//     localStorage.removeItem(t);
//     u.removeChild(l);
//     document.getElementById("1").value=myb.b;
//     document.getElementById("2").value=myb.desc;
//     document.getElementById("3").value=myb.cat;



// }
// l.appendChild(ed);
// l.appendChild(Delete);
// u.appendChild(l);

// displayItems()


}

window.onload = function () {
  displayItems();
};

function displayItems() {
  const u = document.querySelector(".list");
  u.innerHTML = "";
  for (let i in localStorage) {
    let item = localStorage.getItem(i);
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
      localStorage.removeItem(i);
      u.removeChild(l);
      displayItems()
    };
    let ed = document.createElement("input");
    ed.type = "button";
    ed.className = "btn btn-warning btn-sm mr-2";
    ed.value = "Edit";
    ed.onclick = () => {
      localStorage.removeItem(i);
      u.removeChild(l);
      document.getElementById("1").value = myb.b;
      document.getElementById("2").value = myb.desc;
      document.getElementById("3").value = myb.cat;
      window.onload();
    };
    l.appendChild(ed);
    l.appendChild(Delete);
    u.appendChild(l);
  }
}