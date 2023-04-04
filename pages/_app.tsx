import "styles/global.scss";
import StateProvider from "state";
import type { AppProps } from "next/app";

// Export application
export default function MerkleAirdropStarter({
  Component,
  pageProps,
}: AppProps) {
  return (
    // Wrap application in global state provider
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}
