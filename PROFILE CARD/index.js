function disp() {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let course = document.getElementById("course").value;
    let sections = document.getElementById("section").value;
    let lName = "Last Name: " + lastName;
    let fName = "First Name: " + firstName;
    let crs = "Course: " + course;
    let sc = "Section: " + sections;
        document.getElementById("lName").textContent = lName;
        document.getElementById("fName").textContent = fName;
        document.getElementById("crs").textContent = crs;
        document.getElementById("sc").textContent = sc;
        document.getElementById("info").style.display = "";
  }