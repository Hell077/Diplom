// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // Игнорируем ошибки записи
    }
};

const persistedState = loadState();

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
