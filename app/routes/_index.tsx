import {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Large,
  Lead,
  ListItem,
  Muted,
  P,
  Small,
  UnorderedList,
} from "~/components/typography";

export default function IndexRoute() {
  return (
    <section>
      <H1>Heading 1 Typography</H1>
      <H2>Heading 2 Typography</H2>
      <H3>Heading 3 Typography</H3>
      <H4>Heading 4 Typography</H4>
      <P>Paragraphy Typography</P>
      <Blockquote>{'"This is a blockquote"'}</Blockquote>
      <UnorderedList>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </UnorderedList>
      <Code>console.log(&apos;hello, world&apos;)</Code>
      <Lead>
        Lead Typography. A modal dialog that interrupts the user with important
        content and expects a response.
      </Lead>
      <Large>Large Typography. Are you absolutely sure?</Large>
      <Small>Small typography. Email address</Small>
      <Muted>Muted typography. Enter you email address</Muted>
    </section>
  );
}
