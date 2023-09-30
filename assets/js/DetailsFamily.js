
var i = 0;

$("#add").click(function() {

    ++i;

    $("#dynamicTable").append('<tr><td><input type="text" name="name_fa[]" placeholder="الاسم" class="form-control" /></td><td><input type="date" name="date_of_Birth_fa[]" placeholder="سنة الميلاد" class="datetime1 form-control" /></td><td><input type="text" name="Gender_fa[]" placeholder="الجنس" class="form-control" /></td><td><input type="text" name="marital_status_fa[]" placeholder="الحالة الاجتماعية" class="form-control" /></td><td><input type="text" name="Educational_fa[]" placeholder="المستوى التعليمي" class="form-control" /></td><td><input type="text" name="note_fa[]" placeholder="ملاحظات" class="form-control" /></td><td><button style="" type="button" class="btn btn-outline-danger remove-tr">حذف</button></td></tr>');
});

$(document).on('click', '.remove-tr', function() {
    $(this).parents('tr').remove();
});
var i = 0;

$("#add2").click(function() {

    ++i;

    $("#floorss").append('<tr><td> <center><input type="text" name="properity_name[]" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="properity_details[]" placeholder="" class="form-control" /></center></td><td><center><button style="" type="button" class="btn btn-outline-danger remove-trs">حذف</button></center></td></tr>');
});

$(document).on('click', '.remove-trs', function() {
    $(this).parents('tr').remove();

});
$("#adddept").click(function() {

    ++i;

    $("#floorssz").append('<tr><td> <center><input type="text" name="tpye_debt[]" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="lender[]" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="Debt_value[]" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="method_payment[]" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="value_installment[]" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="reason_religion[]" placeholder="" class="form-control" /></center></td><td><center><button style="" type="button" class="btn btn-outline-danger remove-trsa">حذف</button></center></td></tr>');
});

$(document).on('click', '.remove-trsa', function() {
    $(this).parents('tr').remove();
});
$("#add3").click(function() {

    ++i;

    $("#floorssc").append('<tr><td> <center><input type="text" name="name_health[]" placeholder="" class="form-control" /></center></td><td> <center><input type="radio" name="Believer['+f+']" value="yes" placeholder="" class="form-control" /></center></td><td> <center><input type="radio" value="no" name="Believer['+f+']" placeholder="" class="form-control" /></center></td><td> <center><input type="text" name="details_health[]" placeholder="" class="form-control" /></center></td><td><center><button style="" type="button" class="btn btn-outline-danger remove-trsaz">حذف</button></center></td></tr>');
});

$(document).on('click', '.remove-trsaz', function() {
    $(this).parents('tr').remove();
});

