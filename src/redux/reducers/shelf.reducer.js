


const shelf = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF_LIST':
            return action.payload;
        default:
            return state;
    }
}


export default shelf;