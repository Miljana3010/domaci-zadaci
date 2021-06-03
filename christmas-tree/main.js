var x = 5;
for (let i = 0; i < x; i++) {
  for (let j = x - 1; j > i; j--) {
    document.write("&nbsp&nbsp");
  }
  for (let k = 0; k <= (i * 2); k++) {
    document.write("*");
  }
  document.write("<br>");
}
