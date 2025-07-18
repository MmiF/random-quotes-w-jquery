$(document).ready(function () {


    function getRandNum(arr) {
        return randNum = Math.floor(Math.random() * arr.length);
    };





    $('#btn').click(function () {
        let $aj = $.ajax({
            method: 'GET',
            url: './json/test.json',
            dataType: 'json',
        }).done(getData)


        function getData($aj) {

            let arrOfQuotes = $aj.quotes;
            let jsonToArr = JSON.parse(JSON.stringify(arrOfQuotes));

            let randQuote = jsonToArr[getRandNum(jsonToArr)];

            $('#author i').html(`- ${randQuote.author}`);
            $('.quote-text').html(`${randQuote.quote}`)
        };

    });

});


