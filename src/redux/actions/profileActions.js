export const SET_PROFILE_NAME = '@@profile/SET_PROFILE_NAME';

export const setProfileName = (profileName) => ({
    type: SET_PROFILE_NAME,
    payload: {
        profileName,
    },
});
