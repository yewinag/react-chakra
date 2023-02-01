import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppLayout } from './Layouts';
import { ModuleMain } from './Modules';

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppLayout>
      <ModuleMain />
    </AppLayout>
  </ChakraProvider>
);
