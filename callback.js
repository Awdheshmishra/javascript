//zomato application

function placeorder(Callback){
    console.log("payment is in orogress")
    setTimeout(()=>{
        console.log("payement is received and order get is placed")
        Callback()
    },3000)
}

function preparingorder(Callback){
    console.log("your food prepration is started")
    setTimeout(()=>{
        console.log("your order is prepared")
        Callback()
    },3000)
}
function pickuporder(Callback){
    console.log("now your order is picked-up")
    setTimeout(()=>{
        console.log("delivery boy is on the way")
        Callback()
    },3000)
}

function deliverorder(){
    console.log("delivery boy is reached")
    setTimeout(()=>{
        console.log("take your order ---thenakyou!!")
    },3000)
}
// placeorder(preparingorder)

//callback-hell -->  ek ke andar ek callback 
placeorder(()=>{
    preparingorder(()=>{
        pickuporder(()=>{
            deliverorder()
        })
    })
})