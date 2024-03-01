const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');


const initialState = {
    loading: false,
    users: [],
    error: ''
}

//generates pending, fulfilled and rejecteed action types
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    EXTRArEDUCER: builder  => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        } )
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload
        })

    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers