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
    const userstr = JSON.stringify(user);
    localStorage.setItem(Email, userstr);
    // localStorage.setItem('Name',Name)
    // localStorage.setItem('Email',Email)
    // localStorage.setItem('Phone',Phone)
    // localStorage.setItem('Date',date)
    // localStorage.setItem('Time',t)
    const r = document.querySelector(".show");
    const ct = document.createElement("li");

    let str = user.name + "-" + user.email + "-" + user.phone + " ";
    ct.textContent = str;
    let del = document.createElement("input");
    del.type = "button";
    del.value = "Delete";
    del.onclick = () => {
        localStorage.removeItem(user.email);
        r.removeChild(ct);
    }
    let ed = document.createElement("input");
    ed.type = 'button';
    ed.value = 'Edit';
    ed.onclick = () => {
        localStorage.removeItem(user.email);
        r.removeChild(ct);
        document.getElementById("1").value =user.name
        document.getElementById("2").value=user.email
        document.getElementById("3").value=user.phone
        document.getElementById("4").value=user.Date
        document.getElementById("5").value=user.Time

    }
    ct.appendChild(ed);
    ct.appendChild(del);
    r.appendChild(ct);
}