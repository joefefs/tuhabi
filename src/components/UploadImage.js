import React, {useState} from 'react';

function UploadImage({formData}) {
    const [selectedFile, setSelectedFile] = useState('')
    return (
        <div>
            <input 
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])} />
        </div>
    );
}

export default UploadImage;