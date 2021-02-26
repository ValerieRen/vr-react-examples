import React, {useEffect, useState} from "react";
import "./ImageViewer.css";
import * as ImageAction from "../actions";
import {getHDImageUrl} from "../utils/helper";
import {MOVING_FLAG} from "../utils/constants";
import PropTypes from 'prop-types';

const ImageViewer = ({ imagePath }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [totalImages, setTotalImages] = useState(1);
  const [showZoomedImg, setShowZoomedImg] = useState(false);
  const [movingFlag, setMovingFlag] = useState(null);
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
    imgX: 0,
    imgY: 0,
    width: 512,
    height: 512,
  });
  const [dragState, setDragState] = useState({
    dragging: false,
    dragStart: 0,
    dragStartIndex: 0
  });

  useEffect(() => {
    const totalNumOfImages = ImageAction.getTotalNumOfImages(imagePath);
    setTotalImages(totalNumOfImages);
  }, []);

  const addListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  const removeListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  const onMouseDown = (e) => {
    e.preventDefault();
    setMovingFlag(MOVING_FLAG.CLICK);
    addListeners();
    setDragState({
      dragStartIndex: imgIndex,
      dragStart: e.screenX,
      dragging: true
    });
  }

  const onMouseMove = (e) => {
    e.preventDefault();
    setMovingFlag(MOVING_FLAG.DRAG);
    if (showZoomedImg) {
      setCrop({
        ...crop,
        x: e.pageX - crop.imgX,
        y: e.pageY - crop.imgY,
      });
    }
    if (!dragState.dragging) return;
    const currentPosition = e.screenX;
    const widthPerImage = 360 / totalImages;
    let dx = (currentPosition - dragState.dragStart) / widthPerImage;
    let index = Math.floor(dx) % totalImages;
    if (index < 0) {
      index = totalImages + index - 1;
    }
    index = (index + dragState.dragStartIndex) % totalImages;
    if (index !== imgIndex) {
      setImgIndex(index);
    }
  }

  const onMouseUp = (e) => {
    e.preventDefault();
    if (movingFlag === MOVING_FLAG.DRAG) {
      removeListeners();
      setDragState({...dragState, dragging: false});
    }
  }

  const onClick = (e) => {
    if (dragState.dragging) return;
    if (movingFlag === MOVING_FLAG.CLICK) {
      setShowZoomedImg(!showZoomedImg);
      if (showZoomedImg) {
        setCrop({
          ...crop,
          x: e.pageX - crop.imgX,
          y: e.pageY - crop.imgY,
        });
      }
    }
  };

  const onLoad = (e) => {
    // loaded the image
    window.dispatchEvent(new Event('resize'));
    // get the img height and width
    setCrop({
      ...crop,
      imgX: e.currentTarget.x,
      imgY: e.currentTarget.y,
      width: e.currentTarget.width,
      height: e.currentTarget.height,
    })
  };

  return (
    <div className="image-view-container">
      <img
        className="image-360"
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onLoad={onLoad}
        draggable={!showZoomedImg}
        // the src image will be shown determined if the function is for zoom or for 360 view
        src={showZoomedImg ?
          `${getHDImageUrl(imagePath, imgIndex + 1, crop.x, crop.y, crop.width, crop.height, "1k")}` :
          ImageAction.getImageImportByIndex(imagePath, imgIndex + 1)
        }
        alt="" />
    </div>
  );
};

ImageViewer.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default ImageViewer;
