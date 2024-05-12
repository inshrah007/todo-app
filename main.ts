import inquirer from "inquirer";
let todoapp = [];
let conditions = true;
console.log( "Welcome to My todo list application");
while(conditions){
let addtask = await inquirer.prompt([
    {
        name : "task",
        type : "input",
        message : "enter your new task",
    }
]);
todoapp.push(addtask.task);
console.log(`${addtask.task}task added in todoapp successfully`)
let addmoretask = await inquirer.prompt([
    {
        name: "addmore",
        type:"confirm",
        meassage: "do you want to add more task?",
        default: "False",
    }
]);
conditions = addmoretask.addmore

}
console.log(`your updated todoapp ${todoapp}`);
