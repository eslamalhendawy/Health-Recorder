function GeneticTable() {
    const genetic = JSON.parse(localStorage.getItem("pGenetic"));
  return (
    <>
      {genetic.map((data, index) => {
        return(
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.medicen}</td>
            </tr>
        )
      })}
    </>
  );
}

export default GeneticTable;
