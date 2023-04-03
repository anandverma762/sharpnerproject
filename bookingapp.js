var f=0;
function signup() {
    
    let Name = document.getElementById("1").value;
    let Email = document.getElementById("2").value;
    let Phone = document.getElementById("3").value;
    let date = document.getElementById("4").value;
    let t = document.getElementById("5").value;
    // console.log(Name);
    // console.log(Email);
    // console.log(Phone);
    // console.log(date);
    // console.log(t);
    const user = { name: Name, email: Email, phone: Phone, Date: date, Time: t };
    
    axios.post('https://crudcrud.com/api/f65dd9bbf0fc48f69d51a462af1517e4/reg',user).then(m=>console.log("Sent"));
    //const userstr = JSON.stringify(user);
    //localStorage.setItem(Email, userstr);
    // localStorage.setItem('Name',Name)
    // localStorage.setItem('Email',Email)
    // localStorage.setItem('Phone',Phone)
    // localStorage.setItem('Date',date)
    // localStorage.setItem('Time',t)
   
   
      
        const r = document.querySelector(".show");
        const ct = document.createElement("li");
        let str = user.name + "-" + user.email + "-" + user.phone + " ";
        //console.log(str);
        ct.textContent = str;
        // let del = document.createElement("input");
        // del.type = "button";
        // del.value = "Delete";
        // del.onclick = () => {
        //     localStorage.removeItem(m.email);
        //     r.removeChild(ct);
        // }
        // let ed = document.createElement("input");
        // ed.type = 'button';
        // ed.value = 'Edit';
        // ed.onclick = () => {
        //     localStorage.removeItem(m.email);
        //     r.removeChild(ct);
        //     document.getElementById("1").value =m.name
        //     document.getElementById("2").value=m.email
        //     document.getElementById("3").value=m.phone
        //     document.getElementById("4").value=m.Date
        //     document.getElementById("5").value=m.Time
      
        // }
        // ct.appendChild(ed);
        // ct.appendChild(del);
        r.appendChild(ct);
   
        
      
    
    // function showOutput(res) {
    //     document.getElementById('show').innerHTML = `
        
      
    //     <div class="card mt-3">
    //       <div class="card-header">
    //         Data
    //       </div>
    //       <div class="card-body">
    //         <pre>${JSON.stringify(res.data)}</pre>
    //       </div>
    //     </div>
      
       
    //   `;
    //   }
    
}


function show(mr){
  mr.forEach(m => { 
  const r = document.querySelector(".show");
  const ct = document.createElement("li");
  let str = m.name + "-" + m.email + "-" + m.phone + " ";
  //console.log(str);
  ct.textContent = str;
  // let del = document.createElement("input");
  // del.type = "button";
  // del.value = "Delete";
  // del.onclick = () => {
  //     localStorage.removeItem(m.email);
  //     r.removeChild(ct);
  // }
  // let ed = document.createElement("input");
  // ed.type = 'button';
  // ed.value = 'Edit';
  // ed.onclick = () => {
  //     localStorage.removeItem(m.email);
  //     r.removeChild(ct);
  //     document.getElementById("1").value =m.name
  //     document.getElementById("2").value=m.email
  //     document.getElementById("3").value=m.phone
  //     document.getElementById("4").value=m.Date
  //     document.getElementById("5").value=m.Time

  // }
  // ct.appendChild(ed);
  // ct.appendChild(del);
  r.appendChild(ct);
})
}

if(f===0){
  
  window.onload = function () {
    axios.get('https://crudcrud.com/api/f65dd9bbf0fc48f69d51a462af1517e4/reg').then(mess=>{
      show(mess.data)});
      
    };
  }
  f=0;