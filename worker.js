export default {
  async fetch(request) {
    let url = new URL(request.url);
    url.hostname = "fluxaga.glitch.me"; // Replace with your Glitch subdomain
    let modifiedRequest = new Request(url, request);
    return fetch(modifiedRequest);
  }
}
