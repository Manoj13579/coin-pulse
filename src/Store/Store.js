import { configureStore } from "@reduxjs/toolkit";
import getCryptoSlice from "./getCryptoSlice";



const Store = configureStore({
    reducer: {
        getAllCrypto: getCryptoSlice
    }
});

export default Store;