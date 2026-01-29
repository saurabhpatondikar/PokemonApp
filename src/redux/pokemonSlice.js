import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemon } from '../network/pokemonApi';

export const getPokemon = createAsyncThunk(
  'pokemon/getPokemon',
  fetchPokemon
);


const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    list: [],
    liked: [],
    disliked: [],
    loading: false,
  },
  reducers: {
    likePokemon: (state, action) => {
      state.liked.push(action.payload);
      state.list = state.list.filter(
        (p) => p.id !== action.payload.id
      );
    },
    dislikePokemon: (state, action) => {
      state.disliked.push(action.payload.id);
      state.list = state.list.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        // filter out already swiped Pokémon
        state.list = action.payload.filter(
          (p) =>
            !state.liked.some((l) => l.id === p.id) &&
            !state.disliked.includes(p.id)
        );
        state.loading = false;
      });
  },
});

export const {
  likePokemon,
  dislikePokemon,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
