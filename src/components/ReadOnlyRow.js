import React from "react";

const ReadOnlyRow = ({ row, handleEditClick}) => {
    return (
        <tr>
            <td>{row.store_id}</td>
            <td>{row.sku}</td>
            <td>{row.product_name}</td>
            <td>{row.price}</td>
            <td>{row.date}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, row)}
                >
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
