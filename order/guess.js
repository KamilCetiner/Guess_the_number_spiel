
// let x = Math.floor(Math.random() * 100);

// document.getElementById("are").addEventListener("click", Guess );




// const num = document.getElementById("area").value;
//     if (num <= 0 && num => 100) {
//     document.getElementById("writing").innerHTML = "Please write between 1-100 numbers";
//     } else if (x === num) {
//     document.getElementById("writing").innerHTML = "You win";
    
// }

        
// function Guess(x){
//     let i = 1;
//     let j = 100;
//     while (i < j){        
//         let m = Math.floor((i + j)/2);
//         if (x > m) {
//             i = m + 1
//         } else if {
//             m = x;
//             return 1
//         } else {
//             j = m
//         }
        
//     };
// }

// console.log(Guess(20));




let x = Math.floor(Math.random() * 100);
let i = 1;



document.getElementById("check").addEventListener("click", function() {
    
    const num = document.getElementById("area").value;

                            
        if  (num <= 0 || num >= 100){
            document.getElementById("writing").innerHTML = "Please write a number between 1-100 !!! "            
            
        } else if (x < num){
            document.getElementById("writing").innerHTML = "I am thinking about lower number"            
            document.getElementById("result").innerHTML = `This is your test number:${i}`;
            i++;    
            
        } else if (x > num) {
        
        document.getElementById("writing").innerHTML = "I am thinking about higher number"
        document.getElementById("result").innerHTML = `This is your test number:${i}`;
        i++;
        
        
        } else {
        document.getElementById('area').value = '';
        document.getElementById("writing").innerHTML = "";
        document.getElementById("result").innerHTML = "";   
        return alert(`You are the winner :D. You guest after ${i} times!`)
        
        
        }
    
})



