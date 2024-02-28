function arrayAndObject(arr) {
    let males = []
    let females = []

    for(let item of arr){
        let itemList = item.split(",")
        let newItemList = []

        for(let i of itemList) {
            newItemList.push(i.trim())
        }

        let names = newItemList[0].split(" ")
        
        if (newItemList[2] === 'male'){
            let objMale = {}
            objMale[names[0]] = {"second-name": names[1], age: newItemList[1]}
            males.push(objMale)
        }else{
            let objFemale = {}
            objFemale[names[0]] = {"second-name": names[1], age: newItemList[1]}
            females.push(objFemale)
        }
    }
    //console.log(males)
    //console.log(females)

    return {
        females,
        males
    }
}

console.log(arrayAndObject(["Patrick wyne, 30, male", "lil wyne, 32, male", "Eric mimi, 21, female", "Dodos deck, 21, male", "Alian Dwine, 22, male", "Patrick wyne, 33, male", "Patrick wyne, 10, male","Patrick wyne, 40, male"]))