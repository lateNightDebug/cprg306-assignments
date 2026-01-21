import Link from "next/link";

export default function Page() {
  return (
    <div>
      <MyHeading />
      <MyParagraph />
    </div>
  );
}

function MyHeading() {
  return <h1>Hello, My name is Luna</h1>;
}
 

function MyParagraph() {
  return (
    <>
    <p>my github link</p>
    <link href=""></link>
    </>
  );
}