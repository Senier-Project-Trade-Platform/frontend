import '../styles/globals.css';

import store from '@features/store';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import Loader from '@components/common/Loader';
import { Suspense, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from '@utils/localStorage/token';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});
const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes('auth') || router.pathname === '/begin')
      return;
    const token = getToken();
    if (!token.accessToken) router.replace('/begin');
  }, [router]);

  return (
    <div className="flex h-screen w-screen justify-center bg-slate-50 font-Pretendard">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Atties</title>
      </Head>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </QueryClientProvider>
        </Provider>
      </Suspense>
    </div>
  );
}

export { queryClient };
