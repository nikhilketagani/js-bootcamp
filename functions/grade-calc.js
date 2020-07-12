// student score , total possible score
// 15/20 => you got a C (75%)
// A 90-100,b 80-89, C 70-79, D 60-69, F 0-59 
const gradeCalculator =function(studentScore,totalPossibleScore) {
    const percentage = (studentScore/totalPossibleScore)*100;
    let letterGrade ='';
    if(percentage>=90 &&percentage<=100){
        letterGrade='A';
    }else if(percentage>=80 &&percentage<=89){
        letterGrade='B';
    
    }else if(percentage>=70 &&percentage<=79){
        letterGrade='C';
    }else if(percentage>=60 &&percentage<=69){
        letterGrade='D';
    }else if(percentage>=0 &&percentage<=59){
        letterGrade='F';
    }
    return `you got a ${letterGrade} (${percentage}%)` ;
}

console.log(gradeCalculator(85,100));

