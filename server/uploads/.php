 <?php
error_reporting(0);
include 'conn.php';
include 'auth.php';

$add = $_GET['add'];
?>
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Beta</title>
<script src="http://code.jquery.com/jquery.js"></script>
    <!--  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <style>
    

      </style>
  Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
   <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">
   <?php include 'nav.php'; ?>
  <!-- /.navbar -->
<?php include 'sidebar.php'; ?>

 <div class="content-wrapper">    
	<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add Upload</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"> Upload</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
	
  <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
 <div class="card">
              <div class="card-header">
				<a href="view-comp1.php?add=<?php echo $add; ?>" class="btn btn-primary" style="color:white;"><i class="fa fa-eye"  aria-hidden="true"></i>  View Compliance Sheet</a>

              </div>
<div class="card-body">
          
                <table id="example1" class="table table-bordered table-striped">
     
                <th>REGISTER MORE THAN ONE</th>
          
        <td>
<button  class="btn btn-light"  type="submit" name="submit" ><a href="download123.php?filename=<?php echo 'csvfile1.csv'; ?>"><i class="fa fa-download  "></i></a></button>Download Default CSV File	
					</td>
    </table>    
                              </div>					
			   </div>
					<!--//sreen-gallery-cursual---->
			</div>
		
		 <div class="col-md-12">
			<div class='mid-content-top charts-grids'>
				
				<div class='alert alert-success'>
                             <i class='fa fa-info-circle'></i>&nbsp;Ensure that the file upload is in CSV Format Otherwise it will not save
                              </div>
					<!--//sreen-gallery-cursual---->
			</div>
		</div>
	
		<div id="message">
		 <div class="col-md-12">		
			<div class='mid-content-top charts-grids' >
   <div id="message"></div>
      <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Select CSV File</h3>
          </div>
         <div class="panel-body">
            <div class="row" id="upload_area">
              <form method="post" id="upload_form" enctype="multipart/form-data">
                
				<div class="col-md-6" align="right">Select File</div>
                <div class="col-md-6">
                  <input type="file" name="file" id="csv_file" />
                </div>
                <br />
                <div class="col-md-12" align="center">
                  <input type="submit" name="upload_file" id="upload_file" class="btn btn-primary" value="Upload" />
                </div>
              </form>
              
            </div>
            <div class="table-responsive" id="process_area">

            </div>
          </div>
        </div>
     </div>
      </div>
	    </div>
	 
	  
	    </div>
      </div>
	    </div>

   
   
   <!-- /.content -->
  
  <!-- /.content-wrapper -->
 

<script>
$(document).ready(function(){

  $('#upload_form').on('submit', function(event){

    event.preventDefault();
    $.ajax({
      url:"compupload.php",
      method:"POST",
      data:new FormData(this),
      dataType:'json',
      contentType:false,
      cache:false,
      processData:false,
      success:function(data)
      {
        if(data.error != '')
        {
          $('#message').html('<div class="alert alert-danger">'+data.error+'</div>');
        }
        else
        {
          $('#process_area').html(data.output);
          $('#upload_area').css('display', 'none');
        }
      }
    });

  });

  var total_selection = 0;
  
var tid= 0;
  var model= 0;

  var brand = 0;

  var origin = 0;
  
  var specification = 0;
 
	   var cdate = 0;
  var column_data = [];

  $(document).on('change', '.set_column_data', function(){

    var column_name = $(this).val();

    var column_number = $(this).data('column_number');

    if(column_name in column_data)
    {
      alert('You have already define '+column_name+ ' column');

      $(this).val('');

      return false;
    }

    if(column_name != '')
    {
      column_data[column_name] = column_number;
    }
    else
    {
      const entries = Object.entries(column_data);

      for(const [key, value] of entries)
      {
        if(value == column_number)
        {
          delete column_data[key];
        }
      }
    }

    total_selection = Object.keys(column_data).length;

    if(total_selection == 6)
    {
      $('#import').attr('disabled', false);

         tid = column_data.tid;
         model = column_data.model;
        brand = column_data.brand;
        origin = column_data.origin;
        specification = column_data.specification;
		 cdate = column_data.cdate;
		
    }
    else
    {
      $('#import').attr('disabled', 'disabled');
    }

  });

  $(document).on('click', '#import', function(event){

    event.preventDefault();

    $.ajax({
      url:"compimport.php",
      method:"POST",
      data:{tid:tid,model:model,brand:brand,origin:origin,specification:specification,cdate:cdate},
      beforeSend:function(){
         $('#import').attr('disabled', 'disabled');
        $('#import').text('Importing...');
      },
      success:function(data)
      {
     
        $('#import').attr('disabled', false);
        $('#import').text('Import');
        $('#process_area').css('display', 'none');
        $('#upload_area').css('display', 'block');
        $('#upload_form')[0].reset();
        $('#message').html("<div class='alert alert-success'>"+data+"</div>");
      }
    })

  });
  
});
</script>

 </table>
              </div>
			  
			  
			 

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside><?php include 'footer.php'; ?>
  <!-- /.control-sidebar -->
</div>
<script> $(document).ready( function () {
    $('#example1').DataTable();
} );</script>
<!-- ./wrapper -->
<script src="//cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- DataTables  & Plugins -->
<script src="plugins/datatables/jquery.dataTables.min.js"></script>
<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="plugins/jszip/jszip.min.js"></script>
<script src="plugins/pdfmake/pdfmake.min.js"></script>
<script src="plugins/pdfmake/vfs_fonts.js"></script>
<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
<!-- Page specific script -->
<script>
  $(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
</script>
</body>
</html>