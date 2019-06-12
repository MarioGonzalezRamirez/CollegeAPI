var globalSat = [];
var globalAct = [];

var times = 0;


function findName() {

    globalAct = [];
    globalSat = [];

    times++;


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


function findSat(hi) {



    var year = document.getElementById("years").value;

    for(var i=2001; i < 2018; i++){

    var sat = hi.results[0];

    var sat2 = sat[i];

    var sat3 = sat2.admissions.sat_scores.average.overall;

    globalSat.push(sat3);

    }

    for(var i = 2001; i < 2018; i++){

        var act = hi.results[0];

        var act2 = act[i];

        var act3 = act2.admissions.act_scores.midpoint.cumulative;

        globalAct.push(act3);

    }

    console.log(hi);

    var sat = hi.results[0];

    var sat2 = sat[year];

    var sat3 = sat2.admissions.sat_scores.average.overall;

    document.getElementById("satscores").innerHTML = sat3;

    globalSat.push(sat3);

    console.log(hi);

    var low = hi.results[0];

    var low2 = low[year];

    var low3 = low2.admissions.sat_scores;

    var low4 = low3[25 + "th_percentile"];

    var low5 = low4.critical_reading;

    var low6 = low4.math;

    var low7 = low5 + low6;

    console.log(low7);

    document.getElementById("25percent").innerHTML = low7;


    console.log(hi);

    var high = hi.results[0];

    var high2 = high[year];

    var high3 = high2.admissions.sat_scores;

    var high4 = high3[75 + "th_percentile"];

    var high5 = high4.critical_reading;

    var high6 = high4.math;

    var high7 = high5 + high6;

    console.log(high7);

    document.getElementById("75percent").innerHTML = high7;



    var act = hi.results[0];

    var act2 = act[year];

    var act3 = act2.admissions.act_scores.midpoint.cumulative;

    console.log(act3);

    document.getElementById("actscores").innerHTML = act3;


    var lowAct = hi.results[0];

    var lowAct2 = lowAct[year];

    var lowAct3 = lowAct2.admissions.act_scores;

    var lowAct4 = lowAct3[25 + "th_percentile"];

    var lowAct5 = lowAct4.cumulative;

    console.log(lowAct5);

    document.getElementById("25act").innerHTML = lowAct5;


    var highAct = hi.results[0];

    var highAct2 = highAct[year];

    var highAct3 = highAct2.admissions.act_scores;

    var highAct4 = highAct3[75 + "th_percentile"];

    var highAct5 = highAct4.cumulative;

    console.log(highAct5);

    document.getElementById("75act").innerHTML = highAct5;


    var adm = hi.results[0];

    var adm2 = adm[year];

    var adm3 = adm2.admissions.admission_rate.overall;

    adm3 = adm3 * 100;

    console.log(adm3 + "%");

    document.getElementById("acceptance").innerHTML = adm3 + "%";


    var acc = hi.results[0];

    var acc2 = acc[year];

    var acc3 = acc2.cost.attendance.academic_year;

    console.log(acc3);

    document.getElementById("attendance").innerHTML = acc3;



    var stu = hi. results[0]

    var stu2 = stu[year];

    var stu3 = stu2.student.size;

    console.log(stu3);

    document.getElementById("undergraduate").innerHTML = stu3;


    var ins = hi.results[0]

    var ins2 = ins[year];

    var ins3 = ins2.cost.tuition.in_state;

    console.log(ins3);

    document.getElementById("inState").innerHTML = ins3;


    var out = hi.results[0]

    var out2 = out[year];

    var out3 = out2.cost.tuition.out_of_state;

    console.log(out3);

    document.getElementById("outState").innerHTML = out3;


    var inc = hi.results[0]

    var inc2 = inc[year];

    var inc3 = inc2.student.demographics.avg_family_income;

    console.log(inc3);

    document.getElementById("income").innerHTML = inc3;


    setUp();




}

function setUp(){

    // if the chart is not undefined (e.g. it has been created)
    // then destory the old one so we can create a new one later
    if (times > 1) {
        myChart.destroy();
        myChart2.destroy();
    }


var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');



    myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        datasets: [{
            label: 'Average SAT Score Every Year ',
            data: globalSat,
            backgroundColor: [

            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {

                    beginAtZero: true
                }
            }]
        }
    }
});

    myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
            datasets: [{
                label: 'Average Act Score Every Year ',
                data: globalAct,
                backgroundColor: [

                ],
                borderColor: [

                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
                yAxes: [{


                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });




}


