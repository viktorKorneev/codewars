// ❓ Description:
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// ❗ Solutions

function initializeNames(name) {
  if (name.split(" ").length <= 2) {
    return name;
  } else {
    let newName = name;
    newName =
      newName
        .split(" ")
        .slice(1, -1)
        .join("")
        .split("")
        .filter((v) => v.toUpperCase() === v)
        .join(". ") + ".";
    const first = name.split(" ")[0];
    const second = name.split(" ").at(-1);
    return `${first} ${newName} ${second}`;
  }
}