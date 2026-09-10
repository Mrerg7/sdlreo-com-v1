/**
 * Edge middleware for static assets.
 * Consolidates www/http variants onto the canonical apex HTTPS URL so Google
 * indexes https://sdlreo.com/ instead of reporting "Alternate page with proper canonical tag".
 */

const CANONICAL_HOST = 'sdlreo.com';

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const isWww = host === `www.${CANONICAL_HOST}`;
    const isHttp = url.protocol === 'http:';

    if (isWww || isHttp) {
      const location = `https://${CANONICAL_HOST}${url.pathname}${url.search}`;
      return Response.redirect(location, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
