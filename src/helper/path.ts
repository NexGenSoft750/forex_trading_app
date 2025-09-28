const PATH_PREFIX = process.env.NEXT_PUBLIC_PATH_PREFIX || "/admin";

/**
 * Builds a full application path by prefixing it with the base path.
 *
 * @param route - A relative route (e.g., "users", "/users").
 * @returns The full path with the prefix (e.g., "/admin/users").
 */
export const getFullPath = (route: string): string => {
    if (!route) return PATH_PREFIX;

    return route.startsWith("/")
        ? `${PATH_PREFIX}${route}`
        : `${PATH_PREFIX}/${route}`;
};

/**
 * Gets the base application path prefix.
 *
 * @returns The base path prefix (e.g., "/admin").
 */
export const getBasePath = (): string => PATH_PREFIX;
