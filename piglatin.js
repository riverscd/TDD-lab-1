function translate(english) {

    const lowerCaseEnglish = english.toLowerCase();

    if (lowerCaseEnglish.match(/\b[aeiou]\w*/)){
        return (lowerCaseEnglish + "way")
    }
    else {
        let startingConsonants = 0; 
        
        for (i=0; i < lowerCaseEnglish.length; i++){
            if (lowerCaseEnglish[i] === "a" || 
            lowerCaseEnglish[i] === "e"||
            lowerCaseEnglish[i] === "i" ||
            lowerCaseEnglish[i] === "o" ||
            lowerCaseEnglish[i] === "u") {
            break
            }
            startingConsonants++
        }
        return (lowerCaseEnglish.substring(startingConsonants, lowerCaseEnglish.length)+lowerCaseEnglish.substring(0,startingConsonants)+"ay")
    }
}

console.log(translate("apple"))
console.log(translate("giraffe"))
console.log(translate("Cat"))
console.log(translate("grey"))

module.exports = translate;