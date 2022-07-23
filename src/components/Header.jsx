import { useSelector } from 'react-redux';
import { Center, Box, Text, Image } from '@chakra-ui/react';

function Header() {
  const data = useSelector((state) => state.products);

  return (
    <>
      <Box mt={5} p={5} bg="white" boxShadow="lg">
        <Image borderRadius="full" m="auto" src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
        <Center bg="none">
          <Text bg="none" mt={5} fontSize={35} fontWeight={700}>
            Spend Bill Gates' Money
          </Text>
        </Center>
      </Box>
      <Box bg="green.400" h={50} pos="sticky" top={-1} mt={3} zIndex={2}>
        <Text boxShadow="md" bg="green.400" w="100%" textAlign="center" fontSize={40} fontWeight={500}>{`$${new Intl.NumberFormat('en-US').format(data.money)}`}</Text>
      </Box>
    </>
  );
}

export default Header;
