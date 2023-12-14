function organizeGifts(gifts) {
    let numbers = gifts.match(/\d+/g);
    let letters = gifts.match(/[^0-9]/g);
    let result = ''

    for (let number of numbers) {
        letters.push(gifts[Number(gifts.indexOf(number))+number.length])
    }

    numbers.forEach((e, i) => {
        let num = e;
        result += `[${letters[i]}]`.repeat(Math.trunc(num/50))
        num %= 50
        result += `{${letters[i]}}`.repeat(Math.trunc(num/10))
        num %= 10
        if (num>0){
        result += `(${letters[i].repeat(num)})`
        }
    })
     
    return result
}
