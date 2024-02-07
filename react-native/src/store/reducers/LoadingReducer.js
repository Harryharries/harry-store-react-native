import { createReducer } from '@reduxjs/toolkit';
import LoadingActions from '../actions/LoadingActions';

const initialState = { activeLoadings: {}, loading: false };

export default createReducer(initialState, builder =>
  builder
    .addCase(LoadingActions.start, (state, action) => {
      const { key, opacity } = action.payload;
      return {
        ...state,
        actives: { ...state.activeLoadings, [key]: action },
        loading: true,
        opacity,
      };
    })
    .addCase(LoadingActions.stop, (state, action) => {
      const { activeLoadings } = state || {};

      if (action.payload.key) {
        delete state.activeLoadings[action.payload.key];
      }

      if (activeLoadings) {
        state.loading = !!Object.keys(activeLoadings)?.length;
      }
    })
    .addCase(LoadingActions.clear, () => ({})),
);
