import * as React from 'react';
import { styled } from '@mui/system';
import { buttonClasses } from '@mui/base/Button';
import { Tabs } from '@mui/base/Tabs';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import {useState} from "react";
export default function TourTabs({props}) {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs where selection follows focus"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
            >
                <TabsList>
                    {
                        props ? (
                            <Tab value={0} active>Your Tour</Tab>
                        ) : (
                            <></>
                        )
                    }
                    <Tab value={1}>Tour #1</Tab>
                    <Tab value={2}>Tour #2</Tab>
                    <Tab value={3}>Tour #3</Tab>
                    <Tab value={4}>Tour #4</Tab>
                    <Tab value={5}>Tour #5</Tab>
                </TabsList>
            </Tabs>
        </div>
    );
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: blak;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[800]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: black;
    color: white;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
  min-width: 400px;
  background-color: #f5f5f3;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);