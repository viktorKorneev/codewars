function combat(health, damage) {
  if (health > damage) {
    health -= damage;
    return health;
  } else {
    return 0;
  }
}
console.log(combat(20, 30));