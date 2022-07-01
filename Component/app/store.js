import { configureStore } from '@reduxjs/toolkit';
import HomeFeatures from '../features/HomeFeatures';

export default configureStore({
  reducer: {
   HomeFeatures:HomeFeatures
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
  
});