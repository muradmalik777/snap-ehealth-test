export const convertCelciusToFahrenheit = (val) => {
    const converted = val * (9 / 5) + 32;
    return converted % 1 !== 0 ? converted.toFixed(2) : converted;
};

export const convertFahrenheitToCelcius = (val) => {
    const converted = (val - 32) * (5 / 9);
    return converted % 1 !== 0 ? converted.toFixed(2) : converted;
};
