(function() {
    'use strict';
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {

        var skillsApp = ['Power BI', 'Tableau', 'Jira', 'Salesforce', 'DBeaver', 'Postman', 'Putty', 'IntelliJ', 'Azure Storage Explorer', 'AWS s3', 'Azure Portal', 'Azure Databricks', 'Azure Data Factory', 'GitHub', 'Grafana', 'Apache Zeppelin', 'Superset', 'Teams', 'Outlook', 'Excel', 'Word', 'PowerPoint']
        var skillsPro = ['Python', 'pandas', 'numpy', 'matplotlib', 'SQL', 'PySpark', 'Spark', 'Hive', 'Scala', 'Shell', 'R', 'C', 'C++', 'Java', 'PIG']
        var skillsOther = ['Data Visualization', 'Hadoop', 'Presto', 'Data and Business Analytics', 'Advanced Statistics and Predictive Modelling', 'Stakeholder Management', 'Project Management', 'Machine Learning', 'avsc', 'parquet', 'snappy file formats']
        var colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
        var i = 0;

        $.each(skillsApp, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-App').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsPro, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-Pro').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOther, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-Other').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();
