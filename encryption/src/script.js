function getRadioValue(radio_name) {
    let radio_element = document.getElementsByName(radio_name);
    for (let i = 0; i < radio_element.length; i++) {
        if (radio_element[i].checked)
            return radio_element[i].value;
    }
}

function reset() {
    document.getElementById("first-input-box").value = "";
    document.getElementById("second-input-box").value = "";
    document.getElementById("output").innerText = "";
    document.getElementById("step-4").style = "visibility: hidden;"
}

function change_state_encrypt_decrypt() {
    let step2_radio = getRadioValue('encrypt-decrypt-radio')
    if (step2_radio === "Encrypt") {
        document.getElementById('step-3-button').innerText = "Encrypt";
        reset();
    } else if (step2_radio === "Decrypt") {
        document.getElementById('step-3-button').innerText = "Decrypt";
        reset();
    } else {
        console.log("Something has gone wrong in change_background_encrypt_decrypt()")
    }
}

function driver() {
    let step2_radio = getRadioValue('encrypt-decrypt-radio')
    let step1_select = document.getElementById('method').value

    let first_input = document.getElementById("first-input-box").value;
    let second_input = document.getElementById("second-input-box").value;
    let output = "";

    if (first_input === "" || second_input === "") {
        document.getElementById("output").innerText = "You must enter both fields"
    } else {
        switch (step2_radio) {
            case "Encrypt":
                switch (step1_select) {
                    case "Shift Cipher":
                        output = shift_cipher_encode(first_input, second_input);
                        document.getElementById("output").innerText = "Ciphertext is " + output;
                        break;
                }
                break;
            case "Decrypt":
                switch (step1_select) {
                    case "Shift Cipher":
                        output = shift_cipher_decode(first_input, second_input);
                        document.getElementById("output").innerText = "Plaintext is " + output;
                        break;
                }
                break;
        }
    }
    document.getElementById("step-4").style = "visibility: visible;"
}


// CIPHER FUNCTIONS

// Shifts the 'character' between ASCII 32 and 126 (both included)
// Input : 'character' -> Character ; 'count' -> Integer
// Return type : Character
function shift(character, count) {
    character = character.toString();
    count = parseInt(count);
    let charASCII = character.charCodeAt();
    if (count < 0) {
        count = (count % (127 - 32)) + 127 - 32;
    }
    return String.fromCharCode((charASCII + count - 32) % (127 - 32) + 32);
}

/*
SHIFT CIPHER
The most basic of ciphers. It shifts the characters a certain number to the right. 
If string is "ABCD" and the key is 2 the cipher text becomes "CDEF".
Also known as Caesars cipher because Julius Caesar used it with key 3.
*/

// Shift Cipher Encryption
// Encodes a 'plaintext' to ciphertext with a given 'key' using a Shift Cipher (Also known as Caesar's Cipher if the key is 3)
// Input : 'plaintext' -> String ; 'key' -> Integer
// Return type : String
function shift_cipher_encode(plaintext, key) {
    plaintext = plaintext.toString();
    key = parseInt(key);
    let ciphertext = "";
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
    let plaintext = "";
    for (let character of ciphertext) {
        plaintext = plaintext + shift(character, -key)
    }
    return plaintext;
}