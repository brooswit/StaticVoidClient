export default class StaticVoidClient {
    constructor() {
        const protocol = ((window.location.protocol === "https:") ? "wss://" : "ws://")
        const host = window.location.host
        const path = '/stream'
        const ws = this._ws = new WebSocket(`${protocol}${host}${path}`)
        ws.onmessage = this._handleMessage

        this.state = {}
    }

    _handleMessage(newState) {
        Object.keys(object).forEach(function(key) { delete object[key] })
        Object.assign(state, newState)
    }

    send(data) {
        ws.send(data)
    }
}
