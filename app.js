`use strict`;

function employee(employeeid, fullname, department, level) {
  this.employeeid = employeeid;
  this.fullname = fullname;
  this.department = department;
  this.level = level;
  this.imageurl = `./images/${employeeid}.png`;
}

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];

let GhaziSamer = new employee(1000, "Ghazi Samer", department[0], level[2]);
let LanaAli = new employee(1002, "Lana Ali", department[3], level[2]);
let TamaraAyoub = new employee(1002, "Tamara Ayoub", department[1], level[2]);
let SafiWalid = new employee(1003, "Safi Walid", department[0], level[1]);
let OmarZaid = new employee(1004, "Omar Zaid", department[2], level[2]);
let RanaSaleh = new employee(1005, "Rana Saleh", department[2], level[0]);
let HadiAhmad = new employee(1006, "Hadi Ahmad", department[3], level[1]);

employee.prototype.salary = function () {
  if (this.level == "Senior") {
    this.salary = parseInt(1500 + Math.random() * (2000 - 1500));
  } else if (this.level == "Mid-Senior") {
    this.salary = parseInt(1000 + Math.random() * (1500 - 1000));
  } else {
    this.salary = parseInt(500 + Math.random() * (1000 - 500));
  }
  console.log(this.salary);
  return this, this.salary;
};

employee.prototype.render = function () {
  document.write(`<p>The employee full name is : ${this.fullname}</p>`);
  document.write(`<p>The employee salary is : ${this.salary} </p>`);
};

console.log(RanaSaleh);
RanaSaleh.salary();
RanaSaleh.render();
