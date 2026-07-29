// ❓ Description:
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// ❗ Solutions

function nerdify(txt) {
  const newStr = txt.split("").map((s) => {
    if (s === "a" || s === "A") {
      return (s = "4");
    } else if (s === "e" || s === "E") {
      return (s = "3");
    } else if (s === "l") {
      return (s = 1);
    } else return s;
  });
  return newStr.join("");
}