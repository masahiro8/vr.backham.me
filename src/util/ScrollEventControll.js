const _ScrollEventControll = () => {
  const disableScroll = (event) => {
    event.preventDefault();
  };
  const start = () => {
    document.removeEventListener('mousewheel', disableScroll, {
      passive: false,
    });
    document.removeEventListener('touchmove', disableScroll, {
      passive: false,
    });
  };
  const stop = () => {
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  };

  return {
    start,
    stop,
  };
};

export const ScrollEventControll = _ScrollEventControll();
