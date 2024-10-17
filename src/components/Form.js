import React, { useState } from 'react';
import { Heading, VStack, FormControl, FormLabel, Input, Button, Text, useToast } from '@chakra-ui/react';

const Form = ({ scriptURL }) => {
  const [formData, setFormData] = useState({
    mis: '',
    name: '',
    email: '',
    pref1: '',
    pref2: '',
    pref3: '',
    reason: '',
    otherFest: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      mis: '',
      name: '',
      email: '',
      pref1: '',
      pref2: '',
      pref3: '',
      reason: '',
      otherFest: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    const params = new URLSearchParams(formData).toString();
    const urlWithParams = `${scriptURL}?${params}`;

    fetch(urlWithParams, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        setResponseMessage(data.message || 'An error occurred. Please try again.');
        if (data.result === 'success') {
          clearForm();
          toast({
            title: 'Success',
            description: data.message,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Error',
            description: data.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setResponseMessage('An error occurred. Please try again.');
        toast({
          title: 'Error',
          description: 'An error occurred. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const options = [
    'Accounts', 'COG', 'Decor', 'Design', 'Documentation', 'Events & Proshows',
    'Finance', 'Marketing', 'Media', 'PR', 'Prints and Purchase', 'Production', 'VFX', 'Web'
  ];

  return (
    <div>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={6}>
        Impressions Registration
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>MIS</FormLabel>
            <Input
              name="mis"
              value={formData.mis}
              onChange={handleInputChange}
              placeholder="Enter your MIS"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>College Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your college email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Preference 1</FormLabel>
            <Input
              as="select"
              name="pref1"
              value={formData.pref1}
              onChange={handleInputChange}
            >
              <option value="">Select Preference 1</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Input>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Preference 2</FormLabel>
            <Input
              as="select"
              name="pref2"
              value={formData.pref2}
              onChange={handleInputChange}
            >
              <option value="">Select Preference 2</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Input>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Preference 3</FormLabel>
            <Input
              as="select"
              name="pref3"
              value={formData.pref3}
              onChange={handleInputChange}
            >
              <option value="">Select Preference 3</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Input>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Why do you want to join impressions?</FormLabel>
            <Input
              as="textarea"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Enter your reason"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Part of any other fest?</FormLabel>
            <Input
              name="otherFest"
              value={formData.otherFest}
              onChange={handleInputChange}
              placeholder="Enter if you are part of any other fest"
            />
          </FormControl>
          <Button type="submit" isLoading={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </VStack>
      </form>
      {responseMessage && <Text mt={4} color={responseMessage.includes('successfully') ? 'green.500' : 'red.500'}>{responseMessage}</Text>}
    </div>
  );
};

export default Form;