import type { SourceId } from '@/content/sources';

/**
 * Сноски-источники сейчас отключены на сайте (раздел «Источники» убран из
 * страницы по просьбе заказчика) — компонент ничего не рендерит.
 * Сами данные `cite: [...]` при этом остаются в ru.ts/tg.ts нетронутыми:
 * это единственное место, которое нужно поменять, чтобы вернуть сноски —
 * возвращаемое значение ниже и есть переключатель.
 */
export function Cite(_props: { ids?: readonly SourceId[]; label: string }) {
  return null;
}

/** Текст с необязательными сносками. */
export function Cited({
  value,
  label,
}: {
  value: { text: string; cite?: readonly SourceId[] };
  label: string;
}) {
  return (
    <>
      {value.text}
      <Cite ids={value.cite} label={label} />
    </>
  );
}
