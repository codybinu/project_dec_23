
import Binu from "./Binu";

function App() {
  const userName = "chai peeke code likho";
  return (
    <>
      <Binu />
      <h2>code kaise karega tu? : {userName}</h2>  
      {/* whatever is there inside curly bracket is called as evaluated expression. as the {} does not take any direct js code like if statement etc*/}
    </>

  )
}

export default App
