// ❓ DESCRIPTION:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. 
// But how clever can you be to create the most creative "hello world" you can think of? 
// What is a "hello world" solution you would want to show your friends?

// ❗ Solutions

function greet (word = "hello world!") {
   
    let string = ""
    for(let i = 0; i < word.length; i++){
        string += word[i]
    }
    return string
}
console.log(greet());