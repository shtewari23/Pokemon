import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (url = `${API_URL}/pokemon?limit=15`) => {
  const response = await axios.get(url);
  return {
    results: response.data.results,
    next: response.data.next,
    previous: response.data.previous,
    count: response.data.count,
  };
};

export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    return null;
  }
};
