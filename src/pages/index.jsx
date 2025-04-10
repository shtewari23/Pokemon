import { useEffect, useState } from "react";
import {
  Box,
  Input,
  SimpleGrid,
  Heading,
  Container,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { getPokemonList } from "../server/pokeApi";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=15"
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPokemonList(currentUrl);
        setPokemons(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (err) {
        console.error("Failed to fetch Pokemons", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUrl]);

  const handlePageChange = (url) => {
    setCurrentUrl(url);
  };

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxW="container.lg" py={6}>
<Heading mb={7  } textAlign="center" fontSize="4xl" color="black">
  Pokémon Explorer
</Heading><Input
  placeholder="Search Pokémon..."
  mb={6}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  size="lg"
  variant="filled"
  border="2px solid black "
  focusBorderColor="white"
  boxShadow="0 0 15px black"

  color="black"
  _hover={{
    transform: "scale(1.02)",
  }}
  
  _focus={{
    boxShadow: "0 0 15px black",
  }}
  transition="all 0.3s ease-in-out"
/>
      {loading ? (
        <Box textAlign="center" mt={8}>
          <Spinner size="xl" />
          <Text mt={2}>Loading Pokémons...</Text>
        </Box>
      ) : (
        <>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {filtered.map((pokemon, index) => (
              <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
            ))}
          </SimpleGrid>

          <Pagination
            nextUrl={nextUrl}
            prevUrl={prevUrl}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
}
