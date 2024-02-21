var str = "f zroj nhj[b ghjcnsit";
var re = /^[^Aa]{6,}$/;
console.log(re.test(str)); // Виведе true, оскільки рядок має більше шести символів і не містить літери "А" або "а".
