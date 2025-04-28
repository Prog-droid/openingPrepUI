import React, {
  useState,
  useEffect
} from 'react';
import { Chessboard } from "react-chessboard";
import "./chessboard.css";

export const ChessBoardWrapper = () => {
  const host = "ws://localhost:8001/";
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

  useEffect(() => {
    const websocket = new WebSocket(host);

    websocket.onopen = () => {
        console.log('WebSocket is connected');
    };

    websocket.addEventListener("message", ({ data }) => {
      console.log("event");
      
      const event = JSON.parse(data);
      console.log(event);
      
      // do something with event
      setFen(event["fen"]);
      //setFen("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1");
    }); 
    
    websocket.onclose = () => {
        console.log('WebSocket is closed');
    };

    return () => {
        <>
          <div className="boardWrapper">
            <Chessboard
              className="board"
              position={fen}
            />
          </div>
        </>
    };
}, [fen]);
  
  return (
    <>
      <div className="boardWrapper">
        <Chessboard
          className="board"
          position={
            fen
          }
        />
      </div>
    </>
  );
};
