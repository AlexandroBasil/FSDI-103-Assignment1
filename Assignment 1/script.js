// prompt 1
var name1="Alex";
var name2="Balex";
var name3="Calex";
var name4="Dalex";
var name5="Ealex";
var name6="Falex";
var name7="Galex";
var name8="Halex";
var name9="Ialex";
var name10="Jalex";
var name11="Kalex";
var name12="Lalex";
var name13="Malex";
var name14="Nalex";
var name15="Oalex";
var name16="Palex";
var name17="Qalex";
var name18="Ralex";
var name19="Salex";
var name20="Talex";

 document.write(name1+", "+name2+", "+name3+", "+name4+", "+name5+", "+name6+", "+name7+", "+name8+", "+name9+", "+name10+", "+name11+", "+name12+", "+name13+", "+name14+", "+name15+", "+name16+", "+name17+", "+name18+", "+name19+", "+name20)

// prompt 2
for (var i=0;i<=100;i+=2){
    console.log(i);
}

// prompt 3
var userName=prompt("Please enter username:")

if (userName==="Agarcia123") {
    console.log("Username Accepted")
    var password=prompt("Please enter password:")

} else {
    console.log("Invalid Entry")
}


if (password==="123456") {
    console.log("Password Accepted")
} else {
    console.log("Invalid Entry")
}