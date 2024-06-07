import React, { useState } from 'react';
import ImageThumbnail from './ImageThumbnail';
import ImageViewer from './ImageViewer';
import galleryData, { GalleryDataItem } from './GalleryData';

interface ImagePosition {
  x: number;
  y: number;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState<ImagePosition | null>(null);

  const handleThumbnailClick = (imageUrl: string, position: ImagePosition) => {
    setSelectedImage(imageUrl);
    setImagePosition(position);
  };

  return (
    <div className="relative">
      <div className="thumbnails-container flex flex-row overflow-x-auto p-4">
        {galleryData.map((image: GalleryDataItem) => (
          <ImageThumbnail 
            key={image.id}
            imageData={image}
            onClick={(position) => handleThumbnailClick(image.fullImageUrl, position)}
          />
        ))}
      </div>
      {selectedImage && imagePosition && (
        <ImageViewer imageUrl={selectedImage} imagePosition={imagePosition} />
      )}
    </div>
  );
};

export default Gallery;
