var strokes = JSON.parse(...);//載入strokes.json

function strokesSort (a, b) {
    a = a.slice();
    b = b.slice();
    for (var i = 0; i < a.length; i++) {
        if (!b[i]) {
            return -1;
        }
        var l = strokes[a[i]];
        var r = strokes[b[i]];

        if (l > r) {
            return 1;
        } else if (l < r) {
            return -1;
        } else {
            if (a[i] > b[i]) {
                return 1;
            } else if (a[i] < b[i]) {
                return -1;
            }
        }
    }
    return (a.length === b.length) ? 0 : 1;
}

var exampleArray = ['陳中冒', '王大同', '王小異', '王小光'];

exampleArray.sort((a,b) => {
    return strokesSort (a, b);
});

console.log(exampleArray);

// ["王大同", "王小光", "王小異", "陳中冒"]