import HisuiClient from "./HisuiClient";
export default class EventHandler {
    private _dir;
    private _client;
    loadEvents(): Promise<void>;
    constructor(dir: string, client: HisuiClient);
}
