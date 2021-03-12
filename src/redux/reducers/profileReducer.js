import { SET_PROFILE_NAME } from '../actions/profileActions';

const initialState = {
    profile: {
        profileName: 'Name',
    },
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_NAME: {
            const previousProfileDate = state.profile || {};

            return {
                ...state,
                profile: {
                    ...previousProfileDate,
                    profileName: action.payload.profileName,
                },
            };
        }
        default:
            return state;
    }
};
