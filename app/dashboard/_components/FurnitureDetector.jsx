'use client';

import React, { useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const FurnitureDetector = ({aiImage}) => {
  const [detections, setDetections] = useState([]);
  const imageRef = useRef(null);

  const detectFurniture = async () => {
    const model = await cocoSsd.load();
    if (imageRef.current) {
      const predictions = await model.detect(imageRef.current);
      const furniturePredictions = predictions.filter(pred =>
        ["chair", "couch", "bed", "tv", "dining table"].includes(pred.class)
      );
      setDetections(furniturePredictions);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Furniture Detector</h2>
      
      <img
        ref={imageRef}
        src={'/aiimage.png'} // Update this to your generated image path
        alt="Generated AI Furniture"
        className="max-w-full mb-4"
      />

      <button
        onClick={detectFurniture}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Detect Furniture
      </button>

      {detections.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Detected Furniture:</h3>
          <ul className="list-disc pl-6">
            {detections.map((det, index) => (
              <li key={index}>
                {det.class} (confidence: {(det.score * 100).toFixed(2)}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FurnitureDetector;
