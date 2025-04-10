import { Input, InputGroup, InputLeftElement, Box, keyframes } from "@chakra-ui/react";

// Animation: subtle wobble effect
const wobble = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
  100% { transform: rotate(0deg); }
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <Box
      border="2px solid black "
      borderColor="purple.300"
      borderRadius="full"
      overflow="hidden"
      boxShadow="0 0 0 4px rgba(128, 90, 213, 0.1)"
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      transition="all 0.3s"
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
        </InputLeftElement>
        <Input
          placeholder="Search your favorite Pokémon..."
          value={value}
          onChange={onChange}
          size="lg"
          variant="unstyled"
          _hover={{ 
            boxShadow: "0 0 20px #F72585", 
            transform: "scale(1.05)", 
            bgGradient: "linear(to-tr, #F72585, #3A86FF)" 
          }}
          px={6}
          py={4}
          fontWeight="bold"
          bgGradient="linear(to-r, purple.100, pink.100)"
          _placeholder={{ color: "purple.500", fontStyle: "italic" }}
          borderRadius="full"
          color="purple.700"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
