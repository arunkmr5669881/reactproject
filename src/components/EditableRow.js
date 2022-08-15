import React from "react";

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="store_id"
                    value={editFormData.store_id}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="sku"
                    value={editFormData.sku}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="product_name"
                    value={editFormData.product_name}
                    onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                    type="text"
                    name="price"
                    value={editFormData.price}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="date"
                    value={editFormData.date}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;
