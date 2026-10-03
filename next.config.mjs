/** @type {import('next').NextConfig} */

// Собираем в двух режимах одним и тем же кодом:
//  - обычный режим (по умолчанию) — для Node-хостинга (Vercel и т.п.): есть
//    серверные редиректы и заголовки безопасности.
//  - STATIC_EXPORT=true — для GitHub Pages и любого другого статического
//    хостинга без сервера: next build кладёт готовые html-файлы в папку out/.
//    В этом режиме redirects()/headers() Next.js игнорирует (сервера нет),
//    поэтому редирект с "/" сделан отдельной страницей src/app/page.tsx.
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  ...(isStaticExport
    ? {
        output: 'export',
        // Если сайт будет жить в подпапке (https://username.github.io/repo-name/),
        // укажите это же значение в переменной NEXT_PUBLIC_BASE_PATH при сборке —
        // см. .github/workflows/deploy-pages.yml. Для своего домена (CNAME) оставьте пустым.
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
        images: { unoptimized: true },
        // /tj/index.html вместо /tj.html — так адрес "/tj/" отдаётся любым
        // статическим хостингом одинаково, без угадывания расширения .html.
        trailingSlash: true,
      }
    : {}),

  ...(!isStaticExport
    ? {
        async redirects() {
          return [
            { source: '/', destination: '/tj', permanent: false },
            { source: '/tg', destination: '/tj', permanent: true },
          ];
        },
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
              ],
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
