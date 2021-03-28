

const handlers = {
    DEFAULT: state => state,
}

// initial state
const initialState = {}
// reducer function
const traderReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}


export default traderReducer;