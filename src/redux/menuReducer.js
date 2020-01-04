import sections from "../resources/sections"

const INITIAL_STATE = {sections: sections};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default menuReducer