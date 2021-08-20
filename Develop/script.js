moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
console.log(currentTime)

var beforeTime = moment().startOf('day').add(8, "hours");

console.log(beforeTime)


var timeBlock = $('.time');

for (var i = 0; i < timeBlock.length; i++) { 
    var timeInput = beforeTime.add( 1, "h");
    timeBlock[i].innerHTML = timeInput.format('hh:mm A');

}

var setTime = $('span.time').text();
console.log(setTime)

for (var i = 0; i < setTime.length; i++) {
    var currentTimeForm = currentTime.format('hh:mm A');
    // or moment().hours();?
    console.log(currentTimeForm)
    
    var formCtrl = $('.form-control').each(function(){
        $(this).find([i]);
    });
    
    if (currentTime === setTime[i] ) {
        formCtrl.addClass("present")
    } else if
    (currentTime > setTime[i]) {
        formCtrl.addClass("past")
    } else if
    (currentTime < setTime[i]) {
        formCtrl.addClass("future")
    }
}


// var textArea = $(".saveBtn").parent('.input-group');

$(".saveBtn").on('click', function() {
    var userInput = $(".saveBtn").siblings(".form-control").val();
    localStorage.setItem('textInput', userInput);
});

$("window").on('load', function() {
    var savedInput = localStorage.getItem('textInput')
    if ('textInput' !== null) $('form-control.text').val(savedInput)
})


