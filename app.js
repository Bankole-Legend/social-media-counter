/**
 * SocialMedia Word Counter App
 * The App is to count how many words the user has typed based on the 
 * Social Media handle they have selected. And when they reach the limit
 * of the SM handle they receive a message You have reached your maximum word count.
 * 
 * Bellow are the word counts for each social media
 * Twitter = 280
 * Facebook = 63206
 * Instagram = 2200
 * Others = 8000. 
 * 
 * When a user selects a SocialMedia Handle, Words in the html page
 * changes from 0 to the desired number of words. E.g if twitter is selected, word changes form 0 280.centered
 * 
 * When a user begins to type in the textarea, Word Count increases while word decreases.
 * 
 * Once word decreases to 0. The user is unable to type any further characters and gets the
 * congratulatory message. 
 * 
 * NOTE
 * 1. Your code must be properly commented.
 * 2. Use Es6 syntax wherever possible.  
 */


//All required id were called and assigned to a variable
 const text = document.querySelector('#text');
 const count = document.querySelector('#count');
 const words = document.querySelector('#words');
 const twitter = document.querySelector('#twitter');
 const facebook = document.querySelector('#facebook');
 const instergram = document.querySelector('#instergram');
 const others = document.querySelector('#others');
 const countt = 280
 const countf = 63206
 const counti = 2200
 const counto = 8000
const message = document.querySelector('#message');
 
//Each Social media is picked and assigned a function onclick, the function assigns
//the word count for each 
twitter.onclick = function() {
    words.textContent = `Words:280`
    count.textContent = `Word count:0`
//To set maximum length for the counter 
    text.setAttribute("maxlength",countt)  

//an event listener linked to the textarea to implement the arrow function on input
 text.addEventListener('input', () =>{
    let wordsDiff = countt - text.value.length
    const countAdd = 0 + text.value.length;
    words.textContent = `Words:${wordsDiff}`
    count.textContent = `Word count:${countAdd}`
//Using tenary operators, the user is unable to type any further characters and gets the congratulatory message
//the same is repeated for other social media
    // wordsDiff <= 0?(text.disabled=true, message.innerHTML=`congratulations`):donothing
    wordsDiff <= 0 ?( message.innerHTML=`Congratulations you have reached the maximum input`):donothing
    });}
    

facebook.onclick = function() {
    words.textContent = `Words:63206`
    count.textContent = `Word count:0`
    text.setAttribute("maxlength",countf)

    text.addEventListener('input', () =>{
    let wordsDiff = countf - text.value.length
    const countAdd = 0 + text.value.length;
    words.textContent = `Words:${wordsDiff}`;
    count.textContent = `Word count:${countAdd}`
    wordsDiff <= 0 ?(message.innerHTML=`Congratulations you have reached the maximum input`):donothing
});}
    

instergram.onclick = function() {
    words.textContent = `Words:2200`
    count.textContent = `Word count:0`
    text.setAttribute("maxlength",counti)

text.addEventListener('input', () =>{
    let wordsDiff = counti - text.value.length
    const countAdd = 0 + text.value.length;
    words.textContent = `Words:${wordsDiff}`
    count.textContent = `Word count:${countAdd}`
    wordsDiff <= 0 ?(message.innerHTML=`Congratulations you have reached the maximum input`):donothing
});}
    

others.onclick = function() {
    words.textContent = `Words:8000`
    count.textContent = `Word count:0`
    text.setAttribute("maxlength",counto)

text.addEventListener('input', () =>{
    let wordsDiff = counto - text.value.length
    const countAdd = 0 + text.value.length;
    words.textContent = `Words:${wordsDiff}`
    count.textContent = `Word count:${countAdd}`
    wordsDiff <= 0 ?( message.innerHTML=`Congratulations you have reached the maximum input`):donothing
})}
    