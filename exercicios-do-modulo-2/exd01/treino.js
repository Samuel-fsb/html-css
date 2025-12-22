const getSmallestWord = (str) => {
    const strArr = str.trim().split("")

    let smallestword = strArr [0]

    for(let i = 1; i < strArr.length ;i++){
        if (strArr[i].length < smallestword.length){
            smallestword = strArr[i]
        }
    }

    return smallestword
}

console.log(getSmallestWord("1223 5678 8778"))