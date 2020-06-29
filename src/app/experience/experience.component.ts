import { Component } from '@angular/core';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    experience: any = [
        {
            designation: 'Software Engineer',
            company: {
                name: 'Enosis Solutions',
                url: ''
            },
            responsibilities: [
                "Involved in the full development life cycle of <strong>Big Data</strong> project including requirements analysis, design, development, integration, testing, bug fixing and deployment support using <strong>Apache Spark ecosystem</strong>",
                "Automated <strong>ETL Pipeline</strong> which takes customer's multi-gigabyte of unstructured source data (GZIP files) and yields to over <strong>150 GB</strong> structured data (CSV files) in both AWS S3 and AWS Redshift",
                "Automated the reporting infrastructure to run on ETL processed data monthly as well as per different criteria using AWS EMR clusters for analyzing the financial opportunity",
                "Split the huge data into chunks by applying the Best Fit algorithm to ensure the best usage of the Amazon EMR clusters",
                "Did performance benchmarking (memory and process time) to optimize Spark jobs, each processing up to <strong>30 millions</strong> of records in a Spark dataframe",
                "Developed REST APIs in <strong>Scala</strong> using Play Framework and new user-facing features using Angular 2",
                "Wrote and executed test scripts using <strong>ScalaTest</strong> in the Scala ecosystem",
                "Prepared documentation of use cases and flow charts to illustrate the entire workflow of several processes",
                "Developed a highly interactive web application that uses the 'Internet of Things' by utilizing <strong>Angular 8</strong>, Angular Material Design, and integrating RESTful APIs"
            ]
        }
    ]
}
