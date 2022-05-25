import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/404.module.scss";

export default function NotFound() {
  return (
    <Layout title='Error 404'>
      <h1>
        <FaExclamationTriangle />
        Error! 404
      </h1>
      <Link href='/'>Go to Home</Link>
    </Layout>
  );
}
