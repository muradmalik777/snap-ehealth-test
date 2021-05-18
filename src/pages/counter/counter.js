import { Box } from "@material-ui/core";
import "./Counter.scss";
import Counter from "../../components/Counter";

const CounterPage = () => {
    return (
        <Box className="counterPage">
            <Counter />
        </Box>
    );
};

export default CounterPage;
