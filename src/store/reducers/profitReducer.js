

const handlers = {
    DEFAULT: state => state,
}

// initial state
const initialState = {}
// reducer function
const profitReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}


export default profitReducer;