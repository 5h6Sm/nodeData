let func = (arg1, arg2) => arg1+arg2;

console.log(func(1, 2));

const students = [
    {name : 'ky', age:31, score:85},
    {name : 'ki', age:31, score: 95},
    {name : 'min',age:31, score:76}
]

function getDegree(score){
    if(score>=90){
        return 'A';
    }else if(score>=80){
        return 'B';
    }else if(score>=60){
        return 'C';
    }
    return 'F';
}

students.forEach((students) => {
    const result = `name:${student.name}, score:${getDegree(student.score)}`;
    console.log(result);
});