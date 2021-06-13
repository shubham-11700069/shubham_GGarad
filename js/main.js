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

Application SW –  
Programming Skills – 
Other Skills – 


        var skillsApplication = ['Power BI', 'Tableau', 'Jira', 'Salesforce', 'DBeaver', 'Postman', 'Putty', 'IntelliJ', 'Azure Storage Explorer', 'AWS s3', 'Azure Portal', 'Azure Databricks', 'Azure Data Factory', 'GitHub', 'Grafana', 'Apache Zeppelin', 'Superset', 'Teams', 'Outlook', 'Excel', 'Word', 'PowerPoint'],
            skillsProgramming = ['Python', 'pandas', 'numpy', 'matplotlib', 'SQL', 'PySpark', 'Spark', 'Hive', 'Scala', 'Shell', 'R', 'C', 'C++', 'Java', 'PIG'],
            skills3 = ['Data Visualization', 'Hadoop', 'Presto', 'Data and Business Analytics', 'Advanced Statistics and Predictive Modelling', 'Stakeholder Management', 'Project Management', 'Machine Learning', 'avsc', 'parquet', 'snappy file formats'],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsApplication, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skills2, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skills3, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();
