function DiagnosisTable() {
  const diognosis = JSON.parse(localStorage.getItem("pDiagonas"));
  return (
    <>
      {diognosis.length === 0 ? (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ) : (
        diognosis.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.Diagnose_condition}</td>
              {/* <td>{`${data.Medicine[0]}/${data.Medicine[1]}`}</td> */}
              <td>
                {data.Medicine.map((data) => {
                  return `${data} `;
                })}
              </td>
              <td>{data.DoctorName}</td>
              <td>{data.date}</td>
            </tr>
          );
        })
      )}
    </>
  );
}

export default DiagnosisTable;
