function initFunction(id, data) {
  var chart = new Highcharts.Chart({
    plotOptions: {
      series: {
        color: '#FF6633',
      },
    },
    chart: {
      renderTo: id,
      marginBottom: 80,
      zoomType: 'x',
    },
    xAxis: {
      minRange: 10,
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        rotation: 0,
      },
    },
    title: {
      text: '',
    },
    yAxis: {
      // max: 10000,
      ceiling: 10000,
      type: 'linear',
      labels: {
        format: '€{value:,f}',
        rotation: 0,
      },
      title: {
        text: '',
      },
    },
    legend: {
      enabled: false,
      padding: 0,
      margin: 0,
    },
    series: [
      {
        lineWidth: 3,
        data: data,
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
          },
        },
      ],
    },
  });
}
