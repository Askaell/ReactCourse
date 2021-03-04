import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <b>Page not found</b>
            <div>
                <Link to="/">Back to the main page</Link>
            </div>
        </div>
    );
};

export { NotFound };
