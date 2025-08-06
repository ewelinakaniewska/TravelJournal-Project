import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./assets/data";

export default function App() {
  const entryList = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <>
      <Header />
      {entryList}
    </>
  );
}
