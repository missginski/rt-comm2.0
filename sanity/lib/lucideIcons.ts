import type { LucideIcon } from "lucide-react";
import {
  Clock,
  BadgeCheck,
  Zap,
  Activity,
  Network,
  HardHat,
  ShieldCheck,
  Siren,
  PhoneCall,
  Rocket,
  Gauge,
  Server,
  ClipboardCheck,
} from "lucide-react";

export const ICONS = {
  Clock,
  BadgeCheck,
  Zap,
  Activity,
  Network,
  HardHat,
  ShieldCheck,
  Siren,
  PhoneCall,
  Rocket,
  Gauge,
  Server,
  ClipboardCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function getIcon(name?: string | null): LucideIcon {
  if (!name) return ShieldCheck; // fallback
  return ICONS[name as IconName] ?? ShieldCheck;
}
