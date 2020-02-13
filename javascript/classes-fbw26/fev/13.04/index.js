//try and catch
try {
  cool();
  console.log("2nd");
  if (userName == "") throw "Sorry something went wrong";
} catch (err) {
  console.error("this is an error", err);
} finally {
  console.log("something");
}
