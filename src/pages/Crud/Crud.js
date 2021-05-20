import { Box } from "@material-ui/core";
import "./Crud.scss";
import Crud from "../../components/Crud";

const CrudPage = () => {
    return (
        <Box className="crudPage">
            <Crud />
        </Box>
    );
};

export default CrudPage;
