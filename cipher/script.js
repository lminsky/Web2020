//I like to create some global variables immediately so I have access to them all later
let encrypt = document.getElementById("encrypt");
let decrypt = document.getElementById("decrypt");
let plainText = document.getElementById("plainText");
let keyInput = document.getElementById("key");
let cipherText = document.getElementById("cipherText");

//I'm attaching event listeners to each button.
//Notice that they both call the same function
encrypt.addEventListener("click", crypt);
decrypt.addEventListener("click", crypt);

//The trick here is that when you press either button, it passes "event object"
//In this case, that's the variable e below
function crypt(e) {
	//I'm using a sub-property of e to figure out which button was pressed
	let button = e.target.id
	//I start by assuming we're encrypting, but if we're decrypting we make the direction negative
	let direction = 1;
	if(button == "decrypt") {
		direction = -1;
	}


	// ------------ Process the Key ------------
	//I get the key, make it upper case, and split it into an array
	let key = keyInput.value.toUpperCase();
	key = key.split("");
	//Then I loop through the array and get the letter values (A = 0, Z = 25)
	for(i in key) {
		key[i] = key[i].charCodeAt(0) - 65;
	}
	//Finally, loop backwards from the end and remove any non-alphabetic charactars
	//I loop backwards because going the other way messes up the numbers
	for(let i = key.length-1; i >= 0; i = i - 1) {
		if(key[i] < 0 || key[i] > 25) {
			key.splice(i, 1);
		}
	}


	// ------------ Process the Key ------------
	//I get the text, make it upper case, and split it into an array
	let input = plainText.value.toUpperCase();
	input = input.split("");
	//The key position variable is used to track value in the key we're on
	let keyPosition = 0;
	//This loop is where most of the logic is, but it's easy to get lost
	for(i in input) {
		//Start by getting and reducing the char value, so A is 0, Z is 25
		let temp = input[i].charCodeAt(0) - 65
		//Check that we're only working with letters...
		if(temp >= 0 && temp <= 25) {
			//Add the current key value (multiplied by -1 if decrypting)
			temp = temp + key[keyPosition] * direction;
			//This line essentially just handles when you shift below 0 or above 25
			temp = (temp + 26 * 2) % 26;
			//Shift to the next position in the key (but loop back to zero if you're at the end)
			keyPosition = (keyPosition + 1) % key.length;
		}
		//Put the new value back in the input array
		//I'm doing this after the if statement, because I want non-alphabetic characters to go back too
		input[i] = String.fromCharCode(temp + 65);
	}
	//Join merges all the values of an array into a string
	cipherText.innerHTML = input.join("");
}