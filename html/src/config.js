/**
 * Configuration and Helper Functions
 *
 * Provides base path handling for assets, matching SvelteKit's asset() function
 */

// Determine base path based on environment
// Production: /ocp (matches SvelteKit config)
// Development (localhost): empty string
const BASE_PATH = (() => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isDevelopment = hostname === "localhost" || hostname === "127.0.0.1";
    return isDevelopment ? "" : "/ocp";
  }
  return "";
})();

/**
 * Asset path helper
 * Replicates SvelteKit's asset() function from $app/paths
 *
 * @param {string} path - Asset path (must start with /)
 * @returns {string} - Full asset path with base
 *
 * @example
 * asset('/images/logo.svg') // Returns '/ocp/images/logo.svg' in production
 * asset('/images/logo.svg') // Returns '/images/logo.svg' in development
 */
export function asset(path) {
  if (!path.startsWith("/")) {
    console.warn(`Asset path should start with /: ${path}`);
    return `${BASE_PATH}/${path}`;
  }
  return `${BASE_PATH}${path}`;
}

/**
 * Configuration object
 */
export const config = {
  BASE_PATH,
  EVENT_DATE: "2025-12-11T09:15:00",
  EVENT_LOCATION: "CNIT Forest, 2 Pl. de la Defense, 92092 Puteaux, France",
  SOCIAL_LINKS: {
    linkedin: "https://www.linkedin.com/company/openapis-org",
    youtube: "https://www.youtube.com/@OpenAPIsOrg",
    openapis: "https://openapis.org",
  },
};
