import { Chessboard } from "react-chessboard";
import "./chessboard.css";

export const ChessBoardWrapper = () => {
  return (
    <>
      <div className="boardWrapper">
        <Chessboard
          className="board"
          position={
            "rnbqkbnr/pppp2pp/4p3/4Pp2/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3"
          }
        />
      </div>
    </>
  );
};
