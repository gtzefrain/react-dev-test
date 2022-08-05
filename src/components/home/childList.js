import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

export function ChildList({ list, current }) {
    const results = list.filter(x => x.property_category == current);
    console.log('results', results);

    return (
        <ul>
            {results.map((result) => (
                <li key={result.id}>
                    {result.name}
                </li>
            ))}
        </ul>
    )
}