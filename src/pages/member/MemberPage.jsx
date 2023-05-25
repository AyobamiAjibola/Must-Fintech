import React, {useContext, useState} from 'react';
import {
    Typography, Box, Button, Divider
} from '@mui/material';
import {
  resource,
  buttonData,
  radioData4,
  radioData5,
  radioData7,
  radioData6,
  radioData8,
  radioData9,
  radioData10,
  radioData11,
  options5,
  options7,
  options6,
  options8, data2, columns2
} from '../../utils/resource';
import { DatePicker, Space, Checkbox } from 'antd';
import styled, {css} from 'styled-components';
import { makeStyles } from '@mui/styles';
import {
  TextField, Autocomplete,
  List
}from '@mui/material';
import { AppContext } from '../../context/AppContextProvider';
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
      style={{ backgroundColor: 'white', color: 'black',
        borderRadius: '1rem', marginBottom: '0.3rem', fontWeight: 600, fontSize: 19
      }}
      {...other}
    >
      {children}
    </List>
  );
});

const useStyles = makeStyles({
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
  },
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
  }
});

function MemberPage() {
  const classes = useStyles();
  const [value, setValue] = useState({
    checked: Array(radioData4.length).fill(false),
    checked2: Array(radioData5.length).fill(false),
    checked3: Array(radioData6.length).fill(false),
    checked4: Array(radioData7.length).fill(false),
    checked5: Array(radioData8.length).fill(false),
    checked6: Array(radioData9.length).fill(false),
    checked7: Array(radioData10.length).fill(false),
    checked8: Array(radioData11.length).fill(false)
  });
  const [activeButtons, setActiveButtons] = useState(Array(buttonData.length).fill(false));
  const [values, setValues] = useState({
    options: options5[0] || null,
    option2: options6[0] || null,
    option3: options7[0] || null,
    option4: options8[0] || null
  });
  const { openSideNav } = useContext(AppContext);

  const onChange = (e, set, idx) => {
    setValue((prev) => {
      const newChecked = [...prev[set]];
      newChecked[idx] = e.target.checked;
      return {
        ...prev,
        [set]: newChecked
      };
    });
  };

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const updatedActiveButtons = prevActiveButtons.map((btn, idx) => idx === index);
      return updatedActiveButtons;
    });
  };

  const handleOnChange = (e, newValue, fieldName) => {
    setValues((prevValue) => ({
      ...prevValue,
      [fieldName]: newValue,
    }));
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', py: 5, px: 2
        }}
      >
        <Typography
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', height: '12.5rem',
            border: '0.5px black solid',
            borderRadius: '1rem', mt: 3,
          }}
        >
          {resource.map((data, idx) => (
            <Box
              key={data.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', height: '8rem',
                width: '30%', flexDirection: 'column',
                borderRight: '0.5px #B2B2B2 solid',
                ':last-of-type': {
                  border: 'none'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  color: '#999999',
                  fontWeight: 800
                }}
              >{data.title }</Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  width: '100%', mt: 2
                }}
              >
                <Typography
                  sx={{
                    fontSize: 30,
                    color: '#0162ae',
                    fontWeight: 600,
                    height: '2.5rem',
                    borderBottom: '0.3rem #0162ae solid'
                  }}
                >{data.subTitle}</Typography>
                <Typography
                  sx={{
                    fontSize: 19,
                    color: '#333333',
                    height: '1.2rem', mb: 1.5,
                    fontWeight: 800
                  }}
                >{data.smallText}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: '100%',
            mt: 2, borderRadius: '1.2rem', py: 2,
            backgroundColor: '#f4f5f7', height: '26.3rem'
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
                <Typography sx={{fontSize: 16, width: '15%', fontWeight: 600, color: '#191919'}}>가입일</Typography>
                <Box sx={{width: !openSideNav ? '40%' : '35%', display: 'flex', flexDirection: 'row'}}>
                  {buttonData.map((data, idx) => (
                    <Box
                      key={idx}
                      onClick={() => handleButtonClick(idx)}
                      sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        width: !openSideNav ? '5.3rem' : '4rem', backgroundColor: activeButtons[idx] ? '#2a3958' : 'white',
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
                <Space size={12} style={{width: !openSideNav ? '45%' : '50%', marginRight: 8}}>
                  <StyledRangePicker
                    style={{
                      width: !openSideNav ? '36.4rem' : '35rem',
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
                <Typography sx={{fontSize: 16, width: '15%', mr: -1, fontWeight: 600, color: '#191919'}}>휴면상태</Typography>
                <Box
                  sx={{
                    width: '85%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '60%', display: 'flex',
                      justifyContent: 'left', alignItems: 'left'
                    }}
                  >
                    {radioData4.map((data, idx) => (
                      <Box key={idx}
                        sx={{
                          display: 'flex', justifyContent: 'left', alignItems: 'center'
                        }}
                      >
                      <StyledCheckbox
                        checked={value.checked[idx]}
                        onChange={(e) => onChange(e, 'checked', idx)} key={idx}
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
                      width: '40%'
                    }}
                  >
                    <ul style={{width: '100%'}}>
                      <li className={classes.customLi}>
                        <span className={classes.bullet}></span>
                        <Box
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'right',
                            width: '100%'
                          }}
                        >
                          <Typography sx={{fontSize: 18, fontWeight: 500, width: '40%'}}>블랙리스트 상태</Typography>
                          <Box sx={{width: '60%', display: 'flex', flexDirection: 'row'}}>
                            {radioData5.map((data, idx) => (
                              <Box key={idx}>
                                <StyledCheckbox
                                  checked={value.checked2[idx]}
                                  onChange={(e) => onChange(e, 'checked2', idx)} key={idx}
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
                <Typography sx={{fontSize: 16, width: '15%', mr: -1, fontWeight: 600, color: '#191919'}}>휴면상태</Typography>
                <Box
                  sx={{
                    width: '85%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '60%', display: 'flex',
                      justifyContent: 'left', alignItems: 'left'
                    }}
                  >
                    {radioData6.map((data, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex', justifyContent: 'left', alignItems: 'center'
                        }}
                      >
                      <StyledCheckbox
                        checked={value.checked3[idx]}
                        onChange={(e) => onChange(e, 'checked3', idx)} key={idx}
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
                      display: 'flex', justifyContent: 'left',
                      alignItems: 'center',
                      width: '40%'
                    }}
                  >
                    <ul style={{width: '100%'}}>
                      <li className={classes.customLi}>
                        <span className={classes.bullet}></span>
                        <Box
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'right',
                            width: '100%'
                          }}
                        >
                          <Typography sx={{fontSize: 18, fontWeight: 500, width: '40%'}}>투자여부</Typography>
                          <Box sx={{width: '60%', display: 'flex', flexDirection: 'row'}}>
                            {radioData7.map((data, idx) => (
                              <Box
                                key={idx}
                              >
                                <StyledCheckbox
                                  checked={value.checked4[idx]}
                                  onChange={(e) => onChange(e, 'checked4', idx)} key={idx}
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
                <Typography sx={{fontSize: 16, width: '15%', mr: -1, fontWeight: 600, color: '#191919'}}>대출자유형</Typography>
                <Box
                  sx={{
                    width: '85%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '60%', display: 'flex',
                      justifyContent: 'left', alignItems: 'left'
                    }}
                  >
                    {radioData8.map((data, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex', justifyContent: 'left', alignItems: 'center'
                        }}
                      >
                      <StyledCheckbox
                        checked={value.checked5[idx]}
                        onChange={(e) => onChange(e, 'checked5', idx)} key={idx}
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
                      width: '40%'
                    }}
                  >
                    <ul style={{width: '100%'}}>
                      <li className={classes.customLi}>
                        <span className={classes.bullet}></span>
                        <Box
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'right',
                            width: '100%'
                          }}
                        >
                          <Typography sx={{fontSize: 18, fontWeight: 500, width: '40%'}}>대출여부</Typography>
                          <Box sx={{width: '60%', display: 'flex', flexDirection: 'row'}}>
                            {radioData9.map((data, idx) => (
                              <Box key={idx}>
                                <StyledCheckbox
                                  checked={value.checked6[idx]}
                                  onChange={(e) => onChange(e, 'checked6', idx)} key={idx}
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
                <Typography sx={{fontSize: 16, width: '15%', mr: -1, fontWeight: 600, color: '#191919'}}>투자유형승인여부</Typography>
                <Box
                  sx={{
                    width: '85%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%', display: 'flex',
                      justifyContent: 'left', alignItems: 'left'
                    }}
                  >
                    {radioData10.map((data, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex', justifyContent: 'left', alignItems: 'center'
                        }}
                      >
                      <StyledCheckbox
                        checked={value.checked7[idx]}
                        onChange={(e) => onChange(e, 'checked7', idx)} key={idx}
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
                <Typography sx={{fontSize: 16, width: '15%', mr: -1, fontWeight: 600, color: '#191919'}}>투자/대출상태</Typography>
                <Box
                  sx={{
                    width: '85%', display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%', display: 'flex',
                      justifyContent: 'left', alignItems: 'left'
                    }}
                  >
                    {radioData11.map((data, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex', justifyContent: 'left', alignItems: 'center'
                        }}
                      >
                      <StyledCheckbox
                        checked={value.checked8[idx]}
                        onChange={(e) => onChange(e, 'checked8', idx)} key={idx}
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
                <Typography sx={{fontSize: 16, width: '15%', mr: -1, fontWeight: 600, color: '#191919'}}>게시여부</Typography>
                <Box
                  sx={{
                    width: '20%', mr: 1
                  }}
                >
                  <Autocomplete
                    value={values.options}
                    disablePortal
                    name='option'
                    onChange={(e, newValue, ) => handleOnChange(e, newValue, 'option')}
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.title}
                    options={options5}
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
                    width: '65%', mr: 2
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
            alignItems: 'center', width: '100%', mt: 6, mb: 2
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
              value={values.option2}
              disablePortal
              name='option2'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option2')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options6}
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
              value={values.option3}
              disablePortal
              name='option3'
              onChange={(e, newValue) => handleOnChange(e, newValue, 'option3')}
              id="combo-box-demo"
              getOptionLabel={(option) => option.title}
              options={options7}
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
                options={options8}
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
              justifyContent: 'center', width: '100%',
              alignItems: 'center', mt: 3, mb: 2,
              // overflowX: 'auto'
            }}
          >
            <TableComponent data={data2} columns={columns2} />
          </Box>
        </Box>
    </React.Fragment>
  )
}

export default MemberPage;