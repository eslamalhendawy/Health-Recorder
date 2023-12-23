function SurgeryTable() {
  const surgery = JSON.parse(localStorage.getItem("pSurgery"));
  return (
    <>
      {surgery.length === 0 ? (
        <tr>
          <td></td>
          <td></td>
        </tr>
      ) : (
        surgery.map((data, index) => {
          return (
            <tr key={index}>
              <td className="text-sm py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">{data.name}</td>
              <td className="text-sm pl-2 border-b-2 border-[#d9d9d9]">{data.date}</td>
            </tr>
          );
        })
      )}
    </>
  );
}

export default SurgeryTable;
