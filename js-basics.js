const age = 26;
let name = "chase"
const hobby = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'name is ' + userName + ', age is ' + userAge + ', and the user has hobbies? ' + userHasHobby
    );
}

console.log(summarizeUser(name, age, hobby));