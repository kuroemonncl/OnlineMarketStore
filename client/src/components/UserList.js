import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch user data from the API
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleCardClick = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsOpen(false);
  };

  return (
    <Box maxW="xl" mx="auto" p="4">
      <Heading as="h2" size="lg" textAlign="center" mt="4">
        User List
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap" mt="4">
        {users.map((user) => (
          <Box
            key={user._id}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={borderColor}
            boxShadow="md"
            p="4"
            maxW="sm"
            w="100%"
            mb="4"
            cursor="pointer"
            onClick={() => handleCardClick(user)}
          >
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">{user.name}</Text>
              <Text color="teal.500">{user.email}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
      {selectedUser && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                <strong>ID:</strong> {selectedUser._id}
              </Text>
              <Text>
                <strong>Name:</strong> {selectedUser.name}
              </Text>
              <Text>
                <strong>Email:</strong> {selectedUser.email}
              </Text>
              <Text>
                <strong>Created:</strong>{" "}
                {new Date(selectedUser.created).toLocaleDateString()}
              </Text>
              <Text>
                <strong>Updated:</strong>{" "}
                {new Date(selectedUser.updated).toLocaleDateString()}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default UserList;
