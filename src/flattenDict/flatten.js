const dict = {
  a: {
    c: {
      t: null,
    },
    p: {
      p: {
        e: {
          n: {
            d: null,
          },
        },
        l: {
          e: null,
        },
      },
    },
  },
};

function flattenDictionary(dict) {
  const result = {};
  const pathStack = [];
  const push = (obj, path) => pathStack.push({ obj, path });
  push(dict, '');
  while (pathStack.length > 0) {
    const node = pathStack.pop();

    for (const [key, value] of Object.entries(node.obj)) {
      if (value !== null && typeof value === 'object') {
        push(value, node.path + key);
      } else {
        result[node.path + key] = value;
      }
    }
  }
  return result;
}
const flat = flattenDictionary(dict);
console.log('flat', flat);
