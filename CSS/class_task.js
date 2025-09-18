const Aboutme = document.getElementById("Aboutme")
const mycontact = document.getElementById("mycontact")
const myskill = document.getElementById("myskill")
const About_me = document.getElementById("About_me")
const contact = document.getElementById("contact")
const skill = document.getElementById("skill")

Aboutme.onclick=function(){
    About_me.style.display="block"
    contact.style.display="none"
    skill.style.display="none"
}
mycontact.onclick=function(){
    contact.style.display="block"
    About_me.style.display="none"
    skill.style.display="none"
}
myskill.onclick=function(){
    skill.style.display="block"
    About_me.style.display="none"
    contact.style.display="none"
}