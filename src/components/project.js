import React from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';


class Project extends React.Component{

render(){
    return(
       <div>
            {/* <style>{'body { background-color:#ece9e6}'}</style> */}
            <Navbar />
            <SideBar/>
            <div className="rectangle" style={{height: "480px",width: "1050px", backgroundColor: "white",marginLeft:'150px',marginTop:"80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}>
                
            {/* <button type="button" className="btn btn-primary btn-circle btn-lg" style={{  width:" 50px", height: "50px",padding: "10px 16px",fontSize:" 18px",
  lineHeight: "1.33",borderRadius: "25px"}}>+</button> */}
<button type="button" className="btn " data-toggle="modal" data-target="#exampleModal" style={{color:"white",backgroundColor:"#2a5298 ",marginLeft:"20px",fontSize:"18px",marginTop:"10px"}} >
 +
</button>

<div>
    <br/>
<div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
       
        <th scope="col">ProjectId</th>
        <th scope="col">ProjectName</th>
        <th scope="col">Abbrivation</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
        <th scope="col">More</th>
        
         </tr>
    </thead>
    <tbody>
      <tr>
       <td>Low</td>
        <td>low</td>
        <td>dsfd</td>
        <td><a href=" "><i className="fa fa-edit" style={{color:"orange",fontSize:'20px'}}></i></a></td>
        <td><a href=""><i className="fa fa-trash" style={{color:"red",fontSize:'20px'}}></i></a> </td>
        <td><a href=""><i className="fa fa-expand" style={{color:"black",fontSize:'20px'}}></i></a> </td>
      </tr>
      
      <tr> 
        <td>low</td>
        <td>low</td>
        <td>dsfd</td>
        <td><a href=""><i className="fa fa-edit" style={{color:"orange",fontSize:'20px'}}></i></a></td>
        <td><a href=""><i className="fa fa-trash" style={{color:"red",fontSize:'20px'}}></i></a> </td>
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
        <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Project Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Project Name"/>
  </div>
  

  <div className="form-group">
   
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Abbrivation" disabled/>
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

export default Project;