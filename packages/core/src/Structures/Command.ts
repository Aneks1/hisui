import { ClientEvents } from "discord.js"
import CommandOptions from "./CommandOptions"
import Context from "./Context"

export default class Command {
    public readonly name: keyof ClientEvents
    public readonly run: (ctx: Context) => void

    constructor(name: keyof ClientEvents, options: CommandOptions) {
        this.name = name
        this.run = options.run
    }
}