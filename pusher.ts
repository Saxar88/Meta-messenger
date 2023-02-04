import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
	appId: "1548264",
	key: process.env.PUSHER_KEY,
	secret: process.env.PUSHER_SECRET!,
	cluster: "eu",
	useTLS: true,
});

export const clientPusher = new ClientPusher(process.env.CLIENT_PUSHER!, {
	cluster: "ap2",
	forceTLS: true,
});
