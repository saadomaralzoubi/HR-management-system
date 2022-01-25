`use strict`;

let allEmployees = [];

function Employee(employeeid, fullname, department, level) {
  this.employeeid = employeeid;
  this.fullname = fullname;
  this.department = department;
  this.level = level;
  this.imageurl = `./images/${employeeid}.png`;
  allEmployees.push(this);
}

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];

let GhaziSamer = new Employee(1000, "Ghazi Samer", department[0], level[2]);
let LanaAli = new Employee(1002, "Lana Ali", department[3], level[2]);
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
  console.log(this.salary);
  return this.salary;
};

Employee.prototype.render = function () {
  document.write(`<p>The Employee full name is : ${this.fullname}</p>`);
  document.write(`<p>The Employee salary is : ${this.salary} </p>`);
};

// console.log(RanaSaleh);
// RanaSaleh.salary();
// RanaSaleh.render();

for (let i = 0; i < allEmployees.length; i++) {
  console.log(allEmployees[i]);
  allEmployees[i].salary();
  allEmployees[i].render();
}
