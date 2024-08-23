const robotColisiones = require('./colisiones');

describe('robotColisiones', () => {
    it('Primera secuencia de simbolos', () => {
        expect(robotColisiones('LR')).toBe('0 0');
    });

    it('Segunda secuencia de simbolos', () => {
        expect(robotColisiones('RL')).toBe('1 1');
    });

    it('Tercera secuencia de simbolos', () => {
        expect(robotColisiones('RRR')).toBe('0 0 0');
    });

    it('Cuarta secuencia de simbolos', () => {
        expect(robotColisiones('RRL')).toBe('1 2 1');
    });
});
