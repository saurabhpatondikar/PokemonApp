export const fetchPokemon = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );
  const data = await response.json();

  const detailedPokemon = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return detailedPokemon;
};
