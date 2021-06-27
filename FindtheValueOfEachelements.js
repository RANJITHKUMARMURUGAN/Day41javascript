function myFunction(x){
    let split=x.split('');
    let letter=[];
    var count=1;
    var length = split.length;
    for(let i=0;i<split.length;i++){
        if(split[i]==split[i+1]){
            count++;
        }
        else{
            let value = `${count}${split[i]}`;
            letter = [...letter,value];
            count=1;
        }
    }
    return letter;
}
console.log(myFunction('rrraaanjjiiiiithhhkumar'));
