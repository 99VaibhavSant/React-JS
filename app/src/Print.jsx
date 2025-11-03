function Table() {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<p key={i}>{i}</p>);
  }
  return <div>{rows}</div>;
}

function Print() {
  return (
    <div>
      <h1>Vaibhav</h1>
      <Table />
    </div>
  );
}

export default Print;
