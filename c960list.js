var start = performance.now();

var positions = [];

for (var r1=0;r1<6;r1++)
	for (var k=r1+1;k<7;k++)
		for (var r2=k+1;r2<8;r2++)
			for (var b1=0;b1<7;b1++) {
				if (b1 === r1 || b1 === k || b1 === r2) continue;
				for (var b2=b1+1;b2<8;b2++)	{
					if (b2 === r1 || b2 === k || b2 === r2) continue;
					if (b1%2 === b2%2) continue;
					for (var n1=0;n1<7;n1++) {
						if (n1 === r1 || n1 === k || n1 === r2 || n1 === b1 || n1 === b2) continue;
						for (var n2=n1+1;n2<8;n2++) {
							if (n2 === r1 || n2 === k || n2 === r2 || n2 === b1 || n2 === b2 || n2 === n1) continue;
							for (var q=0;q<8;q++) {
								if (q === r1 || q === k || q === r2 || q === b1 || q === b2 || q === n1 || q === n2) continue;
								positions.push(r1+''+k+''+r2+''+b1+''+b2+''+n1+''+n2+''+q);
								break;
							}
						}
					}
				}
			}

var end = performance.now();

console.log(positions);

console.log("duration: " + (Math.floor((end-start)*100)/100).toFixed(2) + " ms");

function repAt(string, index, replace) {
	return string.substring(0, parseInt(index)) + replace + string.substring(parseInt(index) + 1);
}

// standard: positions[298]
var randomPosition = Math.floor(Math.random()*1000000 % 960);
var pos = positions[randomPosition];
var l = pos;
pos=repAt(pos, l[0], 'R');
pos=repAt(pos, l[1], 'K');
pos=repAt(pos, l[2], 'R');
pos=repAt(pos, l[3], 'B');
pos=repAt(pos, l[4], 'B');
pos=repAt(pos, l[5], 'N');
pos=repAt(pos, l[6], 'N');
pos=repAt(pos, l[7], 'Q');

document.write(pos + " (" + randomPosition + ")");
console.log("random: " + randomPosition + " -> " + pos + " (" + l + ")");
