import React from 'react'

const Product:React.FC <{pCode:number, pName:string}> = (props) => {
  return (
    <div>{props.pCode} - {props.pName} </div>
  )
}

export default Product