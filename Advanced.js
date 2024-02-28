let setStudentAgeApi = (student, age) => {  //async code below
    console.log("1. Starting ..")
    setTimeout(() => { 
        console.log("2. setting age for the student") 
        student.age = age; 
    }, 500);
    
    console.log("3. Done ..")

}

let student = { name: "denis" }

setStudentAgeApi(student, 20)

console.log(student)


//part2

setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0){
                reject ("Bad Age")
            }else{
                resolve(student)
            }    
        },500);
    });
}

setStudentAgeApi(student, -1)
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
 


 