/**
 * Путь к файлу из /public с учётом basePath.
 *
 * Next.js сам подставляет basePath только для своих механизмов (Link, next/image,
 * файлы вида icon.svg/robots.txt через file-convention). Обычные строки вида
 * "/logo.png" в коде и стилях он не трогает — поэтому при статическом экспорте
 * в подпапку (https://username.github.io/repo-name/) такие абсолютные пути ведут
 * мимо, на корень домена. Эта функция чинит именно такие места.
 *
 * NEXT_PUBLIC_BASE_PATH — та же переменная, что и в next.config.mjs; должна
 * совпадать со значением basePath, иначе рассинхронизация.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  return `${basePath}${path}`;
}
