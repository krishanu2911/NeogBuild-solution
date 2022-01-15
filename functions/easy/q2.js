// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// 3*root(3)/2 ~= 2.59808

const areaOfHexagon = (lenght) => {
    let area = 2.59808*lenght*lenght;
    return area;
}
console.log(areaOfHexagon(6));