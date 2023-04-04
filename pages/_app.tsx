import "styles/global.scss";
import type { AppProps } from "next/app";

// Export application
export default function MerkleAirdropStarter({
  Component,
  pageProps,
}: AppProps) {
  return (
    // Wrap application in global state provider
    <Component {...pageProps} />
  );
}
