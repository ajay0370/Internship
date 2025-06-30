function bmi_Calculator(weight,height){
    var ans=(weight/(height)**2).toFixed(1);
    var msg;
    if(ans<18.5){
        msg="underweight.";
    }
    else if(ans>=18.5 && ans<=24.9){
        msg="normal weight.";
    }
    else{
        msg="overweight.";
    }
    return `Your BMI is ${ans}, so you are ${msg}`;
}

var message=bmi_Calculator(60,1.7);
console.log(message)
