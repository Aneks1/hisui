import { Event } from "@hisui/core";
import { GuildMember } from "discord.js";

export default new Event("guildMemberAdd", {
    once: false,
    run: ((member: GuildMember) => {
        console.log(member)
    })
})