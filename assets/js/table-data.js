$(document).ready(function () {
    // $('#examplezxc').DataTable();
    $('#examplezxc').DataTable({
        
        paging: true,
        scrollX: true,
        lengthChange : true,
        searching: true,
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [  1, 2 ] }, 

        ] , 
         buttons:[
            // {extend: 'copy',text: 'Copier',},
            // {extend: 'csv',text: 'Export CSV'},
            {extend: 'excel',text: '<i class="fas fa-file-csv"></i> CSV'},
            // {extend: 'pdf',text: 'PDF'},         
            {extend: 'print',text: '<i class="fas fa-print text-dark"></i>'}  
                     
        ],
        exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
      });
   
});


$(function(e) {

	//file export datatable
	var table = $('#example').DataTable({
		lengthChange: false,
	   buttons:[
                // {extend: 'copy',text: 'Copier',},
                // {extend: 'csv',text: 'Export CSV'},
                {extend: 'excel',text: '<i class="fas fa-file-csv"></i> CSV',
                exportOptions: {
                    columns: ':visible:not(.not-exported)',
                    rows: ':visible',
                    stripHtml: false
                },
            
            },
                // {extend: 'pdf',text: 'PDF'},         
                {extend: 'print',text: '<i class="fas fa-print text-dark"></i>'
                ,
                exportOptions: {
                    columns: ':visible:not(.not-exported)',
                    rows: ':visible',
                    stripHtml: false
                },
            }  
                         
            ], exportOptions: {
                columns: ':visible:not(.not-exported)',
                rows: ':visible',
                stripHtml: false
            },
		// responsive: true,
		// language: {
		// 	searchPlaceholder: 'بحث...',
		// 	sSearch: '',
		// 	lengthMenu: '_MENU_ ',
		// }
	});
 
	table.buttons().container()
	.appendTo( '#example_wrapper .col-md-6:eq(0)' );		
	
	
    $(document).ready(function () {
        $('#example1').DataTable({
       
            lengthChange: false,
            buttons:[
                     // {extend: 'copy',text: 'Copier',},
                     // {extend: 'csv',text: 'Export CSV'},
                     {extend: 'excel',text: '<i class="fas fa-file-csv"></i> CSV'},
                     // {extend: 'pdf',text: 'PDF'},         
                     {extend: 'print',text: '<i class="fas fa-print text-dark"></i>'}  
                              
                 ], exportOptions: {
                     columns: ':visible:not(.not-exported)',
                     rows: ':visible',
                     stripHtml: false
                 },
      
        });
        $('#dtBasicExample').DataTable({
            dom: 'lBfrtip',
            buttons: [
              
                {
                    extend: 'excel',
                    text: '<i title="excel" class="fa fa-file-text-o"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
                {
                    extend: 'print',
                    text: '<i title="print" class="fa fa-print"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
               
                {
                    extend: 'colvis',
                    text: '<i title="column visibility" class="fa fa-eye"></i>',
                    columns: ':gt(0)'
                },
            ],
            
            
        });
    
        $('#dtBasicExample0').DataTable({
            dom: 'lBfrtip',
            buttons: [
              
                {
                    extend: 'excel',
                    text: '<i title="excel" class="fa fa-file-text-o"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
                {
                    extend: 'print',
                    text: '<i title="print" class="fa fa-print"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
               
                {
                    extend: 'colvis',
                    text: '<i title="column visibility" class="fa fa-eye"></i>',
                    columns: ':gt(0)'
                },
            ],
        });
     
        $('.dataTables_length').addClass('bs-select');
         $('#dtBasicExample2').DataTable({
            dom: 'lBfrtip',
            buttons: [
              
                {
                    extend: 'excel',
                    text: '<i title="excel" class="fa fa-file-text-o"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
                {
                    extend: 'print',
                    text: '<i title="print" class="fa fa-print"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
               
                {
                    extend: 'colvis',
                    text: '<i title="column visibility" class="fa fa-eye"></i>',
                    columns: ':gt(0)'
                },
            ],
        });
        $('#dtBasicExample3').DataTable({
            dom: 'lBfrtip',
        buttons: [
          
            {
                extend: 'excel',
                text: '<i title="excel" class="fa fa-file-text-o"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
            {
                extend: 'print',
                text: '<i title="print" class="fa fa-print"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
           
            {
                extend: 'colvis',
                text: '<i title="column visibility" class="fa fa-eye"></i>',
                columns: ':gt(0)'
            },
        ],
        });
          $('#dtBasicExample98').DataTable({
            dom: 'lBfrtip',
            buttons: [
              
                {
                    extend: 'excel',
                    text: '<i title="excel" class="fa fa-file-text-o"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
                {
                    extend: 'print',
                    text: '<i title="print" class="fa fa-print"></i>',
                    exportOptions: {
                        columns: ':visible:Not(.not-exported)',
                        rows: ':visible'
                    },
                    footer:true
                },
               
                {
                    extend: 'colvis',
                    text: '<i title="column visibility" class="fa fa-eye"></i>',
                    columns: ':gt(0)'
                },
            ],
            // 'columnDefs': [
            // { className: "not-show", "targets": [ 4]}, 
            //     { "targets": [7], "visible": true},  //always hidden column   
            // ],
          
            //    buttons:[
            //     // {extend: 'copy',text: 'Copier',},
            //     // {extend: 'csv',text: 'Export CSV'},
            //     {extend: 'excel',text: '<i class="fas fa-file-csv"></i> CSV',
            //     exportOptions: {
            //         columns: ':visible:not(.not-exported)',
            //         rows: ':visible',
            //         stripHtml: false
            //     },
            
            // },
            //     // {extend: 'pdf',text: 'PDF'},         
            //     {extend: 'print',text: '<i class="fas fa-print text-dark"></i>'
            //     ,
            //     exportOptions: {
            //         columns: ':visible:not(.not-exported)',
            //         rows: ':visible',
            //         stripHtml: false
            //     },
            // }  
                         
            // ], 
          
        });

        
        $('.dataTables_length').addClass('bs-select');
      });
    $('#example44').DataTable({
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		} ,exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
	});
    $('#example54').DataTable({
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		} ,exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
	});
    $('.example54').DataTable({
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}, exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
	});
    $('.table_dashboard').DataTable({
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}, exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
	});

    //     $('.example1').dataTable( {
    //         bSort: false,
    //         aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
    //     "scrollY":        "200px",
    //     "scrollCollapse": true,
    //     "info":           true,
    //     "paging":         true



	// });
	$('#example2').DataTable({
        dom: 'lBfrtip',
        buttons: [
          
            {
                extend: 'excel',
                text: '<i title="excel" class="fa fa-file-text-o"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
            {
                extend: 'print',
                text: '<i title="print" class="fa fa-print"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
           
            {
                extend: 'colvis',
                text: '<i title="column visibility" class="fa fa-eye"></i>',
                columns: ':gt(0)'
            },
        ],
	});
    $('#example32').DataTable({
        dom: 'lBfrtip',
        buttons: [
          
            {
                extend: 'excel',
                text: '<i title="excel" class="fa fa-file-text-o"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
            {
                extend: 'print',
                text: '<i title="print" class="fa fa-print"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
           
            {
                extend: 'colvis',
                text: '<i title="column visibility" class="fa fa-eye"></i>',
                columns: ':gt(0)'
            },
        ],
	});
	var table = $('#example-delete').DataTable({
		responsive: true,
		language: {
            
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}, exportOptions: {
            columns: ':visible:not(.not-exported)',
            rows: ':visible',
            stripHtml: false
        },
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
	$('#example_1').DataTable( {
     	responsive: true,
		language: {
			searchPlaceholder: 'بحث...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		},
        dom: 'lBfrtip',
        buttons: [
          
            {
                extend: 'excel',
                text: '<i title="excel" class="fa fa-file-text-o"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
            {
                extend: 'print',
                text: '<i title="print" class="fa fa-print"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
           
            {
                extend: 'colvis',
                text: '<i title="column visibility" class="fa fa-eye"></i>',
                columns: ':gt(0)'
            },
        ],
	
		
	} );
    $('#example_656').DataTable( {
        dom: 'lBfrtip',
        buttons: [
          
            {
                extend: 'excel',
                text: '<i title="excel" class="fa fa-file-text-o"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
            {
                extend: 'print',
                text: '<i title="print" class="fa fa-print"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
           
            {
                extend: 'colvis',
                text: '<i title="column visibility" class="fa fa-eye"></i>',
                columns: ':gt(0)'
            },
        ],
    
     
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
{/* <i class="fas fa-file-csv"></i> CSV */}
$(function() {

    var start = moment().subtract(5, 'year');
    var end = moment().add(1,'days');

    function cb(start, end) {
        $('.reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('.reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'هذا اليوم': [moment(), moment().add(1,'days')],
            'الامس': [moment().subtract(2, 'days'), moment().subtract(1, 'days')],
            'اخر 7 ايام': [moment().subtract(6, 'days'), moment().add(1,'days')],
            // 'اخر 30 يوم': [moment().subtract(29, 'days'), moment()],
            'هذا الشهر': [moment().startOf('month'), moment().endOf('month')],
            'الشهر الماضي': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'الكل': [moment().subtract(5, 'year'), moment().add(1,'days')]
        }
    }, cb);

    cb(start, end);

});

$(function(e) {


    var table = $('#examplevs').DataTable({
        lengthChange: false,
        dom: 'lBfrtip',
        buttons: [
          
            {
                extend: 'excel',
                text: '<i title="excel" class="fa fa-file-text-o"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
            {
                extend: 'print',
                text: '<i title="print" class="fa fa-print"></i>',
                exportOptions: {
                    columns: ':visible:Not(.not-exported)',
                    rows: ':visible'
                },
                footer:true
            },
           
            {
                extend: 'colvis',
                text: '<i title="column visibility" class="fa fa-eye"></i>',
                columns: ':gt(0)'
            },
        ],
    
    });
});