import { Button, HStack } from "@chakra-ui/react";

export default function Pagination({ nextUrl, prevUrl, onPageChange }) {
  const buttonStyle = {
    size: "lg",
    variant: "outline",
    border: "2px solid black",
    color: "black",
    boxShadow: "0 0 10px black",
    transition: "all 0.3s ease-in-out",
    width:"15%",
    _hover: {
      transform: "scale(1.05)",
      backgroundColor: "blackAlpha.100",
      
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
  };

  return (
    <HStack justify="center" mt={4} spacing={6}>
      <Button
        {...buttonStyle}
        isDisabled={!prevUrl}
        onClick={() => onPageChange(prevUrl)}
      >
        Previous
      </Button>
      <Button
        {...buttonStyle}
        isDisabled={!nextUrl}
        onClick={() => onPageChange(nextUrl)}
      >
        Next
      </Button>
    </HStack>
  );
}
