

$(document).ready(function() {
    $(".asc").change(function() {
        $('#filter_form').submit();

    });

$("select[name=country_id]").change(function() {
        $('#filter_form').submit();

    });
$("select[name=marital_status]").change(function() {
        $('#filter_form').submit();

    });          
    

    $(".type").change(function() {
        $('#filter_form').submit();

    });
    $("#reportrange").change(function() {
        $('.date_range').val($(this).val());
        $('#filter_reportrange').submit();

    });

    $("#rangeInput").change(function() {
        $('#tickmarks').val();
        $('#filter_reportrange').submit();

    });
});
$('.badgess').each(function() {
               


    $(this).click(function() {
         $(this).toggleClass('plus');
        $('.dtr-control').toggleClass('d-none');

        var id = $(this).closest('td').data('id');
    })
})

// })

$(".btn_rest").click(function() {

});
$(".btn_rest").click(function() {



    var id = $(this).data("id");
    var token = $("meta[name='csrf-token']").attr("content");


    $.ajax({
        url: "/rest/" + id,
        type: 'PATCH',
        data: {
            "id": id,
            "_token": token,
        },
        success: function(success) {
            location.reload();
        }
    });


});

$('input[name=type_of_ex]').on('change', function() {
    if ($(this).val() == '0') {
        // $('input[name=scholarship_photo]').prop('required',true);
        $('.mony').removeClass('d-none');
        $('.eye').addClass('d-none');
        $('.medical').addClass('d-none');

    } else if ($(this).val() == '1') {
        $('.eye').removeClass('d-none');
        $('.mony').addClass('d-none');
        $('.medical').addClass('d-none');

    } else if ($(this).val() == '2') {
        $('.medical').removeClass('d-none');
        $('.eye').addClass('d-none');
        $('.mony').addClass('d-none');

    }
});
