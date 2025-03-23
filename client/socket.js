// client/src/lib/socket.js
import { io } from "socket.io-client";

export const socket = io("https://livechatapptestbackend.onrender.com/", {
  path: "/socket.io",
  withCredentials: true,
  autoConnect: false, // Optional: control when to connect
});