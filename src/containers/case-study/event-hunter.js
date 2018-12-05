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

import './event-hunter.css'

class EventHunter extends Component {

	constructor(){
    	super();
    	this.state = {
    		steps: ['Research.', 'Analysis.', 'Design.', 'Evaluation.'],
    		modalActive: false,
    		image: null,
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
    		]
    	};
	}

	closeModal = () => {
		this.setState({modalActive:false})
	}

	imageClick = (src) => {
		this.setState({
			modalActive:true,
			image: src
		})
	}

	render() {
		const {steps, modalActive, image, imageSet1, imageSet2} = this.state;

		return (
			<div className='Event_Hunter__ctn'>
				
				<section className='header'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-xs-12 col-sm-7'>
								<h1>Connecting Users to Events</h1>

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
								<div className='col-xs-12 col-sm-6 col-lg-3'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
							
						</div>
						<div className='row --full --grey'>
							<div className='col'>
								<p>I have then performed Interviews and Surveys in order to generate Primary Research data from representative users. I have decided to combine Interviews and Surveys to get a good mix of quantitative and qualitative data that would help me to create a big picture for the problem space with supplementary information to identify any gaps that arised. Affinity Diagram was used to summarize the findings.</p>
							</div>
						</div>
						<div className='row images align-items-stretch'>
							{imageSet2.map(image => (
								<div className='col-xs-12 col-sm-4'>
									<div className='image' data-val={image.alt} onClick={(e) => this.imageClick(image.fullsrc)} ><img src={image.src} className="img-fluid" alt={image.alt} /></div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='analysis'>
					<div className='container'>
						<div className='row'>
						</div>
					</div>
				</section>

				<section className='prototypes'>
					<div className='container'>
						<div className='row'>
						</div>
					</div>
				</section>

				<section className='evaluation'>
					<div className='container'>
						<div className='row'>
						</div>
					</div>
				</section>

				<Modal open={modalActive} closeModal={this.closeModal} image={image} />

			</div>
		)
	}
}

export default EventHunter;