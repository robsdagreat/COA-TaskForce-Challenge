// ImageViewer.tsx
import React, { useState } from 'react';

interface ImageViewerProps {
  imageUrl: string;
  imagePosition: { x: number; y: number };
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, imagePosition }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className="relative"
        style={{
          position: 'relative',
          left: imagePosition.x,
          top: imagePosition.y,
        }}
      >
        <img
          src={imageUrl}
          alt="Full-size image"
          className={`w-auto h-auto rounded-lg transition-all duration-300 ${
            isZoomed ? 'scale-150' : ''
          }`}
          onClick={toggleZoom}
        />
      </div>
    </div>
  );
};

export default ImageViewer;