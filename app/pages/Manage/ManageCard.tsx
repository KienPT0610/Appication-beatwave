import React, { useState } from 'react'
import { Beat } from '../../components/types/Beat'
import { Avatar, Box, Button, Input, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Controls from '../Home/ListBeatSaling/controls/Controls'
import './ManageCard.css'
import { deleBeatIsForSale, saleBeat, transferOwner } from '@/app/components/utils/sendData'
import { useAccount } from 'wagmi'
import { Address } from 'viem'

export const ManageCard = ({ beat }: { beat: Beat }) => {

  const account = useAccount(); 
  const [openSale, setOpenSale] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openChangeTitle, setOpenChangeTitle] = useState(false);
  const [price, setPrice] = useState('');
  const [newOwner, setNewOwner] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const handleClickOpenSale = () => {
    setOpenSale(true);
  };


  const handleClickOpenTransfer = () => {
    setOpenTransfer(true);
  };

  const handleClickOpenChangeTitle = () => {
    setOpenChangeTitle(true);
  };


  const handleUnsale = async () => {
    // Handle unsale logic here
    console.log('Unsale beat:', beat.id);
    await deleBeatIsForSale(beat.id, account.address as Address);
  };

  const handleCloseSale = () => {
    setOpenSale(false);
    setPrice('');
  };

  const handleCloseTransfer = () => {
    setOpenTransfer(false);
    setNewOwner('');
  };

  const handleCloseChangeTitle = () => {
    setOpenChangeTitle(false);
    setNewTitle('');
  };

  const handleSale = async () => {
    // Handle sale logic here
    console.log('Sale price:', price);
    await saleBeat(beat.id, Number(price), account.address as Address);
    handleCloseSale();
  };

  const handleTransfer = async () => {
    // Handle transfer logic here
    console.log('New owner:', newOwner);
    await transferOwner(beat.id, newOwner as Address, account.address as Address);
    handleCloseTransfer();
  };

  const handleChangeTitle = () => {
    // Handle change title logic here
    console.log('New title:', newTitle);
    handleCloseChangeTitle();
  };


  return (
    <div className="card-container">
      <div className="card">
        <div className="card-avatar">
          <h4 className="card-id">ID: {beat.id}</h4>
          <Avatar sx={{ width: '100px', height: '100px', position: 'inherit' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{beat.title}</h5>
          <p className="card-text">Owner: {beat.owner}</p>
          <p className="card-text">Price: {beat.price} token BW</p>
          <p className="card-text">Status: {beat.isForSale ? "Saling" : "Not saling"}</p>
          <Controls beat={beat} page={"manage"} />
        </div>
        <div className="card-btn">
          {
            beat.isForSale ?
              <Button variant="contained" onClick={handleUnsale} >Unsale Beat</Button> :
              <Button variant="contained" onClick={handleClickOpenSale} >Sale Beat</Button>
          }
          <Button variant="contained" onClick={handleClickOpenTransfer} >Transfer Owner</Button>
          <Button variant="contained" onClick={handleClickOpenChangeTitle} >Change Title</Button>

          {/* Sale Dialog */}
          <Dialog open={openSale} onClose={handleCloseSale}>
            <DialogTitle>Enter Sale Price</DialogTitle>
            <DialogContent>
              <Input
                placeholder="Enter price Ex: 10000"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSale} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSale} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>

          {/* Transfer Owner Dialog */}
          <Dialog open={openTransfer} onClose={handleCloseTransfer}>
            <DialogTitle>Enter New Owner</DialogTitle>
            <DialogContent>
              <Box width="500px"> {/* Đặt độ rộng cụ thể cho Box */}
                <Input
                  placeholder="Enter new owner"
                  fullWidth
                  value={newOwner}
                  onChange={(e) => setNewOwner(e.target.value)}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseTransfer} color="primary">
                Cancel
              </Button>
              <Button onClick={handleTransfer} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>

          {/* Change Title Dialog */}
          <Dialog open={openChangeTitle} onClose={handleCloseChangeTitle}>
            <DialogTitle>Enter New Title</DialogTitle>
            <DialogContent>
              <Box width="500px">
                <Input
                  placeholder="Enter new title"
                  fullWidth
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseChangeTitle} color="primary">
                Cancel
              </Button>
              <Button onClick={handleChangeTitle} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
