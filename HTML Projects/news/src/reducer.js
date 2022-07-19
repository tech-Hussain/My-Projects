
const reducer = (state, action) => {
    switch (action.type) {
        case "Get_Data":
            return({
            hits: action.extras.hits,
            page: action.extras.page,
            nbPages: action.extras.nbPages,
    })
        default:
            break;
    }
}

export default reducer