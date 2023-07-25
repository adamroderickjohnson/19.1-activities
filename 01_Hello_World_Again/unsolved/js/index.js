// Create a variable below
var helloWorld = 'Hello World';
var number='12345';
var n = 400;
// Console.log() your variable here.
console.log(helloWorld, number);

function adamStuff(x){
    
   for (let i = 0; i < x.length; i++){
       if ( i == x/2 ) {
        console.log('excellent');
    } 
       else {
        console.log('not excellent');
    }
   } 
}

adamStuff(n);