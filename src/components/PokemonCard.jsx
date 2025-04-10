import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const getIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

export default function PokemonCard({ name, url }) {
  const id = getIdFromUrl(url);

  return (
    <Link href={`/pokemon/${id}`}>
      <Box
        borderWidth="2px"
        borderColor="#7209B7"
        borderRadius="xl"
        overflow="hidden"
        p={4}
        _hover={{ 
          boxShadow: "0 0 20px #F72585", 
          transform: "scale(1.05)", 
          bgGradient: "linear(to-tr, #F72585, #3A86FF)" 
        }}
        transition="0.3s"
        cursor="pointer"
        bg="gray.900"
        color="white"
      >
        <VStack>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            boxSize="96px"
          />
          <Text 
            fontSize="xl" 
            fontWeight="bold" 
            textTransform="capitalize"
            textShadow="0 0 6px #FF006E"
            color="#FFBE0B"
          >
            {name}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
