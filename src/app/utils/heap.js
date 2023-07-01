export const heapTrack = (eventName) => {
  if (window?.heap?.loaded) {
    window.heap.track(eventName);
  }
  return true;
};