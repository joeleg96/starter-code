// Global
var userWeight = $(".weight-input");
var userHeight = $(".height-input");
var imperialWeight = $(".lbs-input");
var imperialFeet = $(".ft-input");
var imperialInches = $(".in-input");


// Metric
$("#metric").on("click", function() {
    $(".textarea-flex").removeClass("hide");
    $(".textarea-imperial-flex").addClass("hide");
});

$(document).on("keypress", function(e) {
    if (e.which == '13') {
        e.preventDefault();
    }
    if (e.which == '13' && userWeight.val() !== "" && userHeight.val() !== "") {
        $(".welcome-display-1").addClass("hide");
        metricCalc(userHeight, userWeight);
    }
});

function metricCalc (userHeight, userWeight) {
    var BMI = (userWeight.val()) / ((userHeight.val()/100)*(userHeight.val()/100))*10;

    $(".user-bmi-result").text(Math.round(BMI)/10);
    $(".welcome-display-2").removeClass("hide");

    var metricIdealWeightLow = (18.5 * (( (userHeight.val()/100) * (userHeight.val()/100) )));
    var metricIdealWeightHigh = (24.9 * (( (userHeight.val()/100) * (userHeight.val()/100) )));

    if (BMI < 18.5) {
        $(".user-bmi-explained").text("Your BMI suggests you're underweight. Your ideal weight is between " + (Math.round(metricIdealWeightLow)) + " kgs and " + (Math.round(metricIdealWeightHigh)) + " kgs.");
    };

    if (BMI >= 18.5 && BMI <= 24.9) {
         $(".user-bmi-explained").text("Your BMI suggests you're a healthy weight. Your ideal weight is between " + (Math.round(metricIdealWeightLow)) + " kgs and " + (Math.round(metricIdealWeightHigh)) + " kgs.");
    };

    if (BMI > 24.9) {
         $(".user-bmi-explained").text("Your BMI suggests you're overweight. Your ideal weight is between " + (Math.round(metricIdealWeightLow)) + " kgs and " + (Math.round(metricIdealWeightHigh)) + " kgs.");
    }
};



// Imperial
$("#imperial").on("click", function() {
    $(".textarea-imperial-flex").removeClass("hide");
    $(".textarea-flex").addClass("hide");
})

$(document).on("keypress", function(e) {
    if (e.which == '13') {
        e.preventDefault();
    }
    if (e.which == '13' && imperialWeight.val() !== "" && imperialFeet.val() !== "" && imperialInches.val() !== "") {
        $(".welcome-display-1").addClass("hide");
        imperialCalc(imperialWeight, imperialFeet, imperialInches);
    }
});

function imperialCalc (imperialWeight, imperialFeet, imperialInches) {
    var totalInches = (parseFloat(imperialFeet.val())*12) +(parseFloat(imperialInches.val()));
    console.log(typeof(totalInches));
    var imperialBMI = ((imperialWeight.val()) / ((totalInches)*(totalInches))*703)*10;

    $(".user-bmi-result").text(Math.round(imperialBMI)/10);
    $(".welcome-display-2").removeClass("hide");

    var imperialIdealWeightLow = (18.5/703) * (totalInches * totalInches);
    var imperialIdealWeightHigh = (24.9/703) * (totalInches * totalInches);

    if (imperialBMI < 18.5) {
        $(".user-bmi-explained").text("Your BMI suggests you're underweight. Your ideal weight is between " + (Math.round(imperialIdealWeightLow)) + " lbs and " + (Math.round(imperialIdealWeightHigh)) + " lbs.");
    };

    if (imperialBMI >= 18.5 && imperialBMI <= 24.9) {
         $(".user-bmi-explained").text("Your BMI suggests you're a healthy weight. Your ideal weight is between " + (Math.round(imperialIdealWeightLow)) + " lbs and " + (Math.round(imperialIdealWeightHigh)) + " lbs.");
    };

    if (imperialBMI > 24.9) {
         $(".user-bmi-explained").text("Your BMI suggests you're overweight. Your ideal weight is between " + (Math.round(imperialIdealWeightLow)) + " lbs and " + (Math.round(imperialIdealWeightHigh)) + " lbs.");
    }
};