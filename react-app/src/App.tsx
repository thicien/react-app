// import Counter from "./components/Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Details />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
