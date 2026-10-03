import type { CSSProperties } from 'react';

/**
 * Образ проекта: «семя → росток → дерево → тень → плоды → люди».
 * Анимация — чистый CSS (классы g-* в globals.css); при prefers-reduced-motion показывается итоговый кадр.
 * Цвета берутся из токенов (--teal, --leaf, --gold …), поэтому иллюстрация подстраивается под палитру сайта.
 */
const fruits: [number, number][] = [
  [196, 262],
  [252, 272],
  [294, 240],
  [222, 226],
  [170, 238],
  [320, 278],
  [258, 200],
];

const rays = Array.from({ length: 16 }, (_, i) => i);

export function TreeIllustration({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 480 560" role="img" aria-label={label} className="h-full w-full">
      <defs>
        <linearGradient id="tree-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'rgb(var(--mist))' }} />
          <stop offset="0.85" style={{ stopColor: 'rgb(var(--paper))' }} />
        </linearGradient>
        <radialGradient id="tree-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" style={{ stopColor: 'rgb(var(--gold-soft))', stopOpacity: 0.95 }} />
          <stop offset="1" style={{ stopColor: 'rgb(var(--gold-soft))', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <rect width="480" height="560" fill="url(#tree-sky)" />

      {/* тонкие концентрические кольца — намёк на геометрию, не орнамент */}
      <g fill="none" className="stroke-gold/25" strokeWidth="1">
        <circle cx="376" cy="118" r="98" />
        <circle cx="376" cy="118" r="150" />
        <circle cx="376" cy="118" r="205" />
      </g>

      {/* солнце */}
      <g className="g-sun">
        <circle cx="376" cy="118" r="120" fill="url(#tree-glow)" />
        <circle cx="376" cy="118" r="38" className="fill-gold-soft" />
        <g className="g-spin">
          {rays.map((i) => (
            <line
              key={i}
              x1="376"
              y1="54"
              x2="376"
              y2={i % 2 ? 46 : 38}
              className="stroke-gold"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${(i * 360) / rays.length} 376 118)`}
              opacity="0.55"
            />
          ))}
        </g>
      </g>

      {/* земля */}
      <path d="M0 468 C 90 448, 170 456, 240 462 C 320 468, 400 446, 480 452 V560 H0 Z" className="fill-leaf/25" />
      <path d="M0 502 C 120 484, 260 514, 480 492 V560 H0 Z" className="fill-leaf/35" />

      {/* тень */}
      <ellipse className="g-shade fill-fixed-ink/15" cx="240" cy="476" rx="152" ry="14" />

      {/* семя и росток */}
      <ellipse className="g-seed fill-gold-ink" cx="240" cy="466" rx="9" ry="6.5" transform="rotate(-18 240 466)" />
      <g className="g-sprout">
        <path d="M240 462 C 240 448, 242 438, 240 424" fill="none" className="stroke-leaf" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="231" cy="435" rx="9" ry="4.5" transform="rotate(-32 231 435)" className="fill-leaf" />
        <ellipse cx="250" cy="430" rx="9" ry="4.5" transform="rotate(32 250 430)" className="fill-leaf" />
      </g>

      {/* ствол и ветви */}
      <path
        className="g-trunk stroke-fixed-ink"
        pathLength={100}
        d="M240 468 C 236 430, 246 392, 240 300"
        fill="none"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <g fill="none" className="stroke-fixed-ink" strokeLinecap="round">
        <path className="g-branch" pathLength={100} d="M241 372 C 214 356, 190 348, 166 322" strokeWidth="8" />
        <path className="g-branch" pathLength={100} d="M240 352 C 270 340, 294 330, 318 302" strokeWidth="8" />
        <path className="g-branch" pathLength={100} d="M240 322 C 232 300, 224 282, 208 262" strokeWidth="6" />
        <path className="g-branch" pathLength={100} d="M241 316 C 252 298, 262 282, 276 264" strokeWidth="6" />
      </g>

      {/* крона */}
      <g className="g-sway">
        <g className="g-foliage">
          <g className="fill-teal">
            <circle cx="240" cy="232" r="78" />
            <circle cx="172" cy="272" r="58" />
            <circle cx="308" cy="270" r="60" />
            <circle cx="142" cy="238" r="40" />
            <circle cx="338" cy="232" r="44" />
            <circle cx="240" cy="292" r="52" />
          </g>
          <g className="fill-teal-2">
            <circle cx="240" cy="214" r="58" />
            <circle cx="186" cy="252" r="42" />
            <circle cx="296" cy="246" r="46" />
            <circle cx="156" cy="272" r="30" />
          </g>
          <g className="fill-leaf/80">
            <circle cx="226" cy="192" r="30" />
            <circle cx="282" cy="214" r="26" />
            <circle cx="190" cy="232" r="22" />
          </g>
        </g>
      </g>

      {/* плоды */}
      {fruits.map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          className="g-fruit fill-gold stroke-gold-soft"
          strokeWidth="2"
          cx={x}
          cy={y}
          r="7"
          style={{ '--i': i } as CSSProperties}
        />
      ))}

      {/* люди в тени: взрослые, ребёнок — образ «польза для общества» */}
      <g className="g-people">
        <circle cx="190" cy="441" r="7.5" className="fill-gold" />
        <rect x="181" y="450" width="18" height="26" rx="9" className="fill-fixed-ink" />
        <circle cx="226" cy="454" r="6" className="fill-gold" />
        <rect x="219.5" y="461" width="13" height="15" rx="6.5" className="fill-gold-ink" />
        <circle cx="272" cy="438" r="8" className="fill-gold" />
        <rect x="262" y="448" width="20" height="28" rx="10" className="fill-teal-2" />
        <circle cx="312" cy="446" r="7" className="fill-gold" />
        <rect x="303.5" y="454" width="17" height="22" rx="8.5" className="fill-leaf" />
      </g>
    </svg>
  );
}
