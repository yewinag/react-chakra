import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppLayout } from './Layouts';
import { ModuleMain } from './Modules';
import { Provider } from 'react-redux';
import { store } from './Redux';
export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <AppLayout>
        <ModuleMain />
      </AppLayout>
    </ChakraProvider>
  </Provider>
);
