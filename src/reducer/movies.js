const moviesReducerDefaultState = []

const moviesReducer = (state = moviesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                action.movie
            ];
        
        default:
            return state;
    }
}

export default moviesReducer;