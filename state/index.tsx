import { gist } from "state/gist";
import type { ReactElement } from "react";

export default function StateProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement {
  return <gist.Provider>{children}</gist.Provider>;
}
