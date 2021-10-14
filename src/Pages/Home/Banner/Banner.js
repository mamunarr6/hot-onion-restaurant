import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <h1>Best food waiting for your belly</h1>
                <div className="banner-input-div">
                    {/* <TextField id="outlined-basic" className="banner-input" label="" variant="outlined" placeholder="Search food items" />
                    <Button variant="contained">Contained</Button> */}
                    <div>
                        <input className="banner-input" type="text" placeholder="Search food items" />
                        <input className="banner-search" type="button" value="Search" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;