import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { storageRef } from '../../firebase';
import { getBase64String } from '../../utility/getBase64String';
import { SnackbarComp } from './index';

function FileUpload(props) {
  const [imageUrl, setImageUrl] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });
  const { setProgress, onFileUpload } = props;

  const onSnackbarClose = () => {
    setSnackbar({
      open: false,
      message: '',
      severity: '',
    });
  };

  const onFileChange = async (e) => {
    const fileUpload = e.target.files[0];
    if (fileUpload) {
      let baseString, downloadURL;
      try {
        const uploadModel = storageRef.child(fileUpload.name).put(fileUpload);

        uploadModel.on(
          'state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            let progress = Math.floor(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log('Upload is ' + progress + '% done');
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            uploadModel.snapshot.ref
              .getDownloadURL()
              .then(async (downloadURL) => {
                downloadURL = downloadURL;
                console.log(downloadURL);
                setImageUrl(downloadURL);
                baseString = await getBase64String(fileUpload);
                await onFileUpload(downloadURL, baseString);
                setSnackbar({
                  open: true,
                  message: 'Your Model is successfully uploaded',
                  severity: 'success',
                });
              });
          }
        );
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Something went wrong',
          severity: 'error',
        });
      }
    }
  };
  return (
    <>
      <div>
        <label htmlFor='upload-photo'>
          <input
            style={{ display: 'none' }}
            id='upload-photo'
            name='productImage'
            onChange={onFileChange}
            type='file'
          />
          <Fab
            color='secondary'
            size='small'
            component='span'
            aria-label='add'
            variant='extended'
          >
            <AddCircleIcon /> Upload photo
          </Fab>
        </label>
      </div>
      <SnackbarComp
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={onSnackbarClose}
      />
    </>
  );
}

export default FileUpload;
