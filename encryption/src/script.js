// Helper Functions

function getRadioValue(radio_name) {
    var radio_element = document.getElementsByName(radio_name);
    for (i = 0; i < radio_element.length; i++) {
        if (radio_element[i].checked)
            return radio_element[i].value;
    }
}

// Step 1 Functions

function change_state_encrypt_decrypt() {
    var step1_radio = getRadioValue('encrypt-decrypt-radio')
    if (step1_radio === "Encrypt") {
        document.getElementById('body').style.background = "rgb(240, 128, 128, 0.8)";
        document.getElementById('step-3-button').innerText = "Encrypt";
    } else if (step1_radio === "Decrypt") {
        document.getElementById('body').style.background = "rgb(144, 238, 144, 0.8)";
        document.getElementById('step-3-button').innerText = "Decrypt";
    } else {
        console.log("Something has gone wrong in change_background_encrypt_decrypt()")
    }
}

// Step 3 Functions

function driver() {
    var step1_radio = getRadioValue('encrypt-decrypt-radio')
    var step2_select = document.getElementById('method').value

    var first_input = document.getElementById("first-input-box").value;
    var second_input = document.getElementById("second-input-box").value;
    var output = "";

    if (first_input === "" || second_input === "") {
        document.getElementById("output").innerText = "You must enter both fields"
    } else {
        switch (step1_radio) {
            case "Encrypt":
                switch (step2_select) {
                    case "Shift Cipher":
                        output = shift_cipher_encode(first_input, second_input);
                        document.getElementById("output").innerText = "Ciphertext : " + output;
                        break;
                }
                break;
            case "Decrypt":
                switch (step2_select) {
                    case "Shift Cipher":
                        output = shift_cipher_decode(first_input, second_input);
                        document.getElementById("output").innerText = "Plaintext : " + output;
                        break;
                }
                break;
        }
    }
    document.getElementById("step-4").style = "visibility: visible;"
}

/*
SHIFT CIPHER
The most basic of ciphers. It shifts the characters a certain number to the right. 
If string is "ABCD" and the key is 2 the cipher text becomes "CDEF".
Also known as Caesars cipher because Julius Caesar used it with key 3.
*/

// Shifts the 'character' between ASCII 32 and 126 (both included)
// Input : 'character' -> Character ; 'count' -> Integer
// Return type : Character
function shift(character, count) {
    character = character.toString();
    count = parseInt(count);
    var charASCII = character.charCodeAt();
    if (count < 0) {
        count = (count % (127 - 32)) + 127 - 32;
    }
    return String.fromCharCode((charASCII + count - 32) % (127 - 32) + 32);
}

// Shift Cipher Encryption
// Encodes a 'plaintext' to ciphertext with a given 'key' using a Shift Cipher (Also known as Caesar's Cipher if the key is 3)
// Input : 'plaintext' -> String ; 'key' -> Integer
// Return type : String
function shift_cipher_encode(plaintext, key) {
    plaintext = plaintext.toString();
    key = parseInt(key);
    var ciphertext = "";
    for (let character of plaintext) {
        ciphertext = ciphertext + shift(character, key)
    }
    return ciphertext;
}

// Shift Cipher Decryption
// Decodes a 'ciphertext' encoded through Shift Cipher to plaintext using the given 'key' (Also known as Caesar's Cipher if the key is 3)
// Input : 'ciphertext' -> String ; 'key' -> Integer
// Return type : String
function shift_cipher_decode(ciphertext, key) {
    ciphertext = ciphertext.toString();
    key = parseInt(key);
    var plaintext = "";
    for (let character of ciphertext) {
        plaintext = plaintext + shift(character, -key)
    }
    return plaintext;
}