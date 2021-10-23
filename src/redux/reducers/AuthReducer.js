const auth = JSON.parse(localStorage.getItem('auth'));

//cada reducer tiene su propio state
const initialState = {
    token: auth ? auth.token : '',
    user: auth ? auth.user : null,
}

export default function ( state = initialState, action ){
    switch (action.type) {
        case "SET_AUTH_USER":
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state;
    }
}
