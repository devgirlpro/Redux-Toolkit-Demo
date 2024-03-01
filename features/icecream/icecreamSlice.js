const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice')

const initialState = {
    numberOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--
        },
        restocked: (state, action) => {
            state.numberOfIcecreams += action.payload
        },
        extraReducers: (builder) => {
            builder.addCase(cakeActions.ordered, (state, action) => {
                state.numberOfIcecreams--
            })
        }

    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;