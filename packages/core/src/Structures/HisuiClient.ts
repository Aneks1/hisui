import { Client, ClientOptions } from "discord.js"
import EventHandler from "./EventHandler"
import CommandHandler from "./CommandHandler"
import { Db, MongoClient } from "mongodb"
import chalk from 'chalk'
import * as path from 'path'

export default class HisuiClient extends Client {
    private config: any
    public readonly EventHandler: EventHandler
    public readonly CommandHandler: CommandHandler
    public db!: Db

    public override login(token?: string): Promise<string> {
        return super.login(token)
    }

    public createDb(mongoUri: string) {
        const client = new MongoClient(mongoUri)
        try { this.db = client.db('hirui') }
        catch { console.log(chalk.red(' > Error while creating database.') + chalk.reset('')) }
    }

    private async loadConfig() {
        const configPath = path.resolve(process.cwd(), "hisui.config.ts")
        const config = (await import(configPath)).default
        return this.config = config
    }

    constructor(clientOptions: ClientOptions) {
        super(clientOptions)
        this.loadConfig()
        this.EventHandler = new EventHandler(this.config.eventsDir || 'Events', this)
        this.CommandHandler = new CommandHandler(this.config.commandsDir || 'Commands', this)
    }
}