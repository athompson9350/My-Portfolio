import { defineConfig, loadEnv } from 'vite'

function parseAllowedHosts(value: string | undefined): true | string[] {
  if (!value || value.trim() === '') {
    return true
  }

  const normalized = value.trim().toLowerCase()
  if (normalized === 'true' || normalized === '*') {
    return true
  }

  return value
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean)
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.VITE_DEV_PORT || 5173)

  return {
    server: {
      host: env.VITE_DEV_HOST || '0.0.0.0',
      port: Number.isFinite(port) ? port : 5173,
      strictPort: false,
      allowedHosts: parseAllowedHosts(env.VITE_DEV_ALLOWED_HOSTS),
    },
    preview: {
      host: env.VITE_PREVIEW_HOST || env.VITE_DEV_HOST || '0.0.0.0',
      port: Number(env.VITE_PREVIEW_PORT || 4173),
      allowedHosts: parseAllowedHosts(env.VITE_PREVIEW_ALLOWED_HOSTS || env.VITE_DEV_ALLOWED_HOSTS),
    },
  }
})
