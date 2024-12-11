import { fizzBuzz } from '../src/fizzbuzz';

describe('FizzBuzz Function', () => {
    it('should throw an error for non-positive input', () => {
        expect(() => fizzBuzz(0)).toThrow('n muss größer als 0 sein.');
        expect(() => fizzBuzz(-5)).toThrow('n muss größer als 0 sein.');
    });

    it('sollte einen error werfen für keine ganzen Zahlen', () => {
        expect(() => fizzBuzz(2.2)).toThrow('n muss eine ganze Zahl sein.');
        expect(() => fizzBuzz(4.2)).toThrow('n muss eine ganze Zahl sein.');
    });

    it('sollte das richte string array für n = 15 liefern', () => {
        const expected = [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ];
        expect(fizzBuzz(15)).toEqual(expected);
    });

    it('sollte auch bei kleinen Zahlen funktionieren', () => {
        expect(fizzBuzz(2)).toEqual(['1', '2']);
    });

    it('sollte korrekte Werte für FizzBuzz zahlen liefern', () => {
        const result = fizzBuzz(15);

        // Check divisible by 3
        expect(result[2]).toBe('Fizz');
        expect(result[5]).toBe('Fizz');
        expect(result[8]).toBe('Fizz');

        // Check divisible by 5
        expect(result[4]).toBe('Buzz');
        expect(result[9]).toBe('Buzz');

        // Check divisible by both 3 and 5
        expect(result[14]).toBe('FizzBuzz');
    });
});
