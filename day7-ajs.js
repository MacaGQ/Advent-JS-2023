function drawGift(size, symbol) {
    let gift = ''

    if (size == 1) {
        return '#'
    }

        let facePerimeter = size - 2;
        // let face = symbol * facePerimeter;
        gift += '#'.repeat(size) + symbol.repeat(facePerimeter) + '#'
        let spacing = 1;

        for (let i = facePerimeter; i > 0; i--) {
            let line = '#' + symbol.repeat(facePerimeter) + '#' + symbol.repeat(i - 1) + '#'
            gift = ' '.repeat(spacing) + line + '\n' + gift + '\n' + line
            spacing += 1
        }

        gift = ' '.repeat(spacing) + '#'.repeat(size) + '\n' + gift + '\n' + '#'.repeat(size) + '\n'

    return gift
}
