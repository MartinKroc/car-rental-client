const initState = {
    userCred: {
        email: 'test',
        password: 'test'
    }
}

const rootReducer = (state = initState,action) => {
if(action.type === 'SIGNIN') {
    let newCred = {
        email: action.email,
        password: action.password
    }
    return {
        ...state,
        userCred: newCred
    }
}
return state
}

export default rootReducer;
