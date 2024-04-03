//  selcting popup box  popup overlay


var popupoverlay = document.querySelector(".popup-overlay")
var poppupbox = document.querySelector(".popup-box")
var addpopupbutton= document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    poppupbox.style.display="block"
})


// selecting cancel button


var cancelpopup=document.getElementById("cancel-popup")


cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    poppupbox.style.display="none"

})
 
// select container , add-book,book-title-input,book-author-input,book-description-input,

var container =document.querySelector(".container")
var addbook =document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-descriprion-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var creatediv = document.createElement("div")
    creatediv.setAttribute("class","book-container")
    creatediv.innerHTML=`<h2> ${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebtn(event)">Delete</button>`

    container.append(creatediv)
    popupoverlay.style.display="none"
    poppupbox.style.display="none"


})



function deletebtn(event){
    event.target.parentElement.remove()
}