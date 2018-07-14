$('.btn').on('click', function() {
    var input  = $('#input').val();
    var a = input.split(" ")[0];
    var b = input.split(" ")[1];
    if ($(this).attr('id') === 'add') {
        $('#result').text(parseFloat(a) + parseFloat(b));
    } else if ($(this).attr('id') === 'subtract') {
        $('#result').text(parseFloat(a) - parseFloat(b));
    } else if ($(this).attr('id') === 'multiply') {
        $('#result').text(parseFloat(a) * parseFloat(b));
    } else if ($(this).attr('id') === 'divide') {
        $('#result').text(parseFloat(a) / parseFloat(b));
    } else if ($(this).attr('id') === 'remainder') {
        $('#result').text(parseFloat(a) % parseFloat(b));
    } else if ($(this).attr('id') === 'exp') {
        var res = parseFloat(a);
        if (parseFloat(b) === 0) {
            res = 1;
        }
        else if (parseFloat(b) === 1) {
            res = parseFloat(a);
        }
        else {
            var i = 0;
            while (i < parseFloat(b) - 1) {
            res = res * parseFloat(a);
            i++;
        };
    }
        $('#result').text(res);
    } else if ($(this).attr('id') === 'algebra') {
        var xPos = input.indexOf('x');
        var equalPos = input.indexOf('=');
        var coeff = parseFloat(input.slice(0, xPos));
        var rightConst = parseFloat(input.slice(equalPos + 1));
        var sumConst = 0;
        var result = 0;
        if (input.indexOf('+') === -1){
            var subPos = input.indexOf('-');
            var leftConst = parseFloat(input.slice(subPos + 1, equalPos));
            sumConst = rightConst + leftConst;
            result = sumConst / coeff;
        } else {
            var addPos = input.indexOf('+');
            var leftConst = parseFloat(input.slice(addPos + 1, equalPos));
            sumConst = rightConst - leftConst;
            result = sumConst / coeff;
        }
        $('#result').text('x = ' + result);
    } else if ($(this).attr('id') === 'clear') {
        $('#input').val("");
        $('#result').text("");
    }
});