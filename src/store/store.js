import { createStore } from "redux";
import items from "./itemsData";


const store = createStore(function (state, action) {
    if(action.type === "media"){
        return{
            ...state,
            mediaPopup:action.payload
        }
    }

    if(action.type === "getPopup"){
        return{
            ...state,
            getPopup:action.payload
        }
    }
    
    return state
}, {
    items,
    mediaPopup:"",
    getPopup:"",
})

export default store