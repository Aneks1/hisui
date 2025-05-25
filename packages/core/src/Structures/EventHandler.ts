import HisuiClient from "./HisuiClient"
import chalk from "chalk"
import * as fs from 'fs'
import * as path from 'path'
import Event from "./Event"

export default class EventHandler {
    private _dir: string
    private _client: HisuiClient

    public async loadEvents() {
        const files = fs.readdirSync(path.join(__dirname, this._dir))
        for (const file of files) {
            const folders = fs.readdirSync(path.join(__dirname, this._dir, file))
            for(let eventFile of folders) {
                eventFile = eventFile.split('.')[0]
                const event = (await(import(path.join(__dirname, this._dir, file, eventFile)))).default as Event
                if(event.once) {
                    this._client.once(event.name, (...args: any[]) => {
                        event.run(...args)
                    })
                } else {
                    this._client.on(event.name, (...args: any[]) => {
                        event.run(...args)
                    })
                }
            }
        }

        console.log(`${chalk.blueBright('> ')} All ${chalk.blueBright('events')} loaded.\n`)
    }

    constructor(dir: string, client: HisuiClient) {
        this._dir = dir
        this._client = client
    }
}