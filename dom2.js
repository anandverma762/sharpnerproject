// // // // // //console.dir(document)
// // // // // //console.log(document.title)
// // // // // //console.log(document.head);
// // // // // //console.log(document.URL);
// // // // // //console.log(document.domain)
// // // // // //console.log(document.all)
// // // // // //console.log(document.all[6]);
// // // // // //document.all[6].textContent='jyjyfjh687'
// // // // // //console.log(document.all[6]);
// // // // // //console.log(document.links);
// // // // // //console.log(document.images)
// // // // // //console.log(document.target)
// // // // // //var ht=document.getElementById("main");
// // // // // // console.log(ht.textContent)

// // // // // // console.log(ht.innerText);
// // // // // //ht.textContent='hello';
// // // // // //ht.innerText='welcome';
// // // // // //console.log(ht.innerText);
// // // // // // ht.innerText="back"
// // // // // // console.log(ht.innerHTML);
// // // // // //console.log(ht.innerHTML);
// // // // // // ht.innerHTML='<h3>list</h3>'
// // // // // //console.log(ht.innerHTML);
// // // // // //var h=document.getElementById("main-header");
// // // // // //h.style.borderBottom='solid red 5px'

// // // // // // Get Element by Classanme
// // // // // //var t=document.getElementsByClassName("list-group-item")
// // // // // //console.log(t)
// // // // // //t[0].innerText="Hello";
// // // // // //t[0].style.backgroundColor="grey";

// // // // // // var r=document.getElementsByTagName("li");
// // // // // // console.log(r)

// // // // // // r[2].style.backgroundColor='green';

// // // // // // for(let x=0;x<r.length;x++){
// // // // //     // r[x].style.fontWeight='bold';
// // // // //     // r[x].style.color='red';

// // // // // // }
// // // // // // var h=document.getElementsByClassName("list-group");
// // // // // // var h1= document.createElement("li");
// // // // // // h1.textContent="Item5";
// // // // // // h.add(h1);
// // // // // // //h.innerHTML="<li class'test'> item5</li>"
// // // // // // var h3=document.getElementsByClassName("list-group-item");
// // // // // // console.log(h3)
// // // // // var l=document.getElementsByClassName("nl");
// // // // // console.log(l);
// // // // // l[0].style.fontWeight="bold"
// // // // // l[0].style.color="blue";

// // // // var t=document.getElementsByTagName("li");
// // // // console.log(typeof(t))
// // // // t[5].style.background="green"

// // // var sec=document.querySelector(".list-group-item:nth-child(2)");
// // // sec.style.background="green";
// // // var thrd=document.querySelector(".list-group-item:nth-child(3)")
// // // thrd.style.display="none";

// // var lt=document.querySelectorAll(".list-group-item")
// // //console.log(lt);
// // lt[1].style.color="green";
// // var odd=document.querySelectorAll(".list-group-item:nth-child(odd)")

// // for(var i=0;i<odd.length;i++){
// //     odd[i].style.background="green"
    
// // }

// //Traversing DOM

// // var p=document.querySelector(".list-group-item")
// // console.log(p.parentNode)
// // console.log(p.parentElement)
// // console.log(p.children)
// // console.log(p.children[0])
// // console.log(p.nextElementSibling)
// // console.log(p.previuosElementSibling)
// // console.log(p.lastChild)
// var nd=document.createElement('div');
// nd.id="hi";
// nd.className='hel'
// nd.setAttribute('title','createdbyJS')

// var txt=document.createTextNode("Hi, DOM");

// nd.appendChild(txt);
// console.log(nd);

// var con=document.querySelector("header .container")
// var ls=document.querySelector("header h1")

// con.insertBefore(nd,ls);
var nd=document.createElement('div');
nd.id="hi";
nd.className='hel'
nd.setAttribute('title','createdbyJS')

var txt=document.createTextNode("Hello,World");

nd.appendChild(txt);
console.log(nd);

var con=document.querySelector("#items")
var ls=document.querySelector("li")

con.insertBefore(nd,ls);




