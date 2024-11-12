const truthQuestions = [
    "What's your biggest fear?",
    "What's your favorite hobby?",
    "What's your biggest secret?",
    "Have you ever cheated in exam?"
];
const dareTasks = [
    "Sing a silly song out loud",
    "Do 10 jumping jacks",
    "Tell a joke",
];
function truth() {
    const randomIndex = Math.floor(Math.random() * truthQuestions.length);
    document.getElementById("result").innerHTML = truthQuestions[randomIndex];
}
function dare() {
    const randomIndex = Math.floor(Math.random() * dareTasks.length);
    document.getElementById("result").innerHTML = dareTasks[randomIndex];
}