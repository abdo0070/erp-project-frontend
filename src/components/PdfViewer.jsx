import React, { useEffect, useState } from "react";
import { cvFile } from "../api/cvFile";

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cv, setCv] = useState({});
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setCv(cvFile);
    console.log(URL.createObjectURL(new Blob([cvFile.data])));
  }, []);
  return (
    <h2>
        PDF VIEWER
    </h2>
  );
};

export default PdfViewer;
