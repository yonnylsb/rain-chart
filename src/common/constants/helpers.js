export default function chanceOfRain(pressure, temperature, amount) {
    let score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
    let mean = Math.min(Math.max(score, 0), 100)
    let upper_bound = Math.min(1.5 * mean, 100);
    let lower_bound = Math.max(0.5 * mean, 0);

    return [lower_bound, mean, upper_bound];
}