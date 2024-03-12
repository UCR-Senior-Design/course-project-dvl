export const defaultResume = 
`# {NAME}

{LOCATION} (Open to Remote) | {PHONE} | {EMAIL} 

[{LINKEDIN}](https://{LINKEDIN}) | [{GITHUB}](https://{GITHUB})

<div className="vertical-spacer"></div>

## Technical Skills

**Front End** | React, NextJS, Javascript, TypeScript, NodeJS, CSS, styled-components

**Back End** | Golang, Java, C, C++, PostgreSQL, MongoDB, MySQL

**Testing/Deployment** | Jest, Mocha, Chai, AWS:EC2, AWS:ECS, Terraform, JUnit

**Developer Tools** | Docker, Git, npm, Webpack, Babel, Agile Methodology, TDD

<div className="vertical-spacer"></div>

## Experience & Projects

### Back-End Software Engineer | Name of Application <span class="spacer"></span>Jan 2022 - Present

*Backend redesign for reviews module of legacy e-commerce microservice*<span class="spacer"></span>Javascript | Node.js | Express | PostgreSQL | EC2

- Optimized existing monolithic back-end of an e-commerce website to handle 360,000 requests per minute with low latency **(<20 ms)** and error rate **(<0.1%)** by horizontally microservice to 5 AWS EC2 instances and using a least connections load balancing method with NGINX to increase fault tolerance
- Leveraged K6 and Loader.io to identify performance bottlenecks, then implemented caching to lower frequency of database retrieval to allow for a throughput increase of **733%**
- Reduced query times to database from 6,000 ms to **12 ms** by using aggregator functions and indexing foreign keys
- Mentored peer engineers on front-end development and best practices

<div className="vertical-spacer"></div>

### Front-End Engineer, UI Lead | Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022

*Remote learning management system web application* <span class="spacer"></span> JavaScript | Next.js | MUI | Node.js | Firebase | Jest

- Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe`;