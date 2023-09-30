$(function(e) {
	//file export datatable
	var table = $('#example').DataTable({
		lengthChange: false,
		buttons: [ 'copy', 'excel', 'pdf','print' ],
		responsive: true,
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#example_wrapper .col-md-3:eq(0)' );		
	
	$('#example1').DataTable({
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	$('#example2').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	var table = $('#example-delete').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	}); 
    $('#example-delete tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
	
	//Details display datatable
	$('.example_2').DataTable( {
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
        "dom": '<"top"<"left-col"B><"center-col"l><"right-col"f>>rtip',
		buttons: [
            
      
        

            {
                extend: 'print',
                text: ' <h5 >   <i title="print" class="fa fa-print"></i> طباعة</h5>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible',
                    stripHtml: false
                },
                
            },
            
           
         
        ],
		responsive: true,
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
         
		},
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'معلومات '+data[0]+' '+data[1];
					}
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'table border mb-0'
				} )
			}
		},
		
	} );


    $('#example_3').DataTable( {
        dom: 'Bfrtip',




		buttons: [
            
      
          

            {
                extend: 'print',
                text: ' <h5 >   <i title="print" class="fa fa-print"></i> طباعة</h5>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible',
                    stripHtml: false
                },
                
            },
            
         
         
        ],
	
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: 'Display <select>'+
			'<option value="10">10</option>'+
			'<option value="20">20</option>'+
			'<option value="30">30</option>'+
			'<option value="40">40</option>'+
			'<option value="50">50</option>'+
			'<option value="-1">All</option>'+
			'</select> records'
		},
	
		



        
	} );
    $('#example_4').DataTable( {
        dom: 'Bfrtip',




		buttons: [
            
            {
              
                 extend: '', className: 'select_all' ,
                text: ' <h5  >    تحديد الموعد للكل</h5>',
           
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible',
                    
                    stripHtml: false
                },
            },
          

            {
                extend: 'print',
                text: ' <h5 >   <i title="print" class="fa fa-print"></i> طباعة</h5>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible',
                    stripHtml: false
                },
                
            },
            
         
         
        ],
	
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: 'Display <select>'+
			'<option value="10">10</option>'+
			'<option value="20">20</option>'+
			'<option value="30">30</option>'+
			'<option value="40">40</option>'+
			'<option value="50">50</option>'+
			'<option value="-1">All</option>'+
			'</select> records'
		},
	
		
	} );
});

// .chrome styling Vanilla JS

// document.getElementById("myinput").oninput =
//  function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to left,#0c5f45 0%, #0c5f45 ' + value + '%, #fff ' + value + '%, white 100%)'
//   };
  function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
  $(document).ready(function() {
    $('#table_id').DataTable();
});

$(document).ready(function() {
    $('.form-control').css('border-radius', '16px');
});

$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('.reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('.reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'هذا اليوم': [moment(), moment()],
            'الامس': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'اخر 7 ايام': [moment().subtract(6, 'days'), moment()],
            'اخر 30 يوم': [moment().subtract(29, 'days'), moment()],
            'هذا الشهر': [moment().startOf('month'), moment().endOf('month')],
            'الشهر الماضي': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});