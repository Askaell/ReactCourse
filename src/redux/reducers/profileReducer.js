import {
    SET_PROFILE_NAME,
    START_PROFILE_LOADING,
    SUCCESS_PROFILE_LOADING,
    ERROR_PROFILE_LOADING,
} from '../actions/profileActions';

const initialState = {
    profile: {
        profileName: '',
    },
    isLoading: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_PROFILE_LOADING: {
            return {
                ...state,
                isLoading: false,
                profile: action.payload,
            };
        }
        case ERROR_PROFILE_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case START_PROFILE_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
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
