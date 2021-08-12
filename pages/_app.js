import { useRouter } from 'next/router';
import * as React from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
  console.log("App", router.query);

  return <Component {...pageProps} />;
}

export default App;
