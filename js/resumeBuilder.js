//$("#main").append("Vamsi");
var name="Vamsi Krishna";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","Web-Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
