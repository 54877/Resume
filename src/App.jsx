import {Routes, Route} from "react-router-dom";
import IndexApp from "./IndexApp";


function App() {

    return (
      <>
        <Routes>
            <Route path="/" element={<IndexApp />} />
        </Routes>
      </>

    );
}


export default App;