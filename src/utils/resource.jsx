import './Style.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const buttonData = [
    {title: '전체'},
    {title: '오늘'},
    {title: '어제'},
    {title: '1주일'},
    {title: '1개월'},
    {title: '3개월'}
  ];

  export const radioData1 = [
    {title: '전체'},
    {title: 'PC'},
    {title: 'Mobile App'},
    {title: 'Mobile Web'},
  ];

  export const radioData2 = [
    {title: '전체'},
    {title: '승인대기'},
    {title: '승인완료'},
    {title: '승인거부'},
  ];

  export const radioData3 = [
    {title: '전체'},
    {title: '게시'},
    {title: '비게시'}
  ];

  export const options = [
    {title: '승인대기'}
  ];

  export const options2 = [
    {title: '승인대기승인'}
  ];

  export const options3 = [
    {title: '승인대기승인'}
  ];

  export const options4 = [
    {title: '승인대기승인'}
  ];

  export const data = [
    {
        id: 1,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        status: 'done',
        code2: '정상',
        code3: '투자',
        code4: '일반개인',
        gui: '일반개인'
    },
    {
        id: 2,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        status: 'pending',
        code2: '정상',
        code3: '투자',
        code4: '일반개인',
        gui: '일반개인'
    },
    {
        id: 3,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        status: 'failed',
        code2: '정상',
        code3: '투자',
        code4: '일반개인',
        gui: '일반개인'
    },
    {
        id: 4,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        status: 'pending',
        code2: '정상',
        code3: '투자',
        code4: '일반개인',
        gui: '일반개인'
    },
    {
        id: 5,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        status: 'pending',
        code2: '정상',
        code3: '투자',
        code4: '일반개인',
        gui: '일반개인'
    },
    {
        id: 6,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        status: 'pending',
        code2: '정상',
        code3: '투자',
        code4: '일반개인',
        gui: '일반개인'
    }
]

export const resource = [
    {id: 1, title: '전체', subTitle: '100', smallText: '명'},
    {id: 2, title: '승인대기', subTitle: '10', smallText: '명'},
    {id: 3, title: '승인완료', subTitle: '80', smallText: '명'},
    {id: 4, title: '승인거부', subTitle: '10', smallText: '명'}
];

export const radioData4 = [
    {title: '전체'},
    {title: '정상'},
    {title: '휴면'}
];

export const radioData5 = [
    {title: '전체'},
    {title: '정상'},
    {title: '휴면'}
];

export const radioData6 = [
    {title: '전체'},
    {title: '일반개인'},
    {title: '소득적격'},
    {title: '개인전문'},
    {title: '법인'},
    {title: '여신금융'},
    {title: 'P2P온투'}
];

export const radioData7 = [
    {title: '전체'},
    {title: '투자중'},
    {title: '휴면'}
];

export const radioData8 = [
    {title: '전체'},
    {title: '개인'},
    {title: '개인사업자'},
    {title: '법인'}
];

export const radioData9 = [
    {title: '전체'},
    {title: '대출중'},
    {title: '휴면'}
];

export const radioData10 = [
    {title: '전체'},
    {title: '승인대기'},
    {title: '승인완료'},
    {title: '승인거부'}
];

export const radioData11 = [
    {title: '전체'},
    {title: '상환중'},
    {title: '상환완료'},
    {title: '연체중'},
    {title: '중도상환완료'},
    {title: '만기상환완료'},
    {title: '기한이익상실 예정'},
    {title: '기한이익상실'},
    {title: '화해'}
];

export const options5 = [
    {title: '승인대기'},
    {title: '승인대기'},
    {title: '기한이익상실'},
    {title: '승인 ID'},
    {title: 'GUID'}
];

export const options6 = [
    {title: '승인대기'},
    {title: '승인대기'},
    {title: '기한이익상실'}
];

export const options7 = [
    {title: '50승인대기'},
    {title: '100승인대기'},
    {title: '200기한이익'}
];

export const options8 = [
    {title: '승인대기'},
    {title: '승인대기'}
];

export const radioData12 = [
    {title: '이메일'},
    {title: '문자'},
];

export const columns =[
    {
        title: <span className='headers'>NO</span>,
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: <span className='headers'>회원번호</span>,
        dataIndex:"code",
        key:"code",
    },
    {
        title:<span className='headers'>회원명/법인명</span>,
        dataIndex:"name",
        key:"name"
    },
    {
        title:<span className='headers'>휴대폰 번호</span>,
        dataIndex:"phone",
        key:"phone"
    },
    {
        title:<span className='headers'>이메일ID</span>,
        dataIndex:"email",
        key:"email"
    },
    {
        title:<span className='headers'>승인여부</span>,
        dataIndex:"status",
        key:"status",
        render: (_, { status }) => (
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
              {status === 'done'
                ? <Box
                    sx={{
                      color: '#45574B', display: 'flex',justifyContent: 'center',
                      backgroundColor: '#dcfae6', alignItems: 'center',
                      borderRadius: '0.6rem', width: '5rem',
                      height: '1.5rem',
                      fontSize: 12}}>승인완료</Box>
                : status === 'failed'
                  ? <Box
                      sx={{
                        color: '#5E392B', display: 'flex',justifyContent: 'center',
                        backgroundColor: '#fee0de', alignItems: 'center',
                        borderRadius: '0.6rem', width: '5rem',
                        height: '1.5rem',
                        fontSize: 12
                      }}>승인거절</Box>
                  : <Box
                      sx={{
                        color: '#76573A', display: 'flex',justifyContent: 'center',
                        backgroundColor: '#ffedd4', alignItems: 'center',
                        borderRadius: '0.6rem', width: '5rem',
                        height: '1.5rem',
                        fontSize: 12
                      }}
                    >승인대기</Box>
              }
            </Box>
        )
    },
    {
        title:<span className='headers'>휴면상태</span>,
        dataIndex:"code2",
        key:"code2"
    },
    {
        title:<span className='headers'>구분</span>,
        dataIndex:"code3",
        key:"code3"
    },
    {
        title:<span className='headers'>유형</span>,
        dataIndex:"code4",
        key:"code4"
    },
    {
        title:<span className='headers'>GUID</span>,
        dataIndex:"gui",
        key:"gui"
    }

];

export const columns2 =[
    {
        title: <span className='headers'>NO</span>,
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: <span className='headers'>회원번호</span>,
        dataIndex:"code",
        key:"code",
        render: (text) => <Link to='/dashboard/member-management/Abc123/detail' className='custom-link'>
                            {text}
                          </Link>
    },
    {
        title:<span className='headers'>회원명/법인명</span>,
        dataIndex:"name",
        key:"name",
        render: (text) => <Link to='/dashboard/member-management/Abc123/detail' className='custom-link'>
                            {text}
                          </Link>,
    },
    {
        title:<span className='headers'>휴대폰 번호</span>,
        dataIndex:"phone",
        key:"phone"
    },
    {
        title:<span className='headers'>이메일ID</span>,
        dataIndex:"email",
        key:"email"
    },
    {
        title:<span className='headers'>구분</span>,
        dataIndex:"code2",
        key:"code2",
        render: (_, {code2}) => (
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code2[0]}</Typography>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code2[1]}</Typography>
            </Box>
        )
    },
    {
        title:<span className='headers'>유형</span>,
        dataIndex:"code3",
        key:"code3",
        render: (_, {code3}) => (
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code3[0]}</Typography>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code3[1]}</Typography>
            </Box>
        )
    },
    {
        title:<span className='headers'>GUID</span>,
        dataIndex:"gui",
        key:"gui",
        render: (_, {gui}) => (
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{gui[0]}</Typography>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{gui[1]}</Typography>
            </Box>
        )
    },
    {
        title:<span className='headers'>투자/대출건수</span>,
        dataIndex:"code4",
        key:"code4",
        render: (_, {code4}) => (
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code4[0]}</Typography>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code4[1]}</Typography>
            </Box>
        )
    },
    {
        title:<span className='headers'>상환건수</span>,
        dataIndex:"code5",
        key:"code5",
        render: (_, {code5}) => (
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code5[0]}</Typography>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code5[1]}</Typography>
            </Box>
        )
    },
    {
        title:<span className='headers'>연체건수</span>,
        dataIndex:"code6",
        key:"code6",
        render: (_, {code6}) => (
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code6[0]}</Typography>
              <Typography sx={{fontWeight: 'bold', color: '#4C4C4C', fontSize: 15}}>{code6[1]}</Typography>
            </Box>
        )
    },
    {
        title:<span className='headers'>투자유형승인여부</span>,
        dataIndex:"status",
        key:"status",
        render: (_, { status }) => (
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
              {status === 'done'
                ? <Box
                    sx={{
                      color: '#45574B', display: 'flex',justifyContent: 'center',
                      backgroundColor: '#dcfae6', alignItems: 'center',
                      borderRadius: '0.6rem', width: '5rem',
                      height: '1.5rem',
                      fontSize: 12}}>승인완료</Box>
                : status === 'failed'
                  ? <Box
                      sx={{
                        color: '#5E392B', display: 'flex',justifyContent: 'center',
                        backgroundColor: '#fee0de', alignItems: 'center',
                        borderRadius: '0.6rem', width: '5rem',
                        height: '1.5rem',
                        fontSize: 12
                      }}>승인거절</Box>
                  : <Box
                      sx={{
                        color: '#76573A', display: 'flex',justifyContent: 'center',
                        backgroundColor: '#ffedd4', alignItems: 'center',
                        borderRadius: '0.6rem', width: '5rem',
                        height: '1.5rem',
                        fontSize: 12
                      }}
                    >승인대기</Box>
              }
            </Box>
        )
    },
    {
        title:<span className='headers'>휴면상태</span>,
        dataIndex:"code7",
        key:"code7"
    },
    {
        title:<span className='headers'>블랙리스트상태</span>,
        dataIndex:"code8",
        key:"code8"
    },
    {
        title:<span className='headers'>가입일시</span>,
        dataIndex:"code9",
        key:"code9"
    }

];

export const data2 = [
    {
        id: 1,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'done',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 2,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 3,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 4,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 5,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 6,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 7,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 8,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 9,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 10,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 11,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 12,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 13,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 14,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 15,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 16,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 17,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 18,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 19,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
    {
        id: 20,
        code: 'Abc123',
        name: '김마리',
        phone: '010-1234-5678',
        email: 'aaaaaaaabc@naver.com',
        code2: ['투자', '투자'],
        code3: ['일반개인', '개인'],
        gui: ['U1JtXgAj5Q72Wn', 'CZ4391f9ewm6ov'],
        code4: ['10건', '5건'],
        code5: ['2건', '2건'],
        code6: ['1건', '1건'],
        status: 'failed',
        code7: '정상',
        code8: '정상',
        code9: '2023-01-10 09:00:00'
    },
]

export const columns3 =[
    {
        title: <span className='headers'>NO</span>,
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: <span className='headers'>기존유형</span>,
        dataIndex:"code",
        key:"code"
    },
    {
        title:<span className='headers'>신청유형</span>,
        dataIndex:"name",
        key:"name"
    },
    {
        title:<span className='headers'>제출서류</span>,
        dataIndex:"chip",
        key:"chip",
        render: (_, {chip}) => (
            <Box
              sx={{
                display: 'flex',justifyContent: 'center', border: '1px #CBCBCB solid',
                backgroundColor: '#E5E5E5', alignItems: 'center', width: '5rem', height: '3rem',
                borderRadius: '.8rem'
              }}
            >
              {chip}
            </Box>
        )
    },
    {
        title:<span className='headers'>신청일시</span>,
        dataIndex:"dateTime",
        key:"dateTime"
    },
    {
        title:<span className='headers'>승인여부</span>,
        dataIndex:"status",
        key:"status",
        render: (_, { status }) => (
            <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
              {status === 'approved'
                ? <Box
                    sx={{
                      color: '#194719', display: 'flex',justifyContent: 'center',
                      backgroundColor: '#99FF99', alignItems: 'center',
                      borderRadius: '1rem', width: '8rem',
                      height: '2.5rem',
                      fontSize: 20, fontWeight: 'bold'}}>Approved</Box>
                : status === 'refusal'
                  ? <Box
                      sx={{
                        color: '#6F0E0A', display: 'flex',justifyContent: 'center',
                        backgroundColor: '#EE8E8A', alignItems: 'center',
                        borderRadius: '1rem', width: '7rem',
                        height: '2.5rem', fontWeight: 'bold',
                        fontSize: 20
                      }}>Refusal</Box>
                  : <Box
                      sx={{
                        color: '#76573A', display: 'flex',justifyContent: 'center',
                        backgroundColor: '#ffedd4', alignItems: 'center',
                        borderRadius: '1rem', width: '7rem',
                        height: '2.5rem',
                        fontSize: 20, fontWeight: 'bold'
                      }}
                    >Waiting</Box>
              }
            </Box>
        )
    },
    {
        title:<span className='headers'>승인거부 사유</span>,
        dataIndex:"description",
        key:"description"
    },
    {
        title:<span className='headers'>승인일시</span>,
        dataIndex:"dateTime2",
        key:"dateTime2"
    }

];

export const data3 = [
    {
        id: 1,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'approved',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 2,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 3,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'refusal',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 4,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 5,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 6,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 7,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 8,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 9,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 10,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 11,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 12,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 13,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 14,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 15,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 16,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 17,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 18,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 19,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
    {
        id: 20,
        code: '소득적격',
        name: '개인전문',
        chip: '전문',
        dateTime: '2023-01-10 09:00:00',
        status: 'waiting',
        description: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
        dateTime2: '2023-01-10 09:00:00'
    },
]

export const options9 = [
    {title: '승인대기'},
    {title: '승인'},
    {title: '승인'},
    {title: '승인'}
];

export const options10 = [
    {title: '승인대기'},
    {title: '승인대기'}
];

export const options11 = [
    {title: '50승인대기'},
    {title: '100승인대기'},
    {title: '200승인대기'}
];

export const options12 = [
    {btn: 'Check', text: 'You have a new transaction!'},
    {btn: 'Check', text: 'Transaction has been successfully declined'},
    {btn: 'Check', text: 'Payment cancelled!'},
    {btn: 'Check', text: 'Fiscus mentioned you!'},
    {btn: 'Check', text: 'Fiscus mentioned you!'}
];



