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
          content='Join Webinar on May 11, 2021 to Learn 1. Why active surveillance of COVID vaccine adverse events is important. 2. Why old ways of managing safety will not work in this COVID era.'
        />
        <meta property='og:title' content='Covid Vaccine Safety Webinar' />
        <meta
          property='og:description'
          content='Join Webinar on May 11, 2021 to Learn 1. Why active surveillance of COVID vaccine adverse events is important. 2. Why old ways of managing safety will not work in this COVID era.'
        />
        <meta property='og:image' content='static/images/ecommerce.jpeg' />
        <meta
          property='og:url'
          content='https://10xgrowth.com/covid-vaccine-safety'
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
