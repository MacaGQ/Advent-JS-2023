function manufacture(gifts, materials) {
  return gifts.filter(gift => [...gift].every(e => materials.includes(e)))
}
