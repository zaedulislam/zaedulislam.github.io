import { Component } from '@angular/core';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    professionalSectionHeader: string = 'Professional Experience';
    academicSectionHeader: string = 'Academic Experience';
    extracurricularActivities: string = 'Extracurricular Activities';

    experience: any = [
        {
            designation: 'Senior Software Engineer',
            company: {
                name: 'Enosis Solutions',
                url: 'https://www.enosisbd.com/'
            },
            startDate:'1 January 2019',
            endDate: 'Present',
            responsibilities: [
                "Involved in the full development life cycle of Big Data project including requirements analysis,  design, development, integration, testing, bug fixing, and deployment support using Apache Spark ecosystem",
                "Automated ETL Pipeline which takes customer’s multi-gigabyte of unstructured source data (GZIP files) and yields to over 150 GB of structured data (CSV files) in both AWS S3 and AWS Redshift",
                "Automated  the  reporting  infrastructure  to  run  on  ETL  processed  data  monthly  as  well  as  per  different criteria using AWS EMR clusters for analyzing the financial opportunity",
                "Split the huge data into chunks by applying the Best Fit algorithm to ensure the best usage of the AmazonEMR clusters",
                "Did performance benchmarking (memory and process time) to optimize Spark jobs, each processing up to 30 millions of records in a Spark dataframe",
                "Developed REST APIs in Scala using Play Framework and new user-facing features using Angular 2",
                "Wrote and executed test scripts using ScalaTestin the Scala ecosystem",
                "Prepared documentation of use cases and flow charts to illustrate the entire workflow of several processes",
                "Developed a highly interactive web application that uses the \"Internet of Things\" by utilizing Angular 9, Angular Material Design, and integrating RESTful APIs",
                "Work in a Scrum team"
            ]
        },
        {
            designation: 'Undergraduate Teaching Assistant (Internship)',
            company: {
                name: 'American International University-Bangladesh',
                url: 'https://www.aiub.edu/'
            },
            startDate:'September 2018',
            endDate: 'December 2018',
            responsibilities: [
                "Assisted students to learn different topics of 'Artificial Intelligence and Expert System' and to implementthe source codes in the lab",
            ]
        },
        {
            designation: 'Problem Setter',
            company: {
                name: 'AIUB CS Fest 2018 Programming Contest (Junior)',
                url: 'https://toph.co/c/aiub-cs-fest-2018-j'
            },
            responsibilities: [
                "Authored a problem, generated test cases, wrote the solution of that problem and judged contestants’ submissions",
            ]
        },
        {
            designation: 'Volunteer',
            company: {
                name: 'AIUB GIRLS PROGRAMMING CONTEST - SPRING 2016-2017',
                url: 'https://www.aiub.edu/aiub-girls-programming-contest---spring-2016-2017'
            },
            responsibilities: [
                "Monitored the contest labs and assisted AIUB Computer Club (ACC) to make the event a successful one",
            ]
        },
        {
            designation: 'Academic  Assistant',
            company: {
                name: 'AIUB  Competitive  Programmers’  Community  (ACPC)',
                url: 'https://www.facebook.com/groups/aiub.acm'
            },
            responsibilities: [
                "Assisted  fellow AIUBians who had found difficulties in subjects such as C, C++, C#, Java, Discrete Math, Data Structure andAlgorithms to understand the topics, program or code",
            ]
        }
    ];
}
