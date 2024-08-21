// ❓ DESCRIPTION:
// Write a function that adds a named property to an object. 
// It must be possible to set the property to a new value. 
// If the property already exists on the object, and error should be thrown.

// ❗ Solutions


let obj = {
  name: "Palle",
};
function addProperty(obj, prop, value) {
  if (!obj.hasOwnProperty(prop)) {
    obj[prop] = value;
  } else {
    throw Error("Error message");
  }

  return obj;
}
addProperty(obj, "surename", "Daf");
console.log(addProperty(obj, "nam", "Palle"));