import * as React from "react";
import Link from "next/link";
import Page, { SectionHeading } from "~/components/Page";
import {
  H1,
  H3,
  A,
  Rarr,
  Subheading,
  LargeSubheading
} from "~/components/Typography";

function Home() {
  return (
    <Page>
      <SectionHeading>
        <H1>Product Template</H1>
        <LargeSubheading>
          Hey 👋 let's build something and have fun!
        </LargeSubheading>
      </SectionHeading>
    </Page>
  );
}

export default Home;
