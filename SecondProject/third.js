const isEven = (no)=>{
    return no%2==0; 
}
//High order function
const dispMsg = (func,no)=>{
    console.log('Display msg is called');
    let ans = func(no)
    console.log("No is even or odd -- "+ans);
}
dispMsg.call(this,isEven,5)
module.exports = dispMsg(isEven,5)
