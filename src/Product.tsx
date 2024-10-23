
interface Props{
    pCode:number, 
    pName:string, 
    qnty?:number
}

// ? means optional

const Product:React.FC <Props> = (props) => {
  return (
    <div>{props.pCode} - {props.pName} - {props.qnty}</div>
  )
}

export default Product