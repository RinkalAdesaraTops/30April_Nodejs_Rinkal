const cube = function (a){
    return a*a*a;
}

const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const div = (a,b)=>{
    return a/b;
}
const mult = (a,b)=>{
    return a*b;
}
module.exports = {
    add,sub,div,mult,cube
}