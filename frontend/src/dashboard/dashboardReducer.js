const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            console.log('state ' + { ...state })
            console.log('action.payload.data ' + action.payload.data)
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}