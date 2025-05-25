import { ApplicationCommandOptionData, ChannelType, PermissionResolvable, Snowflake } from "discord.js"
import Context from "./Context";

export default interface CommandOptions {
    description: string
    disabled?: boolean
    args: ApplicationCommandOptionData[]
    permissions?: PermissionResolvable[]
    requiredRoles?: Snowflake[]
    channelType: ChannelType
    allowedChannels: Snowflake[]
    run: (ctx: Context) => void
}