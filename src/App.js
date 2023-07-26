import "./styles.css";

export default function App() {
  function SumaDigitos(n) {
    const initialValue = 0;
    if (n < 10) return n;
    else {
      return SumaDigitos(
        n
          .toString()
          .split("")
          .reduce(
            (accumulator, currentValue) =>
              Number(accumulator) + Number(currentValue),
            initialValue
          )
      );
    }
  }

  function digital_root(n) {
    n = eval(n.toString().split("").join("+"));

    if (n > 9) {
      return digital_root(n);
    }

    return n;
  }

  function digital_root2(n) {
    return ((n - 1) % 9) + 1;
  }

  function digital_root3(n) {
    return n < 10
      ? n
      : digital_root(
          String(n)
            .split("")
            .reduce((s, v) => Number(s) + Number(v))
        );
  }

  const a = digital_root3(493193);
  console.log(a);
  // function SumaDigitos(e) {
  //   n=e.target.value;
  //   return n if n < 10 else SumaDigitos(sum(map(int, str(n))))
  // }
  return (
    <div className="App">
      <input />
    </div>
  );
}

/*
function digitalRoot(n) {
  const initialValue = 0;
     if (n < 10) 
       return n
      else {
      return (digitalRoot(
        n
          .toString()
          .split("")
          .reduce(
            (accumulator, currentValue) =>
              Number(accumulator) + Number(currentValue),
            initialValue
          )
      ));
    } */
