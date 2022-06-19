const scrolling = (callback) => {
  document.addEventListener("scroll", () => {
    callback(document.scrollingElement.scrollTop);
  });
};

const asyncScrolling = async () => {
  return new Promise((resolve) => {
    document.addEventListener("scroll", () => {
      resolve(document.scrollingElement.scrollTop);
    });
  });
};

const topCallBack = (tgt, pos_y) => {
  const rect = tgt.getBoundingClientRect();
  return pos_y > rect.y;
};

const bottomCallBack = (tgt, pos_y) => {
  const rect = tgt.getBoundingClientRect();
  return pos_y < rect.y + rect.height;
};

export { scrolling, asyncScrolling, topCallBack, bottomCallBack };
