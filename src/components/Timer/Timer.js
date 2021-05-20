import { Box, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./Timer.scss";
import {
    convertCelciusToFahrenheit,
    convertFahrenheitToCelcius,
} from "../../utils/helpers";

const Timer = () => {
    const [celcius, setCelcius] = useState("0");
    const [fahrenheit, setFahrenheit] = useState("0");

    useEffect(() => {
        setCelcius("0");
        setFahrenheit(convertCelciusToFahrenheit("0"));
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        let celciusValue = 0;
        let fahrenheitValue = 0;
        if (value) {
            if (e.target.name === "celcius") {
                celciusValue = value;
                fahrenheitValue = convertCelciusToFahrenheit(value);
                setCelcius(celciusValue);
                setFahrenheit(fahrenheitValue);
            } else {
                celciusValue = convertFahrenheitToCelcius(value);
                fahrenheitValue = value;
                setCelcius(celciusValue);
                setFahrenheit(fahrenheitValue);
            }
        } else {
            setCelcius(value);
            setFahrenheit(value);
        }
    };

    return (
        <Box
            className="temperatureConverter"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Box className="titleBox">
                <Typography variant="h4">Temperature Converter</Typography>
            </Box>
            <Box className="contentBox">
                <Box className="inputBox">
                    <TextField
                        variant="outlined"
                        label="Celcius"
                        value={celcius}
                        name="celcius"
                        className="customInput"
                        onChange={handleChange}
                    />
                    &#61;
                    <TextField
                        variant="outlined"
                        label="Fahrenheit"
                        value={fahrenheit}
                        name="fahrenheit"
                        className="customInput"
                        onChange={handleChange}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Timer;
