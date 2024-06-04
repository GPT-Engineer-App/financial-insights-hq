import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Insights",
    description: "An in-depth look at the current state of global markets.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Innovations 2023",
    description: "The latest advancements in technology this year.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Economic Outlook",
    description: "Predictions and analysis for the upcoming economic trends.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market hits all-time high",
  "New tech startups to watch",
  "Economic policies to be aware of",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={NavLink} to="/" exact>Home</Link>
          <Link as={NavLink} to="/world">World</Link>
          <Link as={NavLink} to="/business">Business</Link>
          <Link as={NavLink} to="/markets">Markets</Link>
          <Link as={NavLink} to="/opinion">Opinion</Link>
          <Link as={NavLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3">
          <VStack spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src={article.image} alt={article.title} mb={4} />
                <Heading size="md" mb={2}>{article.title}</Heading>
                <Text>{article.description}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={4}>Trending Articles</Heading>
            <VStack spacing={2} align="start">
              {trendingArticles.map((title, index) => (
                <Text key={index}>• {title}</Text>
              ))}
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;