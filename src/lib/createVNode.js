export function createVNode(type, props, ...children) {
  const filteredChildren = children.flat(Infinity).filter((item) => {
    if (item !== undefined && item !== null && item !== false) {
      return true;
    }
    return false;
  });

  return {
    type,
    props,
    children: filteredChildren,
  };
}
