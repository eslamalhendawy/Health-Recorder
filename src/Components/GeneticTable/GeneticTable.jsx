function GeneticTable() {
  const genetic = JSON.parse(localStorage.getItem("pGenetic"));
  return (
    <>
      {genetic.length === 0 ? (
        <tr>
          <td></td>
          <td></td>
        </tr>
      ) : (
        genetic.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.medicen}</td>
            </tr>
          );
        })
      )}
    </>
  );
}

export default GeneticTable;
