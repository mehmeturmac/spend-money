import { useSelector } from 'react-redux';
import { Center, Box, Text, Link } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

function Footer() {
  const data = useSelector((state) => state.products);

  return (
    <Box mt={5} p={5} bg="white">
      {data.money !== data.initialMoney && (
        <>
          <Center bg="none">
            <Text bg="none" my={5} fontSize={35} fontWeight={500}>
              Basket
            </Text>
          </Center>
          <Center bg="none">
            <TableContainer w="50%">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Product</Th>
                    <Th>Count</Th>
                    <Th>Cost</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.items.map(
                    (product) =>
                      product.count > 0 && (
                        <Tr key={product.id}>
                          <Td>{product.productName}</Td>
                          <Td>{`x${product.count}`}</Td>
                          <Td>{`$${new Intl.NumberFormat('en-US').format(product.count * product.productPrice)}`}</Td>
                        </Tr>
                      )
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Center>
          <Center bg="none">
            <Text bg="none" my={5} fontSize={25} fontWeight={500}>
              Total: {`$${new Intl.NumberFormat('en-US').format(data.initialMoney - data.money)}`}
            </Text>
          </Center>
        </>
      )}
      <Center bg="none">
        <Text bg="none" fontSize={15} fontWeight={700}>
          Coded by <Link href="https://www.linkedin.com/in/mehmeturmac/">Mehmet Urmaç</Link>
        </Text>
      </Center>
    </Box>
  );
}

export default Footer;
