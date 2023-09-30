function addFloors(actual, target) {
    for (i = actual + 1; i <= target; i++) {

        newItemHTML = '<tr><td ><input name="Name_of_Beneficiary[]" id="Name_of_Beneficiary' + i + '" type="text" placeholder=" الاسم او الصفه" class="form-control" /></td><td><input placeholder="نوع العمل" type="text" name="vocation[]" class="form-control" id="vocation' + i + '"></td><td><input type="text" placeholder="الدخل الشهري" name="total_income[]" class="form-control" id="total_income' + i + '"></td></tr> ';

        $("table#floor  tr").last().after(newItemHTML);
    }
}

function removeFloors(target) {

    if (target >= 3) {
        $('#floor').slice(target).parent().parent().remove();
    }
    if (target == 0) {

        $('#floor  tr td').closest("tr").remove();
    }
}

function addCheckbox(actual, target) {


    for (var i = actual + 1; i <= target; i++) {

        $("table#flooring tr:nth-child(2)").find('td:last-child').after('<td><span class="floorspan">' + i + 'th Floor</span></td>');
        $("table#flooring tr").slice(2).find('td:last-child').after('<td><input value="' + i + '" type="checkbox" class="checkboxfloor materialsfloor' + i + 'th" name="flooring[]"></td>');

    }
    var spans =
        $("table#flooring tr").slice(2).find('td:first-child').find('span');
    var textToAdd = [];
    $.each(spans, function(index, value) {
        textToAdd.push($(value).text());
    });
    for (var i = 0; i < spans.length; i++) {

        var checks = $("input[value=" + (i + 5) + "]");
        $.each(checks, function(index, value) {

            $(value).attr('value', (i + 5) + 'th Floor ' + textToAdd[index]);
        });

    }

}

function removeCheckbox(target) {
    if (target >= 4) {
        $("table#flooring tr").find('td:eq(' + target + ')').nextAll().remove();

    } else {
        $("table#flooring tr").find('td:nth-child(5)').nextAll().remove();

    }
}
$("#nostorey").bind('change', function() {
    curVal = $.trim($(this).val()).match(/^\d*$/);


    curFloors = $('.floor').length;
    var numberNotChecked = curVal;
    if (curVal > curFloors) {
        addFloors(curFloors, curVal);
    } else if (curVal <= curFloors) {
        removeFloors(curVal);
    }
    if (numberNotChecked > curFloors) {
        addCheckbox(curFloors, numberNotChecked);
        //addMaterial(curFloors);
    } else if (numberNotChecked < curFloors) {
        //removeFloors(curVal);
        removeCheckbox(numberNotChecked);
    }

    $('.floor').each(function(index) {
        if (index >= curVal) {
            $(this).prop('disabled', true);
        } else {
            $(this).prop('disabled', false);
        }
    });

});




function getAmount(){

    var social_income = $('#social_income').val();
    var ministry_income = $('#ministry_income').val();
    var charity_income = $('#charity_income').val();
    var charities_income = $('#charities_income').val();
    var hospice_income = $('#hospice_income').val();
    var relatives_Aid = $('#relatives_Aid').val();
    var total = $('#total_income_help');
    total=parseFloat(social_income)+parseFloat(ministry_income)+parseFloat(charity_income)+parseFloat(charities_income)+parseFloat(hospice_income)+parseFloat(relatives_Aid);
    $('#total_income_help').val(total);
    $('.total_income_help').text('المجموع: '+total+'');
}