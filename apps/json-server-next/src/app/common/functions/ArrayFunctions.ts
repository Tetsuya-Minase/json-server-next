function uniq(list: unknown[], key?: string): unknown[] {
  if (!key) {
    return Array.from(new Set([...list]));
  }
  return [...new Map(list.map(v => [v[key], v])).values()];
}

export function uniqByName(list: unknown[]): unknown[] {
  return uniq(list, 'name');
}
