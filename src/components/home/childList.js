import React from 'react';
import { 
    List, 
    ListItem
} from '@mui/material';

export function ChildList({ list, current }) {
    const results = list.filter(x => x.property_category == current);

    return (
        <List >
            {results.map((result) => (
                <ListItem sx={{ display: 'list-item' }} key={result.id}>
                    {result.name}
                </ListItem>
            ))}
        </List>
    )
}