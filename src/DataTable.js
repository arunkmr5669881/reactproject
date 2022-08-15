import React, { useState, Fragment } from "react";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const DataTable = (props) => {
  const { columns, data } = { ...props };
  const [rows, setrows] = useState(data);
  const [editFormData, setEditFormData] = useState({
    store_id: "",
    sku: "",
    product_name: "",
    price: "",
    date: ""
  });

  const [editStoreId, setEditStoreId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };


  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRow = {
      store_id: editStoreId,
      sku: editFormData.sku,
      product_name: editFormData.product_name,
      price: editFormData.price,
      date: editFormData.date
    };

    const newrows = [...rows];

    const index = rows.findIndex((row) => row.store_id === editStoreId);

    newrows[index] = editedRow;

    setrows(newrows);
    setEditStoreId(null);
  };

  const handleEditClick = (event, row) => {
    event.preventDefault();
    setEditStoreId(row.store_id);

    const formValues = {
      store_id: row.store_id,
      sku: row.sku,
      product_name: row.product_name,
      price: row.price,
      date: row.date
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditStoreId(null);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
          <tr>
              <th>Store ID</th>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <Fragment>
                {editStoreId === row.store_id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    row={row}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DataTable;
