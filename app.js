`use strict`;

let allEmployees = [];
let EmployeeDiv = document.getElementById("cards");
let btn = document.getElementById("btn");
let form = document.getElementById("form");

function Employee(employeeid, fullname, department, level, imageurl) {
  this.employeeid = employeeid;
  this.fullname = fullname;
  this.department = department;
  this.level = level;
  this.imageurl = `./assets/${employeeid}.jpg`;
  allEmployees.push(this);
}

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];

let GhaziSamer = new Employee(1000, "Ghazi Samer", department[0], level[2]);
let LanaAli = new Employee(1001, "Lana Ali", department[3], level[2]);
let TamaraAyoub = new Employee(1002, "Tamara Ayoub", department[1], level[2]);
let SafiWalid = new Employee(1003, "Safi Walid", department[0], level[1]);
let OmarZaid = new Employee(1004, "Omar Zaid", department[2], level[2]);
let RanaSaleh = new Employee(1005, "Rana Saleh", department[2], level[0]);
let HadiAhmad = new Employee(1006, "Hadi Ahmad", department[3], level[1]);

Employee.prototype.salary = function () {
  if (this.level == "Senior") {
    this.salary = parseInt(1500 + Math.random() * (2000 - 1500));
  } else if (this.level == "Mid-Senior") {
    this.salary = parseInt(1000 + Math.random() * (1500 - 1000));
  } else {
    this.salary = parseInt(500 + Math.random() * (1000 - 500));
  }
  this.salary = this.salary - this.salary * 0.075;
  //console.log(this.salary);
  return this.salary;
};

Employee.prototype.render = function () {
  let info = document.createElement("div");
  info.innerHTML =
    "<img src=" +
    this.imageurl +
    ' width="150px" height="150px"><br><p>Name: ' +
    this.fullname +
    " - ID: " +
    this.employeeid +
    "<br>  Department: " +
    this.department +
    " - Level: " +
    this.level +
    "</p>";
  EmployeeDiv.appendChild(info);
};

function addStyle(styles) {
  var css = document.createElement("style");
  css.type = "text/css";

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

var styles =
  "header {height: 150px;display: flex;background-color: rgb(211, 207, 207);justify-content: space-between;}h1 {margin-top: 20px;margin-right: 20px;color: blue;}nav {margin-top: 80px;margin-right: 50px;}a {padding-left: 200px;padding-right: 50px;color: black;text-decoration: none;}";
styles +=
  "main {display: flex;}footer {height: 30px;background-color: rgb(211, 207, 207);margin-top: 140px;text-align: center;padding-top: 25px;}.main-cont {width: 100%;display: block;position: relative;}.main-cont .form {float: left;width: 100%; margin-top: 30px;}main .form {text-align: center;}main .form h3 {margin-bottom: 30px;color: red;font-size: 20px;}main .form div {margin-bottom: 10px;}main .form div label {display: inline-block;width: 200px;}main .form div input, main .form div select {width: 300px;display: inline-table;border: 2px solid;height: 30px;padding: 0 10px;}main .form div textarea {height: 100px;}main .form div input[type='submit'] {font-weight: bold;border: 0;background: #721e72;margin-top: 15px;height: 35px;width: 60px;color: white;}";
styles +=
  "div#cards div {float: left;background: green;margin: 10px;border-radius: 25px;text-align: center;padding: 10px;width: 22%;color: #fff;}";
styles += "div#cards div img {border-radius: 100px;}";

window.onload = function () {
  addStyle(styles);
};

Employee.prototype.id = function () {
  this.employeeid = Math.floor(1000 + Math.random() * 9000);
  //console.log(this.employeeid);
};

const val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
console.log(RanaSaleh);
RanaSaleh.salary();
RanaSaleh.id();

// for (let i = 0; i < allEmployees.length; i++) {
//   console.log(allEmployees[i]);
//   allEmployees[i].salary();
//   allEmployees[i].render();
// }

for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].id();
  console.log(allEmployees[i]);
  allEmployees[i].render();
}

form.addEventListener("submit", formRelease);

function formRelease(event) {
  event.preventDefault();
  console.log(event);
  let employeeid = "";
  let fullname = event.target.fname.value;
  let department = event.target.dep.value;
  let level = event.target.level.value;
  let imageurl = event.target.image.value;
  let newEmployee = new Employee(
    employeeid,
    fullname,
    department,
    level,
    imageurl
  );
  newEmployee.id();
  newEmployee.render();
}
