import { ClientEvents } from "discord.js";
import CommandOptions from "./CommandOptions";
import Context from "./Context";
export default class Command {
    readonly name: keyof ClientEvents;
    readonly run: (ctx: Context) => void;
    constructor(name: keyof ClientEvents, options: CommandOptions);
}
