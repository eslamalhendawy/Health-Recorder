function CHTable() {
  const chronic = JSON.parse(localStorage.getItem("pChronic"));
  const healthProblems = JSON.parse(localStorage.getItem("pHealthProblems"));
  return (
    <>
      <div className="table-body">
        {chronic.map((data, index) => {
          return (
            <div className="table-div" key={index}>
              <span key={index+1}>{data.name}</span>
              <span key={index}>{data.medicen}</span>
            </div>
          );
        })}
        {healthProblems.map((data, index) => {
          return (
            <div className="table-div" key={index}>
              <span key={index}>{data.name}</span>
              <span key={index+1}>{data.medicen}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CHTable;
