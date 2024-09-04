import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../Utils/statusCode";
import axios from "axios";





const currencySymbols = {
    'usd': '$',
    'eur': '€'
  }

  
// createAsyncThunk to accept a 'currency' parameter
const getAllCrypto = createAsyncThunk('crypto/get', async (currency) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, {
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': import.meta.env.API_KEY,
      }
    });
    // Return both data and currency to get currencySymbols by currency for extraReducers
    return { data: response.data, currency }; 
  } catch (error) {
    console.error(error);
    throw error;
  }
});


const initialState = {
  data: [],
  status: statusCode.IDLE,
  currencySymbols: '',
  currency: 'usd'
}

const getCryptoSlice = createSlice({
  name: 'getAllCrypto',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCrypto.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getAllCrypto.fulfilled, (state, action) => {
        // Destructure data and currency
        const { data, currency } = action.payload;
        state.data = data;
        /* currencySymbols[currency] takes currency returned from api and returns symbol of matched currency from currencySymbols defined at top */
        state.currencySymbols = currencySymbols[currency];
        state.currency = currency;
        state.status = statusCode.IDLE;
      })
      .addCase(getAllCrypto.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      });
  }
});

export { getAllCrypto };
export default getCryptoSlice.reducer;