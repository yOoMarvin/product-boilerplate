import * as React from "react";
import GlobalStyles from "~/components/GlobalStyles";
import DarkMode from "./DarkMode";

interface Props {
  children?: any;
}

export default ({ children }: Props) => {
  return (
    <DarkMode>
      <GlobalStyles.ResetStyles />
      {children}
    </DarkMode>
  );
};
