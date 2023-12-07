function cyberReindeer(road, time) {
  let traversedRoad = [road]
  let char = '.';
  let sledIndex, behindSled, inFrontOfSled, sledPassing, nextChar
  for (let timePassed = 1; timePassed < time; timePassed++) {
    if (timePassed == 5) {
      road = road.replaceAll('|', '*')
    }
    sledIndex = road.indexOf('S')
    nextChar = road[sledIndex + 1]
    behindSled = road.substring(0, sledIndex)
    sledPassing = char + 'S'
    inFrontOfSled = road.substring(sledIndex + 2)
    if (nextChar != '|') {
      road = behindSled + sledPassing + inFrontOfSled
      char = nextChar
    }
    traversedRoad.push(road)
  }
  return traversedRoad
}
