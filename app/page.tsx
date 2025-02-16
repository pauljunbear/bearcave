'use client';

import { useRef, useState } from 'react';

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('Image loaded');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <input
      id="fileInput"
      ref={fileInputRef}
      type="file"
      onChange={handleFileChange}
    />
    <p className="text-xs text-gray-500 truncate">
      {fileName}
    </p>
  );
} 