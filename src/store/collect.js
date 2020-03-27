import axios from 'axios';

export default {
    namespaced: true,
    state: {
        favoriteItems: [],
        currentPage: 1,
        favoriteItemsId: JSON.parse(localStorage.getItem('collect')) || [],
    },
    actions: {
    },
    mutations: {
        FAVORITETOGGLE(state, payload) {
            payload.event.stopPropagation();
            if (!state.favoriteItemsId.includes(payload.id)) {
                state.favoriteItemsId.push(payload.id)
            }
            else (
                state.favoriteItemsId.splice(state.favoriteItemsId.indexOf(payload.id), 1)
            )
            localStorage.setItem('collect', JSON.stringify(state.favoriteItemsId))
        },
        CURRENTPAGE(state, payload) {
            state.currentPage = payload;
        },
    },
    getters: {
        favoriteItems: (state, getters, rootState) => {
            return rootState.HomeModule.items.filter((item) => {
                return state.favoriteItemsId.includes(item.id)
            })
        },
        favoritePageNum: (state, getters, rootState) =>
            Math.ceil(getters.favoriteItems.length / rootState.HomeModule.itemNumPerPage),
        renderFavoritePage: (state, getters, rootState) => {
            return getters.favoriteItems.filter((item, index) => {
                return index >= (state.currentPage - 1) * rootState.HomeModule.itemNumPerPage &&
                    index <= state.currentPage * rootState.HomeModule.itemNumPerPage - 1
            })
        }
    }
}
