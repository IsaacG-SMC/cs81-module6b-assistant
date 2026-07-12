function PersonalAssistant(name){
    this.name = name;   // name variable to store the name of an assistant instance
    this.tasks = [];    // tasks array to store a lists of tasks needed to get done
    this.mood = "motivated";    // mood string at start of day
}

// Prints out an introduction by the personal assistant
// No parameters, prints out an introduction by retrieving the instance's name variable
PersonalAssistant.prototype.introduce = function(){
    console.log("Hey there! I'm your assistant, " + this.name + "!");
};

// Adds given task to tasks list
// Takes a task as a string, and pushes it to the end of an instance's tasks array
PersonalAssistant.prototype.addTask = function(task){
    this.tasks.push(task);
};

// Prints out a message based on number of remaining tasks in tasks list
// No parameters, and prints out a message with the number of tasks remaining,
// and if the list is empty, adds a nice message.
PersonalAssistant.prototype.tasksRemaining = function(){
    let response = "You have " + this.tasks.length + " tasks left"  // store response to variable
    if(this.tasks.length > 0)   // If tasks array is not empty, end the sentence
        response += ".";
    else    // Else, add a nice message to congratulate finishing all tasks
        response += "! Good job today!";
    console.log(response);
};

// Completes the first task of an instance's tasks list;
// changes the mood based on the completed tasks
// No parameters; prints out task completed and removed from task list,
// updates mood based on what task was removed from tasks array
PersonalAssistant.prototype.completeTask = function(){
    let currentTask = this.tasks.shift();   // removes tasks[0] from instance's array and stores it
    console.log(`Completing task: ${currentTask}.`);    // prints finished task

    if(currentTask.includes("Python"))  // If assignment was for python, feel satisfied
        this.mood = "satisfied";
    else if(currentTask.includes("JS")) // If assignment was for JS, feel accomplished
        this.mood = "accomplished";
    else if(currentTask.includes("Drop"))   // If task was to drop a course, feel relief
        this.mood = "relief";
    else    // Else, the task was trying
        this.mood = "tired";
};

// Print out current mood
// No parameters, prints current mood from instance's mood property
PersonalAssistant.prototype.reportMood = function(){
    console.log("Mood: " + this.mood);
};

let tom = new PersonalAssistant("Tom Cashman");
tom.introduce();
tom.addTask("Finish Python assignment");
tom.addTask("Finish JS assignment");
tom.addTask("Drop Cloud Computing course");
tom.tasksRemaining();
tom.reportMood();

for(let i = 0; i < 3; i++){
    tom.completeTask();
    tom.tasksRemaining();
    tom.reportMood();
}