// ❓ Description:
// Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

// Note: initials should be separated with a space.

// ❗ Solutions

function toInitials(name) {
    return `${name.split('').filter(el => el !== el.toLowerCase()).join(". ")}.`
  }