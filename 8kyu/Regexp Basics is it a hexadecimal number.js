// ❓ Description:
// Implement String#hex_number? (in Java StringUtils.isHexNumber(String)), which should return true if given object is a hexadecimal number, false otherwise.

// Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

// ❗ Solutions

String.prototype.hexNumber = function() {
    return /^0x[0-9a-fA-F]+$|^[0-9a-fA-F]+$/.test(this);
   };