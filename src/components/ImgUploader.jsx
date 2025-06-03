import React from 'react'

const ImgUploader = ({stateImg}) => {
  return (
    <img
     alt="Ajouter un image..."
     width={"250px"}
     src={`/public/img/${stateImg}`}
    />
  )
}
export default ImgUploader