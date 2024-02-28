async function totalMembers(arr) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    for(let family of arr){
        family.totalNumberOfFamilyMembers = family.childrenNumber + 2;

        if (family.fatherName.toLowerCase() === 'yves') {
            throw new Error("Yves is not an allowed dad in 2022");
        }
    }
    return arr
}

(async () => {
    try {
        const finalArr = await totalMembers([
            { fatherName: 'John', motherName: 'Sarah', childrenNumber: 3 },
            { fatherName: 'Yves', motherName: 'Jane', childrenNumber: 2 }
        ])
        console.log(finalArr)
    } catch (error) {
        console.log(error.message)
    }
})();
