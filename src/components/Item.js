const Item = (props) => {
  const {title,amount} = props
  return (
      /* {props.title}<span>{props.amount}</span> */
       <li>{title}<span>{amount}</span> 
    </li>
  );
  
};
export default Item;