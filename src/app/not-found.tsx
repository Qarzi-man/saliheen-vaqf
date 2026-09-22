import '@fontsource-variable/onest';
import '@fontsource-variable/source-serif-4';
import './globals.css';

export const metadata = { title: '404 · Салиҳин', robots: { index: false } };

/** Страница 404 (вне языковых маршрутов, поэтому двуязычная). */
export default function NotFound() {
  return (
    <html lang="tg">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow">404</p>
          <h1 className="h2 mt-6">Саҳифа ёфт нашуд · Страница не найдена</h1>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="/tj" className="btn btn-primary">
              Тоҷикӣ
            </a>
            <a href="/ru" className="btn btn-ghost">
              Русский
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
