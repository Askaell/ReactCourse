import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Grid, List } from '@material-ui/core';
import { connect } from 'react-redux';

import { setProfileName } from '../../redux/actions/profileActions';

class _ProfileLayout extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        setProfileName: PropTypes.func.isRequired,
    };

    state = {
        nameField: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.nameField.length === 0) {
            return;
        }
        this.setName(this.state.nameField);
        this.setState({ nameField: [] });
    };

    setName = (profileName) => {
        this.props.setProfileName(profileName);
    };

    render() {
        const { profile } = this.props;

        return (
            <div>
                <div>Profile name: {profile.profileName}</div>
                <div className="name_input">
                    <form id="name_input_form" onSubmit={this.handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <TextField
                                    id="nameField"
                                    name="nameField"
                                    label="Name"
                                    variant="outlined"
                                    value={this.state.nameField}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <Button
                                    id="setNameButton"
                                    color="primary"
                                    variant="contained"
                                    onClick={this.handleSubmit}
                                    type="submit"
                                >
                                    Set
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
});

const ProfileLayout = connect(mapStateToProps, { setProfileName })(_ProfileLayout);

export { ProfileLayout };
