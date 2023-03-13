var form = document.getElementById("addForm");
var list = document.getElementById("items");
var filt=document.getElementById("filter");

form.addEventListener('submit',addit)
list.addEventListener('click',remove);
filt.addEventListener('keyup',filtertxt);

function addit(e){
    e.preventDefault();
    
    var inpt=document.getElementById("item").value

    var inpt2=document.getElementById("item1").value

    var netm=document.createElement("li");

    netm.className="list-group-item";

   

    netm.appendChild(document.createTextNode(inpt+" "+inpt2));
    var ed=document.createElement("button")
    ed.className='btn btn-light btn-sm float-right';

    ed.appendChild(document.createTextNode("Edit"))
    


    var dele=document.createElement("button")

    dele.className="btn btn-danger btn-sm float-right delete";

    dele.appendChild(document.createTextNode('X'))

    netm.appendChild(dele);
    netm.appendChild(ed);

    list.appendChild(netm)
    
    
}

function remove(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Are you Sure ?")){
            var l=e.target.parentElement;
            list.removeChild(l);
        }
    }
}

function filtertxt(e){
    var t=e.target.value.toLowerCase();
    var it=list.getElementsByTagName('li');
    Array.from(it).forEach(function(item){
        var nm=item.firstChild.textContent;
        if(nm.toLowerCase().indexOf(t)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}