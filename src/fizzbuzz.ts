/**
 * Berechnet den FizzBuzz für die Zahlen zwischen 1 und n.
 * Siehe: https://de.wikipedia.org/wiki/Fizz_buzz
 * @param n - Die obere grenze (>0) bis zu welcher der FizzBuzz berechnet werden soll.
 * @returns Eine Liste an Strings, welche für jede Zahl zwischen 1 und n den FizzBuzz als String repräsentiert.
 */
export function fizzBuzz(n: number): string[] {
    if (n < 1) {
        throw new Error('n muss größer als 0 sein.');
    } else if (!Number.isInteger(n)) {
        throw new Error('n muss eine ganze Zahl sein.');
    } else {
        const result: string[] = [];
        for (let i = 1; i <= n; i++) {
            result.push(fizzBuzzSingle(i));
        }
        return result;
    }
}

/**
 * Berechnet den fizzBuzz einer einzelnen Zahl.
 * Siehe: https://de.wikipedia.org/wiki/Fizz_buzz
 * @param number - Eine Zahl (>0), für welche der FizzBuzz berechnet werden soll.
 * @returns Einen String, welcher entweder FizzBuzz, Fizz oder die ursprüngliche Zahl ist.
 */
export function fizzBuzzSingle(number: number): string {
    if (number < 1) {
        throw new Error('Die Zahl muss größer als 0 sein');
    } else {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else {
            return number.toString();
        }
    }
}
