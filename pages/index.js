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
        <meta
          name='description'
          content='Ecommerce with ar provide you before buying product you can check it it suitable for you or not.'
        />
        <meta property='og:title' content='E-commerce With AR' />
        <meta
          property='og:description'
          content='Ecommerce with ar provide you before buying product you can check it it suitable for you or not.'
        />
        <meta property='og:image' content='static/images/ecommerce.jpeg' />
        <meta
          property='og:url'
          content='https://ecommerce-with-ar.vercel.app/'
        />
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
