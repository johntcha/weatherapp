import React, {Link} from 'react-router-dom';

const Switcher = () => {
    return (
        <div className="switcher">
        <Link to="/"><button>Today</button> </Link>
        <Link to="/week"><button>Week</button> </Link>
        </div>
    );
};

export default Switcher;
