function mydata(){
    console.log("a")
    console.log("r")
    console.log("s")
    console.log("a")
    console.log("l")
    console.log("a")
    console.log("n")
 }
// mydata()        // its a execution of funct
// mydata      //  this is refrence

//      +++++++++++++++++   +++++++++++++++++++++


function sum2num(num1 , num2){

    num1 + num2
                            //   this func only print result not return you cant store it in variables
}
let res2 = sum2num(5,5)
// console.log(res2);


    //      ++++++++++++++++++  ++++++++++++    ++++++++++++++  +++++++++


function sum2num(num1 , num2){
    // let result = num1 + num2
    // return result        //      this func retur result you can store it or whatever you want

    return num1 + num2
    console.log("arsalan");     // this will never execute bcz after (retun) no code work
}


let res = sum2num(3,4)

// console.log(res)

function userlogin(name){
    if(name === undefined){     // in braces(!name) work same mean not name so condition is true
        console.log("plese enter user name");
        return
    }
    return `${name} is log in`
}

console.log(userlogin());