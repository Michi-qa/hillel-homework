var testStrings = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
var regex = /^[^Aa]{6,}$/;

console.log("Знайдені слова:");

for (var i = 0; i < testStrings.length; i++) {
    var word = testStrings[i];
    if (regex.test(word)) {
        console.log(word);
    }
}