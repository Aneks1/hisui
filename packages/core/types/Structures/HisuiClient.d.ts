import { Client, ClientOptions } from "discord.js";
import EventHandler from "./EventHandler";
import CommandHandler from "./CommandHandler";
import { Db } from "mongodb";
export default class HisuiClient extends Client {
    private config;
    readonly EventHandler: EventHandler;
    readonly CommandHandler: CommandHandler;
    db: Db;
    login(token?: string): Promise<string>;
    createDb(mongoUri: string): void;
    private loadConfig;
    constructor(clientOptions: ClientOptions);
}
