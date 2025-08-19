import { ApplicationCommandOptionData, ChannelType, PermissionResolvable, Snowflake } from "discord.js"
import Context from "./Context";

export default interface CommandOptions {
    name: string
    description: string
    disabled?: boolean
    args: ApplicationCommandOptionData[]
    permissions?: PermissionResolvable[]
    requiredRoles?: Snowflake[]
    channelType: ChannelType
    allowedChannels: Snowflake[]
    run: (ctx: Context) => void
}