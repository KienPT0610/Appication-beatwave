import React, { useState } from 'react'
import axios from "axios";
import { useAccount } from 'wagmi';
import { uploadBeat } from '@/app/components/utils/sendData';
import { Address } from 'viem';
import { Button, TextField, Alert, Box, Typography, CircularProgress } from '@mui/material';

export const Upload = () => {
    const account = useAccount();
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleUpload = async () => {
        if (!file) {
            setAlert({ type: 'error', message: "Please select a file first." });
            return;
        }

        if (!title) {
            setAlert({ type: 'error', message: "Please enter a title for the file." });
            return;
        }

        // Kiểm tra loại file
        if (file.type !== 'audio/mpeg') {
            setAlert({ type: 'error', message: "Please upload an mp3 file." });
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);

        setIsLoading(true);

        try {
            const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
                maxBodyLength: Infinity,
                headers: {
                    'pinata_api_key': 'd44a319da6c8ecec639e',
                    'pinata_secret_api_key': '8a8779dbb7d29020a090164d3fe3aca1ca76e9fdd9846adaf9d0f2862bdfff24'
                }
            });
            await uploadBeat(response.data.IpfsHash, title, account.address as Address);
            setAlert({ type: 'success', message: "File uploaded successfully." });
        } catch (error) {
            console.error("Error uploading file:", error);
            setAlert({ type: 'error', message: "Error uploading file." });
        } finally {
            setIsLoading(false);   
        }
    };

    return (
        <Box>
            {account.status === 'connected' ? (
                <>
                    {alert && <Alert severity={alert.type}>{alert.message}</Alert>}
                    <Button variant="contained" component="label">
                        Select File
                        <input type="file" accept=".mp3" hidden onChange={handleFileChange} />
                    </Button>
                    {file && (
                        <Typography variant="body2" color="textSecondary">
                            Selected file: {file.name}
                        </Typography> 
                    )}
                    <TextField
                        label="Enter title"
                        placeholder='Title of beat'
                        value={title}
                        onChange={handleTitleChange} 
                        fullWidth
                        margin="normal"
                    />
                    <Box display="flex" alignItems="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpload}
                            disabled={isLoading}
                        >
                            Upload
                        </Button>
                        {isLoading && <CircularProgress size={24} style={{ marginLeft: 16 }} />}
                    </Box>
                </>
            ) : (
                <Alert severity="warning">Please connect your account first.</Alert>
            )}
        </Box>
    );
}
