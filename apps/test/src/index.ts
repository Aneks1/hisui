import { HisuiClient } from '@hisui/core'
import { IntentsBitField } from 'discord.js'

const client = new HisuiClient({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages
    ]
})

client.login()