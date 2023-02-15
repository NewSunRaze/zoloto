import catalogResponse from "~/store/mocData/catalog-response";

const store = {
  state: () => ({
    catalogData: catalogResponse
  }),
  getters: {
    getCatalogData(state){
      return state.catalogData
    }
  },
  mutations: {},
  actions: {},

}
export default store
