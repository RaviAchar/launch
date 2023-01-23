import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal } from '@mui/material';
import LaunchModal from '../common/LaunchModal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const clickModal = () => {
  console.log("Clicking")
  return <LaunchModal openModal="true"/>
}
export default function ProductCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Card >
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="140"
          image="http://localhost:3001/laptop.jpeg"
          alt="Laptop"
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apple Macbook
          </Typography>
          <Typography variant="body2" color="text.secondary">
            New Macbook pro, High performance and memory
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Share
        </Button>
      </CardActions>
    </Card>
          <Modal
          open={open}
          
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LaunchModal/>
          </Box>
        </Modal>
        </>
  );
}
