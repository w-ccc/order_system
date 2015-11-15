(function($){
  "use strict";
  Metis.dashboard = function() {
    var sale_amount = [[1,500],[2,450],[3,350],[4,521],[5,632],[6,234],[7,453],[8,534],[9,654],[10,234],[11,563],[12,391],[13,520],[14,428],[15,638],[16,354],[17,467],[18,534],[19,472],[20,580],[21,623],[22,329],[23,482],[24,589],[25,372],[26,589],[27,238],[28,459],[29,348],[30,283],[31,347]];

    
    var plot = $.plot($("#trigo"),
            [
                {
                    data: sale_amount,
                    label: "销售额",
                    points: {
                        fillColor: "#4572A7",
                        size: 5
                    },
                    color: '#4572A7'
                }
            ], {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        yaxis: {
            allowDecimals:false
        },
        xaxis: {
            allowDecimals:false,
            tickInterval:1
        }
    });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #fdd',
            padding: '2px',
            'background-color': '#000',
            color: '#fff'
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#trigo").bind("plothover", function(event, pos, item) {
        $("#x").text(pos.x);
        $("#y").text(pos.y);

        if (item) {
            if (previousPoint !== item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();
                var x = item.datapoint[0],
                    y = item.datapoint[1];


                showTooltip(item.pageX, item.pageY,
                        x + "日共销售" + y +"元");
            }
        }
        else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
  };
  return Metis;
})(jQuery);



$(document).ready(function() {


        updateConfig();

        function updateConfig() {
          var options = {};

            options.autoApply = true;
            options.ranges = {
              '今天': [moment(), moment()],
              '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              '过去7天': [moment().subtract(6, 'days'), moment()],
              '过去30天': [moment().subtract(29, 'days'), moment()],
              '本月': [moment().startOf('month'), moment().endOf('month')],
            };
            options.locale = {
              format: 'YYYY/MM/DD',
              separator: ' - ',
              applyLabel: '确定',
              cancelLabel: '取消',
              fromLabel: '从',
              toLabel: '至',
              customRangeLabel: '自定义时间',
              daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
              monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
              firstDay: 1
            };
        options.linkedCalendars = true;
        options.autoUpdateInput = true;
        options.startDate = moment();
        options.endDate = moment();

          $('#config-demo').daterangepicker(options, function(start, end, label) { 
          console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); 
          //此处可提交表单！！！
          //alert(start.format('YYYY-MM-DD'));
          
          
          });
            
        }

      });
      