function findNaughtyStep(original, modified) {
    let modifiedStep = '';
    let hasMoreSteps = modified

    if (original.length>modified.length)  {
        hasMoreSteps = original
    }

    for (let i=0; i<hasMoreSteps.length; i++) {
        if (original.charAt(i) != modified.charAt(i)) {
            return hasMoreSteps.charAt(i)
        }
    }
    return modifiedStep
}
