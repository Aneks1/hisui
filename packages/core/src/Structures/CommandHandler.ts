import HisuiClient from "./HisuiClient"
import chalk from "chalk"
import * as fs from 'fs'
import * as path from 'path'
import Command from "./Command"

export default class CommandHandler {
    private _dir: string
    private _client: HisuiClient

    public async loadCommands() {
        const files = fs.readdirSync(path.join(__dirname, this._dir))
        for (const file of files) {
            const folders = fs.readdirSync(path.join(__dirname, this._dir, file))
            for(let commandFile of folders) {
                commandFile = commandFile.split('.')[0]
                const command = (await(import(path.join(__dirname, this._dir, file, commandFile)))).default as Command
            }
        }

        console.log(`${chalk.blueBright('> ')} All ${chalk.blueBright('commands')} loaded.\n`)
    }

    constructor(dir: string, client: HisuiClient) {
        this._dir = dir
        this._client = client
    }   
}