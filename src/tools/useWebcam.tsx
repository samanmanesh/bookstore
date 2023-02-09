import React, { useState, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

type UseWebcam = {
  picture: string;
  setPicture: (picture: string) => void;
  closeWebcam: () => void;
  setSave: (save: boolean) => void;
};
const UseWebcam = ({ picture, setPicture, closeWebcam, setSave }: UseWebcam) => {
  // const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      // @ts-ignore: Unreachable code error
      const imageSrc = webcamRef.current.getScreenshot();
      setPicture(imageSrc);
    }
  }, [webcamRef]);

  const handleRetake = (e: any) => {
    e.preventDefault();
    setSave(false);
    setPicture("");
  };
  const handleCloseWebcam = (e: any) => {
    e.preventDefault();
    setPicture("");
    setSave(false);
    closeWebcam();
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    setSave(true);
    closeWebcam();
  };

  return (
    <div className=" rounded-lg space-y-6">
      <div>
        {picture == "" ? (
          <Webcam
            audio={false}
            height={350}
            ref={webcamRef}
            width={350}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="rounded-lg shadow-xl"
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className=" flex justify-between">
        {picture != "" ? (
          <button
            onClick={handleRetake}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Capture
          </button>
        )}
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-sky-600 rounded-md text-white"
        >
          Save
        </button>
        <button
          onClick={handleCloseWebcam}
          className="px-4 py-2 bg-zinc-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default UseWebcam;
