const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
        type: 'checkbox',
        name: 'license',
        message: 'Which license do you want?',
        choices: ['none', 'Apache 2.0 License', 'Boost Software License 1.0', 'The MIT License'],
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log('Success!') }
    );
 }
//  function askAboutTableOfContent(){
//     inquirer.prompt(questions)
//  }


// TODO: Create a function to initialize app
function init() { 

inquirer.prompt(questions).then((data) => {
    const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

    
    // if yes table {}
    // run askAboutTableOfContent()
    // question 3
    // all my other stuff

    writeToFile(filename, data);
});
}

// Function call to initialize app
console.log("----------README.md Generator----------")
init()