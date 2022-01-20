// console.log("Hello world");
//Character classes
let regex = /\war/; //word character  _ alphabet or number
regex = /\w+ar/;    //\w+meansone one or more word character 
regex = /\Wbhai/;    //non word character eg space,$ #,@
regex = /\W+bhai/;   //\W+ one or mpre non word character 
regex = /\d999/;     //d means digit
regex = /\d+999/     //d+ means more than one digit
regex = /\D999/ ;     //D means non digit
regex = /\D+999/ ;     //D means more than one non digit
regex = /\s87/ ;       //match white space character
regex = /\s+87/ ;       //match more than one white space character
regex = /\Syi/ ;       //match non white space character
regex = /\S+yi/ ;       //match more than one non white space character
regex = /87\b/ ;

//Assertion
regex = /h(?=y)/
regex = /h(?!y)/




str = "wsaarrdwhyuen&bhai hyijk999";

let result = regex.exec(str);
console.log(`This result form exec is ${result} `);


if(regex.test(str)){

    console.log(`The string ${str} matches the expression ${regex.source}`)
   }
   else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)

   }