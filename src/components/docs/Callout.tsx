import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Lightbulb } from "lucide-react";

type CalloutType = "info" | "warning" | "tip" | "danger" | "note";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    className: "callout-info",
    iconColor: "text-blue-500",
  },
  warning: {
    icon: AlertTriangle,
    className: "callout-warning",
    iconColor: "text-amber-500",
  },
  tip: {
    icon: Lightbulb,
    className: "callout-tip",
    iconColor: "text-emerald-500",
  },
  danger: {
    icon: AlertCircle,
    className: "callout-danger",
    iconColor: "text-red-500",
  },
  note: {
    icon: CheckCircle2,
    className: "callout-info",
    iconColor: "text-blue-500",
  },
};

export function Callout({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div className={cn("callout", config.className, className)}>
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1 min-w-0">
          {title && (
            <h5 className="font-semibold text-sm mb-1">{title}</h5>
          )}
          <div className="text-sm text-muted-foreground [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callout;
