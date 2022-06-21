import React, { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import { mapRecursive } from '../utils/mapRecursive';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function TreeMenu({ level = 1, menuProp, ...props }) {
  const [menu, setMenu] = useState(menuProp || []);
  const [paddingLeft, setPaddingLeft] = useState();

  const open = (id) => () => {
    setMenu((prevMenu) =>
      mapRecursive(prevMenu, (item) => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    if (level) {
      setPaddingLeft(1 + level);
    }
  }, [level]);

  return (
    <List {...props}>
      {menu.map((item, index) => (
        <React.Fragment key={`${index}-${item.id}`}>
          <ListItemButton sx={{ paddingLeft }} onClick={open(item.id)}>
            <ListItemText primary={item.text} />
            {item.children && (item.open ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {item.children && (
            <Collapse in={item.open} timeout="auto">
              <TreeMenu
                menuProp={item.children}
                level={level + 1}
                disablePadding
              />
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

function Example3() {
  const treeMenu = [
    { id: 1, text: 'Text 1', open: false },
    {
      id: 2,
      text: 'Text 2',
      open: false,
      children: [
        { id: 5, text: 'Text 5', open: false },
        {
          id: 6,
          text: 'Text 6',
          open: false,
          children: [
            { id: 8, text: 'Text 8', open: false },
            { id: 9, text: 'Text 9', open: false },
          ],
        },
        { id: 7, text: 'Text 7', open: false },
      ],
    },
    {
      id: 3,
      text: 'Text 3',
      open: false,
      children: [{ id: 11, text: 'Text 11', open: false }],
    },
    { id: 4, text: 'Text 4', open: false },
  ];

  return (
    <Box width="100%" maxWidth={200} bgcolor="#f0f0f5">
      <TreeMenu menuProp={treeMenu} />
    </Box>
  );
}

export default Example3;
