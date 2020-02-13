//try and catch
try {
  cool();
  console.log("2nd");
  if (userName == "") throw "Sorry something went wrong";
} catch (err) {
  console.error("this is an error", err.message);
} finally {
  console.log("something");
}

(function() {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

(function manyCalls(num) {
  console.log("mama");
  if (num > 1) manyCalls(num - 1);
})(8);

const timerPrint = setTimeout(() => console.log("Hi i am JS..."), 5000);
clearTimeout(timerPrint);
