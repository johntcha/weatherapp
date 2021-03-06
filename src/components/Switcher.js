import React, {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Switcher = () => {
    return (
        <div className="switcher">
        <Link to="/"><Button variant="contained">Today</Button> </Link>
        <Link to="/week"><Button variant="contained">Week</Button> </Link>
        </div>
    );
};

export default Switcher;
