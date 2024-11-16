import { Box, Text, VStack, Heading, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Offers() {
  const offers = [
    {
      schoolName: "University",
      logo: "utsa-logo.png", 
      description: "Full athletic scholarship",
    },
    {
      schoolName: "College",
      logo: "utsa-logo.png",
      description: "Full athletic scholarship",
    },
  ];

  return (
    <VStack
      spacing={10}
      p={6}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12}
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#F5F5DC" fontFamily="'Merienda', cursive" mb="5" textAlign="center">
        Scholarship Offers
      </Heading>
      <Flex
        direction="column" 
        alignItems="center"
        width="100%"
      >
        {offers.map((offer, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="150px"
            minW="320px"
            m="5"
            bgColor="#F5F5DC"
            bgImage="linear-gradient(-45deg, #F5F5DC 25%, transparent 25%, transparent 50%, #F5F5DC 50%, #F5F5DC 75%, transparent 75%, transparent)"
            bgSize="1px 1px"
            borderRadius="12px"
            borderWidth="5px"
            borderColor="#D8B29E"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Image
              src={offer.logo}
              alt={`${offer.schoolName} logo`}
              boxSize="80px"
              objectFit="contain"
              borderRadius="8px"
              mr={4}
            />
            <Box>
              <Text color="#20B2AA" fontWeight="bold" fontFamily="'Merienda', cursive" fontSize="lg">
                {offer.schoolName}
              </Text>
              <Text color="#20B2AA" fontFamily="'Roboto+Condensed', system-ui" fontSize="md" fontWeight="semibold" mt={1}>
                {offer.description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Offers;