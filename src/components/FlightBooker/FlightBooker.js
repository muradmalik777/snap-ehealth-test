import {
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./FlightBooker.scss";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import CustomButton from "../CustomButton/CustomButton";

const FlightBooker = () => {
    const [bookingType, setBookingType] = useState(0);
    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(
        new Date().setDate(new Date().getDate() + 1)
    );
    const [errors, setErrors] = useState({});

    const flightTypeMenu = [
        { label: "One-way Flight", value: 0 },
        { label: "Return Flight", value: 1 },
    ];

    const handleBookingTypeChange = (e) => {
        setBookingType(e.target.value);
    };

    const handleDepartDateChange = (date) => {
        console.log(typeof date);
        if (date.toString() === "Invalid Date") {
            updateErrors("departDateError", true);
            setDepartDate(date);
        } else {
            setDepartDate(date);
            updateErrors("departDateError", false);
        }
    };

    const handleReturnDateChange = (date) => {
        if (date.toString() === "Invalid Date") {
            updateErrors("returnDateError", true);
            setReturnDate(date);
        } else {
            setReturnDate(date);
            updateErrors("returnDateError", false);
        }
    };

    const updateErrors = (key, value) => {
        let prevErrors = { ...errors };
        prevErrors[key] = value;
        setErrors(prevErrors);
    };

    const validateDates = () => {
        if (
            departDate.toString() !== "Invalid Date" &&
            returnDate.toString !== "Invalid Date" &&
            bookingType
        ) {
            const departUTC = new Date(departDate).getTime();
            const returnUTC = new Date(returnDate).getTime();
            if (departUTC >= returnUTC) {
                updateErrors("invalidReturnDate", true);
            } else {
                updateErrors("invalidReturnDate", false);
            }
        } else {
            updateErrors("invalidReturnDate", false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(validateDates, [departDate, returnDate, bookingType]);

    return (
        <Box
            className="temperatureConverter"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Box className="titleBox">
                <Typography variant="h4">Flight Booker</Typography>
            </Box>
            <Box className="contentBox">
                <Box className="inputBox">
                    <FormControl variant="outlined" className="customSelect">
                        <InputLabel className="label" id="flight-type-label">
                            Booking Type
                        </InputLabel>
                        <Select
                            labelId="flight-type-label"
                            id="light-type-select"
                            value={bookingType}
                            onChange={handleBookingTypeChange}
                            label="Booking Type"
                        >
                            {flightTypeMenu.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            variant="inline"
                            inputVariant="outlined"
                            format="dd-MM-yyyy"
                            className="customInput"
                            margin="normal"
                            id="return-date"
                            label="Departure Date"
                            value={departDate}
                            onChange={handleDepartDateChange}
                        />
                        <KeyboardDatePicker
                            disabled={!bookingType}
                            margin="normal"
                            variant="inline"
                            inputVariant="outlined"
                            id="return-date"
                            label="Return Date"
                            format="dd-MM-yyyy"
                            className="customInput"
                            value={returnDate}
                            onChange={handleReturnDateChange}
                            error={errors["invalidReturnDate"]}
                        />
                    </MuiPickersUtilsProvider>
                    {errors["invalidReturnDate"] && (
                        <Typography className="error" variant="p">
                            Return date is not valid, it should be greater than
                            Departure date
                        </Typography>
                    )}
                </Box>

                <Box className="actionBox">
                    <CustomButton
                        disabled={
                            errors["departDateError"] ||
                            errors["returnDateError"] ||
                            errors["invalidReturnDate"]
                        }
                        className="submitButton full"
                    >
                        Book flight
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    );
};

export default FlightBooker;
