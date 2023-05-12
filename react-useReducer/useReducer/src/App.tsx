import Counter from "./Counter";
function App() {
  return (
    <>
      <Counter>{(num: number) => <>Current Node: {num}</>}</Counter>
    </>
  );
}

export default App;
