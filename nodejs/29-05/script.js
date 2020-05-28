exports.prepareString = str => {
  const lowered = str.map(arg => {
    const res = arg.toLowerCase();
    return res[0].toUpperCase() + res.slice(1);
  });
  console.log(lowered.join(" "));
  //return lower[0].toUpperCase() + lower.slice(1);
};
