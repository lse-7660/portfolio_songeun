import { configureStore } from '@reduxjs/toolkit';
import gallery from './modules/gallerySlice';

const store = configureStore({
    reducer: {
        gallery,
    },
});

export default store;
