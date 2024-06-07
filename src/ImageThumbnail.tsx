import React, { useState } from 'react';
import { GalleryDataItem } from './GalleryData';

interface ImagePosition {
  x: number;
  y: number;
}



interface ImageThumbnailProps {
  imageData: GalleryDataItem;
  onClick: (position: ImagePosition) => void;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ imageData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  

  return (
    <>
      <div className="image-thumbnail relative cursor-pointer mr-2 last:mr-0" onClick={handleClick}>
        <img src={imageData.thumbnailUrl} alt={imageData.title} className="w-40 h-28 object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-75 text-white rounded-b-lg">
          <h3 className="text-sm font-semibold">{imageData.title}</h3>
         <h3>{imageData.category }</h3> 
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg">
            <img src={imageData.fullImageUrl} alt={imageData.title} className="max-w-full max-h-full" />
            <button className="absolute top-0 right-0 m-4 px-2 py-1 bg-gray-700 text-white rounded" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageThumbnail;
