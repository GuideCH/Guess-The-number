//guess the number website


var guess

function generate_new_guess(min=0, max=100) {
    guess = Math.floor(Math.random() * (max - min + 1)) + min;
}

//on html load generate a random number
function start() {
    generate_new_guess();
}

//when press button in html
function check() {
    const notice = document.getElementById("notice");
    const last_guess = document.getElementById("last_guess");
    const answer = document.getElementById("answer").value;

    if (answer == guess) {
        notice.innerHTML = "You got it!";
        generate_new_guess();

    } else if (answer > guess) {
        notice.innerHTML = "Too high!";

    } else if (answer < guess) {
        notice.innerHTML = "Too low!";

    } else {
        notice.innerHTML = answer;
    }
    last_guess.innerHTML = `Last Guess:${answer}`;
}