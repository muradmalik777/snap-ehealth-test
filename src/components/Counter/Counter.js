import { Box, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Counter.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        let val = count;
        val += 1;
        setCount(val);
    };

    const decrement = () => {
        let val = count;
        val -= 1;
        setCount(val);
    };
    return (
        <Box
            className="counter"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Box className="titleBox">
                <Typography variant="h4">Counter</Typography>
            </Box>
            <Box className="contentBox">
                <Box className="inputBox">
                    <TextField
                        variant="outlined"
                        disabled={true}
                        value={count}
                        className="customInput"
                    />
                </Box>
                <Box className="actionBox">
                    <CustomButton className="iconButton" onClick={increment}>
                        <AddIcon />
                    </CustomButton>
                    <CustomButton className="iconButton" onClick={decrement}>
                        <RemoveIcon />
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Counter;
