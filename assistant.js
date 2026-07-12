function PersonalAssistant(name){
    this.name = name;
    this.tasks = [];
    this.mood = "motivated";
}

PersonalAssistant.prototype.introduce = function(){
    console.log("Hey there! I'm your assistant, " + this.name + "!");
};

PersonalAssistant.prototype.addTask = function(task){
    this.tasks.push(task);
};

PersonalAssistant.prototype.tasksRemaining = function(){
    let response = "You have " + this.tasks.length + " tasks left"
    if(this.tasks.length > 0)
        response += ".";
    else
        response += "! Good job today!";
    console.log(response);
};

PersonalAssistant.prototype.completeTask = function(){
    let currentTask = this.tasks.shift();
    console.log(`Completing task: ${currentTask}.`);

    if(currentTask.includes("Python"))
        this.mood = "satisfied";
    else if(currentTask.includes("JS"))
        this.mood = "accomplished";
    else if(currentTask.includes("Drop"))
        this.mood = "relief";
    else
        this.mood = "tired";
};

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