import React, { useEffect, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from "react-router-dom";
import { parentsState } from '../../states/parentsState';
import { childsState } from '../../states/childsState';
import { selectedState } from '../../states/selectedState';
import { ChildList } from './childList';

export function ParentsList() {
    const [selectedParentID, setselectedParentID] = useRecoilState(selectedState)
    const parents = useRecoilValue(parentsState);
    const childs = useRecoilValue(childsState);
    let navigate = useNavigate();

    function handleClick(id) {
        if (selectedParentID == id) {
            // This avoids a quick flash without the closing of the popup, but it isn't as smooth as I want it to. Would work on more on this if time would allow it.
            setselectedParentID(id)
            navigate(`/`)
        } else {
            navigate(`/${id}`)
        }
    }
    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list"
        >
            {parents.data.map((parent, idx) => (
                <React.Fragment key={parent.id}>
                    <ListItemButton onClick={() => handleClick(parent.id)} divider>
                        <ListItemText primary={parent.name} />
                        {selectedParentID == parent.id ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedParentID == parent.id} timeout="auto" unmountOnExit>
                        <ChildList list={childs.results} current={selectedParentID} />
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    )
}