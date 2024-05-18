
//Q1

function Click(){
    let now=new Date()
    document.write(now)
}

//Q2

function greet(){
    let firstName=prompt('Enter your First Name ')
    let lastName=prompt('Enter your Last Name ')
    let fullName=firstName+' '+lastName
    document.write(`Assalam-ul-Alikum: ${fullName}`)
}

//Q3

function sum(){
    let value1=+prompt('Enter your Value 1')
    let value2=+prompt('Enter your Value 2')
    let result=value1+value2
    document.write(`Sum of Two Integers: ${result}`)
}

//Q4

function Calculator(){
    let num1=prompt('Enter your Number 1')
    let Operators=prompt('Enter your Operators +,-,*,/,%')
    let num2=prompt('Enter your Number 2')
    num1=parseFloat(num1)
    num2=parseFloat(num2)
let result;
    if(Operators=='+'){
        result=num1+num2
    }
    else if(Operators=='-'){
        result=num1-num2
       

    }
    else if(Operators=='*'){
        result=num1*num2


    }
    else if(Operators=='/'){
        result=num1/num2


    }
    else if(Operators=='%'){
        result=num1%num2


    }
    else{
        alert('Invalid operator')
    }
    document.write('Result:'+result)
}

