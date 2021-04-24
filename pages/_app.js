import React from 'react';

import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../redux/store';
import '../public/static/css/style.css';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <PersistGate persistor={store.PERSISTOR} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
