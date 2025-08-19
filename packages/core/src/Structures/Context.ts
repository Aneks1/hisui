import { ChatInputCommandInteraction, Message, GuildMember, User, TextChannel, PermissionsString } from "discord.js"
import HisuiClient from "./HisuiClient"

export default class Context {
    public client;
    public raw: Message | ChatInputCommandInteraction;
    public isInteraction: boolean;
    public isMessage: boolean;

    public guild = null as Message["guild"] | ChatInputCommandInteraction["guild"] | null;
    public member = null as GuildMember | null;
    public user: User;
    public channel: TextChannel | null;

    // arguments for the command
    public args: string[] = [];

    constructor(client: HisuiClient, data: Message | ChatInputCommandInteraction, args: string[] = []) {
        this.client = client;
        this.raw = data;
        this.isInteraction = data instanceof ChatInputCommandInteraction;
        this.isMessage = data instanceof Message;

        this.guild = data.guild ?? null;
        this.member = (data.member instanceof GuildMember) ? data.member : null;
        this.user = this.isInteraction ? (data as ChatInputCommandInteraction).user : (data as Message).author;
        this.channel = (data.channel?.isTextBased() ? data.channel : null) as TextChannel | null;

        this.args = args;
    }

    // send reply (works for both)
    async reply(content: string | { content: string; ephemeral?: boolean }) {
        if (this.isInteraction) {
            const interaction = this.raw as ChatInputCommandInteraction;
            if (!interaction.replied) {
                return interaction.reply(content);
            } else {
                return interaction.followUp(content);
            }
        } else {
            return (this.raw as Message).reply(typeof content === "string" ? content : content.content);
        }
    }
}
