"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            style={
                {
                    backgroundColor: "#F9FAFB",
                    border: "2px dashed #ccc",
                    borderRadius: "1rem",
                    padding: "4rem",
                    textAlign: "center"
                }
            }
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here...</p>
            ) : (
                <p>Drag and drop chart image here
                    or click to upload</p>
            )}
        </div>
    );
};

export default Dropzone;
