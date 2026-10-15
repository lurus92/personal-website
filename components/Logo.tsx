// Single-colour logos: transparent PNG masks in public/images/logos, traced from
// each organisation's official artwork. The colour comes from `currentColor`,
// so the same file works on light and navy backgrounds.
// ratio = width / height of the PNG; h = default rendered height in px
// (tuned per logo so they read at a similar optical size).
export const LOGOS = {
  sunrise: { name: 'Sunrise', ratio: 178 / 160, h: 44 },
  tiktok: { name: 'TikTok', ratio: 114 / 160, h: 44 },
  vodafone: { name: 'Vodafone', ratio: 183 / 160, h: 44 },
  alshaya: { name: 'Alshaya Group', ratio: 187 / 160, h: 46 },
  lastminute: { name: 'lastminute.com', ratio: 209 / 160, h: 30 },
  measurecamp: { name: 'MeasureCamp', ratio: 1268 / 160, h: 26 },
  'analytics-pioneers': { name: 'Analytics Pioneers', ratio: 402 / 160, h: 40 }
} as const;

export type LogoId = keyof typeof LOGOS;

interface LogoProps {
  id: LogoId;
  /** Override the rendered height (px). */
  height?: number;
  /** Accessible name override (e.g. "MeasureCamp (Los Angeles, London)"). */
  label?: string;
  className?: string;
}

const Logo = ({ id, height, label, className = '' }: LogoProps) => {
  const logo = LOGOS[id];
  const h = height ?? logo.h;
  return (
    <span
      role="img"
      aria-label={label ?? logo.name}
      title={label ?? logo.name}
      className={`logo-mask shrink-0 ${className}`}
      style={{
        height: `${h}px`,
        width: `${Math.round(h * logo.ratio)}px`,
        WebkitMaskImage: `url(/images/logos/${id}.png)`,
        maskImage: `url(/images/logos/${id}.png)`
      }}
    />
  );
};

export default Logo;
