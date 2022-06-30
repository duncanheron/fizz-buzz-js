export function FizzBuzz(x: number): number | string {
    let output = '';
    if (x % 3 === 0) output += 'Fizz';
    if (x % 5 === 0) output += 'Buzz';
    return output.length > 0 ? output : x;
}