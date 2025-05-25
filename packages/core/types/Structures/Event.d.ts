import { ClientEvents } from "discord.js";
import EventOptions from "./EventOptions";
export default class Event {
    readonly name: keyof ClientEvents;
    readonly once: boolean;
    readonly run: (...args: any[]) => void;
    constructor(name: keyof ClientEvents, options: EventOptions);
}
