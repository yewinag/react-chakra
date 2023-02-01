import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Header } from './components/Header';
import { Listing } from './components/Listing';
import { SignupCard } from './components/SignUp';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Listing />
    <SignupCard />
  </ChakraProvider>
);
