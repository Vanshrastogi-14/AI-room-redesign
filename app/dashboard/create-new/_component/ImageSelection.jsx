"use client"
// UploadImage.js
import React, { useState } from 'react';
import { storage } from '@/config/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from '@/components/ui/button';

function ImageSelection({onUploadComplete}) {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const onFileSelected = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
              if (!file) return;
      
              const storageRef = ref(storage, `images/${file.name}`);
      
              try {
                  // Upload the file
                  const snapshot = await uploadBytes(storageRef, file);
      
                  // Get the download URL
                  const url = await getDownloadURL(snapshot.ref);
      
                  setImageUrl(url);
                  console.log('File uploaded! URL:', url);
                  onUploadComplete(url);
              } catch (error) {
                  console.error('Upload failed:', error);
              }
          };

    return (
        <div>
            <label>Select Image of your room</label>
            <div className='mt-3'>
            <label htmlFor='upload-image'>
            <div className={`p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg ${file && 'p-0 bg-white'}`}>
                {!file ? (
                    <img src="/imageupload.png" alt="Upload_img" width={70} height={70} />
                ) : (
                    <img src={URL.createObjectURL(file)} alt="_img" width={300} height={300} className="w-[300px] h-[300px] object-cover" />
                )}
            </div>
            </label>
            </div>
            <input type="file" onChange={onFileSelected}  id='upload-image' accept='image/*' style={{display:"none"}}/>
            {/* <button onClick={handleUpload} style={{ marginLeft: '10px' }}>
                Upload
            </button> */}
            <Button className="w-full mt-5" onClick={handleUpload} >Upload</Button>
        </div>
    );
}

export default ImageSelection;
