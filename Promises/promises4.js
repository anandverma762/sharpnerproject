const ff=async ()=>{
    console.log("Person1: Show Ticket")
    console.log("Person2: Show Ticket")

    const husw =new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Ticket");
            
        },3000)
    })

    // const p=await husw;
    // console.log("Wife: I have Ticket")
    // console.log("Husband: Let go in ")
    // console.log("Wife: I need a water")

    const husgw=new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Water");
            
        },4000)
    })
    // await husgw;
    // console.log("Wife: I have Water")
    // console.log("Husband: Let go in ")
    // console.log("Wife: I need a ColdDrink");

    const getColdDrinks=new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("ColdDrink");
            
        },5000)
    })

    let a;
    try{
        
        a=await getColdDrinks;
    } 
    catch(e){
        a="Sad face"
    }
    // console.log("Wife: I have coldDrink")
    // console.log("Husband: Let go in ")
    
    // console.log(`${a}   ${b}  ${c}`);
    return a;
}

ff().then((p)=>{console.log(`Person 3: Show ${p}`)});