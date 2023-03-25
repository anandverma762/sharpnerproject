

let posts=[];
let lastActivitytime=new Date();

function updateLastUserActivityTime() {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            lastActivitytime=new Date()
            res();
        },1000)
    })
}

function createPost(post){
    return new Promise((res,rej)=>{
        posts.push(post);
        res();
    })
}

function deletePost(){
    return new Promise((res,rej)=>{
        posts.pop();
        lastActivitytime=new Date();
        res();
    })
}

function show(){
    posts.forEach((post)=>{
        console.log(post);
    })

    console.log(lastActivitytime);
    lastActivitytime=new Date();
}

Promise.all([updateLastUserActivityTime(),createPost("post1"),createPost("Post2")]).then(()=>{
    show();
    deletePost().then(()=>{
        console.log("After Post Deletion"+lastActivitytime);
        Promise.all([updateLastUserActivityTime(),createPost("Post3"),createPost("Post4")]).then()
    })
})