import { test, expect, describe } from 'vitest';
import { cn, formatDateTime } from '@/lib/utils';

describe('Utils', () => {
	test('cn works as expected', () => {
		const result = cn('w-full', 'h-full');
		expect(result).toBe('w-full h-full');
	});
	test('formatDateTime works as expected', () => {
		const result = formatDateTime(new Date('01/01/1990'));
		expect(result).toBe('01/01/1990 00:00');
	});
});
