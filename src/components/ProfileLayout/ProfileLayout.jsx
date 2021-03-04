import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class _ProfileLayout extends Component {
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

const ProfileLayout = withRouter(_ProfileLayout);

export { ProfileLayout };
