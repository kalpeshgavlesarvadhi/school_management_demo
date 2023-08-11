import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import sliderbarSlide from 'features/sliderbarSlice';

export const store = configureStore({
  reducer: {
    slidebar: sliderbarSlide,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
