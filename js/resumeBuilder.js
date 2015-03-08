//$("#main").append("Vamsi");
var name="Vamsi Krishna";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","Web-Developer");
var skills=["html","css","java","c"];
var myBio={
	"name":formattedName,
	"role":formattedRole,
	"mobile":"12345678",
	"email":"pandu.sonu@yahoo.com",
	"twitter":"Unavailable",
	"github":"pandusonu",
	"blog":"none",
	"location":"India",
	"pic":"images/fry.jpg",
	"welcomeMsg":"WELCOME",
	"skills":skills
};
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(HTMLmobile.replace("%data%",myBio.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",myBio.email));
$("#topContacts").append(HTMLtwitter.replace("%data%",myBio.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%",myBio.github));
$("#topContacts").append(HTMLblog.replace("%data%",myBio.blog));
$("#topContacts").append(HTMLlocation.replace("%data%",myBio.location));

$("#header").append(HTMLbioPic.replace("%data%",myBio.pic));
