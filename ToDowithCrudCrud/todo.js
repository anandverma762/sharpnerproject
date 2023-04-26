function sent() {
    let tme = document.getElementById("1").value;
    let desc = document.getElementById("2").value;

    const mess = { tme, desc };

    axios.post('https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme', mess).then(m => { console.log("Sent") });
    const m = document.querySelector(".rem");
    const ct = document.createElement("li");
    let str = mess.tme + " " + mess.desc + " ";
    ct.textContent = str;
    let del = document.createElement("button");
    del.className = "btn-sm btn-danger m-2"; // Add appropriate class for tick icon styling
    del.innerHTML = "&#10005";
    // del.onclick=()=>{
    //     axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then()
    //     axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/dne/${mess._id}`).then()
    //     m.removeChild(ct)
    // }

    let dd = document.createElement("button")

    dd.className = "btn-sm btn-success m-2";
    // let s=document.createElement("span");
    // s.className="glyphicon glyphicon-ok";
    // dd.appendChild(s);
    dd.innerHTML = "&#10004"

    // dd.onclick=()=>{
    //     axios.get(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then(mes=>{
    //         let tme=mes.data.tme;
    //         let desc=mes.data.desc;

    //         const newm={ tme,desc}
    //     axios.post('https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/dne',newm).then()

    //     })
    //     axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then()
    //     m.removeChild(ct);

    // }

    ct.appendChild(dd);

    ct.appendChild(del);
    m.appendChild(ct);


}


function show(res, r) {
    res.forEach(mess => {

        let m
        if (r === 0) {
            m = document.querySelector(".rem");

        } else {

            m = document.querySelector(".dn");
        }

        const ct = document.createElement("li");
        let str = mess.tme + " " + mess.desc + " ";
        ct.textContent = str;
        let del = document.createElement("button");
        del.className = "btn-sm btn-danger m-2"; // Add appropriate class for tick icon styling
        del.innerHTML = "&#10005";
        del.onclick = () => {
           

                // axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/dne/${mess._id}`).then()
          

                axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then()
            


            m.removeChild(ct)
        }
        if (r !== 1) {
            let dd = document.createElement("button");
            dd.className = "btn-sm btn-success m-2"; // Add appropriate class for tick icon styling
            dd.innerHTML = "&#10004;";

            dd.onclick = () => {
                axios.get(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then(mes => {
                    let tme = mes.data.tme;
                    let desc = mes.data.desc;
                    const newm = { tme, desc }
                    axios.post('https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/dne', newm).then()
                    const m = document.querySelector(".dn");
                    const ct = document.createElement("li");
                    let str = tme + " " + desc + " ";
                    ct.textContent = str;
                    let del = document.createElement("button");
                    del.className="dne";
                    del.className = "btn-sm btn-danger m-2"; // Add appropriate class for tick icon styling
                    del.innerHTML = "&#10005";
                    // del.onclick = () => {
                    //     // axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then()
                    //     axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/dne/${mess._id}`).then()
                    //     m.removeChild(ct)
                    // }
                    ct.appendChild(del);
                    m.appendChild(ct);


                })
                axios.delete(`https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme/${mess._id}`).then()
                m.removeChild(ct);

            }

            ct.appendChild(dd);
        }
        ct.appendChild(del);
        m.appendChild(ct);

    })

}
window.onload = function () {
    axios.get('https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/tme').then(mes => { show(mes.data, 0) })
    axios.get('https://crudcrud.com/api/206401ddb7d74a7aa0f7a0993093875d/dne').then(mes => { show(mes.data, 1) })
}

