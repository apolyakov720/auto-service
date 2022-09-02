export default function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 0);

    // return resolve();
  });
}
