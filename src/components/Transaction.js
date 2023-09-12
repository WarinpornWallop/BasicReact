// const Item = () => (
//   <li>
//     ค่าเดินทาง<span>-200</span>
//   </li>
// );
import Item from "./Item";
const Transaction = () => {
  const data = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
    { id: 2, title: "เงินเดือน", amount: 220000 },
    { id: 3, title: "เงินค่าอาหาร", amount: 500 },
  ];
  return (
    <ul>
      {/* <Item title="ค่ารักษาพยาบาล" amount="2000" />
      <Item title="เงินเดือน" amount="220,000" />
      <Item title="เงินค่าอาหาร" amount="500" /> */}
      {/* <Item title={data[0].title} amount={data[0].amount} />
      <Item title={data[1].title} amount={data[1].amount} />
      <Item title={data[2].title} amount={data[2].amount} /> */}
      {/* <li>
        เงินเดือน<span>+20,000</span>
      </li>
      <li>
        เงินค่าอาหาร<span>-500</span>
      </li> */}
      {
        data.map((element)=>{
          // return <Item title={element.title} amount={element.amount} />;
          return <Item {...element} key={element.id}/>;
        })
      }
    </ul>
  );
};
export default Transaction;
