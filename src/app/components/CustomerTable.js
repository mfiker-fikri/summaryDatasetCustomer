// app/components/CustomerTable.js
"use client";
import "./table.css";
import { useState } from "react";

export default function CustomerTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Hitung data yang harus ditampilkan di halaman saat ini
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="table-container">

      <table className="custom-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        
        <tbody>
        {
          currentData.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No data available.</td>
            </tr>
        ) : (
          currentData.map((cust, idx) => (
              <tr key={idx}>
                <td>{cust["Name of Location"]}</td>
                <td>{cust["gender"]}</td>
                <td>{cust["Age"]}</td>
                <td>{cust["Email"]}</td>
              </tr>
            ))
          )}
        </tbody>

      </table>
      
      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          <p className="textPagination">Prev</p>
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          <p className="textPagination">Next</p>
        </button>
      </div>
      {/* End of Pagination Controls */}

    </div>
  );
}
