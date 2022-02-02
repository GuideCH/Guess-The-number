# Guess-The-number
Simple number guessing website

random the number from x-y (configurable)
then receive input from user compare and logging it

```javascript
var guess

function generate_new_guess(min=0, max=100) {
    guess = Math.floor(Math.random() * (max - min + 1)) + min;
}
```
On website load 
```html
<body onload="start();">
```
Generate guessing number
```javascript
//on html load generate a random number
function start() {
    generate_new_guess();
}
```
# Check Answer
Called Check FUnction on buttion press
```html
    <body onload="start();">
        
        <div class="input">
            <h2 class="notice" id="notice"></h2>
            <input type="number" placeholder="คำตอบ" id="answer" style="width:40rem;height: 2rem;">
        </div>
        <! --- Called Check() Function ---> 
        <div class="button">
            <button type="button" onclick="check()" style="width:7rem;height: 3rem;">ตกลง</button>
        </div>
        
        <div class="last_guess_container">
            <h2 class="last_guess_" id="last_guess"></h2>
        </div>

        <script src="main.js"></script>
    </body>
```
Get input value
```javascript
//when press button in html
function check() {
    const notice = document.getElementById("notice");
    const last_guess = document.getElementById("last_guess");
    const answer = document.getElementById("answer").value;
    
    //compare
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
```
