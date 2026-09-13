import type { Component } from "@earendil-works/pi-tui";

export type SegmentKey =
  | "modelThink"
  | "runtime"
  | "pwd"
  | "git"
  | "contextUsage"
  | "contextProgress"
  | "contextPercentage"
  | "contextNumbers"
  | "tokens"
  | "tps"
  | "cost";

export type PresetName = "minimal" | "standard" | "verbose" | "performance";

export interface SettingsConfig {
  version: number;
  preset: PresetName;
  segments: Record<SegmentKey, boolean>;
  contextTokenThresholds: { yellow: number; red: number };
  endOfRunNotification: boolean;
}

export interface SettingsListItem {
  id: string;
  label: string;
  description: string;
  currentValue: string;
  values?: string[];
  submenu?: (
    currentValue: string,
    done: (selectedValue?: string, options?: { navigateTo?: string }) => void,
  ) => Component;
}

export interface SettingsUpdateResult {
  config: SettingsConfig;
  derivedUpdates: Array<{ id: string; value: string }>;
}

export interface SegmentMetadata {
  id: SegmentKey;
  label: string;
  description: string;
}
