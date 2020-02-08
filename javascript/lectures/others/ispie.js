function diePieDie(slices, people, slicesTotal) {
  if (slices % people == 0) {
    if (slices / people == slicesTotal) {
      return true;
    }
  }
  return false;
}

console.log(diePieDie(6, 3, 2));
