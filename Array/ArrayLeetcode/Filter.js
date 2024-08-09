// map, filter and reduce output based uestion

let student = [
    { name: 'Sunil', domain: 'CSE', marks: 63 },
    { name: 'amar', domain: 'ECE', marks: 79 },
    { name: 'sumit', domain: 'CSE', marks: 74 },
    { name: 'gaurav', domain: 'EEE', marks: 77 }
]

// let names = [];

// for(let i = 0; i < student.length; i++){
//     names.push(student[i].name.toLocaleLowerCase())
// }

// const names = student.map(students => students.name.toUpperCase())
// console.log(names);

// const details = student.filter(students => students.marks > 62 && students.domain === 'CSE');
// console.log(details);

// const total = student.reduce((acc, curr) => acc + curr.marks, 0)
// console.log(total)

const total = student.filter(value => value.marks > 75).map(item => item.name)
console.log(total)