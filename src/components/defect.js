import React, { Component } from 'react';
import Navbar from './Navbar'
import SideBar from './SideBar';

class Defect extends React.Component{

render(){
    return(
       <div>
           
            <Navbar />
            <SideBar/>
          
            <div className="rectangle" style={{height: "480px",width: "1050px", backgroundColor: "white",marginLeft:'150px',marginTop:"80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}>
                  
         
<button type="button" className="btn " data-toggle="modal" data-target="#exampleModal" style={{color:"white",backgroundColor:"#2a5298 ",marginLeft:"20px",fontSize:"18px",marginTop:"10px"}} >
 +
</button>

<div>
    <br/>
<div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th scope="col">DefectId</th>
        <th scope="col">ProjectId</th>
        <th scope="col">ModuleId</th>
        <th scope="col">Severity</th>
        <th scope="col">priority</th>
        <th scope="col">Type</th>
        <th scope="col">AssignedTo</th>
        <th scope="col">Edit</th>
        <th scope="col">More</th>
         </tr>
    </thead>
    <tbody>
      <tr>
       <td>def001</td>
        <td>pro001</td>
        <td>mod001</td>
        <td>high</td>
        <td>Low</td>
        <td>low</td>
        <td>dsfd</td>
        <td><a href=""><i className="fa fa-edit" style={{color:"orange",fontSize:'20px'}}></i></a></td>
        <td><a href=""><i className="fa fa-expand" style={{color:"black",fontSize:'20px'}}></i></a> </td>
      </tr>
      
      <tr>
        <td>def002</td>
        <td>pro002</td>
        <td>mod002</td>
        <td>medium</td>
        <td>low</td>
        <td>low</td>
        <td>dsfd</td>
        <td><a href=""><i className="fa fa-edit" style={{color:"orange",fontSize:'20px'}}></i></a></td>
        <td><a href=""><i className="fa fa-expand" style={{color:"black",fontSize:'20px'}}></i></a> </td>
        </tr>
     
    </tbody>
  </table>
 
</div>

</div>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Defect</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
          <row>
          <div className="form-group">
    <label for="formGroupExampleInput">Defect Id</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Defect Id"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Project</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Project Id "/>
  </div>

          </row>
  
  <div className="form-group">
    <label for="formGroupExampleInput2">ModuleId</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Project Id "/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Severity</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Project Id "/>
  </div>
</form>
      </div>
    
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
        <button type="button" className="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>

                
                 </div>
       </div>
      

    )
}
}

export default Defect;