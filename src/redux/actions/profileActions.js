import { getJSON, RSAA } from 'redux-api-middleware';

export const START_PROFILE_LOADING = '@@message/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@message/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@message/ERROR_PROFILE_LOADING';
export const loadProfile = () => ({
    [RSAA]: {
        endpoint: '/api/profile.json',
        method: 'GET',
        types: [
            START_PROFILE_LOADING,
            {
                type: SUCCESS_PROFILE_LOADING,
                payload: (action, state, res) => getJSON(res).then((data) => data),
            },
            ERROR_PROFILE_LOADING,
        ],
    },
});

export const SET_PROFILE_NAME = '@@profile/SET_PROFILE_NAME';
export const setProfileName = (profileName) => ({
    type: SET_PROFILE_NAME,
    payload: {
        profileName,
    },
});
