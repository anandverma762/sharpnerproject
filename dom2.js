//console.dir(document)
//console.log(document.title)
//console.log(document.head);
//console.log(document.URL);
//console.log(document.domain)
//console.log(document.all)
//console.log(document.all[6]);
//document.all[6].textContent='jyjyfjh687'
//console.log(document.all[6]);
//console.log(document.links);
//console.log(document.images)
//console.log(document.target)
//var ht=document.getElementById("main");
// console.log(ht.textContent)

// console.log(ht.innerText);
//ht.textContent='hello';
//ht.innerText='welcome';
//console.log(ht.innerText);
// ht.innerText="back"
// console.log(ht.innerHTML);
//console.log(ht.innerHTML);
// ht.innerHTML='<h3>list</h3>'
//console.log(ht.innerHTML);
//var h=document.getElementById("main-header");
//h.style.borderBottom='solid red 5px'

// Get Element by Classanme
//var t=document.getElementsByClassName("list-group-item")
//console.log(t)
//t[0].innerText="Hello";
//t[0].style.backgroundColor="grey";

var r=document.getElementsByTagName("li");
console.log(r)

r[2].style.backgroundColor='green';

for(let x=0;x<r.length;x++){
    r[x].style.fontWeight='bold';
    r[x].style.color='red';

}




