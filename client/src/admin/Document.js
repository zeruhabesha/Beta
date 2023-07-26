import React from 'react'
import SidebarAdmin from './components/SidebarAdmin'
import { NestedModal, ModalChild } from "nested-modal";

const Document = () => {
  return (
    <div>
        <SidebarAdmin/>
        <div class="mobile-menu-overlay"></div>
 		<div class="main-container">
			<div class="pd-ltr-20 xs-pd-20-10">
     <div className="container App">
    
                <h2 >Documentation </h2>
             
        <div class="card-box mb-30">
						
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">Name</th>
										<th>Age</th>
										<th>Office</th>
										<th>Address</th>
										<th>Start Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
										<td>Sagittarius</td>
										<td>2829 Trainer Avenue Peoria, IL 61602</td>
										<td>29-03-2018</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#viewdoc">
                      <i class="icon-copy fi-plus"></i>
</button>
</td>
									</tr>
									<tr>
										<td class="table-plus">Andrea J. Cagle</td>
										<td>30</td>
										<td>Gemini</td>
										<td>1280 Prospect Valley Road Long Beach, CA 90802</td>
										<td>29-03-2018</td>
										<td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#viewdoc">
  <i className='fas fa-plus'></i>
</button>
</td>
									</tr>
									
								</tbody>
							</table>
						</div>
					</div>


                    <div class="modal fade" id="viewdoc" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Documentation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
		
			<div class="col-md-12">
            <div class="border-bottom custom-control custom-checkbox mb-3">
            <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Authorization">Authorization</label>	
            &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Authorization">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Company-Profile">Company-Profile</label>
                    &nbsp;&nbsp;  <button type="button" class="float-right btn btn-light" id="Company-Profile">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Quality-Certificate">Quality-Certificate</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Quality-Certificate">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Audit-Report">Audit-Report</label>
                    &nbsp;&nbsp;  <button type="button" class="float-right btn btn-light" id="Audit-Report">Download</button>
				</div>
        	<div class="border-bottom custom-control custom-checkbox mb-3">
            <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Bank-Statement">Bank-Statement</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Bank-Statement">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Experiance">Experiance</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Experiance">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="CV">CV</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="CV">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="License">License</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="License">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Company-Profile">Company-Profile</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Company-Profile">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Methodology">Methodology</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Methodology">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Trailing">Trailing</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Trailing">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Cad-Design">Cad-Design</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Cad-Design">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Financial">Financial</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Financial">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
					<i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Tender-Participation">Tender-Participation</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Tender-Participation">Download</button>
				</div>
			</div>
			<button class="welcome-modal-btn">
			<i class="fa fa-download"></i> Comment
		</button>
		
       <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>

	  <div class="welcome-modal">
			<button class="welcome-modal-close">
				<i class="bi bi-x-lg"></i>
			</button>
		
			<div class="text-center mt-5">
				<h3 class="h5 weight-500 text-center mb-5">
					Comment Here
				</h3>
				<div class="pb-2">
				<form>
				<div class="form-group">
    <textarea type="text" class="form-control" id="Comment"  placeholder="Enter Comment"/>
  </div>

      <div class="modal-footer">
        <button type="button" class="btn fa fa-send"></button>
      </div>
        </form>

				</div>
			</div>
			
			
			
		
		</div>




	</div>
  </div>
</div>
</div>
</div>

    </div> </div> </div> </div>
  )
// interface Props {
// 	currentOpenedModal: string;
// 	setCurrentOpenedModal: (modalId: string) => void;
//   }
  
//   export const Document = ({
// 	currentOpenedModal,
// 	setCurrentOpenedModal
//   }: Props) => {
// 	return (
// 	  <NestedModal
// 		currentOpenedModal={currentOpenedModal}
// 		setCurrentOpenedModal={setCurrentOpenedModal}
// 	  >
// 		<ModalChild
// 		  id="first-modal"
// 		  title="Nice! This is the first modal in the row (and this is the title hihi)"
// 		>
// 		  <button onClick={() => setCurrentOpenedModal("third-modal")}>
// 			Click here to launch the third modal
// 		  </button>
// 		</ModalChild>
// 		<ModalChild
// 		  id="second-modal"
// 		  title="Second modal title hehe"
// 		  onClose={async () => {
// 			if (
// 			  window.confirm(
// 				"You won't be able to close the second one if you don't return true in the async callback. This is to prevent losing data such as form data. Confirm dialog if you want to close this modal."
// 			  )
// 			) {
// 			  return true;
// 			}
// 			return false;
// 		  }}
// 		>
// 		  Now you are on the second modal. Try closing this one!
// 		</ModalChild>
// 		<ModalChild id="third-modal" title="Third modal title">
// 		  The content of the third modal is here. If you hover on the left you
// 		  will also see the second modal was opened because it was declared before
// 		  the third one. Click on it to go there or close this one by hitting the
// 		  back button.
// 		</ModalChild>
// 	  </NestedModal>
// 	);
//   };

}

export default Document