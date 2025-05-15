const findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach(person => {
        if (findCurrentAge(person) > findCurrentAge(oldest)){
            oldest = person;
        }
    });

    return oldest;
};

const findCurrentAge = function(person){
    if ("yearOfDeath" in person){
        return person.yearOfDeath - person.yearOfBirth;
    }
    else{
        return getPersonAge(person);
    }
}

function getPersonAge(person)
{
    if ("yearOfBirth" in person){
        const date = new Date()
        let currentYear = date.getFullYear();
        return currentYear - person.yearOfBirth;
    }else{
        return null;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
