const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }]

const questions2 = [{
    message: `Enter team member's ${roleInfo}`,
    name: "roleInfo"
},
{
    type: "list",
    message: "Would you like to add more team members?",
    choices: [
        "yes",
        "no"
    ],
    name: "moreMembers"
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log('Success!')
    }
    );
}
//  function askAboutTableOfContent(){
//     inquirer.prompt(questions)
//  }


// TODO: Create a function to initialize app
function init() {

    function addMember() {
        inquirer.prompt(questions)
            .then(function ({ name, role, id, email }) {
                let roleInfo = "";
                if (role === "Engineer") {
                    roleInfo = "GitHub username";
                } else if (role === "Intern") {
                    roleInfo = "school name";
                } else {
                    roleInfo = "office phone number";
                }
                inquirer.prompt(questions2)
                    .then(function ({ roleInfo, moreMembers }) {
                        let newMember;
                        if (role === "Engineer") {
                            newMember = new Engineer(name, id, email, roleInfo);
                        } else if (role === "Intern") {
                            newMember = new Intern(name, id, email, roleInfo);
                        } else {
                            newMember = new Manager(name, id, email, roleInfo);
                        }
                        employees.push(newMember);
                        addHtml(newMember)
                            .then(function () {
                                if (moreMembers === "yes") {
                                    addMember();
                                } else {
                                    finishHtml();
                                }
                            });

                    });
            });
    }

    writeToFile(fileName, data);
}

// Function call to initialize app
console.log("----------README.md Generator----------")
init()