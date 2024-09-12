import { IAction, IState } from "./types";

export const reducer = (state : IState, action : IAction) :IState => {

    switch (action.type) {
        case "move" :
            return {
                ...state,
                products : state.products,
                movedProducts : [...state.movedProducts, ...state.products.filter(elm => 
                    elm.id == action.payload
                ).map(elm => 
                    elm.count == undefined ?
                    {...elm, count : 1} : {...elm}
                )]
            }
            
        case "add/product" :
            return {
                ...state,
                products : state.products,
                movedProducts : state.movedProducts.map(elm => 
                    elm.id == action.payload ?
                    {...elm, count : elm.count + 1} : {...elm}
                )
            }
        case "sub/product" : 
            return {
                ...state,
                products : state.products,
                movedProducts : state.movedProducts.map(elm => 
                    elm.id == action.payload && elm.count > 1 ?
                    {...elm, count : elm.count - 1} : {...elm}
                )
            }
        case "remove/product" :
            return {
                ...state,
                products : state.products,
                movedProducts : state.movedProducts.filter(elm => 
                    elm.id != action.payload
                )
            }

    }
    return state
}