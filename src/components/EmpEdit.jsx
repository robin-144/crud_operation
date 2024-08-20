
import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {
  const { empId } = useParams();
  // const [employeeData, employeeDataChange] = useState({});
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, valChange] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ id, name, email, phone, active });
    const empData= {id, name, email, phone, active}
    
    fetch("http://localhost:8000/employee/"+empId,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empData)
    })
    .then((res)=>{
alert("Saved Successfully.")
navigate('/')
    }).catch((err)=>{
        console.log(err.message)
    })
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp);
        // employeeDataChange(resp);
        idChange(resp.id);
        nameChange(resp.name);
        emailChange(resp.email);
        phoneChange(resp.phone);
        activeChange(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card-title">
                <h2>Employee Edit</h2>
              </div>
              <div className="car-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        // onChange={(e) => idChange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input required
                          value={name} 
                          onMouseDown={(e)=>valChange(true)}
                          onChange={(e) => nameChange(e.target.value)}
                          className="form-control"
                        />
                      {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input required
                          value={email}
                          onChange={(e) => emailChange(e.target.value)}
                          className="form-control"
                        />
                        {email.length==0 && <span className="text-danger">Enter Email</span>}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input required
                          value={phone}
                          onChange={(e) => phoneChange(e.target.value)}
                          className="form-control"
                        />
                        {phone.length==0 && <span className="text-danger">Enter Phone Number</span>}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          checked={active}
                          onChange={(e) => activeChange(e.target.checked)}
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Is Active</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-success">
                          Save
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmpEdit;
