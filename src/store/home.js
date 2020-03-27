import axios from 'axios';

export default {
    namespaced: true,
    state: {
        data: {},
        items: [],
        itemNumPerPage: 12,
        nextPageToken: '',
        currentPage: 1,
    },
    actions: {
        getData({ commit, getters }) {
            const api =
                "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyCn6tgkvpqZ6iP8z4kfetv2wjub9tmenSA";
            commit('LOADING', true, { root: true })
            axios.get(api).then((response) => {
                commit('DATA', response.data)
                const newApi = api + `&pageToken=${getters.nextPageToken}`
                axios.get(newApi).then((response) => {
                    commit('CONCATDATA', response.data.items)
                })
                commit('LOADING', false, { root: true })
            });
        },

    },
    mutations: {
        DATA(state, payload) {
            state.data = payload;
            state.items = payload.items;
            state.nextPageToken = payload.nextPageToken || '';
        },
        CONCATDATA(state, payload) {
            state.items = state.items.concat(payload)
        },
        CURRENTPAGE(state, payload) {
            state.currentPage = payload;
        },
    },
    getters: {
        data: (state) => state.data,
        items: (state) => state.items,
        nextPageToken: (state) => state.nextPageToken,
        allPageNum: (state) => Math.ceil(state.items.length / state.itemNumPerPage),
        renderPage: (state) => {
            return state.items.filter((item, index) => {
                return index >= (state.currentPage - 1) * state.itemNumPerPage &&
                    index <= state.currentPage * state.itemNumPerPage - 1
            })
        }
    }
}