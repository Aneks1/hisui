import { Message, ChatInputCommandInteraction, User, Guild, GuildMember, MessagePayload } from "discord.js";
import HisuiClient from "./HisuiClient";

export default interface Context {
    message?: Message
    interaction?: ChatInputCommandInteraction
    user: User
    guild?: Guild
    member?: GuildMember
    args: Record<string, any>
    reply: (text: string | MessagePayload) => Promise<Message>
    client: HisuiClient
    log: (text: string) => void
}