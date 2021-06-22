'use strict';


//Creating the constructor function

function Student(name, grade, course) {

  this.Studentname = name;

  this.Studentgrade = grade;

  this.course = course;

  Student.students.push(this);

}

Student.students = [];

// console.log(Student.students);



Student.prototype.saveTostorage = function () {

  localStorage.setItem('students' , JSON.stringify(Student.students));
};

//Rendering

function renderStudents() {


  let container = document.getElementById('container');

  let studentsTable = document.createElement('table');

  container.appendChild(studentsTable);

  let tableRow = document.createElement('tr');

  studentsTable.appendChild(tableRow);

  let td1 = document.createElement('td');

  let td2 = document.createElement('td');

  let td3 = document.createElement('td');

  let td4 = document.createElement('td');


  tableRow.appendChild(td1);
  tableRow.appendChild(td2);
  tableRow.appendChild(td3);
  tableRow.appendChild(td4);


  for (let i = -1; i < Student.students.length; i++) {

    if (i === -1) {

      td1.textContent = 'Student Name';
      td2.textContent = 'Student Grade';
      td3.textContent = 'Course';
      td4.textContent = 'status';


    }
    else

      td1.textContent = Student.students[i].name;
    td2.textContent = Student.students[i].grade;
    td3.textContent = Student.students[i].course;
    td4.textContent=Student.students[i].status;


  }

}

//making the form

document.getElementById('form').addEventListener('submit', addStudent());

function addStudent(event){

  //   event.preventDefault();

  let name= document.getElementById('Student Name').value;

  let course= document.getElementById('course').value;

  let grade=random(0,100);

  let newStudent =new Student(name, grade, course);

  newStudent.saveTostorage();

  renderStudents();

}

function getStudents(){

  let studentsArr= JSON.parse(localStorage.getItem('students'));

  for (let i in studentsArr) {

    new Student( studentsArr[i].name);
  }

  renderStudents();

}

getStudents();



function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


