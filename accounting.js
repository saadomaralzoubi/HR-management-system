`use strict`;

let EmployeE = localStorage.getItem("employees");
let NewArray = JSON.parse(EmployeE);

let mainDiv = document.getElementById("employeeTable");

// Employee.prototype.salary = function () {
//   if (this.level == "Senior") {
//     this.salary = parseInt(1500 + Math.random() * (2000 - 1500));
//   } else if (this.level == "Mid-Senior") {
//     this.salary = parseInt(1000 + Math.random() * (1500 - 1000));
//   } else {
//     this.salary = parseInt(500 + Math.random() * (1000 - 500));
//   }
//   this.salary = this.salary - this.salary * 0.075;
//   //console.log(this.salary);
//   return this.salary;
// };

// function Employee(employeeid, fullname, department, level, imageurl) {
//   this.employeeid = employeeid;
//   this.fullname = fullname;
//   this.department = department;
//   this.level = level;
//   this.imageurl = `./assets/${employeeid}.jpg`;
//   this.employeeSalary = this.salary();
//   Employee.allEmployees.push(this);
// }

// let department = ["Administration", "Marketing", "Development", "Finance"];
// let level = ["Junior", "Mid-Senior", "Senior"];

// let GhaziSamer;
// let LanaAli;
// let TamaraAyoub;
// let SafiWalid;
// let OmarZaid;
// let RanaSaleh;
// let HadiAhmad;

// GhaziSamer = new Employee(1000, "Ghazi Samer", department[0], level[2]);
// LanaAli = new Employee(1001, "Lana Ali", department[3], level[2]);
// TamaraAyoub = new Employee(1002, "Tamara Ayoub", department[1], level[2]);
// SafiWalid = new Employee(1003, "Safi Walid", department[0], level[1]);
// OmarZaid = new Employee(1004, "Omar Zaid", department[2], level[2]);
// RanaSaleh = new Employee(1005, "Rana Saleh", department[2], level[0]);
// HadiAhmad = new Employee(1006, "Hadi Ahmad", department[3], level[1]);

let adm_employess = 0;
let Marketing_employess = 0;
let Development_employess = 0;
let Finance_employess = 0;
let totalEmployee = NewArray.length;
let Asalary = 0;
let Msalary = 0;
let Dsalary = 0;
let Fsalary = 0;
for (let i = 0; i < NewArray.length; i++) {
  if (NewArray[i].department == "Administration") {
    adm_employess++;
    Asalary = Math.round(Asalary + NewArray[i].employeeSalary);
  }

  if (NewArray[i].department == "Marketing") {
    Marketing_employess++;
    Msalary = Math.round(Msalary + NewArray[i].employeeSalary);
  }

  if (NewArray[i].department == "Development") {
    Development_employess++;
    Dsalary = Math.round(Dsalary + NewArray[i].employeeSalary);
  }

  if (NewArray[i].department == "Finance") {
    Finance_employess++;
    Fsalary = Math.round(Fsalary + NewArray[i].employeeSalary);
  }
}

let Asalary_avg = Asalary / adm_employess;
let Msalary_avg = Msalary / Marketing_employess;
let Dsalary_avg = Dsalary / Development_employess;
let Fsalary_avg = Fsalary / Finance_employess;
let total_salary = Asalary + Msalary + Dsalary + Fsalary;
let total_avg = Asalary_avg + Msalary_avg + Dsalary_avg + Fsalary_avg;

function renderTable() {
  let table = document.createElement("table");
  table.innerHTML = `<table id="hrtable"><tr><th>Department</th><th># of employees</th><th>Total Salary</th><th>Average</th></tr>
  <tr><td>Administration</td><td>${adm_employess}</td><td>${Asalary}</td><td>${Asalary_avg}</td></tr>
  <tr><td>Marketing</td><td>${Marketing_employess}</td><td>${Msalary}</td><td>${Msalary_avg}</td></tr>
  <tr><td>Development</td><td>${Development_employess}</td><td>${Dsalary}</td><td>${Dsalary_avg}</td></tr>
  <tr><td>Finance</td><td>${Finance_employess}</td><td>${Fsalary}</td><td>${Fsalary_avg}</td></tr>
  <tr><td>Total </td><td>${totalEmployee}</td><td>${total_salary}</td><td>${total_avg}</td></tr>
  </table > `;

  mainDiv.appendChild(table);
}

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
styles +=
  "div#employeeTable {text-align: center;}div#employeeTable table {border: 1px solid #000;width: 1000px;margin-top: 35px;}div#employeeTable table th {padding: 25px;background: #00dcff;}div#employeeTable table th, div#employeeTable table td {border: 1px solid #000;}";
window.onload = function () {
  addStyle(styles);
};

renderTable();
