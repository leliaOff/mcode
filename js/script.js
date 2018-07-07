
//getcolors('#32bdf2', '#f7528e');
function getcolors(start, finish) {
    start = hexToRgb(start);
    finish = hexToRgb(finish);
    let steps = [];
    let colorList = [];
    colorList.push(print(start));
    for(let i = 0; i < 3; i++) {
        let color = [];
        for(let j = 0; j < 3; j++) {
            let step = Math.round((finish[j] - start[j]) / 4);
            color[j] = (start[j] + step * (i + 1));
        }
        colorList.push(print(color));
    }
    colorList.push(print(finish));
}

function hexToRgb(color) {
    color = color.slice(1).match(/.{2}/g);
    color[0] = parseInt(color[0], 16);
    color[1] = parseInt(color[1], 16);
    color[2] = parseInt(color[2], 16);
    return color;
}

function rgbToHex(color) {
    color[0] = Number(color[0]).toString(16);
    color[1] = Number(color[1]).toString(16);
    color[2] = Number(color[2]).toString(16);
    return `#${color[0]}${color[1]}${color[2]}`;
}

function print(color) {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

getcolors('#32bdf2', '#f7528e');