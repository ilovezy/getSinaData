
// 每一列第一个都加个小的叉叉图标
$('table tr:eq(0)')
    .children('td')
    .css('vertical-align', 'middle')
    .append('<span class="glyphicon glyphicon-remove pull-right" data-toggle="tooltip" data-placement="top" title="隐藏这一列"></span>')

// 点击之后删除这一列
$('span.glyphicon-remove')
    .tooltip({
        'delay': 100
    })
    .click(function(event) {
        var tdIndex = $(this).parent('td').index()

        $('table tr').each(function() {
            $(this).find('td').eq(tdIndex).remove()
        })
    })

// 点击 title tr 之后 slideToggle 后面的 tr
// $('tr.title').click(function(event) {
//     $(this).nextAll('tr').slideToggle()
// })