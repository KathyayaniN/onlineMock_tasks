// You can change the n value here;
let n = 3; 
Generating_balanced_brackets(n);
function Generating_balanced_brackets(n){
    let i = 0;
    let open_bracket = 0;
    let close_bracket = 0;
    let str = []
    let final_arr = recursive_fun(i,n,open_bracket,close_bracket,str);
    console.log(final_arr.join(''))
}
function recursive_fun(pos,n,open,close,str){
    if(close == n){
        console.log(str.join(''))
        return str;
    }
    else{
        if(open > close){
            str[pos] =')';
            recursive_fun(pos+1,n,open,close+1,str);
        }
        if(open < n ){
            str[pos]='(';
            recursive_fun(pos+1,n,open+1,close,str);
        }
    }
    // console.log(str)
    return str;
}
