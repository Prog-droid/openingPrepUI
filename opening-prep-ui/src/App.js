import "./App.css";
import { Header } from "./components/Header/Header";
import { ChessBoardWrapper } from "./components/ChessBoardWrapper/ChessBoardWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <ChessBoardWrapper />
    </div>
  );
}

export default App;
