// let str = ['U','D','D','D','U','D','U','U'];
// str.forEach(element => {
//     console.log(element);
// });
    

// let path = 'UDDDUDUU';
let path = 'DDUUDDUDUUUD';
let currentStep=0;
let prevStep=0;
let valley=0;

for (let i = 0; i < path.length; i++) {
    prevStep=currentStep;
    if(path.charAt(i)=='U'){
        currentStep++;
    }
    else{
        currentStep--;
    }
    if(prevStep<0){
        if(currentStep==0){
            valley++;
        }
    }
    // console.log(path.charAt(i));
}
console.log(valley);
