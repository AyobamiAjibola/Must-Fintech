import React, {useState} from 'react';
import {
  Typography, Autocomplete, Box,
  Divider, TextField, List
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { options9, options10, options11, columns3, data3 } from '../../utils/resource';
import TableComponent from '../table/TableComponent';

const useStyles = makeStyles((theme) => ({
  customTextField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.6rem', height: '2.9rem',
      backgroundColor: 'white'
    },
  },
  customTextField2: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.6rem',
      height: '2.9rem',
      backgroundColor: 'white'
    }
  },
  customLi: {
    listStyleType: 'none',
    position: 'relative',
  },
  bullet: {
    content: '""',
    position: 'absolute',
    left: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '5px',
    height: '5px',
    backgroundColor: 'black',
    borderRadius: '50%',
  }
}));

function Tab_2 () {
  const classes = useStyles();
  const [value, setValue] = useState({
    option9: options9[0] || null,
    option10: options10[0] || null,
    option11: options11[0] || null
  });

  const handleOnChange = (e, newValue, fieldName) => {
    setValue((prevValue) => ({
      ...prevValue,
      [fieldName]: newValue,
    }));
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',py: 5, px: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', width: '100%', mt: 3, mb: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', justifyContent: 'left',
              width: '50%', height: '2.8rem'
            }}
          >
            <Typography sx={{fontSize: 23, fontWeight: 600}}>회원 목록</Typography>
            <Typography sx={{fontSize: 15, color: '#666666', fontWeight: 600}}>
              (총 100명 | 승인대기10명)
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'right', justifyContent: 'right',
              width: '50%', gap: 1
            }}
          >
            <Autocomplete
              value={value.option9}
              disablePortal
              name='option9'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option9')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options9}
              sx={{width: '35%'}}
              renderInput={(params) =>
              <TextField {...params}
                variant="outlined"
                className={classes.customTextField}
                sx={{
                    "& .MuiInputBase-input": {
                      marginTop: -0.5,
                      paddingBottom: 0,
                      fontWeight: 'bold', backgroundColor: 'transparent'
                    }
                  }}
              />}
            />
            <Autocomplete
              value={value.option10}
              disablePortal
              name='option10'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option10')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options10}
              sx={{width: '35%'}}
              renderInput={(params) =>
              <TextField {...params}
                variant="outlined"
                className={classes.customTextField}
                sx={{
                    "& .MuiInputBase-input": {
                      marginTop: -0.5,
                      paddingBottom: 0,
                      fontWeight: 'bold'
                    }
                  }}
              />}
            />
            <Autocomplete
              value={value.option11}
              disablePortal
              name='option11'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option11')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options11}
              sx={{width: '35%'}}
              renderInput={(params) =>
              <TextField {...params}
                variant="outlined"
                className={classes.customTextField}
                sx={{
                    "& .MuiInputBase-input": {
                      marginTop: -0.5,
                      paddingBottom: 0,
                      fontWeight: 'bold'
                    }
                  }}
              />}
            />
          </Box>
        </Box>

        <Divider orientation='horizontal' />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', width: '100%', mt: 3, mb: 2
          }}
        >
          <TableComponent data={data3} columns={columns3}/>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Tab_2;