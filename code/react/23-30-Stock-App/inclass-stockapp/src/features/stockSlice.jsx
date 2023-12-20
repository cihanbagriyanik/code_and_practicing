import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands: [],
    sales: [],
    products: [],
    purchases: [],
    categories: [],
    //! statelerimizin isimleri ile endpointlerimizin isimlerini aynı verdik. Bunun sebebi tek bir reducerla tüm stateleri dinamik bir şekilde doldurabilelim.
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // firmsSuccess:(state,{payload})=>{
    //     state.loading = false;
    //     state.firms = payload
    // },
    // brandsSuccess:(state,{payload})=>{
    //     state.loading = false;
    //     state.brands = payload
    // },
    //! DRY (Dont Repeat Yourself)
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data; // state["firms"], state["brands"] anlamlarına gelerek tek bir actionla tüm stateleri doldurabilmiş olduk.
    },

    getProCatBrandSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.brands = payload[1];
      state.categories = payload[2];
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  //   firmsSuccess,
  //   brandsSuccess,
  getSuccess,
  getProCatBrandSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
