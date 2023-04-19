let students = [
                { name: 'Daniela', age: 25 },
                { name: 'Andrea', age: 23 },
                { name: 'José', age: 27 },
                { name: 'Georg', age: 23 },
];


function findMostCommonAge(students) {
    let count = {};
    let maxCount = 0;
    let mostCommonAge = null;

    for (let i = 0; i < students.length; i++) {
        let age = students[i].age;
        if (count[age] === undefined) {
            count[age] = 0;
        }
        count[age]++;
        if (count[age] > maxCount) {
            maxCount = count[age];
            mostCommonAge = age;
        }
    }

    return mostCommonAge;
}

console.log(findMostCommonAge(students));
