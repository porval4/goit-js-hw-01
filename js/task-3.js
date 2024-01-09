

function getElementWidth(content, padding, border) {
    // Parse the values to remove "px" and convert to numbers
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // Calculate the total width based on the box-sizing model
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));      // 74
console.log(getElementWidth("60px", "12px", "8.5px"));   // 101
console.log(getElementWidth("200px", "0px", "0px"));     // 200
