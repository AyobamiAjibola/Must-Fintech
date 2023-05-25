import React, { useState } from 'react';
import { Table, Pagination } from 'antd';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { calculateColumnsWidth } from '../../utils/helper';

const useStyles = makeStyles((theme) => ({
  headers: {
    color: '#333333',
    fontWeight: 600,
    fontSize: 18, textAlign: 'center'
  }
}));

const StyledTable = styled(Table).attrs(props => ({
  dataSource: props.dataSource
}))`
.ant-table-thead .ant-table-cell {
  background-color: #DBDCDE !important;
  height: 5rem !important;
  text-align: center !important;
  font-weight: bold !important;
  font-size: 22px
}

.ant-table-row:nth-child(2n) .ant-table-cell {
  background-color: #f4f5f7 !important;
}

.ant-table-tbody {
  color: #333333 !important;
  font-size: 17px !important;
  font-weight: 600 !important;
  text-align: center !important;
}

.ant-pagination {
  margin-top: 16px;
  text-align: left;
  background-color: #f4f5f7 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  .ant-pagination-prev,
  .ant-pagination-next {
    height: 3rem;
    width: 3rem;
  }

  .ant-pagination-prev > .ant-pagination-item-link,
  .ant-pagination-next > .ant-pagination-item-link {
    color: #2a3958;
    font-size: 1.3rem;
    font-weight: bold;

    &::before {
      font-weight: bold; /* Apply font-weight to the arrows */
    }
  }

  .ant-pagination-disabled .ant-pagination-item-link {
    color: #ccc;
  }

  .ant-pagination-item {
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    a {
      color: #2a3958;
    }
  }

  .ant-pagination-item-active {
    background-color: #2a3958;
    border: none !important;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    a {
      color: white;
    }
  }
}
`

// const CustomPagination = styled(Pagination)`
//   && {
//     .ant-pagination-prev,
//     .ant-pagination-next {
//       display: flex;
//       align-items: center;

//       > a {
//         display: flex;
//         align-items: center;
//       }

//       > a::before {
//         font-weight: bold; /* Apply font-weight to the arrows */
//       }
//     }

//     .ant-pagination-jump-prev,
//     .ant-pagination-jump-next {
//       display: none;
//     }
//   }
// `;

function TableComponent (props){
  const classes = useStyles();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const {data, columns} = props;
  const maxWidthPerCell = window.location.pathname === '/dashboard' ? 50 : 200;

  const dataTable = calculateColumnsWidth(columns, data, maxWidthPerCell);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedRowKeys(selectedRows.code);
    },
    getCheckboxProps: (record) => ({
      name: record.code,

    }),
  };

  const handlePageChange = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  // const handleSkipToLast = () => {
  //   const totalItems = data.length; // Replace with the total number of items in your data
  //   const lastPage = Math.ceil(totalItems / pageSize);
  //   setPage(lastPage);
  // };

  // const renderPaginationItem = (page, type, originalElement) => {
  //   if (type === 'prev' || type === 'next') {
  //     return originalElement;
  //   }

  //   if (type === 'last') {
  //     return (
  //       <a onClick={handleSkipToLast}>
  //         <DoubleRightOutlined />
  //       </a>
  //     );
  //   }

  //   return originalElement;
  // };

  return(
    <React.Fragment>
      <StyledTable dataSource={data} columns={columns}
        rowSelection={{
            type: selectedRowKeys,
            ...rowSelection,
          }}
        style={{width: '100%'}}
        // size="middle"
        scroll={{ x: `calc(${dataTable.tableWidth}px + 40%)` }}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: data.length,
          onChange: handlePageChange
        }}
      >
        {/* <CustomPagination
          current={page}
          pageSize={pageSize}
          onChange={handlePageChange}
          total={data.length}
          itemRender={renderPaginationItem}
        /> */}
      </StyledTable>
    </React.Fragment>
  )
}

export default TableComponent;