import { getPokemonDetails } from "../../server/pokeApi";
import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  SimpleGrid,
  Flex,
  Divider,
  Progress,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const getFunkyStatColor = (value) => {
  if (value >= 120) return "pink";
  if (value >= 80) return "orange";
  return "cyan";
};

export async function getServerSideProps({ params }) {
  const pokemon = await getPokemonDetails(params.id);
  return { props: { pokemon } };
}

export default function PokemonDetail({ pokemon }) {
  const cardBg = "rgba(255, 255, 255, 0.1)";
  const textColor = "white";

  if (!pokemon) return <Text>Pokémon not found</Text>;

  return (
    <MotionBox
      px={[4, 6, 8]}
      py={[6, 8]}
      maxW="container.lg"
      mx="auto"
      mt={[6, 8, 12]}
      bgGradient="linear(to-br, #1A1A40, #2F0743)"
      borderRadius="2xl"
      boxShadow="0 0 20px #FF00C8"
      color={textColor}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Flex direction="column" align="center" textAlign="center" gap={6}>
        <MotionImage
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          boxSize={["120px", "150px", "180px"]}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          textTransform="capitalize"
          color="#F72585"
          fontWeight="bold"
          textShadow="0 0 10px #F72585"
        >
          {pokemon.name}
        </Heading>

        <Text fontSize={["md", "lg"]} color="white" mb={2}>
          Base Experience:
          <Badge
            ml={3}
            fontSize="1em"
            px={3}
            py={1}
            borderRadius="lg"
            bg="#F9C80E"
            color="black"
          >
            {pokemon.base_experience}
          </Badge>
        </Text>

        <Divider my={4} borderColor="pink.300" w="100%" />

        <SimpleGrid columns={[1, null, 2]} spacing={6} w="full">
          {/* Types */}
          <MotionBox
            bg={cardBg}
            p={[4, 5]}
            borderRadius="lg"
            boxShadow="0 0 10px #00E6F6"
            backdropFilter="blur(10px)"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Text fontWeight="bold" fontSize="xl" mb={2} color="#00E6F6">
              Types
            </Text>
            {pokemon.types.map((t) => (
              <Badge
                key={t.type.name}
                bg="#0FF0FC"
                color="black"
                fontSize="0.9em"
                mr={2}
                mb={2}
                px={3}
                py={1}
                borderRadius="md"
              >
                {t.type.name}
              </Badge>
            ))}
          </MotionBox>

          {/* Abilities */}
          <MotionBox
            bg={cardBg}
            p={[4, 5]}
            borderRadius="lg"
            boxShadow="0 0 10px #F72585"
            backdropFilter="blur(10px)"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Text fontWeight="bold" fontSize="xl" mb={3} color="#F72585">
              Abilities
            </Text>
            <Flex wrap="wrap" gap={3}>
              {pokemon.abilities.map((a) => (
                <Badge
                  key={a.ability.name}
                  bg="#FB5607"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="xl"
                  fontSize="sm"
                >
                  {a.ability.name}
                </Badge>
              ))}
            </Flex>
          </MotionBox>

          {/* Stats */}
          <MotionBox
            bg={cardBg}
            p={[4, 5]}
            borderRadius="lg"
            boxShadow="0 0 10px #3A86FF"
            backdropFilter="blur(10px)"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Text fontWeight="bold" fontSize="xl" mb={4} color="#3A86FF">
              Stats
            </Text>
            {pokemon.stats.map((s) => {
              const statColor = getFunkyStatColor(s.base_stat);
              return (
                <Box key={s.stat.name} mb={4}>
                  <Flex justify="space-between" mb={1}>
                    <Text fontSize="sm" fontWeight="bold" color="white">
                      {s.stat.name.toUpperCase()}
                    </Text>
                    <Text fontSize="sm" color={`${statColor}.300`}>
                      {s.base_stat}
                    </Text>
                  </Flex>
                  <Tooltip label={s.base_stat} hasArrow bg="black">
                    <Progress
                      value={s.base_stat}
                      size="md"
                      colorScheme={statColor}
                      borderRadius="xl"
                      _hover={{ filter: "brightness(1.2)" }}
                    />
                  </Tooltip>
                </Box>
              );
            })}
          </MotionBox>

          {/* Top Moves */}
          <MotionBox
            bg={cardBg}
            p={[4, 5]}
            borderRadius="lg"
            boxShadow="0 0 10px #8338EC"
            backdropFilter="blur(10px)"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Text fontWeight="bold" fontSize="xl" mb={3} color="#8338EC">
              Top Moves
            </Text>
            <Flex wrap="wrap" gap={3}>
              {pokemon.moves.slice(0, 5).map((m) => (
                <Badge
                  key={m.move.name}
                  bg="#8338EC"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                >
                  ⚡ {m.move.name}
                </Badge>
              ))}
            </Flex>
          </MotionBox>
        </SimpleGrid>
      </Flex>
    </MotionBox>
  );
}
