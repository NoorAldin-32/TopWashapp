$(document).ready(function (e) {

    $(document).on('submit', '#male_form', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store/male',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {

                if (pathname == '/create') {


                    window.location.href = '../report';
                } else {
                    window.location.reload();
                }


            },
            error: function (xhr, errors, message) {

                if (xhr.responseJSON.message == 'The given data was invalid.') {
                    Swal.fire(
                        '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                        'لم تتم العملية!',
                        'error'
                    )
                } 
                //   if (xhr.responseJSON.wifes == 'The wifes has already been taken.') {
                //     Swal.fire(
                //         '!يوجد ملف لهذه العائلة',
                //         'لم تتم العملية!',
                //         'error'
                //     )
                // } 
                 if (xhr.responseJSON.firs == 'The name has already been taken.') {

                   Swal.fire(
                        '!هذا الاسم موجود',
                        'لم تتم العملية!',
                        'error'
                    )


                } else {
                    $('#first_name_validation').html('');

                }
                if (xhr.responseJSON.wifes == 'The wifes has already been taken.') {
                    Swal.fire({
                        title: 'يوجد ملف لهذه العائلة',
                        icon: 'warning',
                        html:'يوجد ملف لهذه العائلة ' +'<a target="_blank" href="/show_by_id/'+xhr.responseJSON.id+'/'+xhr.responseJSON.type+'"><b>'+xhr.responseJSON.names+'</b> </a> '
                        
                      })
                    // Swal.fire(
                    //     'يوجد ملف لهذه العائلة',
                    //     'لم تتم العملية!',
                    //     'error'
                    // )
                }
                if (xhr.responseJSON.errors.first_namem == 'The first namem field is required.') {
                    $('#first_name_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#first_name_validation').html('');

                }
                 
                if (xhr.responseJSON.errors.father_namem == 'The father namem field is required.') {
                    $('#father_namem_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#father_namem_validation').html('');

                }
                if (xhr.responseJSON.errors.income_monthly_m == 'The income monthly m field is required when housing type m is rent.') {

                    $('#income_monthly_mvvv').html('هذا الحقل مطلوب');
                } else {
                    $('#income_monthly_mvvv').html('');

                }
                if (xhr.responseJSON.errors.grandfa_namem == 'The grandfa namem field is required.') {
                    $('#grandfa_namem_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#grandfa_namem_validation').html('');

                }
                if (xhr.responseJSON.errors.family_namem == 'The family namem field is required.') {
                    $('#family_namem_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#family_namem_validation').html('');

                }
                if (xhr.responseJSON.errors.monthm == 'The monthm field is required.') {
                    $('#monthm_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#monthm_validation').html('');

                }
                if (xhr.responseJSON.errors.daym == 'The daym field is required.') {
                    $('#daym_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#daym_validation').html('');

                }
                if (xhr.responseJSON.errors.yearm == 'The yearm field is required.') {
                    $('#yearm_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#yearm_validation').html('');

                } if (xhr.responseJSON.errors.marital_status_m == 'The marital status m field is required.') {
                    $('#marital_status_m_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_m_validation').html('');

                } if (xhr.responseJSON.errors.Address_m == 'The address m field is required.') {
                    $('#Address_m_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#Address_m_validation').html('');

                } if (xhr.responseJSON.errors.nationality_m == 'The nationality m field is required.') {
                    $('#nationality_m_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_m_validation').html('');

                } if (xhr.responseJSON.errors.country_id == 'The country id field is required.') {
                    $('#country_idm_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#country_idm_validation').html('');

                } if (xhr.responseJSON.errors.city == 'The city field is required.') {
                    $('#citym_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#citym_validation').html('');

                }

                if (xhr.responseJSON.errors.num_wife == 'The num wife field is required when marital status m is متزوج.') {
                    $('#num_wife_m_validation').html('هذا الحقل مطلوب');
                    $('#name_wife').html('يرجى اسماء الزوجات');

                } else {
                    $('#num_wife_m_validation').html('');
                    $('#name_wife').html('  ');

                }
                if (xhr.responseJSON.errors.name_wife== 'The name wife.name field is required when marital status m is متزوج.') {
                   
                    $('#name_wife_m_validation').html('يرجى اسماء الزوجات');

                } else {
                 
                    $('#name_wife_m_validation').html('  ');

                }
                if (xhr.responseJSON.errors.school == 'The school field is required when mosque is empty.') {
                    $('#school_m_validation').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#school_m_validation').html('');

                }

                if (xhr.responseJSON.errors.mosque == 'The mosque field is required when mosque is empty.') {
                    $('#mosque_m_validation').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#mosque_m_validation').html('');

                }
                if (xhr.responseJSON.errors.national_number == 'The national number field is required.') {
                    $('#national_number_validation').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.national_number == 'The national number has already been taken.') {
                    $('#national_number_validation').html('الرقم الوطني هذا موجود');
                }else if(xhr.responseJSON.errors.national_number=='The national number must be at least 10 characters.'){
                    $('#national_number_validation').html('الرقم الوطني على الاقل 10 ارقام');
                }
                else {
                    $('#national_number_validation').html('');

                }
                if (xhr.responseJSON.errors.accept == 'The accept field is required.') {
                    $('#accept_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_validation').html('');

                }
                if (xhr.responseJSON.errors.nationality_text == 'The nationality text field is required.') {
                    $('#nationality_text_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_text_validation').html('');

                }
                if (xhr.responseJSON.errors.phone == 'The phone field is required.') {
                    $('#phonem_validation').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.phone == 'The phone has already been taken.') {
                    $('#phonem_validation').html('هذا الرقم موجود');

                }else if (xhr.responseJSON.errors.phone == 'The phone must be at least 10 characters.') {
                    $('#phonem_validation').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                } else {
                    $('#phonem_validation').html('');

                }


            }
        });

    });
   
    $(document).on('submit', '#male_form_people', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store_m_family_status',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {

                window.location.href = '../success';


            },
            error: function (xhr, errors, message) {

                if (xhr.responseJSON.message == 'The given data was invalid.') {
                    Swal.fire(
                        '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                        'لم تتم العملية!',
                        'error'
                    )
                } 
                //   if (xhr.responseJSON.wifes == 'The wifes has already been taken.') {
                //     Swal.fire(
                //         '!يوجد ملف لهذه العائلة',
                //         'لم تتم العملية!',
                //         'error'
                //     )
                // } 
                 if (xhr.responseJSON.firs == 'The name has already been taken.') {

                   Swal.fire(
                        '!هذا الاسم موجود',
                        'لم تتم العملية!',
                        'error'
                    )


                } else {
                    $('#first_name_validation').html('');

                }
                if (xhr.responseJSON.wifes == 'The wifes has already been taken.') {
                    Swal.fire({
                        title: 'يوجد ملف لهذه العائلة',
                        icon: 'warning',
                        html:'يوجد ملف لهذه العائلة '+'<b>'+xhr.responseJSON.names+'</b>'
                        
                      })
                    // Swal.fire(
                    //     'يوجد ملف لهذه العائلة',
                    //     'لم تتم العملية!',
                    //     'error'
                    // )
                }
                if (xhr.responseJSON.errors.first_namem == 'The first namem field is required.') {
                    $('#first_name_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#first_name_validation').html('');

                }
                 
                if (xhr.responseJSON.errors.father_namem == 'The father namem field is required.') {
                    $('#father_namem_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#father_namem_validation').html('');

                }
                if (xhr.responseJSON.errors.income_monthly_m == 'The income monthly m field is required when housing type m is rent.') {

                    $('#income_monthly_mvvv').html('هذا الحقل مطلوب');
                } else {
                    $('#income_monthly_mvvv').html('');

                }
                if (xhr.responseJSON.errors.grandfa_namem == 'The grandfa namem field is required.') {
                    $('#grandfa_namem_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#grandfa_namem_validation').html('');

                }
                if (xhr.responseJSON.errors.family_namem == 'The family namem field is required.') {
                    $('#family_namem_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#family_namem_validation').html('');

                }
                if (xhr.responseJSON.errors.monthm == 'The monthm field is required.') {
                    $('#monthm_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#monthm_validation').html('');

                }
                if (xhr.responseJSON.errors.daym == 'The daym field is required.') {
                    $('#daym_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#daym_validation').html('');

                }
                if (xhr.responseJSON.errors.yearm == 'The yearm field is required.') {
                    $('#yearm_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#yearm_validation').html('');

                } if (xhr.responseJSON.errors.marital_status_m == 'The marital status m field is required.') {
                    $('#marital_status_m_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_m_validation').html('');

                } if (xhr.responseJSON.errors.Address_m == 'The address m field is required.') {
                    $('#Address_m_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#Address_m_validation').html('');

                } if (xhr.responseJSON.errors.nationality_m == 'The nationality m field is required.') {
                    $('#nationality_m_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_m_validation').html('');

                } if (xhr.responseJSON.errors.country_id == 'The country id field is required.') {
                    $('#country_idm_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#country_idm_validation').html('');

                } if (xhr.responseJSON.errors.city == 'The city field is required.') {
                    $('#citym_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#citym_validation').html('');

                }

                if (xhr.responseJSON.errors.num_wife == 'The num wife field is required when marital status m is متزوج.') {
                    $('#num_wife_m_validation').html('هذا الحقل مطلوب');
                    $('#name_wife').html('يرجى اسماء الزوجات');

                } else {
                    $('#num_wife_m_validation').html('');
                    $('#name_wife').html('  ');

                }
                if (xhr.responseJSON.errors.name_wife== 'The name wife.name field is required when marital status m is متزوج.') {
                   
                    $('#name_wife_m_validation').html('يرجى اسماء الزوجات');

                } else {
                 
                    $('#name_wife_m_validation').html('  ');

                }
                if (xhr.responseJSON.errors.school == 'The school field is required when mosque is empty.') {
                    $('#school_m_validation').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#school_m_validation').html('');

                }

                if (xhr.responseJSON.errors.mosque == 'The mosque field is required when mosque is empty.') {
                    $('#mosque_m_validation').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#mosque_m_validation').html('');

                }
                if (xhr.responseJSON.errors.national_number == 'The national number field is required.') {
                    $('#national_number_validation').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.national_number == 'The national number has already been taken.') {
                    $('#national_number_validation').html('الرقم الوطني هذا موجود');
                }else if(xhr.responseJSON.errors.national_number=='The national number must be at least 10 characters.'){
                    $('#national_number_validation').html('الرقم الوطني على الاقل 10 ارقام');
                }
                else {
                    $('#national_number_validation').html('');

                }
                if (xhr.responseJSON.errors.accept == 'The accept field is required.') {
                    $('#accept_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_validation').html('');

                }
                if (xhr.responseJSON.errors.nationality_text == 'The nationality text field is required.') {
                    $('#nationality_text_validation').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_text_validation').html('');

                }
                if (xhr.responseJSON.errors.phone == 'The phone field is required.') {
                    $('#phonem_validation').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.phone == 'The phone has already been taken.') {
                    $('#phonem_validation').html('هذا الرقم موجود');

                }else if (xhr.responseJSON.errors.phone == 'The phone must be at least 10 characters.') {
                    $('#phonem_validation').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                } else {
                    $('#phonem_validation').html('');

                }


            }
        });

    }); 

    $(document).on('submit', '#temporary_form', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store/inforamtion',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {

                if (pathname == '/create') {


                    window.location.href = '../report';
                } else {
                    window.location.reload();
                }


            },
            error: function (xhr, errors, message) {
                Swal.fire(
                    '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                    'لم تتم العملية!',
                    'error'
                )
                if (xhr.responseJSON.firs == 'The name has already been taken.') {

                    Swal.fire(
                         '!هذا الاسم موجود',
                         'لم تتم العملية!',
                         'error'
                     )
 
 
                 } else {
                     $('#first_name_validation').html('');
 
                 }

                if (xhr.responseJSON.errors.citys == 'The citys field is required.') {

                    $('#city_validation').html('هذا الحقل مطلوب');
                } else {
                    $('#city_validation').html('');

                }
                if (xhr.responseJSON.firs == 'The name has already been taken.') {
                    $('#first_name_validation').html('هذا الاسم موجود');


                } else {
                    $('#first_name_validation').html('');

                }
                if (xhr.responseJSON.errors.marital_status_m == 'The marital status m field is required when gender hidden is ذكر.') {

                    $('#marital_status_m').html('هذا الحقل مطلوب');
                } else {
                    $('#marital_status_m').html('');

                }
               if (xhr.responseJSON.errors.marital_status_f == 'The marital status f field is required when gender hidden is انثى.') {

                    $('#marital_status_f').html('هذا الحقل مطلوب');
                } else {
                    $('#marital_status_f').html('');

                }
               
                if (xhr.responseJSON.errors.wife_name == 'The wife name field is required when marital status m is متزوج.') {

                    $('#wife_name_validation').html('هذا الحقل مطلوب');
                } else if (xhr.responseJSON.errors.wife_name == 'The wife name has already been taken.') {
                    $('#wife_name_validation').html('هذه الزوجة لها بيانات');

                } else {
                    $('#wife_name_validation').html('');

                }
                if (xhr.responseJSON.errors.husbend_name == 'The husbend name field is required when marital status f is متزوجة.') {

                    $('#husbend_name_validation').html('هذا الحقل مطلوب');
                } else if (xhr.responseJSON.errors.husbend_name == 'The husbend name has already been taken.') {
                    $('#husbend_name_validation').html('هذه الزوج له بيانات');

                } else {
                    $('#husbend_name_validation').html('');

                }

                if (xhr.responseJSON.errors.country_ids == 'The country ids field is required.') {

                    $('#country_idsvalidation').html('هذا الحقل مطلوب');
                } else {
                    $('#country_idsvalidation').html('');

                }
                if (xhr.responseJSON.errors.full_name == 'The full name has already been taken.') {

                    $('#full_namevalidation').html('هذا الاسم له بيانات');
                } else if (xhr.responseJSON.errors.full_name == 'The full name field is required.') {
                    $('#full_namevalidation').html('هذا الحقل مطلوب');

                } else {


                    $('#full_namevalidation').html('');

                }
                if (xhr.responseJSON.errors.phone == 'The phone field is required.') {
                    $('#phone_validation').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.phone == 'The phone has already been taken.') {
                    $('#phone_validation').html('هذا الرقم موجود');

                }else if (xhr.responseJSON.errors.phone == 'The phone must be at least 10 characters.') {
                    $('#phone_validation').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                } else {
                    $('#phone_validation').html('');

                }


            }
        });

    });



    
    $(document).on('submit', '#female_form', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store/female',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {
                if (pathname == '/create') {


                    window.location.href = '../report';
                } else {
                    window.location.reload();
                }



            },
            error: function (xhr, errors, message) {

                if (xhr.responseJSON.message == 'The given data was invalid.') {
                    Swal.fire(
                        '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                        'لم تتم العملية!',
                        'error'
                    )
                }
                if (xhr.responseJSON.firs == 'The name has already been taken.') {
                    Swal.fire(
                        '!هذا الاسم موجود',
                        'لم تتم العملية!',
                        'error'
                    )


                } else {
                    $('#first_namefv').html('');

                }
                  if (xhr.responseJSON.hubend_name == 'The hubend_name has already been taken.') {
                    Swal.fire({
                        title: 'يوجد ملف لهذه العائلة',
                        icon: 'warning',
                        html:'يوجد ملف لهذه العائلة ' +'<a target="_blank" href="/show_by_id/'+xhr.responseJSON.id+'/'+xhr.responseJSON.type+'"><b>'+xhr.responseJSON.names+'</b> </a> '
                    })
                        
                  


                } else {
                    $('#first_namefv').html('');

                }
                if (xhr.responseJSON.errors.first_namef == 'The first namef field is required.') {
                    $('#first_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#first_namefv').html('');

                }
                
                if (xhr.responseJSON.errors.father_namef == 'The father namef field is required.') {
                    $('#father_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#father_namefv').html('');

                }
                if (xhr.responseJSON.errors.grandfa_namef == 'The grandfa namef field is required.') {
                    $('#grandfa_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#grandfa_namefv').html('');

                }
                if (xhr.responseJSON.errors.income_monthly_f == 'The income monthly f field is required when housing type f is rent.') {

                    $('#income_monthly_fvvv').html('هذا الحقل مطلوب');
                } else {
                    $('#income_monthly_fvvv').html('');

                }
                if (xhr.responseJSON.errors.family_namef == 'The family namef field is required.') {
                    $('#family_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#family_namefv').html('');

                }
                if (xhr.responseJSON.errors.monthf == 'The monthf field is required.') {
                    $('#monthfv').html('هذا الحقل مطلوب');


                } else {
                    $('#monthfv').html('');

                }
                if (xhr.responseJSON.errors.dayf == 'The dayf field is required.') {
                    $('#dayfv').html('هذا الحقل مطلوب');


                } else {
                    $('#dayfv').html('');

                }
                if (xhr.responseJSON.errors.yearf == 'The yearf field is required.') {
                    $('#yearfv').html('هذا الحقل مطلوب');


                } else {
                    $('#yearfv').html('');

                } if (xhr.responseJSON.errors.marital_status_f == 'The marital status f field is required.') {
                    $('#marital_status_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_fv').html('');

                } if (xhr.responseJSON.errors.Address_f == 'The address f field is required.') {
                    $('#Address_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#Address_fv').html('');

                } if (xhr.responseJSON.errors.nationality_f == 'The nationality f field is required.') {
                    $('#nationality_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_fv').html('');

                } if (xhr.responseJSON.errors.country_id_f == 'The country id f field is required.') {
                    $('#country_id_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#country_id_fv').html('');

                } if (xhr.responseJSON.errors.city_f == 'The city f field is required.') {
                    $('#city_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#city_fv').html('');

                }

                if (xhr.responseJSON.errors.widow) {
                    $('#widowv').html('هذا الحقل مطلوب');


                } else {
                    $('#widowv').html('');
                    $

                }
                if (xhr.responseJSON.errors.widow_num == 'The widow num field is required when widow is yes.') {
                    $('#widow_numv').html('هذا الحقل مطلوب');


                } else {
                    $('#widow_numv').html('');
                    $

                }
                if (xhr.responseJSON.errors.school == 'The school field is required when mosque is empty.') {
                    $('#schoolv').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#schoolv').html('');

                }

                if (xhr.responseJSON.errors.mosque == 'The mosque field is required when mosque is empty.') {
                    $('#mosquev').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#mosquev').html('');

                }
                if (xhr.responseJSON.errors.national_number == 'The national number field is required.') {
                    $('#national_numberv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.national_number == 'The national number has already been taken.') {
                    $('#national_numberv').html('الرقم الوطني هذا موجود');
                }else if(xhr.responseJSON.errors.national_number=='The national number must be at least 10 characters.'){
                    $('#national_numberv').html('الرقم الوطني على الاقل 10 ارقام');
                }

                else {
                    $('#national_numberv').html('');

                }
                if (xhr.responseJSON.errors.accept_f == 'The accept f field is required.') {
                    $('#accept_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_fv').html('');

                }
                if (xhr.responseJSON.errors.nationality_text == 'The nationality text field is required.') {
                    $('#nationality_textv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_textv').html('');

                }
                if (xhr.responseJSON.errors.phone_f == 'The phone f field is required.') {
                    $('#phone_fv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.phone_f == 'The phone f has already been taken.') {
                    $('#phone_fv').html('هذا الرقم موجود');

                }else if (xhr.responseJSON.errors.phone_f == 'The phone f must be at least 10 characters.') {
                    $('#phone_fv').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                }
                 else {
                    $('#phone_fv').html('');

                }

            }
        });

    });
 $(document).on('submit', '#store_f_family_status', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store_f_family_status',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {
                window.location.href = '../success';



            },
            error: function (xhr, errors, message) {

                if (xhr.responseJSON.message == 'The given data was invalid.') {
                    Swal.fire(
                        '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                        'لم تتم العملية!',
                        'error'
                    )
                }
                if (xhr.responseJSON.firs == 'The name has already been taken.') {
                    Swal.fire(
                        '!هذا الاسم موجود',
                        'لم تتم العملية!',
                        'error'
                    )


                } else {
                    $('#first_namefv').html('');

                }
                  if (xhr.responseJSON.hubend_name == 'The hubend_name has already been taken.') {
                    Swal.fire({
                        title: 'يوجد ملف لهذه العائلة',
                        icon: 'warning',
                        html:'يوجد ملف لهذه العائلة '+'<b>'+xhr.responseJSON.names+'</b>'
                    })
                        
                  


                } else {
                    $('#first_namefv').html('');

                }
                if (xhr.responseJSON.errors.first_namef == 'The first namef field is required.') {
                    $('#first_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#first_namefv').html('');

                }
                
                if (xhr.responseJSON.errors.father_namef == 'The father namef field is required.') {
                    $('#father_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#father_namefv').html('');

                }
                if (xhr.responseJSON.errors.grandfa_namef == 'The grandfa namef field is required.') {
                    $('#grandfa_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#grandfa_namefv').html('');

                }
                if (xhr.responseJSON.errors.income_monthly_f == 'The income monthly f field is required when housing type f is rent.') {

                    $('#income_monthly_fvvv').html('هذا الحقل مطلوب');
                } else {
                    $('#income_monthly_fvvv').html('');

                }
                if (xhr.responseJSON.errors.family_namef == 'The family namef field is required.') {
                    $('#family_namefv').html('هذا الحقل مطلوب');


                } else {
                    $('#family_namefv').html('');

                }
                if (xhr.responseJSON.errors.monthf == 'The monthf field is required.') {
                    $('#monthfv').html('هذا الحقل مطلوب');


                } else {
                    $('#monthfv').html('');

                }
                if (xhr.responseJSON.errors.dayf == 'The dayf field is required.') {
                    $('#dayfv').html('هذا الحقل مطلوب');


                } else {
                    $('#dayfv').html('');

                }
                if (xhr.responseJSON.errors.yearf == 'The yearf field is required.') {
                    $('#yearfv').html('هذا الحقل مطلوب');


                } else {
                    $('#yearfv').html('');

                } if (xhr.responseJSON.errors.marital_status_f == 'The marital status f field is required.') {
                    $('#marital_status_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_fv').html('');

                } if (xhr.responseJSON.errors.Address_f == 'The address f field is required.') {
                    $('#Address_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#Address_fv').html('');

                } if (xhr.responseJSON.errors.nationality_f == 'The nationality f field is required.') {
                    $('#nationality_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_fv').html('');

                } if (xhr.responseJSON.errors.country_id_f == 'The country id f field is required.') {
                    $('#country_id_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#country_id_fv').html('');

                } if (xhr.responseJSON.errors.city_f == 'The city f field is required.') {
                    $('#city_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#city_fv').html('');

                }

                if (xhr.responseJSON.errors.widow) {
                    $('#widowv').html('هذا الحقل مطلوب');


                } else {
                    $('#widowv').html('');
                    $

                }
                if (xhr.responseJSON.errors.widow_num == 'The widow num field is required when widow is yes.') {
                    $('#widow_numv').html('هذا الحقل مطلوب');


                } else {
                    $('#widow_numv').html('');
                    $

                }
                if (xhr.responseJSON.errors.school == 'The school field is required when mosque is empty.') {
                    $('#schoolv').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#schoolv').html('');

                }

                if (xhr.responseJSON.errors.mosque == 'The mosque field is required when mosque is empty.') {
                    $('#mosquev').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#mosquev').html('');

                }
                if (xhr.responseJSON.errors.national_number == 'The national number field is required.') {
                    $('#national_numberv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.national_number == 'The national number has already been taken.') {
                    $('#national_numberv').html('الرقم الوطني هذا موجود');
                }else if(xhr.responseJSON.errors.national_number=='The national number must be at least 10 characters.'){
                    $('#national_numberv').html('الرقم الوطني على الاقل 10 ارقام');
                }

                else {
                    $('#national_numberv').html('');

                }
                if (xhr.responseJSON.errors.accept_f == 'The accept f field is required.') {
                    $('#accept_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_fv').html('');

                }
                if (xhr.responseJSON.errors.nationality_text == 'The nationality text field is required.') {
                    $('#nationality_textv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_textv').html('');

                }
                if (xhr.responseJSON.errors.phone_f == 'The phone f field is required.') {
                    $('#phone_fv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.phone_f == 'The phone f has already been taken.') {
                    $('#phone_fv').html('هذا الرقم موجود');

                }else if (xhr.responseJSON.errors.phone_f == 'The phone f must be at least 10 characters.') {
                    $('#phone_fv').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                }
                 else {
                    $('#phone_fv').html('');

                }

            }
        });

    });

    $(document).on('submit', '#form_std', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {
                Swal.fire(
                    '!تمت العملية',
                    ' تمت العملية!',
                    'success'
                )
                if (pathname == '/create') {


                    window.location.href = '../report';
                } else {
                    window.location.reload();
                }



            },
            error: function (xhr, errors, message) {
                if (xhr.responseJSON.message == 'The given data was invalid.') {
                    Swal.fire(
                        '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                        'لم تتم العملية!',
                        'error'
                    )
                }
                if (xhr.responseJSON.firs == 'The name has already been taken.') {
                    Swal.fire(
                        '!هذا الاسم موجود',
                        'لم تتم العملية!',
                        'error'
                    )


                } else {
                    $('#first_namev').html('');

                }
                if (xhr.responseJSON.errors.first_name == 'The first name field is required.') {
                    $('#first_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#first_namev').html('');

                }
                if (xhr.responseJSON.errors.father_name == 'The father name field is required.') {
                    $('#father_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#father_namev').html('');

                }
               
                if (xhr.responseJSON.errors.grandfa_name == 'The grandfa name field is required.') {
                    $('#grandfa_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#grandfa_namev').html('');

                }
                if (xhr.responseJSON.errors.income_monthly == 'The income monthly field is required when housing type s is rent.') {

                    $('#income_monthly_v').html('هذا الحقل مطلوب');
                } else {
                    $('#income_monthly_v').html('');

                }
                if (xhr.responseJSON.errors.family_name == 'The family name field is required.') {
                    $('#family_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#family_namev').html('');

                }
                if (xhr.responseJSON.errors.month == 'The month field is required.') {
                    $('#monthv').html('هذا الحقل مطلوب');


                } else {
                    $('#monthv').html('');

                }
                if (xhr.responseJSON.errors.day == 'The day field is required.') {
                    $('#dayv').html('هذا الحقل مطلوب');


                } else {
                    $('#dayv').html('');

                }
                if (xhr.responseJSON.errors.year == 'The year field is required.') {
                    $('#yearv').html('هذا الحقل مطلوب');


                } else {
                    $('#yearv').html('');

                } if (xhr.responseJSON.errors.marital_status_s == 'The marital status s field is required when gender s is ذكر.') {
                    $('#marital_status_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_sv').html('');

                }

                if (xhr.responseJSON.errors.marital_status_f == 'The marital status f field is required when gender s is انثى.') {
                    $('#marital_status_fvvv').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_fvvv').html('');

                }
                if (xhr.responseJSON.errors.Address_m == 'The address m field is required.') {
                    $('#Address_mv').html('هذا الحقل مطلوب');


                } else {
                    $('#Address_mv').html('');

                } if (xhr.responseJSON.errors.nationality_m == 'The nationality m field is required.') {
                    $('#nationality_mv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_mv').html('');

                } if (xhr.responseJSON.errors.country_ids == 'The country ids field is required.') {
                    $('#country_idsv').html('هذا الحقل مطلوب');


                } else {
                    $('#country_idsv').html('');

                } if (xhr.responseJSON.errors.citys == 'The citys field is required.') {
                    $('#citysv').html('هذا الحقل مطلوب');


                } else {
                    $('#citysv').html('');

                }

                if (xhr.responseJSON.errors.widow == 'The widow field is required when marital status f is ارملة.') {
                    $('#widowv').html('هذا الحقل مطلوب');


                } else {
                    $('#widowv').html('');
                    $

                }
                if (xhr.responseJSON.errors.widow_num == 'The widow num field is required when widow is yes.') {
                    $('#widow_numv').html('هذا الحقل مطلوب');


                } else {
                    $('#widow_numv').html('');
                    $

                }
                if (xhr.responseJSON.errors.school == 'The school field is required when mosque is empty.') {
                    $('#vvsschoolv').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#vvschoolv').html('');

                }

                if (xhr.responseJSON.errors.mosque == 'The mosque field is required when school is empty.') {
                    $('#vvosquev').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#vvosquev').html('');

                }
                if (xhr.responseJSON.errors.national_number_s == 'The national number s field is required.') {
                    $('#national_number_sv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.national_number_s == 'The national number s has already been taken.') {
                    $('#national_number_sv').html('الرقم الوطني هذا موجود');
                }else if(xhr.responseJSON.errors.national_number_s=='The national number s must be at least 10 characters.'){
                    $('#national_number_sv').html('الرقم الوطني على الاقل 10 ارقام');
                }

                else {
                    $('#national_number_sv').html('');

                }
                if (xhr.responseJSON.errors.accept_f == 'The accept f field is required.') {
                    $('#accept_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_fv').html('');

                }
                if (xhr.responseJSON.errors.Educational_s == 'The educational s field is required.') {
                    $('#Educational_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#Educational_sv').html('');

                }
                if (xhr.responseJSON.errors.semester == 'The semester field is required when educational s is بكالوريوس.') {
                    $('#semesterv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.semester == 'The semester field is required when educational s is دبلوم.') {
                    $('#semesterv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.semester == 'The semester field is required when educational s is دكتوراه.') {
                    $('#semesterv').html('هذا الحقل مطلوب');


                }else {
                    $('#semesterv').html('');

                }
                if (xhr.responseJSON.errors.scholarship_s == 'The scholarship s field is required when educational s is بكالوريوس.') {
                    $('#scholarship_sv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.scholarship_s == 'The scholarship s field is required when educational s is دبلوم.') {
                    $('#scholarship_sv').html('هذا الحقل مطلوب');


                }else if (xhr.responseJSON.errors.scholarship_s == 'The scholarship s field is required when educational s is دكتوراه.') {
                    $('#scholarship_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#scholarship_sv').html('');

                }
                if (xhr.responseJSON.errors.year_study == 'The year study field is required when educational s is بكالوريوس.') {
                    $('#year_studyvvvv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.year_study == 'The year study field is required when educational s is دبلوم.') {
                } else if (xhr.responseJSON.errors.year_study == 'The year study field is required when educational s is دكتوراه.') {
                } else {
                    $('#year_studyvvvv').html('');

                }
                if (xhr.responseJSON.errors.university_s == 'The university s field is required when educational s is بكالوريوس.') {
                    $('#university_svvvv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.university_s == 'The university s field is required when educational s is دبلوم.') {

                } else if (xhr.responseJSON.errors.university_s == 'The university s field is required when educational s is دكتوراه.') {

                }else {
                    $('#university_svvvv').html('');

                }
                if (xhr.responseJSON.errors.specialization == 'The specialization field is required when educational s is بكالوريوس.') {
                    $('#specializationv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.specialization == 'The specialization field is required when educational s is دبلوم.') {
                    $('#specializationv').html('هذا الحقل مطلوب');
                }else if (xhr.responseJSON.errors.specialization == 'The specialization field is required when educational s is دكتوراه.') {
                    $('#specializationv').html('هذا الحقل مطلوب');
                }
                else {
                    $('#specializationv').html('');

                }

                if (xhr.responseJSON.errors.social_photo == 'The social photo field is required when educational s is بكالوريوس.') {
                    $('#social_photov').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.social_photo == 'The social photo field is required when educational s is دبلوم.') {
                    $('#social_photov').html('هذا الحقل مطلوب');
                }else if (xhr.responseJSON.errors.social_photo == 'The social photo field is required when educational s is دكتوراه.') {
                    $('#social_photov').html('هذا الحقل مطلوب');
                }
                else if (xhr.responseJSON.errors.social_photo == 'The social photo must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#social_photov').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');
                }
                else {
                    $('#social_photov').html('');

                }
                if (xhr.responseJSON.errors.Transcript == 'The transcript field is required when educational s is بكالوريوس.') {
                    $('#Transcriptv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.Transcript == 'The transcript field is required when educational s is دبلوم.') {
                    $('#Transcriptv').html('هذا الحقل مطلوب');
                } else if (xhr.responseJSON.errors.Transcript == 'The transcript field is required when educational s is دكتوراه.') {
                    $('#Transcriptv').html('هذا الحقل مطلوب');
                } else if (xhr.responseJSON.errors.Transcript == 'The transcript must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#Transcriptv').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');
                }
                else {
                    $('#Transcriptv').html('');

                }
                if (xhr.responseJSON.errors.nationality_text == 'The nationality text field is required.') {
                    $('#nationality_textvvvvv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_textvvvvv').html('');

                }
                if (xhr.responseJSON.errors.phone_s == 'The phone s field is required.') {
                    $('#phone_sv').html('هذا الحقل مطلوب');


                }
                else if (xhr.responseJSON.errors.phone_s == 'The phone s must be at least 10 characters.') {
                    $('#phone_sv').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                } else if (xhr.responseJSON.errors.phone_s == 'The phone s has already been taken.') {
                    $('#phone_sv').html('هذا الرقم موجود');

                } else {
                    $('#phone_sv').html('');

                }
                if (xhr.responseJSON.errors.accept_s == 'The accept s field is required.') {
                    $('#accept_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_sv').html('');

                }
                if (xhr.responseJSON.errors.id_photo == 'The id photo field is required.') {
                    $('#id_photov').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.id_photo == 'The id photo must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#id_photov').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');

                } else {
                    $('#id_photov').html('');

                }
                if (xhr.responseJSON.errors.Tawjihi == 'The tawjihi field is required when educational s is توجيهي.') {
                    $('#Tawjihiv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.Tawjihi == 'The tawjihi must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#Tawjihiv').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');

                } else {
                    $('#Tawjihiv').html('');

                }

                if (xhr.responseJSON.errors.GPA_s == 'The g p a s field is required when educational s is توجيهي.') {
                    $('#GPA_sv').html('هذا الحقل مطلوب');



                } else {
                    $('#GPA_sv').html('');

                }























            }
        });

    });


    $(document).on('submit', '#store_std_people', function (e) {
        var pathname = window.location.pathname; // Returns path only (/path/example.html)

        e.preventDefault();
        var form = this;
        console.log(form);

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            url: '/store_std_people',
            data: new FormData(form),
            cache: false,
            dataType: 'json',
            contentType: false,
            processData: false,

            success: function (jqXHR, message) {
                Swal.fire(
                    '!تمت العملية',
                    ' تمت العملية!',
                    'success'
                )
             
                    window.location.href = '../success';
             



            },
            error: function (xhr, errors, message) {
                if (xhr.responseJSON.message == 'The given data was invalid.') {
                    Swal.fire(
                        '!الرجاء ادخال كافة الحقول المطلوبة بالشكل الصحيح',
                        'لم تتم العملية!',
                        'error'
                    )
                }
                if (xhr.responseJSON.firs == 'The name has already been taken.') {
                    Swal.fire(
                        '!هذا الاسم موجود',
                        'لم تتم العملية!',
                        'error'
                    )


                } else {
                    $('#first_namev').html('');

                }
                if (xhr.responseJSON.errors.first_name == 'The first name field is required.') {
                    $('#first_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#first_namev').html('');

                }
                if (xhr.responseJSON.errors.father_name == 'The father name field is required.') {
                    $('#father_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#father_namev').html('');

                }
               
                if (xhr.responseJSON.errors.grandfa_name == 'The grandfa name field is required.') {
                    $('#grandfa_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#grandfa_namev').html('');

                }
                if (xhr.responseJSON.errors.income_monthly == 'The income monthly field is required when housing type s is rent.') {

                    $('#income_monthly_v').html('هذا الحقل مطلوب');
                } else {
                    $('#income_monthly_v').html('');

                }
                if (xhr.responseJSON.errors.family_name == 'The family name field is required.') {
                    $('#family_namev').html('هذا الحقل مطلوب');


                } else {
                    $('#family_namev').html('');

                }
                if (xhr.responseJSON.errors.month == 'The month field is required.') {
                    $('#monthv').html('هذا الحقل مطلوب');


                } else {
                    $('#monthv').html('');

                }
                if (xhr.responseJSON.errors.day == 'The day field is required.') {
                    $('#dayv').html('هذا الحقل مطلوب');


                } else {
                    $('#dayv').html('');

                }
                if (xhr.responseJSON.errors.year == 'The year field is required.') {
                    $('#yearv').html('هذا الحقل مطلوب');


                } else {
                    $('#yearv').html('');

                } if (xhr.responseJSON.errors.marital_status_s == 'The marital status s field is required when gender s is ذكر.') {
                    $('#marital_status_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_sv').html('');

                }

                if (xhr.responseJSON.errors.marital_status_f == 'The marital status f field is required when gender s is انثى.') {
                    $('#marital_status_fvvv').html('هذا الحقل مطلوب');


                } else {
                    $('#marital_status_fvvv').html('');

                }
                if (xhr.responseJSON.errors.Address_m == 'The address m field is required.') {
                    $('#Address_mv').html('هذا الحقل مطلوب');


                } else {
                    $('#Address_mv').html('');

                } if (xhr.responseJSON.errors.nationality_m == 'The nationality m field is required.') {
                    $('#nationality_mv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_mv').html('');

                } if (xhr.responseJSON.errors.country_ids == 'The country ids field is required.') {
                    $('#country_idsv').html('هذا الحقل مطلوب');


                } else {
                    $('#country_idsv').html('');

                } if (xhr.responseJSON.errors.citys == 'The citys field is required.') {
                    $('#citysv').html('هذا الحقل مطلوب');


                } else {
                    $('#citysv').html('');

                }

                if (xhr.responseJSON.errors.widow == 'The widow field is required when marital status f is ارملة.') {
                    $('#widowv').html('هذا الحقل مطلوب');


                } else {
                    $('#widowv').html('');
                    $

                }
                if (xhr.responseJSON.errors.widow_num == 'The widow num field is required when widow is yes.') {
                    $('#widow_numv').html('هذا الحقل مطلوب');


                } else {
                    $('#widow_numv').html('');
                    $

                }
                if (xhr.responseJSON.errors.school == 'The school field is required when mosque is empty.') {
                    $('#vvsschoolv').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#vvschoolv').html('');

                }

                if (xhr.responseJSON.errors.mosque == 'The mosque field is required when school is empty.') {
                    $('#vvosquev').html('يرجى ادخال واحد من هذه العناصر');


                } else {
                    $('#vvosquev').html('');

                }
                if (xhr.responseJSON.errors.national_number_s == 'The national number s field is required.') {
                    $('#national_number_sv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.national_number_s == 'The national number s has already been taken.') {
                    $('#national_number_sv').html('الرقم الوطني هذا موجود');
                }else if(xhr.responseJSON.errors.national_number_s=='The national number s must be at least 10 characters.'){
                    $('#national_number_sv').html('الرقم الوطني على الاقل 10 ارقام');
                }

                else {
                    $('#national_number_sv').html('');

                }
                if (xhr.responseJSON.errors.accept_f == 'The accept f field is required.') {
                    $('#accept_fv').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_fv').html('');

                }
                if (xhr.responseJSON.errors.Educational_s == 'The educational s field is required.') {
                    $('#Educational_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#Educational_sv').html('');

                }
                if (xhr.responseJSON.errors.semester == 'The semester field is required when educational s is بكالوريوس.') {
                    $('#semesterv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.semester == 'The semester field is required when educational s is دبلوم.') {
                    $('#semesterv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.semester == 'The semester field is required when educational s is دكتوراه.') {
                    $('#semesterv').html('هذا الحقل مطلوب');


                }else {
                    $('#semesterv').html('');

                }
                if (xhr.responseJSON.errors.scholarship_s == 'The scholarship s field is required when educational s is بكالوريوس.') {
                    $('#scholarship_sv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.scholarship_s == 'The scholarship s field is required when educational s is دبلوم.') {
                    $('#scholarship_sv').html('هذا الحقل مطلوب');


                }else if (xhr.responseJSON.errors.scholarship_s == 'The scholarship s field is required when educational s is دكتوراه.') {
                    $('#scholarship_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#scholarship_sv').html('');

                }
                if (xhr.responseJSON.errors.year_study == 'The year study field is required when educational s is بكالوريوس.') {
                    $('#year_studyvvvv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.year_study == 'The year study field is required when educational s is دبلوم.') {
                } else if (xhr.responseJSON.errors.year_study == 'The year study field is required when educational s is دكتوراه.') {
                } else {
                    $('#year_studyvvvv').html('');

                }
                if (xhr.responseJSON.errors.university_s == 'The university s field is required when educational s is بكالوريوس.') {
                    $('#university_svvvv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.university_s == 'The university s field is required when educational s is دبلوم.') {

                } else if (xhr.responseJSON.errors.university_s == 'The university s field is required when educational s is دكتوراه.') {

                }else {
                    $('#university_svvvv').html('');

                }
                if (xhr.responseJSON.errors.specialization == 'The specialization field is required when educational s is بكالوريوس.') {
                    $('#specializationv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.specialization == 'The specialization field is required when educational s is دبلوم.') {
                    $('#specializationv').html('هذا الحقل مطلوب');
                }else if (xhr.responseJSON.errors.specialization == 'The specialization field is required when educational s is دكتوراه.') {
                    $('#specializationv').html('هذا الحقل مطلوب');
                }
                else {
                    $('#specializationv').html('');

                }

                if (xhr.responseJSON.errors.social_photo == 'The social photo field is required when educational s is بكالوريوس.') {
                    $('#social_photov').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.social_photo == 'The social photo field is required when educational s is دبلوم.') {
                    $('#social_photov').html('هذا الحقل مطلوب');
                }else if (xhr.responseJSON.errors.social_photo == 'The social photo field is required when educational s is دكتوراه.') {
                    $('#social_photov').html('هذا الحقل مطلوب');
                }
                else if (xhr.responseJSON.errors.social_photo == 'The social photo must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#social_photov').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');
                }
                else {
                    $('#social_photov').html('');

                }
                if (xhr.responseJSON.errors.Transcript == 'The transcript field is required when educational s is بكالوريوس.') {
                    $('#Transcriptv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.Transcript == 'The transcript field is required when educational s is دبلوم.') {
                    $('#Transcriptv').html('هذا الحقل مطلوب');
                } else if (xhr.responseJSON.errors.Transcript == 'The transcript field is required when educational s is دكتوراه.') {
                    $('#Transcriptv').html('هذا الحقل مطلوب');
                } else if (xhr.responseJSON.errors.Transcript == 'The transcript must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#Transcriptv').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');
                }
                else {
                    $('#Transcriptv').html('');

                }
                if (xhr.responseJSON.errors.nationality_text == 'The nationality text field is required.') {
                    $('#nationality_textvvvvv').html('هذا الحقل مطلوب');


                } else {
                    $('#nationality_textvvvvv').html('');

                }
                if (xhr.responseJSON.errors.phone_s == 'The phone s field is required.') {
                    $('#phone_sv').html('هذا الحقل مطلوب');


                }
                else if (xhr.responseJSON.errors.phone_s == 'The phone s must be at least 10 characters.') {
                    $('#phone_sv').html('يجب ان يكون رقم الهاتف 10 ارقام على الاقل');

                } else if (xhr.responseJSON.errors.phone_s == 'The phone s has already been taken.') {
                    $('#phone_sv').html('هذا الرقم موجود');

                } else {
                    $('#phone_sv').html('');

                }
                if (xhr.responseJSON.errors.accept_s == 'The accept s field is required.') {
                    $('#accept_sv').html('هذا الحقل مطلوب');


                } else {
                    $('#accept_sv').html('');

                }
                if (xhr.responseJSON.errors.id_photo == 'The id photo field is required.') {
                    $('#id_photov').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.id_photo == 'The id photo must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#id_photov').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');

                } else {
                    $('#id_photov').html('');

                }
                if (xhr.responseJSON.errors.Tawjihi == 'The tawjihi field is required when educational s is توجيهي.') {
                    $('#Tawjihiv').html('هذا الحقل مطلوب');


                } else if (xhr.responseJSON.errors.Tawjihi == 'The tawjihi must be a file of type: pdf, jpeg, png, jpg.') {
                    $('#Tawjihiv').html(' pdf, jpeg, png, jpg يجب ان يكون امتداد الملف ');

                } else {
                    $('#Tawjihiv').html('');

                }

                if (xhr.responseJSON.errors.GPA_s == 'The g p a s field is required when educational s is توجيهي.') {
                    $('#GPA_sv').html('هذا الحقل مطلوب');



                } else {
                    $('#GPA_sv').html('');

                }























            }
        });

    });




});