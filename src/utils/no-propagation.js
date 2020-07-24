const noPropagation = callback => (
  (e) => {
    e.stopPropagation();
    callback(e);
  }
);

export { noPropagation };
