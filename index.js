const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//Create an array of questions for user input for cleaner code
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a one sentence description of your project?',
    }, 
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for creating this project?',
    }, 
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    }, 
    {
        type: 'input',
        name: 'problemSolved',
        message: 'What problem does this project solve?',
    }, 
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn during the course of this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, and mention any third-party assets that require attribution, or any tutorials that helped you along the way.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want?',
        choices: ['none', 'Apache 2.0 License', 'Boost Software License 1.0', 'The MIT License'],
        default: 0,
      },
    {
        type: 'input',
        name: 'features',
        message: 'What special features does this app contain? List them here.',
    }, 
    {
        type: 'input',
        name: 'contribute',
        message: 'How can other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What tests have you created for your app? Or how can other users create tests for your app?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Type your github user profile (This is case-sensitive).',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Type your email so users can contact you',
    },
]


//This function will write the file with the filename the user writes as their title
//this function is called within the inquirer prompt
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Success!')
    );
 }

 //this function holds the inquirer and write to file, which is called by init
function askQuestions() {

inquirer.prompt(questions).then((data) => {
    const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;
    writeToFile(filename, data);
});

}

//this function calls the inquirere
function init() { 
askQuestions()
}



// Function call to initialize app
console.log("----------README.md Generator----------")
init()