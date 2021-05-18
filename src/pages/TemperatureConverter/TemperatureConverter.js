import { Box } from "@material-ui/core";
import "./TemperatureConverter.scss";
import TemperatureConverter from "../../components/TemperatureConverter";

const TemperatureConverterPage = () => {
    return (
        <Box className="counterPage">
            <TemperatureConverter />
        </Box>
    );
};

export default TemperatureConverterPage;
