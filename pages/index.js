import Head from 'next/head';
import Home from '../components/home';
import Layout from '../components/layout';
import { getAllProduct } from '../api/product';

export default function Page(props) {
  return (
    <div>
      <Head>
        <title>E-commerce with AR</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Home products={props.data} status={props.status} />
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await getAllProduct();
    const data = await res.data.data;

    return {
      props: { data, status: 'success' },
    };
  } catch (error) {
    return {
      props: { data: [], status: 'failed' },
    };
  }
}
