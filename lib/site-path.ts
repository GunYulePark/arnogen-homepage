const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') ?? '';

export function sitePath(path = '/') {
  if (path === '/') return configuredBasePath || '/';
  return `${configuredBasePath}${path.startsWith('/') ? path : `/${path}`}`;
}
