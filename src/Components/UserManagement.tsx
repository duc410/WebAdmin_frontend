import * as React from 'react';
import Title from './Title';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

export default function UserList() {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Full Name', width: 200 },
    { field: 'code', headerName: 'Code', width: 200 },
    { field: 'note', headerName: 'Note', width: 300 },
    {
      field: "editButton",
      headerName: "Actions",
      description: "Actions column.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
              color='primary'
            >
              Edit
            </Button>
            <Button
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
              color='secondary'
            >
              Delete
            </Button>
          </>
        );
      }
    },
  ];

  const rows = [
    { id: 1, fullName: 'Nguyễn Như Đức', code: '0953-5389-963', note: 'Bach Khoa - Ha Noi' },
    { id: 2, fullName: 'Nguyễn Như Đức', code: 'Cersei', note: 'Bach Khoa - Ha Noi' },
    { id: 3, fullName: 'Lannister', code: 'Jaime', note: 'Bach Khoa - Ha Noi' },
    { id: 4, fullName: 'Stark', code: 'Arya', note: 'Bach Khoa - Ha Noi' },
    { id: 5, fullName: 'Targaryen', code: 'Daenerys', note: null },
    { id: 6, fullName: 'Melisandre', code: null, note: 'Bach Khoa - Ha Noi' },
    { id: 7, fullName: 'Clifford', code: 'Ferrara', note: 'Bach Khoa - Ha Noi' },
    { id: 8, fullName: 'Frances', code: 'Rossini', note: 'Bach Khoa - Ha Noi' },
    { id: 9, fullName: 'Roxie', code: 'Harvey', note: 'Bach Khoa - Ha Noi' },
    { id: 10, fullName: 'Roxie', code: 'Harvey', note: 'Bach Khoa - Ha Noi' },
    { id: 11, fullName: 'Roxie', code: 'Harvey', note: 'Bach Khoa - Ha Noi' },
    { id: 12, fullName: 'Roxie', code: 'Harvey', note: 'Bach Khoa - Ha Noi' },
    { id: 13, fullName: 'Roxie', code: 'Harvey', note: 'Bach Khoa - Ha Noi' },
    { id: 14, fullName: 'Roxie', code: 'Harvey', note: 'Bach Khoa - Ha Noi' },

  ];

  const [clickedRow, setClickedRow] = React.useState<any>();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onButtonClick = (e: React.MouseEvent, row: any) => {
    e.stopPropagation();
    setClickedRow(row);
  };

  return (
    <React.Fragment>
      <h1>Quản lý tài khoản</h1>
      <Divider sx={{ bgcolor: "secondary.light" }} />
      <Container>
        <Title>Tìm kiếm / Lọc</Title>
        <div>
          <Button variant="contained" onClick={handleOpen}>
            <AddIcon />New Item
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <Box sx={{ height: 200, width: "100%", m: 2, ml: 0 }}
          component="form"
          noValidate
          autoComplete="off">
          <div>
            <TextField
              sx={{ mr: 3 }}
              id=""
              label="Full Name"
              multiline
              maxRows={4}
            // value={}
            // onChange={}
            />
            <TextField
              sx={{ mr: 3 }}
              id=""
              label="Code"
              multiline
              maxRows={4}
            // value={}
            // onChange={}
            />
            <TextField
              sx={{ mr: 3 }}
              id=""
              label="Note"
              multiline
              maxRows={4}
            // value={}
            // onChange={}
            />
          </div>
        </Box>
      </Container>
      <Divider sx={{ bgcolor: "secondary.light" }} />
      <Container >
        <Title>Danh sách các tài khoản đăng nhập</Title>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Box>
        clickedRow: {clickedRow ? `${clickedRow.id}` : null}
      </Container>
    </React.Fragment>
  );
}


