console.log("hii, hello")

const button1 = document.getElementById("button1")
button1.addEventListener('click',()=>{
    console.log("button1 is clicked")
})

const button2 = document.getElementById("button2")
button2.addEventListener('click',()=>{
    console.log("button2 is clicked")
})

const button3 = document.getElementById("button3")
button3.addEventListener('click',()=>{
    console.log("button3 is clicked")
})
console.log("i am the end")
//js kisi ka wait nhi krta aur ise API ke dwara ye sab banaya jata 
//API ek function call hota hai mtlv call krne ke baad result milta hai 
//js single threaded hai browser multithreaded hai 
//event loop ka kaam hai ki callback me checck krte hrna ki kaun function pada hai use excute karnaa 