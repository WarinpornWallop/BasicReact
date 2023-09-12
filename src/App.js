import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
const Title = () => <h1>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;



// const Transaction = () => {
//   return (
//     <ul>
//       <Item />
//       <li>เงินเดือน<span>+20,000</span></li>
//       <li>เงินค่าอาหาร<span>-500</span></li>
//     </ul>
//   );
// }

function App() {
  return (
    <div>
      <Title />
      <Description />
      <FormComponent />
      <Transaction />
    </div>
  );
}

export default App;
