import { useSelector } from 'react-redux';
import { Center, Box, Text, Link } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

function Footer() {
  const data = useSelector((state) => state.products);

  return (
    <Box mt={5} bg="green.400" pos="sticky" bottom={0} zIndex={2}>
      {data.money !== data.initialMoney && (
        <>
          <Center bg="none">
            <TableContainer mt={1} w="60%">
              <Table variant="simple" size="sm">
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
            <Text bg="none" my={2} fontSize={15} fontWeight={500}>
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
