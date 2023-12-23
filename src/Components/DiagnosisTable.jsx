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
              <td className="text-sm py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">{data.Diagnose_condition}</td>
              <td className="text-sm py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">
                {data.Medicine.map((data) => {
                  return `${data} `;
                })}
              </td>
              <td className="text-sm py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">{data.DoctorName}</td>
              <td className="text-sm py-4 px-2 border-b-2 border-[#d9d9d9]">{data.date}</td>
            </tr>
          );
        })
      )}
    </>
  );
}

export default DiagnosisTable;
