const person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}



// const age = person.age;
// const age = person['age']
const property = 'name'
const tuhin = person[property]

// console.log(tuhin);



console.log(person.education.subjects[1].mark)


// const age = Person.age;
// const a = Person['name']
// const property = 'name'

// const aa = Person[property]

// console.log(aa)