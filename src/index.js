const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');
    for (let i = 0; i < arr.length; i++){
        let word = [];
        for(let k = 0;k < arr[i].length;k+=10){
            word.push(arr[i].substring(k,k+10));
        }
         arr[i] = word; 
        for(let h = 0;h < arr[i].length;h++){
            let letter = [];
            for(let n = 0;n < arr[i][h].length;n+=2){
                letter.push(arr[i][h].substring(n,n+2))
            }
            for(let m = 0;m < letter.length;m++){
                if(letter[m] == '10'){
                    letter[m] = '.';
                }else if(letter[m] == '11'){
                    letter[m] = '-';
                }else if(letter[m] == '00'){
                    letter[m] = ''
                }
            }
            arr[i][h] = MORSE_TABLE[letter.join('')];
        }
        arr[i] = arr[i].join('');    
    }
    return(arr.join(' '));
}
module.exports = {
    decode
}