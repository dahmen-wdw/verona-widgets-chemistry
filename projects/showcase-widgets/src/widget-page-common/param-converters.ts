import { PsLocale } from 'periodic-system-common';

export const intParam = {
  read: (value: string) => Number.parseInt(value, 10),
  write: (value: number) => value.toString(10),
} as const;

export const boolParam = {
  read: (value: string) => value === 'true' || value === '1',
  write: (value: boolean) => (value ? 'true' : 'false'),
} as const;

export const languageParam = {
  read: (value: string) => value as PsLocale,
  write: (value: PsLocale) => value,
} as const;
