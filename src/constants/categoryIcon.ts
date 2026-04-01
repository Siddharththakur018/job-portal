import {
  Code,
  Megaphone,
  PenTool,
  DollarSign,
  TrendingUp,
  Users,
  Settings,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "../types/job";

export const categoryIcons: Record<Category, LucideIcon> = {
  Tech: Code,
  Marketing: Megaphone,
  Design: PenTool,
  Finance: DollarSign,
  Sales: TrendingUp,
  HR: Users,
  Operations: Settings,
};
