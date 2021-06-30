import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
        url: 'https://www.enosisbd.com/',
        about:
          'Enosis Solutions is an offshore Software Company located in Dhaka, Bangladesh.',
      },
      startDate: '1 January 2019',
      endDate: 'Present',
      responsibilities: [
        'Involved in the full development life cycle of a Big Data project including requirements analysis,  design, development, integration, testing, bug fixing, and deployment support using Apache Spark ecosystem',
        'Automated ETL Pipeline which takes customer’s multi-gigabyte of unstructured source data (GZIP files) and yields to over 150 GB of structured data (CSV files) in both AWS S3 and AWS Redshift',
        'Automated  the  reporting  infrastructure  to  run  on  ETL  processed  data  monthly  as  well  as  per  different criteria using AWS EMR clusters for analyzing the financial opportunity',
        'Split the huge data into chunks by applying the Best Fit algorithm to ensure the best usage of the AmazonEMR clusters',
        'Did performance benchmarking (memory and process time) to optimize Spark jobs, each processing up to 30 millions of records in a Spark dataframe',
        'Developed REST APIs in Scala using Play Framework and new user-facing features using Angular 2',
        'Wrote and executed test scripts using ScalaTest in the Scala ecosystem',
        'Prepared documentation of use cases and flow charts to illustrate the entire workflow of several processes',
        'Developed a highly interactive web application that uses the "Internet of Things" by utilizing Angular 9, Angular Material Design, and integrating RESTful APIs',
        'Worked in a Scrum team',
        'Provided multi-language support using Internationalization (i18n) library',
        'Provided Google reCAPTCHA v2 support',
        'Used Media Queries for the design to be compatible in all devices',
        'Implemented the Drag and Drop functionality using ng2-dragula',
        'Parse, validate, manipulate, and display dates and times using Moment.js',
        'Utilized RxJS library for composing asynchronous and event-based programs by using observable sequences',
        'Utilized Agile Methodologies (Scrum) to manage full life-cycle development of the project',
        'Gathered specs from client to create a feasible workflow',
        'Cooperating with the back-end developer in the process of building the RESTful API',
        'Made design recommendations towards the development of new code or reuse of existing code',
        'Presented solutions to the client when they want out of scope issues to be solved',
        'Created Shared module with components that will be shared across the application',
        'Prepared and dispensed work assignments, provide guidance, and/or review the work of other team members',
        'Collaborated with QA team to define test cases, metrics, and resolve questions about test results',
        'Recommended business process flow improvements and clearly communicate problem/resolution process to project management',
        'Documented the code inline using JSDoc or other conventions',
      ],
    },
    {
      designation: 'Undergraduate Teaching Assistant (Internship)',
      company: {
        name: 'American International University-Bangladesh',
        url: 'https://www.aiub.edu/',
      },
      startDate: 'September 2018',
      endDate: 'December 2018',
      responsibilities: [
        "Assisted students to learn different topics of 'Artificial Intelligence and Expert System' and to implement the source codes in the lab",
      ],
    },
    {
      designation: 'Academic  Assistant',
      company: {
        name: 'AIUB  Competitive  Programmers’  Community  (ACPC)',
        url: 'https://www.facebook.com/groups/aiub.acm',
      },
      responsibilities: [
        "With the guidance of Department of Computer Science, on behalf of AIUB Competitive Programmers' Community (ACPC), I had assisted fellow AIUBians who had found difficulties related to Programming and/or C, C++, Discrete Math, C#, Java, Data Structure and Algorithms courses, to understand the topics, program or code",
      ],
    },
    {
      designation: 'Problem Setter',
      company: {
        name: 'AIUB CS Fest 2018 Programming Contest (Junior)',
        url: 'https://toph.co/c/aiub-cs-fest-2018-j',
      },
      responsibilities: [
        'Set a problem, generated test cases, and wrote the problem solution for the AIUB CS Fest 2018 Programming Contest (Junior) hosted by AIUB Computer Club (ACC)',
      ],
    },
    {
      designation: 'Volunteer',
      company: {
        name: 'AIUB GIRLS PROGRAMMING CONTEST - SPRING 2016-2017',
        url: 'https://www.aiub.edu/aiub-girls-programming-contest---spring-2016-2017',
      },
      responsibilities: [
        "I monitored the contest labs, judged contestants' submissions, and assisted AIUB Computer Club (ACC) to make the event successful",
      ],
    },
  ];
}
