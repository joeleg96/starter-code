// Mobile Nav
$(".hamburger-icon").on("click", function() {
    $(".mobile-nav").removeClass("hide");
})

$(".close-icon").on("click", function() {
    $(".mobile-nav").addClass("hide");
})

// Plan
$(".expand-arrow").on("click", function(event) {
    $("." + this.id + "-options-container").removeClass("hide");
    $("." +this.id + "-expand-arrow").addClass("hide");
    $("." +this.id + "-minimize-arrow").removeClass("hide");
})

$(".minimize-arrow").on("click", function(event) {
    $("." + this.id + "-options-container").addClass("hide");
    $("." +this.id + "-minimize-arrow").addClass("hide");
    $("." +this.id + "-expand-arrow").removeClass("hide");
})


// Question Selection + Summary Update
var chosenFilter = ["Filter"];
var chosenCoffee = ["Decaf"];
var chosenQuantity = ["250g"];
var chosenGrind = ["Cafetiére"];
var chosenDelivery = ["Every-Week"];

$(".choices-btn").on("click", function(event) {
    var allClasses = this.className;
    var classArray = allClasses.split(' ');
    var firstClass = classArray[0];
    $("." + firstClass).removeClass("active-green");
    $(this).addClass("active-green");

    if (firstClass === "capsule-option") {
        chosenFilter = [];
        chosenFilter = this.id;
    }

    else if (firstClass === "coffee-option") {
        chosenCoffee = [];
        chosenCoffee = this.id;
    }

    else if (firstClass === "quantity-option") {
        chosenQuantity = [];
        chosenQuantity = this.id;
    }

    else if (firstClass === "grind-option") {
        chosenGrind = [];
        chosenGrind = this.id;
    }

    else if (firstClass === "delivery-option") {
        chosenDelivery = [];
        chosenDelivery = this.id;
    }

    $(".chosen-filter-span").text(chosenFilter);
    $(".chosen-coffee-span").text(chosenCoffee);
    $(".chosen-quantity-span").text(chosenQuantity);
    $(".chosen-grind-span").text(chosenGrind);
    $(".chosen-delivery-span").text(chosenDelivery);
})

// Order Summary
$(".open-subscription-modal-btn").on("click", function() {
    $(".subscription-modal").removeClass("hide");
})

$(".checkout-btn").on("click", function() {
    $(".subscription-modal").addClass("hide");
})