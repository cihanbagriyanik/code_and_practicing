import React from "react";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import { GridActionsCellItem} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "./DataTable";

const SaleTable = ({ setOpen, setInfo }) => {
  const { deleteStockData } = useStockCall();
  const { sales } = useSelector(state => state.stock);
console.log(sales)
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell:({row})=>{
        return new Date(row.createdAt).toLocaleString("de-DE")
      }
    },

    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell:({row})=>{
        return row?.brandId?.name
      }
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell:({row})=>{
        return row?.productId?.name
      }
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({row:{brandId,price,quantity,productId,_id}}) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setOpen(true);
              setInfo({brandId,price,quantity,productId,_id});
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", _id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];
  return <DataTable rows={sales} columns={columns} />;
};

export default SaleTable;
