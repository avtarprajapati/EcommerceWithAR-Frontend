import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

import styles from './ProductCard.module.scss';

export const ProductCard = (props) => {
  const { _id, title, description, type, price, imageUrl } = props.data;

  return (
    <Card className={styles.productcard}>
      <model-viewer
        height='500px'
        src={imageUrl}
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
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={() => Router.push(`/${_id}`)}
        >
          View
        </Button>
        {/* <Button size='small' color='primary' onClick={() => props.onCart(_id)}>
          Add to Cart
        </Button> */}
      </CardActions>
    </Card>
  );
};

ProductCard.defaultProps = {
  onCart: () => {},
};
