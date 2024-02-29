const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numberOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducer: {
        order: (stae) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload,
        },
    }
})

module.exports = cakeSlice,reducer;
module.exports.cakeAction = cakeSlice.actions