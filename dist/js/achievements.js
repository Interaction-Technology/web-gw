$(function() {
    // 成果列表切换
    var $tab = $('#tab > span');
    var $proList = $('#pro-list > ul');

    $proList.hide();
    $proList.eq(0).show();

    $tab.on('click', function() {

        var $this = $(this);
        var $t = $this.index();

        $tab.removeClass('active');
        $(this).addClass('active');
        $proList.hide();
        $proList.eq($t).show();
    });



    // 跳转页面	[文档见：https://github.com/superRaytin/paginationjs/blob/master/docs/cn.md]
    function createDemo(name) {
        var container = $('#pagination-' + name);
        var sources = function() {
            var result = [];

            for (var i = 1; i < 196; i++) {
                result.push(i);
            };

            return result;
        }();

        var options = {
            dataSource: sources,
            callback: function(response, pagination) {
                window.console && console.log(response, pagination);

                var dataHtml = '<ul>';

                $.each(response, function(index, item) {
                    dataHtml += '<li>' + item + '</li>';
                });

                dataHtml += '</ul>';

                container.prev().html(dataHtml);
            }
        };

        //$.pagination(container, options);

        container.addHook('beforeInit', function() {
            window.console && console.log('beforeInit...');
        });
        container.pagination(options);

        container.addHook('beforePageOnClick', function() {
            window.console && console.log('beforePageOnClick...');
            //return false
        });

        return container;
    }

    createDemo('page');
})
