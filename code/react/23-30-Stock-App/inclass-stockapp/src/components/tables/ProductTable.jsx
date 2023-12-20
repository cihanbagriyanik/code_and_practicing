import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStockCall from "../../hooks/useStockCall";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "./DataTable";

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();
  function getRowId(row) {
    console.log(row);
    return row._id;
  }
  const columns = [
    {
      field: "_id",
      headerName: "#",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "categoryId",
      headerName: "Category",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (params) => params.row.categoryId.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (params) => params.row.brandId.name,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      minWidth: 110,
      headerAlign: "center",
      align: "center",
      editable: false,
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        // console.log(params)
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("products", params.id)}
        />
      ),
    },
  ];
  return (
    // <Box sx={{ width: "100%",mt:3 }}>
    //   <DataGrid
    //     rows={products}
    //     columns={columns}
    //     initialState={{
    //       pagination: {
    //         paginationModel: {
    //           pageSize: 5,
    //         },
    //       },
    //     }}
    //     getRowId={getRowId}
    //     pageSizeOptions={[5, 10, 15, 20, 25]}
    //     slots={{ toolbar: GridToolbar }}
    //     // checkboxSelection
    //     disableRowSelectionOnClick
    //   />
    // </Box>
    <DataTable rows={products} columns={columns} />
  );
}
