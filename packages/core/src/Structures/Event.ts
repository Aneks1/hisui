import { ClientEvents } from "discord.js"
import EventOptions from "./EventOptions"

export default class Event {
    public readonly name: keyof ClientEvents
    public readonly once: boolean
    public readonly run: (...args: any[]) => void

    constructor(name: keyof ClientEvents, options: EventOptions) {
        this.name = name
        this.run = options.run
        this.once = options.once
    }
}