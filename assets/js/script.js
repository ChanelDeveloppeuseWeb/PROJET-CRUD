function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById("email").value;
  if (name == "") {
    alert("name is required");
    return false;
  }
 if (age  >=4 && age <= 8) {
  alert("l age ne doit pas etre compris entre 4 et 8");
  return false;
 }
 
  if (adress == "") {
    alert("adress is required");
    return false;
  }
  if (email == "") {
    alert("email is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid email adress");
    return false;
  }
  return true;
}

function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  var html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.adress + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td> <button onclick ="deleteData (' +
      index +
      ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
      index +
      ')"class = "btn btn-warning m-2">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if (validateForm()== true){
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var adress = document.getElementById("adress").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
          } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
          }

          peopleList.push({
            name : name,
            age: age,
            adress : adress,
            email: email,
        });
        
localStorage.setItem("peopleList", JSON.stringify(peopleList));
showData();
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("adress").value = "";
document.getElementById("email").value = "";
}
}

// function delete
function deleteData(index){
  var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
      } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
      }

      peopleList.splice(index,1);
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
}

  function updateData(index){
  document.getElementById("submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("age").value = peopleList[index].age;
  document.getElementById("adress").value = peopleList[index].adress;
  document.getElementById("email").value = peopleList[index].email;

  document.querySelector("#Update").onclick = function(){
    if (validateForm()==true){
      peopleList[index].name = document.getElementById("name").value;
      peopleList[index].age = document.getElementById("age").value;
      peopleList[index].adress = document.getElementById("adress").value;
      peopleList[index].email = document.getElementById("email").value;

      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("adress").value = "";
      document.getElementById("email").value = "";

      document.getElementById("submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  }


}
