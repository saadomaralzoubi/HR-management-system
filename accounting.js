Employee.allEmployees = [];

let mainDiv = document.getElementById("main");

function Employee(employeeid, fullname, department, level, imageurl) {
  this.employeeid = employeeid;
  this.fullname = fullname;
  this.department = department;
  this.level = level;
  this.imageurl = `./assets/${employeeid}.jpg`;
  Employee.allEmployees.push(this);
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

// RanaSaleh.salary();
// for (let i = 0; i < Employee.allEmployees.length; i++) {
//   Employee.allEmployees[i].salary();
//   console.log(this.salary);
// }

let adm_employess = 0;
let Marketing_employess = 0;
let Development_employess = 0;
let Finance_employess = 0;
let Asalary = 0;
let Msalary = 0;
let Dsalary = 0;
let Fsalary = 0;
for (let i = 0; i < Employee.allEmployees.length; i++) {
  if (this.department == "Administration") {
    adm_employess++;
    Asalary = Asalary + this.salary;
  }

  if (this.department == "Marketing") {
    Marketing_employess++;
    Msalary = Msalary + this.salary;
  }

  if (this.department == "Development") {
    Development_employess++;
    Dsalary = Dsalary + this.salary;
  }

  if (this.department == "Finance") {
    Finance_employess++;
    Fsalary = Fsalary + this.salary;
  }
}
let Asalary_avg = Asalary / adm_employess;
let Msalary_avg = Msalary / Marketing_employess;
let Dsalary_avg = Dsalary / Development_employess;
let Fsalary_avg = Fsalary / Finance_employess;

Employee.prototype.renderTable = function () {
  let table = document.createElement("table");
  table.innerHTML = `<table id="hrtable"><tr><th>Department</th><th># of employees</th><th>Total Salary</th><th>Average</th></tr>
  <tr><td>Administration</td><td>${adm_employess}</td><td>${Asalary_avg}</td><td>${Asalary}</td></tr>
  <tr><td>Marketing</td><td>${Marketing_employess}</td><td>${Msalary_avg}</td><td>${Msalary}</td></tr>
  <tr><td>Development</td><td>${Development_employess}</td><td>${Dsalary_avg}</td><td>${Dsalary}</td></tr>
  <tr><td>Finance</td><td>${Finance_employess}</td><td>${Fsalary_avg}</td><td>${Fsalary}</td></tr>
  </table > `;

  mainDiv.appendChild(table);
};

function renderAll() {
  for (let i = 0; i < Employee.allEmployees.length; i++) {
    // Employee.allEmployees[i].salary();
    Employee.allEmployees[i].renderTable();
  }
}

renderAll();
