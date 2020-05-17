import React, { useState } from 'react';
import {
  Box, Button,
} from 'rebass';

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label || '');

  return (
    <Box bg="rgba(196, 196, 196, 0.33)" px={20}>
      <Box
        overflow="hidden"
        sx={{ borderBottom: '2px solid #317BB5' }}
        width="100%">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Button
              key={label}
              color={activeTab === label ? '#FFFFFF' : '#000000'}
              onClick={() => setActiveTab(label)}
              fontSize={18}
              sx={{
                float: 'left',
                borderRadius: '0',
              }}
              mt={15}
              mr={10}
              py={12}
              px={24}
              height={52}
              bg={activeTab === label ? '#317BB5' : '#FFFFFF'}>
              {label}
            </Button>
          );
        })}
      </Box>
      <Box>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </Box>
    </Box>
  );
}

export default Tabs;
