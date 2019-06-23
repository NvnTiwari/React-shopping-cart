export const addToCart = item => dispatch => dispatch({
    type: 'ADD_ITEM',
    payload: item
})

export const removeFromCart = item => dispatch => dispatch({
    type: 'REMOVE_ITEM',
    payload: item
})

export const orderNow = () => dispatch => dispatch({
    type: 'ORDERED',
    payload: []
})