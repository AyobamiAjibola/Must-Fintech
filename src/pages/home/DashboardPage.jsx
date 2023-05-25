import React, {useEffect, useRef, useState} from 'react';
import {
  Typography, Box, Autocomplete, TextField, Button, Divider,
  List
} from '@mui/material';
import { DatePicker, Space, Checkbox } from 'antd';
import styled, {css} from 'styled-components';
import { makeStyles } from '@mui/styles';
import {
  buttonData,
  radioData1,
  radioData2,
  radioData3,
  options,
  options2,
  options3,
  options4,
  data, columns
} from '../../utils/resource';
import TableComponent from '../../components/table/TableComponent';

const { RangePicker } = DatePicker;
const StyledRangePicker = styled(RangePicker)`
  &:hover {
    border: 0.5px black solid;
  }
`

const StyledCheckbox = styled(Checkbox).attrs(props => ({
  checked: props.checked,
}))`
  input[type='checkbox'] {
    border-radius: 5px;
    border: 0.5px #C7C6C9 solid;
  }

  .ant-checkbox-inner {
    width: 21px;
    height: 21px;
    border-radius: 7px;
    background-color: white;
    display: flex;

    ${props =>
      props.checked &&
      css`
        background-color: #2a3958;
        border: none;
      `}
  }

  &:hover {
    .ant-checkbox-inner {
      background-color: ${props => (props.checked ? '#2a3958' : 'white')} !important;
      border: ${props => (!props.checked ? '0.5px #2a3958 solid' : 'none')} !important;
    }
  }
`;

const CustomListbox = React.forwardRef(function CustomListbox(props, ref) {
  const { children, ...other } = props;
  return (
    <List
      ref={ref}
      style={{ backgroundColor: '#989898', color: 'black',
        borderRadius: '1rem', marginTop: '0.3rem', fontWeight: 600, fontSize: 19
      }}
      {...other}
    >
      {children}
    </List>
  );
});

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

function DashboardPage(){
  const classes = useStyles();
  const [activeButtons, setActiveButtons] = useState(Array(buttonData.length).fill(false));

  const [value, setValue] = useState({
    option: null,
    option2: options2[0] || null,
    option3: options3[0] || null,
    option4: options4[0] || null
  });
  const [checkBoxValue, setCheckBoxValue] = useState({
    checked: Array(buttonData.length).fill(false),
    checked2: Array(radioData2.length).fill(false),
    checked3: Array(radioData3.length).fill(false)
  });

  const onChange = (e, set, idx) => {
    setCheckBoxValue((prev) => {
      const newChecked = [...prev[set]];
      newChecked[idx] = e.target.checked;
      return {
        ...prev,
        [set]: newChecked
      }
    })
  }

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const updatedActiveButtons = prevActiveButtons.map((btn, idx) => idx === index);
      return updatedActiveButtons;
    });
  };

  const handleOnChange = (e, newValue, fieldName) => {
    setValue((prevValue) => ({
      ...prevValue,
      [fieldName]: newValue,
    }));
  };
  

  return(
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',py: 5, px: 2
        }}
      >
        <Typography component='span'
          sx={{
            fontSize: 25,
            fontWeight: 600,
            textAlign: 'left',
            color: '#252e3a'
          }}
        >
          회원 관리
        </Typography>
        <Box
          sx={{
            width: '100%', py: 2,
            mt: 2, borderRadius: '1rem',
            backgroundColor: '#f4f5f7', height: '15rem'
          }}
        >
          <ul>
            <li className={classes.customLi}>
              <span className={classes.bullet}></span>
              <Box
                sx={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'left', width: '100%'
                }}
              >
                <Typography sx={{fontSize: 16, width: '10%', fontWeight: 600, color: '#191919'}}>가입일</Typography>
                <Box sx={{width: '35%', display: 'flex', flexDirection: 'row'}}>
                  {buttonData.map((data, idx) => (
                    <Box
                      key={idx}
                      onClick={() => handleButtonClick(idx)}
                      sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        width: '4rem', backgroundColor: activeButtons[idx] ? '#2a3958' : 'white',
                        color: activeButtons[idx] ? 'white' : '#333333',
                        height: '2.8rem', border: '0.5px #C7C6C9 solid',
                        '&:hover': {border: '0.5px #C7C6C9 solid', backgroundColor: 'white'},
                        '&.active': {backgroundColor: '#2a3958', color: 'white'},
                        borderRadius: '0.6rem', cursor: 'pointer', mr: 0.3,
                        ':first-of-type': {
                          ml: -1
                        }
                      }}
                      className={activeButtons[idx] ? 'active' : ''}
                    >
                      {data.title}
                    </Box>
                  ))}
                </Box>
                <Space size={12} style={{width: '55%', marginRight: 8}}>
                  <StyledRangePicker
                    style={{
                      width: '38.5rem',
                      height: '2.8rem',
                      borderRadius: '0.6rem'
                    }}
                  />
                </Space>
              </Box>
            </li>

            <li className={classes.customLi}>
              <span className={classes.bullet}></span>
              <Box
                sx={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'left', width: '100%', mt: 3
                }}
              >
                <Typography sx={{fontSize: 16, width: '10%', mr: -1, fontWeight: 600, color: '#191919'}}>채널</Typography>
                <Box
                  sx={{
                    width: '90%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '50%', display: 'flex',
                      justifyContent: 'left', alignItems: 'left'
                    }}
                  >
                    {radioData1.map((data, idx) => (
                      <Box
                        sx={{
                          display: 'flex', justifyContent: 'left', alignItems: 'center'
                        }}
                      >
                      <StyledCheckbox checked={checkBoxValue.checked[idx]} onChange={(e) => onChange(e, 'checked', idx)} key={idx}
                        style={{
                          marginLeft: 2, fontWeight: 600
                        }}
                      >
                        {data.title}
                      </StyledCheckbox>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      width: '50%'
                    }}
                  >
                    <ul>
                      <li className={classes.customLi}>
                        <span className={classes.bullet}></span>
                        <Box
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'right',
                            width: '100%'
                          }}
                        >
                          <Typography sx={{fontSize: 18, fontWeight: 500, width: '20%'}}>채널</Typography>
                          <Box sx={{width: '80%', display: 'flex', flexDirection: 'row'}}>
                            {radioData2.map((data, idx) => (
                              <Box>
                                <StyledCheckbox checked={checkBoxValue.checked2[idx]} onChange={(e) => onChange(e, 'checked2', idx)} key={idx}
                                  style={{
                                    marginLeft: 0, fontWeight: 600
                                  }}
                                >
                                  {data.title}
                                </StyledCheckbox>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
            </li>

            <li className={classes.customLi}>
              <span className={classes.bullet}></span>
              <Box
                sx={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'left', width: '100%', mt: 3
                }}
              >
                <Typography sx={{fontSize: 16, width: '10%', mr: -1, fontWeight: 600, color: '#191919'}}>게시여부</Typography>
                <Box
                  sx={{
                    width: '90%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'left'
                  }}
                >
                  {radioData3.map((data, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex', justifyContent: 'left', alignItems: 'center'
                      }}
                    >
                      <StyledCheckbox checked={checkBoxValue.checked3[idx]} onChange={(e) => onChange(e, 'checked3', idx)} key={idx}
                        style={{
                          marginLeft: 2, fontWeight: 600
                        }}
                      >
                        {data.title}
                      </StyledCheckbox>
                    </Box>
                  ))}
                </Box>
              </Box>
            </li>

            <li className={classes.customLi}>
              <span className={classes.bullet}></span>
              <Box
                sx={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'center', width: '100%', mt: 3
                }}
              >
                <Typography sx={{fontSize: 16, width: '10%', mr: -1, fontWeight: 600, color: '#191919'}}>게시여부</Typography>
                <Box
                  sx={{
                    width: '20%', mr: 1
                  }}
                >
                  <Autocomplete
                    value={value.option}
                    disablePortal
                    name='option'
                    onChange={(e, newValue, ) => handleOnChange(e, newValue, 'option')}
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.title}
                    options={options}
                    ListboxComponent={CustomListbox}
                    sx={{width: '100%'}}
                    renderInput={(params) =>
                    <TextField {...params}
                      variant="outlined"
                      className={classes.customTextField}
                      sx={{
                          "& .MuiInputBase-input": {
                            marginTop: -0.5,
                            paddingBottom: 0,
                          }
                        }}
                    />}
                  />
                </Box>
                <Box
                  sx={{
                    width: '70%', mr: 2
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Placeholder"
                    className={classes.customTextField2}
                    sx={{
                      width: '100%'
                    }}
                  />
                </Box>
              </Box>
            </li>
          </ul>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', width: '100%', mt: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', justifyContent: 'right',
              width: '50%'
            }}
          >
            <Button
              sx={{
                backgroundColor: '#2a3958', color: 'white',
                width: '12rem', height: '4rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#546079'}
              }}
            >
              채널
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'right', justifyContent: 'right',
              width: '50%', height: '4rem'
            }}
          >
            <Button
              sx={{
                backgroundColor: 'white', color: 'black', fontWeight: 600,
                width: '8rem', height: '3rem', borderRadius: '0.6rem',
                border: '0.5px #C7C6C9 solid',
                '&:hover': {border: '0.5px #2a3958 solid'}
              }}
            >
              채널
            </Button>
          </Box>
        </Box>

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
              (총 100명 | 승인대기 <span style={{color: 'red', fontSize: 18}}>10</span>명)
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
              value={value.option2}
              disablePortal
              name='option2'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option2')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options2}
              ListboxComponent={CustomListbox}
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
              value={value.option3}
              disablePortal
              name='option3'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option3')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options3}
              ListboxComponent={CustomListbox}
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
            <TextField
              variant="outlined"
              disabled
              value={'승인대기승인'}
              className={classes.customTextField}
              sx={{
                width: '30%'
              }}
            />
          </Box>
        </Box>

        <Divider orientation='horizontal' />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center', width: '100%', mt: 3, mb: 2
          }}
        >
          <Box sx={{width: '60%'}}/>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'right', justifyContent: 'right',
              width: '40%', gap: 1
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center', width: '30%'
              }}
            >
              <Typography sx={{fontSize: 18, fontWeight: 600}}>선택한 0명 회원</Typography>
            </Box>
            <Autocomplete
              value={value.option4}
              disablePortal
              name='option4'
              onChange={(e, newValue, ) => handleOnChange(e, newValue, 'option4')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              ListboxComponent={CustomListbox}
              options={options4}
              sx={{width: '45%'}}
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
            <Button
              sx={{
                backgroundColor: '#2a3958', color: 'white',
                width: '25%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#546079'}
              }}
            >
              0명회원
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', width: '100%', mt: 3, mb: 2
          }}
        >
          <TableComponent data={data} columns={columns}/>
        </Box>
      </Box>
    </React.Fragment>
  )

}

export default DashboardPage;