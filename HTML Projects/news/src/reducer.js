
const reducer = (state, action) => {
    switch (action.type) {
        case "Get_Data":
            return ({
                ...state,
                isLoading: false,
                hits: action.extras.hits,
                page: action.extras.page,
                nbPages: action.extras.nbPages,
                nbHits: action.extras.nbHits
            })
        case "change":
            return ({
                ...state,
                query: action.extras,
            })
        case "delete":
            return ({
                ...state,
                hits:action.extras
            })
        default:
            break;
    }
}

export default reducer