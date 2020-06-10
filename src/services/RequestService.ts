
class RequestService {
    _sendGetRequest(url: string) {
        return fetch(window.location.origin + "/" + url, {
            method: 'GET',
            headers: this._buildHeaders(),
            mode: 'cors',
            cache: 'default'
        });
    }

    _sendPostRequest(url: string, data: any) {
        return fetch(window.location.origin + "/" + url, {
            method: 'POST',
            headers: this._buildHeaders(),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data)
        });
    }

    _buildHeaders() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            cookie: document.cookie
        }
    }
}

export default new RequestService();