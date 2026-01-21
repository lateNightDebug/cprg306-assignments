import Link from "next/link";
import StudentInfo from "./student-info";

export default function week2() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
      <br></br>
      <Link href="/">Return Home</Link>
    </main>
  );
}
