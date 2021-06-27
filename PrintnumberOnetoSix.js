function Printingdie(){
    var print = Math.floor(Math.random()*6);
    console.log(print); 
}
Printingdie();

//and print the all number using for loop also //
function Printingdie(){
    var print = Math.floor(Math.random()*6);
    for(let i=0;i<print;i++){
	console.log(i);
    }
}
Printingdie();
