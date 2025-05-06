class webSocket {
    websocket: WebSocket;
    hostName: string;

    constructor(hostName: string) {
        this.hostName = hostName;
        this.websocket = new WebSocket(this.hostName); 
    }

    websocket.onopen = () => {
        console.log('WebSocket is connected');
    };

}

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