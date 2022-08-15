import React, { useState } from "react";
import { CSVReader } from "react-papaparse";
import DataTable from './DataTable';


const App = () => {
  const [rowData, setRowData] = useState();
  const [columnData, setColumnData] = useState();
  const handleOnDrop = (data) => {
    const columns = data[0].data.map((col, index) => {
      return {
        label: col,
        id: col.split(" ").join("_").toLowerCase(),

      }
    })
    setColumnData(columns)
    
    const rows = data.slice(1).map((row) => {
      return row.data.reduce((acc, curr, index) => {
        acc[columns[index].id] = curr;
        return acc;
      }, {})
    })
    setRowData(rows)
  };
  const handleOnError = (err) => {
  };
  const handleOnRemoveFile = (data) => {
    setRowData(data)
  };

  return (
    <>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        onRemoveFile={handleOnRemoveFile}
        addRemoveButton
      >
        <span>Drop CSV file here or click to import.</span>
      </CSVReader>

      {rowData && <DataTable columns={columnData} data={rowData} />}

    </>

  );
};

export default App;
