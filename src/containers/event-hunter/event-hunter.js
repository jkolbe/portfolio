import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Modal from './../../components/modal/modal';

import events from './../../utils/images/events.png';
import projectRundown from './../../utils/images/project-rundown.jpg';
import problemStatement from './../../utils/images/problem-statement.jpg';
import businessUserAssumptions from './../../utils/images/business-user-assumptions.jpg';
import secondaryResearch from './../../utils/images/secondary-research.jpg';
import surveyCut from './../../utils/images/survey-cut.jpg';
import surveyFull from './../../utils/images/survey-full.jpg';
import interviewCut from './../../utils/images/interview-cut.jpg';
import interviewFull from './../../utils/images/interview-full.jpg';
import affinityDiagram from './../../utils/images/affinity-diagram.png';
import persona from './../../utils/images/persona.jpg';
import empathyMap from './../../utils/images/empathy-map.jpg';
import asIsScenario from './../../utils/images/as-is-scenario.jpg';
import needStatements from './../../utils/images/need-statements.jpg';
import bigIdeas from './../../utils/images/big-ideas.jpg';
import priotizationGrid from './../../utils/images/priotization-grid.jpg';
import toBeScenario from './../../utils/images/to-be-scenario.jpg';
import hills from './../../utils/images/hills.jpg';
import sketches from './../../utils/images/sketches.jpg';
import usabilityFull from './../../utils/images/usability-full.jpg';
import usabilityCut from './../../utils/images/usability-cut.jpg';
import usabilityResults from './../../utils/images/usability-results.png';

import screen1 from './../../utils/images/mid-fi/screen1.png';
import screen2 from './../../utils/images/mid-fi/screen2.png';
import screen3 from './../../utils/images/mid-fi/screen3.png';
import screen4 from './../../utils/images/mid-fi/screen4.png';
import screen5 from './../../utils/images/mid-fi/screen5.png';
import screen6 from './../../utils/images/mid-fi/screen6.png';
import screen6cut from './../../utils/images/mid-fi/screen6-cut.png';
import screen7 from './../../utils/images/mid-fi/screen7.png';
import screen7cut from './../../utils/images/mid-fi/screen7-cut.png';
import screen8 from './../../utils/images/mid-fi/screen8.png';
import screen8cut from './../../utils/images/mid-fi/screen8-cut.png';

import d1 from './../../utils/images/decide/D1.jpg';
import e1 from './../../utils/images/decide/E1.jpg';
import c from './../../utils/images/decide/C.jpg';
import i1 from './../../utils/images/decide/I1.jpg';
import i2 from './../../utils/images/decide/I2.jpg';
import i3 from './../../utils/images/decide/I3.jpg';
import d2 from './../../utils/images/decide/D2.jpg';
import e2 from './../../utils/images/decide/E2.jpg';


import './event-hunter.css'

class EventHunter extends Component {

	constructor(){
    	super();
    	this.state = {
    		steps: ['Research.', 'Analysis.', 'Design.', 'Evaluation.'],
    		modalActive: false,
    		image: null,
    		imageAlt: '',
    		imageSet1: [
    			{
    				src: projectRundown,
    				fullsrc: projectRundown,
    				alt: 'Project Rundown'
    			},
    			{
    				src: problemStatement,
    				fullsrc: problemStatement,
    				alt: 'Problem Statement'
    			},
    			{
    				src: businessUserAssumptions,
    				fullsrc: businessUserAssumptions,
    				alt: 'Business and User Assumptions'
    			},
    			{
    				src: secondaryResearch,
    				fullsrc: secondaryResearch,
    				alt: 'Secondary Research'
    			}
    		],
    		imageSet2: [
    			{
    				src: surveyCut,
    				fullsrc: surveyFull,
    				alt: 'Survey'
    			},
    			{
    				src: interviewCut,
    				fullsrc: interviewFull,
    				alt: 'Interview'
    			},
    			{
    				src: affinityDiagram,
    				fullsrc: affinityDiagram,
    				alt: 'Affinity Diagram'
    			},
    		],
    		imageSet3: [
    			{
    				src: persona,
    				fullsrc: persona,
    				alt: 'Persona'
    			},
    			{
    				src: empathyMap,
    				fullsrc: empathyMap,
    				alt: 'Empathy Map'
    			},
    			{
    				src: asIsScenario,
    				fullsrc: asIsScenario,
    				alt: 'As-Is Scenario'
    			},
    		],
    		imageSet4: [
    			{
    				src: needStatements,
    				fullsrc: needStatements,
    				alt: 'Need Statements'
    			},
    			{
    				src: bigIdeas,
    				fullsrc: bigIdeas,
    				alt: 'Big Ideas'
    			},
    			{
    				src: priotizationGrid,
    				fullsrc: priotizationGrid,
    				alt: 'Priotization Grid'
    			},
    		],
    		imageSet5: [
    			{
    				src: toBeScenario,
    				fullsrc: toBeScenario,
    				alt: 'To Be Scenario'
    			},
    			{
    				src: hills,
    				fullsrc: hills,
    				alt: 'Hills'
    			}
    		],
    		imageSet6: [
    			{
    				src: sketches,
    				fullsrc: sketches,
    				alt: 'Sketches'
    			},
    			{
    				src: usabilityCut,
    				fullsrc: usabilityFull,
    				alt: 'Usability Testing'
    			},
    			{
    				src: usabilityResults,
    				fullsrc: usabilityResults,
    				alt: 'Usability Results'
    			}
    		],
    		imageSet7: [
    			{
    				src: screen1,
    				fullsrc: screen1,
    				alt: 'Event Hunter Login'
    			},
    			{
    				src: screen2,
    				fullsrc: screen2,
    				alt: 'Event Hunter Browse'
    			},
    			{
    				src: screen3,
    				fullsrc: screen3,
    				alt: 'Event Hunter Swipe'
    			},
    			{
    				src: screen4,
    				fullsrc: screen4,
    				alt: 'Event Hunter Menu'
    			},
    			{
    				src: screen5,
    				fullsrc: screen5,
    				alt: 'Event Hunter Settings'
    			},
    			{
    				src: screen6cut,
    				fullsrc: screen6,
    				alt: 'Event Hunter Interests'
    			},
    			{
    				src: screen7cut,
    				fullsrc: screen7,
    				alt: 'Event Hunter Likes'
    			},
    			{
    				src: screen8cut,
    				fullsrc: screen8,
    				alt: 'Event Hunter Details'
    			}
    		],
    		imageSet8: [
    			{
    				src: d1,
    				fullsrc: d1,
    				alt: 'Determine the goal(s) of your evaluation'
    			},
    			{
    				src: e1,
    				fullsrc: e1,
    				alt: 'Explore the questions of your evaluation'
    			},
    			{
    				src: c,
    				fullsrc: c,
    				alt: 'Choose the evaluation methods'
    			},
    			{
    				src: i1,
    				fullsrc: i1,
    				alt: 'Identify the practical issues - part 1'
    			},
    			{
    				src: i2,
    				fullsrc: i2,
    				alt: 'Identify the practical issues - part 2'
    			},
    			{
    				src: i3,
    				fullsrc: i3,
    				alt: 'Identify the practical issues - part 3'
    			},
    			{
    				src: d2,
    				fullsrc: d2,
    				alt: 'Deal with ethical issues'
    			},
    			{
    				src: e2,
    				fullsrc: e2,
    				alt: 'Evaluate, analyze, interpret, and present the data'
    			},
    		]
    	};
	}

	closeModal = () => {
		this.setState({modalActive:false})
	}

	imageClick = (src, alt) => {
		this.setState({
			modalActive:true,
			image: src,
			imageAlt: alt
		})
	}

	render() {
		const {steps, modalActive, image, imageAlt, imageSet1, imageSet2, imageSet3, imageSet4, imageSet5, imageSet6, imageSet7, imageSet8} = this.state;

		return (
			<div className='Event_Hunter__ctn'>
				
				<section className='header'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-xs-12 col-sm-7'>
								<h1>Connecting Users to Local Events</h1>

								<ReactTypingEffect
								className='type'
								speed={80}
								eraseDelay={500}
								text={steps}
								cursorClassName='type-cursor'
								/>

							</div>
							<div className='col-xs-12 col-sm-5 d-none d-sm-block'>
								<img src={events} className="img-fluid" alt="Event Hunter screens" />
							</div>
						</div>
					</div>
				</section>

				<section className='project'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								<h2>The Project</h2>
								<p>Event Hunter is an iOS application that aims to raise awareness and promote local events by making them more accessible to the public. The product informs users about what is happening in their neighbourhood so they would never feel like they're missing out. Users can search for a specific event or browse for events that match their preference criteria. Event Hunter is a centralized application that combines events from all existing platforms.</p>
							</div>
						</div>
					</div>
				</section>

				<section className='research'>
					<div className='container'>
						<div className='row --full --pink'>
							<div className='col'>
								<h2>User Research & Analysis</h2>
								<p>I have began the activation journey by exploring the problem of current event management domain, its set of users, and the constraints that are involved in the problem. I have collected data and performed an analysis of the data gathered in order to gain solid understanding of the problem I wanted to tackle. I have looked at existing platforms used to find and share events including: websites, social media, articles, and blogs. I have consolidated my findings using a consolidation table which included observations, interpretations, and implications from the existing platforms.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet1.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-6 col-lg-3'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
							
						</div>
						<div className='row --full --grey'>
							<div className='col'>
								<p>I have then performed Interviews and Surveys in order to generate Primary Research data from representative users (who live, work, or attending school in Toronto and attend events). I have decided to combine Interviews and Surveys to get a good mix of quantitative and qualitative data that would help me to create a big picture for the problem space with supplementary information to identify any gaps that arised. Affinity Diagram was used to summarize the findings.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet2.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-4'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
						<div className='row --full --grey'>
							<div className='col'>
								<p>Based on the research findings I was able to create a persona, empathy map and as-is scenario. All of the items represent important characteristics about the user, tasks that she performs and context that influences her behaviour.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet3.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-4'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='requirements'>
					<div className='container'>
						<div className='row --full --pink'>
							<div className='col'>
								<h2>Requirements Analysis</h2>
								<p>User research provided me with relevant context that influenced the solution design. I have began by generating need statements that focus on the persona’s pain points as identified previously in the empathy map and as-is scenario. I have then proceeded with big idea generation focusing on the most important opportunities for improvement. Once they have been generated, our group voted on them in terms of feasibility and impact and prioritized them in a prioritization grid.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet4.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-4'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
						<div className='row --full --grey'>
							<div className='col'>
								<p>Using the prioritization grid I was able to generate a to-be scenario for my solution and put together hill statements to align my group around the solution. It has allowed us to develop a shared understanding of intent so everyone could pull in the same direction.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet5.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-6'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='evaluation'>
					<div className='container'>
						<div className='row --full --pink'>
							<div className='col'>
								<h2>Prototypes</h2>
								<p>The key goal of this portion of the project was to prototype a Minimal Viable Product (MVP) that focuses on the happy path only. With the hill statements in mind, I have selected features that would address user’s needs, such as centralization of events, and personalization based on interest, location, distance, and cost.</p>
								<p>I have then generated hand-drawn paper sketches representing the ideation process for the low-fidelity prototype. The sketches were then used to conduct lean evaluation of the ideas through usability testing from representative users. I have conducted a short interview using a think-aloud protocol that included a mix of open-ended and task-oriented questions. A summary of the findings was developed on a whiteboard.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet6.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-4'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
						<div className='row --full --grey'>
							<div className='col'>
								<p>Feedback from usability testing was processed and used to influence the design decisions during the next phase of the project - mid-fidelity prototype. I have used figma, a collaborative online prototyping tool, to create a set of screens leveraging industry’s best practices. I have then linked them together to present an app-like experience.</p>
								<p><a href="https://www.figma.com/proto/IKvwEW2Q2InJJYterHh92E99/1602-prototype?node-id=1%3A3&scaling=scale-down" target="_blank" rel="noopener noreferrer">Click here to see it in action.</a></p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet7.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-3'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='prototypes'>
					<div className='container'>
						<div className='row --full --pink'>
							<div className='col'>
								<h2>Evaluation & Next Step</h2>
								<p>Once the medium-fidelity prototype was completed, I have conducted a summative usability evaluation using the DECIDE framework. I have began by determining the overall goal of the evaluation and exploring questions that would help to determine the goal. Observations and Interviews were then chosen as the data gathering techniques where each observations task was derived from need statements and hills. Once the evaluation was conducted, I have summarized the findings on a whiteboard.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet8.map(image => (
								<div key={image.alt} className='col-xs-12 col-sm-6 col-md-3'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc, image.alt)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
						<div className='row --full --grey'>
							<div className='col'>
								<p>For the next steps in the project I will incorporate feedback from the usability evaluation, making sure all aspects that created confusion in the application will be resolved. I will also start exploring features that could be beneficial to potential users, such as: searching for a specific event or ability to create a new event.</p>
							</div>
						</div>
					</div>
				</section>

				<section className='credits'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								<h2>Credits</h2>
								<p>I would like to thank all of my group members for their involvement and participation in this case study:</p>
								<ul>
									<li>
										<a target='_blank' rel='noopener noreferrer' href="mailto:tiana.guido@mail.utoronto.ca">Tiana Guido</a>
									</li>
									<li>	
										<a target='_blank' rel='noopener noreferrer' href="mailto:ifrah.yousuf@mail.utoronto.ca">Ifrah Yousuf</a>
									</li>
									<li>
										<a target='_blank' rel='noopener noreferrer' href="mailto:hs.yoon@mail.utoronto.ca">Hs Yoon</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<Modal open={modalActive} closeModal={this.closeModal} image={image} alt={imageAlt} />

			</div>
		)
	}
}

export default EventHunter;