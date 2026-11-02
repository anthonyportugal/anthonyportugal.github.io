interface LayerNode {
  name: string;
  requires: string[];
}

/**
 * Every layer that applying `name` brings with it, nearest first. Mirrors how the
 * dotfiles CLI resolves `requires`, so the page shows what an install really pulls in.
 */
export function requiredChain(name: string, layers: LayerNode[]): string[] {
  const chain = new Set<string>();
  const pending = [name];

  while (pending.length > 0) {
    const layer = layers.find((candidate) => candidate.name === pending[0]);
    pending.shift();
    for (const required of layer?.requires ?? []) {
      if (required !== name && !chain.has(required)) {
        chain.add(required);
        pending.push(required);
      }
    }
  }

  return [...chain];
}
