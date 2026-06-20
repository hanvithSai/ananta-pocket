import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useProductStore } from "../store/product";
const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    // console.log(newProduct);
    // Send newProduct to your backend API to save it in the database
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" }); // Reset the form after submission
  };

  return (
    <Container
      maxW={"container.sm"}
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}
      py={4}
      mb={8}
    >
      <VStack spacing={4}>
        <Heading as={"h1"} size={"2xl"} textAlign="center" mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"100%"}
          p={6}
          rounded={"lg"}
          shadow={"md"}
          bg={useColorModeValue("gray.300", "gray.700")}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: Number(e.target.value) })
              }
            />
            <Input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Create Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
