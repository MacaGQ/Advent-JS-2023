function maxDistance(movements) {
    let distance = 0;
    let extra = 0;
    for (let i of movements) {
        switch(i) {
            case '>':
                distance += 1;
                break;
            case '<':
                distance -= 1;
                break;
            case '*':
                extra += 1;
        }
    }
    return Math.abs(distance)+extra;
}
