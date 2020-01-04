import collections from "../resources/collections"

const INITIAL_STATE = {
    collections: collections
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {    
        default:
            return state;
    }
}
export default shopReducer;