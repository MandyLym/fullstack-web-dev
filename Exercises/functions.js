const greet = () => {
    console.log("Hello!");
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const isAdult = (age) => {
    return age >= 18;
}

const randomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

