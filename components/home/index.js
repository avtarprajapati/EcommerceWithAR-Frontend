import React from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './index.module.scss';
import { ProductCard } from '../common';

function Home(props) {
  return (
    <div className={styles.container}>
      <Container maxWidth='lg'>
        <div>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item xs={10} sm={10} md={5} lg={5}>
              <div className={styles.main}>
                <h2 className={styles.heading}>
                  Augmented reality service for interior home
                </h2>
                <h4 className={styles.subheading}>
                  We provides the platform with web AR and ready-to-use 3D
                  furniture models to start sales with Augmented reality
                  technology in days
                </h4>
                <p className={styles.info}>
                  We are changing the furniture shopping experience
                </p>
                <Button variant='outlined' onClick={() => Router.push('/shop')}>
                  Shop
                </Button>
              </div>
            </Grid>
            <Grid item xs={10} sm={10} md={5} lg={5}>
              <model-viewer
                height='500px'
                src='/static/images/model/chairs.glb'
                camera-controls
                shadow-intensity='1'
                ar
                loading='lazy'
                ar-modes='scene-viewer webxr quick-look'
                camera-orbit='0.00001589deg 75deg 2.9m'
              >
                <div className='progress-bar hide' slot='progress-bar'>
                  <div className='update-bar'></div>
                </div>
              </model-viewer>
            </Grid>
          </Grid>
        </div>
      </Container>
      {props.status === 'success' && (
        <Container maxWidth='lg' className={styles.about}>
          <h4 className={styles.productheading}>Top Products</h4>
          <div className={styles.products}>
            <Grid container spacing={4}>
              {props.products.slice(0, 3).map((product) => (
                <Grid key={product._id} item md={4} lg={4}>
                  <ProductCard data={product} isAdmin={false} />
                </Grid>
              ))}
            </Grid>
          </div>
          <Button
            variant='outlined'
            className={styles.viewbtn}
            onClick={() => Router.push('/shop')}
          >
            View All
          </Button>
        </Container>
      )}
    </div>
  );
}

export default Home;
