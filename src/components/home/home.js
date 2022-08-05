
import Grid from '@mui/material/Grid';
import { parentsState } from '../../states/parentsState';
import { useRecoilValue } from 'recoil';
import { Layout } from '../layout/layout';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
    useParams,
    useNavigate
} from "react-router-dom";

function ParentsList({ selected }) {
    const parents = useRecoilValue(parentsState);
    let navigate = useNavigate();
    const selectedIdx = parents.data.findIndex(parent => parent.id == selected);
    return (
        <List
            sx={{ width: '100%', bgcolor: 'lightgrey' }}
            component="nav"
            aria-labelledby="nested-list"
        >
            {parents.data.map((parent, idx) => (
                <React.Fragment key={parent.id}>
                    <ListItemButton onClick={() => navigate(`/${parent.id}`)}>
                        <ListItemText primary={parent.name} />
                        {selectedIdx == idx ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedIdx == idx} timeout="auto" unmountOnExit>
                        show info
                    </Collapse>
                </React.Fragment>
            ))}


        </List>
    )
}

export function Home() {
    let { id } = useParams();
    return (
        <Layout>
            <Grid item xs={12}>
                <ParentsList selected={id} />
            </Grid>
        </Layout>
    )
}
