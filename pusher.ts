import Pusher from "pusher";
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher ({
    appId: "1560305",
    key: "4addd502a3617083d7da",
    secret: "ed017cbcdc6b521995e0",
    cluster: "ap1",
    useTLS: true
})

export const clientPusher = new ClientPusher (
    '4addd502a3617083d7da', {
        cluster: 'ap1',
        forceTLS: true
})