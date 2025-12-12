/**
 * Returns a new array with duplicate entries removed while preserving the
 * original order of first occurrence.
 *
 * Notes:
 * - Uses `Set` for tracking seen values.
 * - For objects, uniqueness is based on reference equality (standard JS/TS behavior).
 * - For empty input, returns an empty array.
 */
export function unique<T>(items: readonly T[]): T[] {
    const seen = new Set<T>();
    const result: T[] = [];

    for (const item of items) {
        if (seen.has(item)) {
            continue;
        }

        seen.add(item);
        result.push(item);
    }

    return result;
}

/**
 * Groups items into a `Map` keyed by the value returned from `keyFn`.
 *
 * Notes:
 * - Returns an empty `Map` for empty input.
 * - Preserves input order within each group.
 * - Supports type inference for both `T` (item type) and `K` (key type).
 */
export function groupBy<T, K>(items: readonly T[], keyFn: (item: T) => K): Map<K, T[]> {
    const result = new Map<K, T[]>();

    for (const item of items) {
        const key = keyFn(item);
        const bucket = result.get(key);

        if (bucket) {
            bucket.push(item);
            continue;
        }

        result.set(key, [item]);
    }

    return result;
}

/**
 * Splits an array into chunks of `size`.
 *
 * Edge cases:
 * - If `size < 1`, returns an empty array (no throwing).
 * - If input is empty, returns an empty array.
 */
export function chunk<T>(items: readonly T[], size: number): T[][] {
    if (size < 1 || items.length === 0) {
        return [];
    }

    const result: T[][] = [];

    for (let i = 0; i < items.length; i += size) {
        result.push(items.slice(i, i + size));
    }

    return result;
}