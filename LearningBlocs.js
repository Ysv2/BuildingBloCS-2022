function login() {
    document.getElementById("popup-1").classList.toggle("active");
}
function logout() {
	alert("Thank you and goodbye. Have a good day ahead!")
	location.replace("./LearningBlocs_login.html")
	
}
function entry() {
	alert("Welcome")
	location.replace("./LearningBlocs_dashboard.html")
}
function opensubject(evt, subjectName) {
    // Declare all variables
    var i, sidenav_content, sidenav_links;
  
    // Get all elements with class="tabcontent" and hide them
    sidenav_content = document.getElementsByClassName("sidenav_content");
    //default_content = document.getElementsByIdName("defaultOpen");
    for (i = 0; i < sidenav_content.length; i++) {
        sidenav_content[i].style.display = "none";
    }
    
    // Get all elements with class="sidenavlinks" and remove the class "active"
    tablinks = document.getElementsByClassName("sidenavlinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(subjectName).style.display = "block";
    evt.currentTarget.className += " active";
}