import { serve } from "https://deno.land/std@0.157.0/http/server.ts"
import { serveDir } from "https://deno.land/std@0.157.0/http/file_server.ts"

serve (handler, { port: 80 })

function handler (incoming_req) {

    console.log (incoming_req)

    let req = incoming_req;

    if (req.url.endsWith (`/`)) {  // if the requested url does not specify a filename, which it doesnt if you just type in 'localhost' in your browser
        req = new Request (`${ req.url }index.html`, req) // add 'index.html' to the url
    }

const options = {
    fsRoot: `public`
}

return serveDir (req, options)
}
