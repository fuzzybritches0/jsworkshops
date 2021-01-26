function reduce(arr, fn, initial) {
  function reduceOne(index, value) {
    if (index > arr.length - 1) return value; // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
  }
  return reduceOne(0, initial); // kick off recursion with initial values
}

module.exports = reduce;
