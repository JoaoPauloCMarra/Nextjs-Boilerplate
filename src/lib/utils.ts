import { clsx } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDateTime = (date: Date) => format(date, 'MM/dd/yyyy HH:mm');

export const waitSeconds = (seconds: number) =>
	new Promise((resolve) => setTimeout(resolve, seconds * 1000));
