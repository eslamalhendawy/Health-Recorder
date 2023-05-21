
function PatientCard(props) {
  return (
    <div className="box">
                <div className="data">
                    <img src={props.img} alt="" />
                    <h3>Patient Name</h3>
                </div>
                <div className="data">
                    <span>Code</span>
                    <span>123</span>
                </div>
                <div className="data">
                    <span>Number</span>
                    <span>+20 ******</span>
                </div>
                <div className="data">
                    <span>Age</span>
                    <span>23</span>
                </div>
            </div>
  )
}

export default PatientCard