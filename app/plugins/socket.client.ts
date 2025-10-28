import { io } from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {

    // Conecta ao servidor socket (ajusta o endereço conforme teu backend)
    const socket = io("http://localhost:3001", {
        transports: ["websocket"], // opcional, mas ajuda a evitar fallback pra polling
    });

    // socket.emit("message", { msg: "Olá do cliente!" });

    socket.on("connect", () => {
        console.log("🔌 Conectado ao servidor socket:", socket.id);
    });

    return {
        provide: {
            socket,
        },
    };
});


// // /plugins/socket.client.ts
// export default defineNuxtPlugin(() => {
//     // Mock do socket
//     const socket = {
//         emit: (event: string, data: any) => {
//             console.log(`🧪 Mock emit → ${event}:`, data);
//         },
//         on: (event: string, callback: Function) => {
//             console.log(`🧪 Mock listener registrado para '${event}'`);
//             // simular evento vindo do servidor
//             if (event === "message") {
//                 setTimeout(() => callback({ text: "Mensagem simulada do servidor" }), 2000);
//             }
//         },
//     };

//     return {
//         provide: { socket },
//     };
// });
