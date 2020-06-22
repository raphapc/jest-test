//truthiness.js
function truthiness(input) {
  if (input == 'null') {
    return null;
  } else if (input == 'defined') {
    return 1
  } else if (input == 'undefined') {
    return undefined
  } else if (input == 'true') {
    return true
  } else if (input == 'false') {
    return false
  }
}
module.exports = truthiness;
