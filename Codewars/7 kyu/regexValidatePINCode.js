/***
 * Regex validate PIN code (7 kyu)
 *
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 *
 * If the function is passed a valid PIN string, return true, else return false.
 *
 * Examples
 * "1234"   -->  true
 * "12345"  -->  false
 * "a234"   -->  false
 */

function validatePIN(pin) {
  // check if all values are digits
  // check if length is equal to 4 or 6
  // return true or false
  return (
    pin.match('^[0-9]+$') !== null && (pin.length === 4 || pin.length === 6)
  );
}
