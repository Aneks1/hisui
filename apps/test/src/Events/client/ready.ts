import { Event } from "@hisui/core";
import { Client } from "discord.js";

export default new Event("ready", {
    once: false,
    run: ((client: Client) => {
        console.log('Logged in as ' + client.user?.tag)
    })
})