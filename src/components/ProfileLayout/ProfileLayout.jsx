import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileLayout extends Component {
    render() {
        return (
            <div>
                Profile
                <div>
                    <Link to="/">Back to the main page</Link>
                </div>
            </div>
        );
    }
}

export { ProfileLayout };
