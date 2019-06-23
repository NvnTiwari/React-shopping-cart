const shopReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index > -1) {
                return [ ...state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })]
            } else {
                return [...state, { ...action.payload, quantity: 1 }]
            }
        case 'REMOVE_ITEM':
            const removeIndex = state.findIndex(item => item.id === action.payload.id);
            return state.filter(item => item.id !== state[removeIndex].id);
        case 'ORDERED':
            return []
        default:
            return state;
    }
}

export default shopReducer;