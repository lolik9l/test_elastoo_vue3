export default function (min: number = 1000, max: number = 100000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
