import { useSelector, useDispatch } from 'react-redux';
import { updateCount } from '../redux/products/productsSlice';
import { Center, Box, Text, Link, Button } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

function Footer() {
  const data = useSelector((state) => state.products);

  const dispatch = useDispatch();

  return (
    <Box mt={5} bg="green.400" pos="sticky" bottom={0} zIndex={2} boxShadow="dark-lg">
      {data.money !== data.initialMoney && (
        <>
          <Center bg="none">
            <TableContainer m={2} w="100%">
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>Products</Th>
                    <Th>Count</Th>
                    <Th></Th>
                    <Th>Cost</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.items.map(
                    (product) =>
                      product.count > 0 && (
                        <Tr key={product.id}>
                          <Td>{product.productName}</Td>
                          <Td>{`x${product.count}`}</Td>
                          <Td>
                            <Button colorScheme="red" size="xs" mr={1} onClick={() => dispatch(updateCount({ id: product.id, count: product.count - 1 }))}>
                              -
                            </Button>
                            <Button colorScheme="teal" size="xs" onClick={() => dispatch(updateCount({ id: product.id, count: product.count + 1 }))}>
                              +
                            </Button>
                          </Td>
                          <Td>{`$${new Intl.NumberFormat('en-US').format(product.count * product.productPrice)}`}</Td>
                          <Td>
                            <Button colorScheme="red" size="xs" onClick={() => dispatch(updateCount({ id: product.id, count: 0 }))}>
                              Remove
                            </Button>
                          </Td>
                        </Tr>
                      )
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Center>
          <Center bg="none">
            <Text bg="none" mb={1} fontSize={20} fontWeight={500}>
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
