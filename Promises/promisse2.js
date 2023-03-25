const ff=async ()=>{
    console.log("Person1: Show Ticket")
    console.log("Person2: Show Ticket")

    const husw =new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Ticket");
            
        },3000)
    })

    const p=await husw;
    console.log("Wife: I have Ticket")
    console.log("Husband: Let go in ")
    console.log("Wife: I need a water")

    const husgw=new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Water");
            
        },4000)
    })
    await husgw;
    console.log("Wife: I have Water")
    console.log("Husband: Let go in ")
    console.log("Wife: I need a ColdDrink");

    const getColdDrinks=new Promise((res,rej)=>{
        setTimeout(()=>{
            res("ColdDrink");
            
        },5000)
    })
    await getColdDrinks;
    console.log("Wife: I have coldDrink")
    console.log("Husband: Let go in ")

    return p;
}

ff().then((p)=>{console.log(`Person 3: Show ${p}`)});