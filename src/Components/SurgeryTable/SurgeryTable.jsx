function SurgeryTable() {
    const surgery = JSON.parse(localStorage.getItem("pSurgery"));
  return (
    <>
      {surgery.map((data, index) => {
        return (
            <tr key={index}>
            <td>{data.name}</td>
            <td>{data.date}</td>
        </tr>
        )
      })}
    </>
  );
}

export default SurgeryTable;
