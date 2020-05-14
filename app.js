const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const util = require("util");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const writeFileAsync = util.promisify(fs.writeFile);
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const team = []


function askForRole(){
   return inquirer.prompt([
       {
         type:"string",
         name:"role",
         message: "What is your role (manager,engineer or intern?)"
       }
   ])
   .then(answers =>{
      const role = answers.role.toLowerCase(
          
      )

      switch(role){
          case "manager":
            managerQuestions()
            .then(answers => {
                const add = new Manager(answers.name,answers.id,answers.email,answers.officenumber)
                team.push(add)
                console.log(team)

            })
          ;
          break;

          case "engineer":
           Engineerquestions()
           .then(answers => {
               const add = new Engineer(answers.name,answers.id,answers.email,answers.github)
               team.push(add)
               console.log(team)
            ;
           })
           break;
           

           case "intern":
           internquestions()
           .then(answers => {
               const add = new Intern(answers.name,answers.id,answers.email,answers.school)
               team.push(add)
               console.log(team)
            ;
           })
           break;

           default: 
           console.log("please enter a valid role");
      }
   })
}



const managerQuestions = function (){
    return inquirer.prompt([
        {
            type:"String",
            name: "name",
            message:"What is your name: "
        },

        {
            type:"String",
            name: "id",
            message:"What is your id: "
        },

        {
            type:"String",
            name: "email",
            message:"What is your email: "
        },

        {
            type:"String",
            name: "officenumber",
            message:"What is your office number: "
        }
    ])
}


const Engineerquestions = function (){
    return inquirer.prompt([
        {
            type:"string",
            name: "name",
            message:"What is your name: "
        },

        {
            type:"string",
            name: "id",
            message:"What is your id: "
        },

        {
            type:"string",
            name: "email",
            message:"What is your email: "
        },

        {
            type:"string",
            name: "github",
            message:"What is your github: "
        }
    ])
}


const internquestions = function (){
    return inquirer.prompt([
        {
            type:"string",
            name: "name",
            message:"What is your name: "
        },

        {
            type:"string",
            name: "id",
            message:"What is your id: "
        },

        {
            type:"string",
            name: "email",
            message:"What is your email: "
        },

        {
            type:"string",
            name: "school",
            message:"What is your school: "
        }
    ])
}

/*
var repeat = true
async function inputs(){
    while(repeat){
        await askForRole();

         inquirer
        .prompt([
        
          {
            type: "string",
            name: "anotheremployee",
            message: "Would you like to add another employee"
          }
        ])
        .then(answers => {
            var userresponse = answers.toLowerCase
            if (userresponse == "no"){
                repeat = false;
            }
        })
    }
}
*/


async function qa(){
    await askForRole();
    
}

qa()





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
