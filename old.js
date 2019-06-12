
function findName() {
    var college = document.getElementById("enterName").value;
    console.log(college);
    var newCollege = college.replace(/ /g,"%20");

    college = newCollege;

   console.log(college)

    callAPI(college);



}


function callAPI(name) {

    var url = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" + name + "&api_key=KniAWDtPbcerAc3LMiM7qm72GGsKiopSJhSr6LoR";

    console.log(url);

    $.ajax({

        url: url,
        dataType: 'json',
        success: findSat
    });



}


function findSat(hi){

    console.log(hi);

    var sat = hi.results[0];

    var sat2 = sat[2017];

    var sat3 = sat2.admissions.sat_scores.average.overall;

    console.log(sat3);

    document.getElementById("satscores").innerHTML = sat3;



    console.log(hi);

    var low = hi.results[0];

    var low2 = low[2017];

    var low3 = low2.admissions.sat_scores;

    var low4 = low3[25 + "th_percentile"];

    var low5 = low4.critical_reading;

    var low6 = low4.math;

    var low7 = low5 + low6;

    console.log(low7);

    document.getElementById("25percent").innerHTML = low7;


    console.log(hi);

    var high = hi.results[0];

    var high2 = high[2017];

    var high3 = high2.admissions.sat_scores;

    var high4 = high3[75 + "th_percentile"];

    var high5 = high4.critical_reading;

    var high6 = high4.math;

    var high7 = high5 + high6;

    console.log(high7);

    document.getElementById("75percent").innerHTML = high7;



    var act = hi.results[0];

    var act2 = act[2017];

    var act3 = act2.admissions.act_scores.midpoint.cumulative;

    console.log(act3);

    document.getElementById("actscores").innerHTML = act3;


    var lowAct = hi.results[0];

    var lowAct2 = lowAct[2017];

    var lowAct3 = lowAct2.admissions.act_scores;

    var lowAct4 = lowAct3[25 + "th_percentile"];

    var lowAct5 = lowAct4.cumulative;

    console.log(lowAct5);

    document.getElementById("25act").innerHTML = lowAct5;


    var highAct = hi.results[0];

    var highAct2 = highAct[2017];

    var highAct3 = highAct2.admissions.act_scores;

    var highAct4 = highAct3[75 + "th_percentile"];

    var highAct5 = highAct4.cumulative;

    console.log(highAct5);

    document.getElementById("75act").innerHTML = highAct5;


    var adm = hi.results[0];

    var adm2 = adm[2017];

    var adm3 = adm2.admissions.admission_rate.overall;

    adm3 = adm3 * 100;

    console.log(adm3 + "%");

    document.getElementById("acceptance").innerHTML = adm3 + "%";


    var acc = hi.results[0];

    var acc2 = acc[2017];

    var acc3 = acc2.cost.attendance.academic_year;

    console.log(acc3);

    document.getElementById("attendance").innerHTML = acc3;



    var stu = hi. results[0]

    var stu2 = stu[2017];

    var stu3 = stu2.student.size;

    console.log(stu3);

    document.getElementById("undergraduate").innerHTML = stu3;


    var ins = hi.results[0]

    var ins2 = ins[2017];

    var ins3 = ins2.cost.tuition.in_state;

    console.log(ins3);

    document.getElementById("inState").innerHTML = ins3;


    var out = hi.results[0]

    var out2 = out[2017];

    var out3 = out2.cost.tuition.out_of_state;

    console.log(out3);

    document.getElementById("outState").innerHTML = out3;


    var inc = hi.results[0]

    var inc2 = inc[2016];

    var inc3 = inc2.student.demographics.avg_family_income;

    console.log(inc3);

    document.getElementById("income").innerHTML = inc3;




}

// function start(size){
//     //var size = document.getElementById("schoolSize").value;
//     //var area = document.getElementById("surroundingArea").value;
//     //var correct = calculateResults(size);
//
//
//
//
//
//     document.getElementById("imageTwo").src = images[area];
//
// }


// function calculateResults(size, area){
//     if(size == 0){
//         return 0;
//     }
//     if(size == 1){
//         return 1
//     }
//     if(size == 2){
//         return 2;
//     }
//     if(area == 3){
//         return 3
//     }
//     if(area == 4){
//         return 4
//     }
//     if(area == 5){
//         return 5
//     }
//
//
// }
//
