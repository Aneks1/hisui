import { ApplicationCommandOptionData, ChannelType, PermissionResolvable, Snowflake } from "discord.js"
import CommandOptions from "./CommandOptions"
import Context from "./Context"

export default class Command implements CommandOptions {
    public readonly name: string
    public readonly description: string
    public readonly disabled?: boolean
    public readonly args: ApplicationCommandOptionData[]
    public readonly permissions?: PermissionResolvable[]
    public readonly requiredRoles?: Snowflake[]
    public readonly channelType: ChannelType
    public readonly allowedChannels: Snowflake[]
    private _run: (ctx: Context) => void
    public run (ctx: Context) { this._run(ctx) }

    constructor(options: CommandOptions) {
        this.name = options.name
        this.description = options.description
        this.disabled = options.disabled
        this.args = options.args
        this.permissions = options.permissions
        this.requiredRoles = options.requiredRoles
        this.channelType = options.channelType
        this.allowedChannels = options.allowedChannels
        this._run = options.run
    }
}