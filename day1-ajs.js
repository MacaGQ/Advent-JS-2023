function findFirstRepeated(gifts) {
    let seen = new Set()
    for (let gift of gifts) {
        if (seen.has(gift)){
            return gift
        }
        seen.add(gift)
    }
    return -1;
}
