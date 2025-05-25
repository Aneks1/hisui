import HisuiClient from "./HisuiClient";

export default class CommandHandler {
    private _dir: string
    private _client: HisuiClient

    constructor(dir: string, client: HisuiClient) {
        this._dir = dir
        this._client = client
    }   
}