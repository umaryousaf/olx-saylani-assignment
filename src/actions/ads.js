import {
    GET_ADS,
    GET_ADS_FAIL,
    GET_SINGLE_AD,
    GET_SINGLE_AD_FAIL,
    ADD_NEW_AD,
    ADD_NEW_AD_FAIL
} from './type'
import { db } from '../config/firebase';


export const getAds = () => async dispatch => {

    try {
        db.ref('items').on('value', (snapshot) => {
            let itemsList = []
            snapshot.forEach((snap) => {
                var key = snap.key
                var data = snap.val()
                const {
                    company,
                    title,
                    state,
                    price,
                    country,
                    description,
                    number,
                    image,
                    condition,
                } = data
                itemsList.push({
                    key: key,
                    title: title,
                    condition: condition,
                    description: description,
                    price: price,
                    state: state,
                    country: country,
                    image: image,
                    company: company,
                    number: number
                })

            })
            dispatch({
                type: GET_ADS,
                payload: itemsList
            })
        })

    } catch (error) {
        dispatch({
            type: GET_ADS_FAIL
        })
        console.log(error)
    }

}


export const getSingleAd = (id) => async dispatch => {

    try {
        db.ref(`items/${id}`).on('value', (snapshot) => {
            const itemSingle = snapshot.val()
            dispatch({
                type: GET_SINGLE_AD,
                payload: itemSingle
            })
        })
    } catch (error) {
        dispatch({
            type: GET_SINGLE_AD_FAIL
        })
    }

}

export const addNewAd = (adData) => async dispatch => {

    try {
        const data = db.ref('/').child('items').push(adData)
        dispatch({
            type: ADD_NEW_AD,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_NEW_AD_FAIL
        })
    }

}