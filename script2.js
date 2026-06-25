const newelement = document.createElement("h2")
newelement.textContent = "Strike is coming"
newelement.id = "second"
console.log(newelement)

//select element
const element  = document.getElementById("first")
element.after(newelement)
// element.before(newelement)

const newelement2 = document.createElement("h3")
newelement2.textContent = "diwali aane wali hai"
newelement2.id = "third"

// newelement2.className = "diwali"
// newelement2.className += " holi"
//adding
newelement2.classList.add("diwali")
newelement2.classList.add("holi")
//styling
newelement2.style.backgroundColor = "pink"
newelement2.style.fontSize = "20px"
newelement2.setAttribute("hello","ji")
/* -------------------------------------------------------- */
console.log(newelement2)

const element2 = document.getElementById("third")
// element2.after(newelement2)
element.before(newelement2)
console.log(newelement2.getAttribute("hello"))
/*
const list1 = document.createElement("li")
list1.textContent = "milk"

const list2 = document.createElement("li")
list2.textContent = "cake"

const list3 = document.createElement("li")
list3.textContent = "halwa"

const list4 = document.createElement("li")
list4.textContent = "paneer"

const unorederelement = document.getElementById("listing")
//operations
unorederelement.append(list1,list2)
// unorederelement.append(list2)
unorederelement.prepend(list3)
unorederelement.children[0].after(list4)
 */

const arr = ["milk", "halwa", 'paneer', "tea"]
const unorderelement = document.getElementById("listing")
const fragment = document.createDocumentFragment()

for(let food of arr){
    const list = document.createElement("li")
    list.textContent = food
    fragment.append(list)
}
 
unorderelement.append(fragment)
//removing
const s1 = document.getElementById("first")
s1.remove()