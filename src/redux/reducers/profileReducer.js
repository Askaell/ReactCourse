import { SET_PROFILE_NAME } from '../actions/profileActions';

const initialState = {
    profile: {
        profileName: 'testName',
    },
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_NAME: {
            const profile = state.profile || {};

            return {
                ...state,
                profileName: action.payload.profileName,
            };
        }
        default:
            return state;
    }
};
