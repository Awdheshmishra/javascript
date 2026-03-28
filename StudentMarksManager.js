//stores student and their marks

let students = [
    { name: "Awdhesh", marks:95},
    { name: "aman", marks:34},
    {name: "karan", marks:43}
];
// console.log(students)
//add student

function addStudent(name, marks){
    students.push({name: name, marks: marks})
}
// console.log(addStudent)

//show all students

function ShowStudents(){
    students.forEach(function(student){
        console.log(student.name+ ": "+ student.marks);
        
    })
}
function findTopper() {
  let topper = students[0];

  students.forEach(function(student) {
    if (student.marks > topper.marks) {
      topper = student;
    }
  });

  console.log("Topper is " + topper.name);
}