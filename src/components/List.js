import Item from "./Item";

function List() {
  return (
    <>
      <ul>
        <Item marca="Ferrari" anoLancamento={2024} />
        <Item marca="Bmw" anoLancamento={2004} />
        <Item marca="Renault" anoLancamento={1988} />
        <Item marca="Mercedes" anoLancamento={2025} />
        <Item />
      </ul>
    </>
  );
}

export default List;
