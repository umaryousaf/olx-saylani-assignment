import {
    GET_ADS,
    GET_ADS_FAIL,
    GET_SINGLE_AD,
    GET_SINGLE_AD_FAIL,
    ADD_NEW_AD,
    ADD_NEW_AD_FAIL
} from '../actions/type'

const initialState = {
    ads: [],
    ad: {},
}

export default function (state = initialState, action) {

    const { payload, type } = action

    switch (type) {
        case GET_ADS:
            return {
                ...state,
                ads: payload
            }
        case GET_SINGLE_AD:
            return {
                ...state,
                ad: payload
            }
        case ADD_NEW_AD:
            return {
                ...state,
                ads: [payload, ...state.ads]
            }
        case GET_SINGLE_AD_FAIL:
        case GET_ADS_FAIL:
        case ADD_NEW_AD_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}