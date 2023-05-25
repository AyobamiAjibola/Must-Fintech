import React, {useState} from 'react';
import {
  Typography, Box, Button, TextField, Divider,
  DialogActions, DialogContentText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import styled, {css} from 'styled-components';
import { radioData12 } from '../../utils/resource';
import { Checkbox } from 'antd';
import AppModal from '../modal/AppModal';

const useStyles = makeStyles({
  customTextField2: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.6rem',
      height: '2.8rem',
      backgroundColor: 'white'
    }
  },
  customTextField3: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.6rem',
      height: '5rem',
    }
  }
});

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

function Tab_1 () {
  const classes = useStyles();
  const [checked, setChecked] = useState(Array.apply(radioData12.length).fill(false));
  const [values, setValues] = useState({
    address: false,
    timeModal: false,
    submitButton: false
  });

  const handleOpenModal = (set) => {
    console.log(set, 'checks set')
    setValues((prev) => {
      let actionModal = prev[set];
      actionModal = true;
      return { prev, [set]: actionModal };
    })
  }

  const handleCloseModal = (set) => {
    setValues((prev) => {
      let actionModal = prev[set];
      actionModal = false;
      return { prev, [set]: actionModal };
    })
  }

  const onChange = (e, idx) => {
    setChecked((prev) => {
      const newVal = [...prev];
      newVal[idx] = e.target.checked;
      return newVal;
    })
  }

  return (
    <React.Fragment>

      <Box
        sx={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', mt: 4, mb: 2, width: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center', width: '70%'
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              color: '#252e3a'
            }}
          >회원정보</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center', width: '30%'
          }}
        >
          <Box
            sx={{
              width: '100%', display: 'flex', gap: 0.6,
              justifyContent: 'right', alignItems: 'center'
            }}
          >
            <Button
              sx={{
                backgroundColor: '#2a3958', color: 'white',
                width: '40%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#546079'}, fontWeight: 'bold'
              }}
            >
              0명회원0명회원
            </Button>
            <Button
              sx={{
                backgroundColor: '#2a3958', color: 'white',
                width: '35%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#546079'}, fontWeight: 'bold'
              }}
            >
              0명회원0명
            </Button>
            <Button
              sx={{
                backgroundColor: '#2a3958', color: 'white',
                width: '25%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#546079'}, fontWeight: 'bold'
              }}
            >
              0명회원회
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%', border: '0.5px #E7E7E7 solid',
          display: 'flex', flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>회원번호</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>ABC123</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '7rem'
            }}
          >
            <Box
              sx={{
                display: 'flex', justifyContent: 'left',
                alignItems: 'center', width: '100%', height: '100%'
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  display: 'flex', justifyContent: 'left',
                  alignItems: 'center', borderRight: '3px white solid'
                }}
              >
                <Typography sx={{fontSize: 19, ml: 2}}>회원번호</Typography>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    display: 'flex', justifyContent: 'left',
                    alignItems: 'center', borderBottom: '3px white solid'
                  }}
                >
                  <Typography sx={{fontSize: 19, ml: 2}}>유형</Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    display: 'flex', justifyContent: 'left',
                    alignItems: 'center'
                  }}
                >
                  <Typography sx={{fontSize: 19, ml: 2}}>GUID</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '7rem'
            }}
          >
            <Box
              sx={{
                width: '100%', height: '100%'
              }}
            >
              <Box
                sx={{
                  width: '100%', height: '50%',
                  borderBottom: '2px #E7E7E7 solid',
                  display: 'flex',
                  justifyContent: 'left', alignItems: 'center',
                }}
              >
                <Typography sx={{fontSize: 19, ml: 2}}>일반개인</Typography>
              </Box>
              <Box
                sx={{
                  width: '100%', height: '50%',
                  display: 'flex',
                  justifyContent: 'left', alignItems: 'center',
                }}
              >
                <Typography sx={{fontSize: 19, ml: 2}}>qwerasdf1324</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '7rem'
            }}
          >
            <Box
              sx={{
                display: 'flex', justifyContent: 'left',
                alignItems: 'center', width: '100%', height: '100%'
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  display: 'flex', justifyContent: 'left',
                  alignItems: 'center', borderRight: '3px white solid'
                }}
              >
                <Typography sx={{fontSize: 19, ml: 2}}>회원번호</Typography>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    display: 'flex', justifyContent: 'left',
                    alignItems: 'center', borderBottom: '3px white solid'
                  }}
                >
                  <Typography sx={{fontSize: 19, ml: 2}}>유형</Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    display: 'flex', justifyContent: 'left',
                    alignItems: 'center'
                  }}
                >
                  <Typography sx={{fontSize: 19, ml: 2}}>GUID</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '7rem'
            }}
          >
            <Box
              sx={{
                width: '100%', height: '100%'
              }}
            >
              <Box
                sx={{
                  width: '100%', height: '50%',
                  borderBottom: '2px #E7E7E7 solid',
                  display: 'flex',
                  justifyContent: 'left', alignItems: 'center',
                }}
              >
                <Typography sx={{fontSize: 19, ml: 2}}>일반개인</Typography>
              </Box>
              <Box
                sx={{
                  width: '100%', height: '50%',
                  display: 'flex',
                  justifyContent: 'left', alignItems: 'center',
                }}
              >
                <Typography sx={{fontSize: 19, ml: 2}}>zxcasdqwe1234</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>유형</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>승인거부</Typography>
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white',
                width: '7rem', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              0명회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>휴면상태</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>휴면 (2023-01-01 09:00:00)</Typography>
            <Button
              onClick={() => handleOpenModal('timeModal')}
              sx={{
                backgroundColor: '#70809d', color: 'white',
                width: '7rem', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              0명회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>블랙리스트여부</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 1,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>블랙리스트</Typography>
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white',
                width: '7rem', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              0명회원회
            </Button>
            <Button
              onClick={() => handleOpenModal('timeModal')}
              sx={{
                backgroundColor: '#70809d', color: 'white',
                width: '8rem', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              0명회원회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>회원명</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>김길동</Typography>
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white',
                width: '7.5rem', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              0명회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>생년월일</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>1988-01-02</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>성별</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>남자</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>이메일 ID</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>gildongkim@naver.com</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>휴대폰 번호</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>010-1234-5678</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>전화번호</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <TextField
              variant="outlined"
              value="02-1234-5678"
              className={classes.customTextField2}
              sx={{
                width: '40%', ml: 2
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>주소</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 1,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Button
              onClick={() => handleOpenModal('address')}
              sx={{
                backgroundColor: '#70809d', color: 'white', ml: 2,
                width: '10%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              회원회
            </Button>
            <TextField
              disabled
              variant="outlined"
              value="(01234) 서울특별시 강동구 천호대로 12길"
              className={classes.customTextField2}
              sx={{
                width: '45%'
              }}
            />
            <TextField
              variant="outlined"
              value="상세주소"
              className={classes.customTextField2}
              sx={{
                width: '45%', mr: 2
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>직업</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>직장인</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>출금계좌</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>신한은행 123-45-678-90</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>예치금계좌</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>전북은행 012-33-22221</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>상환전용계좌</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 1,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white', ml: 2,
                width: '15%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>상환전용계좌</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 1,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            {radioData12.map((data, idx) => (
              <Box key={idx}
                sx={{
                  display: 'flex', justifyContent: 'left', alignItems: 'center'
                }}
              >
              <StyledCheckbox
                checked={checked[idx]}
                onChange={(e) => onChange(e, idx)} key={idx}
                style={{
                  marginLeft: 2, fontWeight: 600
                }}
              >
                {data.title}
              </StyledCheckbox>
              </Box>
            ))}
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white', ml: 2,
                width: '15%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>약관동의</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>전체 약관동의 완료</Typography>
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white',
                width: '7.5rem', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              0명회원회
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>가입일시</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>2022-01-01 09:00:00</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              width: '25%', height: '7rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>메모</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center'
            }}
          >
            <TextField
              variant="outlined"
              value="악성민원으로 전화상담 시 주의 필요
1금융 대출 1건/연체없음
이내 소유 아파트로 대출 문의
1순위 하나은행 10억 대출 중
대출금리 15%로 협의중"
              multiline
              rows={2}
              className={classes.customTextField3}
              sx={{
                width: '100%', ml: 2, mr: 2, backgroundColor: 'white',
                mt: -1, fontWeight: 'bold'
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex', justifyContent: 'left',
          alignItems: 'center', mt: 8, mb: 3
        }}
      >
        <Typography sx={{fontWeight: 'bold', fontSize: 20}}>메모</Typography>
      </Box>

      <Box
        sx={{
          width: '100%', border: '0.5px #E7E7E7 solid',
          display: 'flex', flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>법인명</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>㈜가나다법인</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>사업자등록번호</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>ABC1111-222-333323</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>사업자전화번호</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 2,
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <TextField
              variant="outlined"
              value="111-222-3333"
              className={classes.customTextField2}
              sx={{
                width: '40%', ml: 2
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>사업자주소</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex', gap: 1,
              justifyContent: 'left', alignItems: 'center',
              height: '3.5rem'
            }}
          >
            <Button
              sx={{
                backgroundColor: '#70809d', color: 'white', ml: 2,
                width: '10%', height: '2.8rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#70809d'}, fontWeight: 'bold'
              }}
            >
              회원회
            </Button>
            <TextField
              disabled
              variant="outlined"
              value="(01234) 서울특별시 강동구 천호대로 12길"
              className={classes.customTextField2}
              sx={{
                width: '25%'
              }}
            />
            <TextField
              variant="outlined"
              value="상세주소"
              className={classes.customTextField2}
              sx={{
                width: '25%', mr: 2
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex', justifyContent: 'left',
          alignItems: 'center', mt: 8, mb: 2
        }}
      >
        <Typography sx={{fontWeight: 'bold', fontSize: 20}}>저장이력</Typography>
      </Box>

      <Box
        sx={{
          width: '100%', border: '0.5px #E7E7E7 solid',
          display: 'flex', flexDirection: 'column', mb: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              borderBottom: '3px white solid', width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>최근저장일시</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              borderBottom: '2px #E7E7E7 solid', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>2022-01-01 09:00:00</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex', justifyContent: 'left',
              alignItems: 'center', backgroundColor: '#f4f5f7',
              width: '25%', height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>관리자</Typography>
          </Box>
          <Box
            sx={{
              width: '75%', display: 'flex',
              justifyContent: 'left', alignItems: 'center',
              height: '3.5rem'
            }}
          >
            <Typography sx={{fontSize: 19, ml: 2}}>김관리자</Typography>
          </Box>
        </Box>
      </Box>

      <Divider orientation='horizontal' />

      <Box
        sx={{
          display: 'flex', alignItems: 'center', mt: 4,
          justifyContent: 'right', width: '100%', gap: 1
        }}
      >
        <Button
          onClick={() => handleOpenModal('submitButton')}
          sx={{
            backgroundColor: '#2a3958', color: 'white',
            width: '18%', height: '4rem', borderRadius: '0.6rem',
            '&:hover': {backgroundColor: '#4E596D'}, fontWeight: 'bold'
          }}
        >
          회원회
        </Button>
        <Button
          sx={{
            backgroundColor: 'white', border: '1px #E7E7E7 solid', color: 'black',
            width: '18%', height: '4rem', borderRadius: '0.6rem',
            '&:hover': {backgroundColor: 'white', border: '1px black solid'}, fontWeight: 'bold'
          }}
        >
          회원회
        </Button>
      </Box>

      <AppModal
        show={values.address || values.timeModal || values.submitButton}
        warningIcon={values.timeModal || values.submitButton}
        Content={<DialogContentText>
              {values.address &&
                <Box sx={{width: '30rem'}}>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                      color: '#333333', fontWeight: 'bold'
                    }}
                  >
                    Address Search
                  </Typography>
                </Box>
              }
              {(values.timeModal || values.submitButton) &&
                <Box
                  sx={{
                    height: '5em', mt: 5, mb: -2,
                    display: 'flex', justifyContent: 'left',
                    alignItems: 'left', width: '25rem', flexDirection: 'column'
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold', fontSize: '1.2rem',
                      color: 'black'
                    }}
                  >
                    {values.timeModal ? '휴면 상태' : '휴면상태를 해제하시겠습니까?'}
                  </Typography>
                  {values.timeModal && <Typography
                    sx={{
                      fontWeight: 'bold', fontSize: '1.2rem'
                    }}
                  >
                    잠금을 해제하시겠습니까?
                  </Typography>}
                </Box>
              }
            </DialogContentText>}
        ActionComponent={
          <DialogActions
            sx={{
              display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              mb: 2
            }}
          >
            <Button
              sx={{
                backgroundColor: '#2a3958', color: 'white',
                width: '8.5rem', height: '2.5rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: '#4E596D'}, fontWeight: 'bold'
              }}
            >Ok</Button>
            <Button
              sx={{
                backgroundColor: 'white', border: '1px #E7E7E7 solid', color: '#2a3958',
                width: '8.5rem', height: '2.5rem', borderRadius: '0.6rem',
                '&:hover': {backgroundColor: 'white', border: '1px #2a3958 solid'}, fontWeight: 'bold'
              }}
              onClick={() => {
                handleCloseModal('address'),
                handleCloseModal('timeModal')
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        }
        onClose={() => {
          handleCloseModal('address')
        }}
      />

    </React.Fragment>
  )
}

export default Tab_1;