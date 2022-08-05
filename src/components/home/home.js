
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Layout } from '../layout/layout';
import { ParentsList } from './parentsList';
import { selectedState } from '../../states/selectedState';

export function Home() {

    // Get ID from URL Params, if existing
    let { id } = useParams();

    // Share with the rest of the app via atom
    const [selectedParentID, setselectedParentID] = useRecoilState(selectedState);
    useEffect(() => {
        setselectedParentID(id);
    }, [id]);

    return (
        <Layout>
            <Grid item xs={12}>
                <Typography variant="h4" component="h1" gutterBottom align='center'>
                    Amenities Parents
                </Typography>
                <ParentsList />
            </Grid>
        </Layout>
    )
}
