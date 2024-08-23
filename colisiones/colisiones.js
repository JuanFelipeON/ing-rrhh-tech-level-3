function robotColisiones(n, i = 0, colisiones = new Array(n.length).fill(0)) {
    if (i >= n.length - 1) {
        return colisiones.join(' ');
    }

    if (n[i] === 'R' && n[i + 1] === 'L') {
        colisiones[i]++;
        colisiones[i + 1]++;

        n = n.slice(0, i) + 'L' + 'R' + n.slice(i + 2);

        if (i > 0) {
            i--;
        }
    } else {
        i++;
    }

    return robotColisiones(n, i, colisiones);
}

console.log(robotColisiones('LR'));
console.log(robotColisiones('RL'));
console.log(robotColisiones('RRR'));
console.log(robotColisiones('RRL'));
console.log(robotColisiones('RRLL'));

module.exports = robotColisiones;
