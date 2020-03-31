import axios from 'axios';


export default({
    namespaced:true,
    state:{
        setItem: JSON.parse(localStorage.getItem('saveItem')) || '',
    },
    actions:{

    },
    mutations:{
        SETITEM(state,payload){
            state.setItem = payload
            // console.log(state.setItem)
            localStorage.setItem('saveItem', JSON.stringify(state.setItem))
        }
    },
    getters:{
        setItem: (state) => state.setItem,
    }
})