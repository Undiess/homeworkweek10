const inquirer = require("inquirer");



function askForRole(){
    return inquirer.prompt([
        {
          type:"string",
          name:"role",
          message: "What is your role (manager,engineer or intern?)"
        }
    ])
    .then(answers =>{
       const role = answers.role.toLowerCase()

       switch(role){
           case "manager":
             managerQuestions()
           break;



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




askForRole()