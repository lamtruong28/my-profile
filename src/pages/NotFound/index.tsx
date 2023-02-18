import { Link } from "react-router-dom";
import configs from "~/configs";

const NotFound = () => {
    return (
        <div>
            <h1>404 not found!</h1>
            <Link to={configs.routes.home}>Go to home</Link>
        </div>
    );
};

export default NotFound;
