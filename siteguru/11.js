const students = [
    {
        name: 'Asha',
        subjects: [
            { subject: 'Math', marks: 80 },
            { subject: 'Science', marks: 90 }
        ]
    },
    {
        name: 'Ravi',
        subjects: [
            { subject: 'Math', marks: 60 },
            { subject: 'Science', marks: 70 }
        ]
    },
    {
        name: 'Neha',
        subjects: [
            { subject: 'Math', marks: 95 },
            { subject: 'Science', marks: 85 }
        ]
    }
];

const studentReport = students.map(student => {

    // Sum all subject marks
    const total = student.subjects.reduce((sum, subject) => {
        return sum + subject.marks;
    }, 0);

    // Calculate average marks
    const average = total / student.subjects.length;

    return {
        name: student.name,
        total,
        average
    };
});

// Find student having maximum total marks
const topper = studentReport.reduce((bestStudent, currentStudent) => {
    return currentStudent.total > bestStudent.total
        ? currentStudent
        : bestStudent;
});

console.log(studentReport);
console.log("Topper:", topper.name);