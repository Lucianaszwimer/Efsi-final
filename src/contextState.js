import React, { useContext } from 'react';


export const initialState = {
    loading: true,
    carrito: []
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    AddProducto: "ADD_PRODUCTO",
    DelProducto: "DELETE_PRODUCTO",

};


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetLoading:
            return {
                ...state,
                loading: action.value,
            };
        case ActionTypes.AddProducto:
            return {
                ...state,
                carrito: [...state.carrito, action.value],
            };
        case ActionTypes.DelProducto:
            return {
                ...state,
                carrito: state.carrito.filter((p) => p.id !== action.value)
            };
    }
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>

}

export const useContextState = () => useContext(Cont);
