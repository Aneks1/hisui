import { Snowflake } from "discord.js";

export default interface HisuiConfig { 
    /**
     * @param eventsDir Relative to `src/`.
     */
    eventsDir?: string, 
    /**
     * @param commandsDir Relative to `src/`.
     */
    commandsDir?: string,

    /**
     * @param errorChannelId ID for the channel where error logs will be displayed.
     */
    errorChannelId?: Snowflake
}