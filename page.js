// hi
function getPages() {
    var theForm = document.forms['disForm'];
    var pages = theForm.elements['numPages'];
    var numberPages = 0;

    if (pages.value != "") {
        numberPages = parseInt(pages.value);
    }
    return numberPages;
}

function getMins() {
    var theForm = document.forms['disForm'];
    var mins = theForm.elements['minsPerPage'];
    var numberMins = 0;
    if (mins.value != "") {
        numberMins = mins.value;
    }
    return numberMins;
}

function calculateMins() {
    var resultMins = getPages() * getMins();
    var resultHours = (resultMins / 60).toFixed(2);
    $('button').click(function() {
        $('span').fadeIn();
    })
    $('#mins1').fadeOut(function() {
        $('#mins1').text(resultMins+" minutes ").fadeIn(500);
    })
    $('#mins2').fadeOut(function() {
      $('#mins2').text(resultHours+" hours. That's about "+Math.round(resultHours)+" hours.").fadeIn(850);
    })
}

function calculateMinsAr() {
    var resultMins = getPages() * getMins();
    var resultHours = (resultMins / 60).toFixed(2);
    $('button').click(function() {
        $('span').fadeIn();
    })
    $('#mins1').fadeOut(function() {
        $('#mins1').text(resultMins+" دقيقة ").fadeIn(450);
    })
    $('#mins2').fadeOut(function() {
      $('#mins2').text(resultHours+" ساعة, أو إذا كنت تريد تقريبها, ستكون "+Math.round(resultHours)+" ساعة").fadeIn(450);
    })
}
