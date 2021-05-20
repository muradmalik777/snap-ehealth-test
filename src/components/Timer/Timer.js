import { Box, Typography, LinearProgress, Slider } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./Timer.scss";
import CustomButton from "../CustomButton";

const Timer = () => {
    const [time, setTime] = useState(5);
    const [gauge, setGauge] = useState(0);

    useEffect(() => {
        const fillGauge = setInterval(() => {
            setGauge((prevValue) => (prevValue >= time ? time : prevValue + 1));
        }, 500);

        return () => {
            clearInterval(fillGauge);
        };
    }, [time]);

    const handleTimeChange = (e, newValue) => {
        setTime(newValue);
    };

    const reset = () => {
        setGauge(0);
        setTime(5);
    };

    return (
        <Box
            className="timer"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Box className="titleBox">
                <Typography variant="h4">Timer</Typography>
            </Box>
            <Box className="contentBox">
                <Box
                    className="gaugeBox"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6">Elapsed Time:</Typography>
                    <Box className="gauge">
                        <LinearProgress
                            variant="determinate"
                            value={gauge}
                            classes={{ determinate: "holder", bar: "bar" }}
                        />
                    </Box>
                </Box>
                <Typography variant="h6">{time} s</Typography>
                <Box
                    className="timeBox"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6">Duration:</Typography>
                    <Box className="slider">
                        <Slider
                            step={0.1}
                            value={time}
                            onChange={handleTimeChange}
                            classes={{
                                rail: "rail",
                                track: "bar",
                                thumb: "thumb",
                            }}
                        />
                    </Box>
                </Box>
                <CustomButton className="submitButton full" onClick={reset}>
                    Reset
                </CustomButton>
            </Box>
        </Box>
    );
};

export default Timer;
