import { io } from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {

    const socket = io("ws://10.10.10.23:3030", {
        transports: ["websocket"], // opcional, mas ajuda a evitar fallback pra polling
    });


    socket.on("connect", () => {
        console.log("🔌 Conectado ao servidor socket:", socket.id);
        socket.emit("subscribe", "teams");

    });

    return {
        provide: {
            socket,
        },
    };
});


