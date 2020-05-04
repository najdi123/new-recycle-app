const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {
        case 'submit-order':
            console.log('submit order reducer was called')
            console.log(action)
            return [...state, action.payload]
            // return state.orders= [...state, action.payload]

        default:
            return state
    }
}