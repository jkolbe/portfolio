import React, { Component } from 'react';
import Tree from 'react-animated-tree'

import './inf2196.css'

/*
https://reactjsexample.com/a-simple-and-configurable-tree-view-control-for-react/
https://github.com/drcmda/react-animated-tree
https://codesandbox.io/embed/rrw7mrknyp
*/

class Inf2196 extends Component {

	/*

	*/

	constructor() {
		super();
		this.state = {
			steps: ['Research.', 'Analysis.', 'Design.', 'Evaluation.'],
			data: [
				{
					title: "Introduction",
					children: [
						{ title: "Visual Telephone" },
						{ title: "About the Course" },
						{ title: "Learning Outcomes" },
						{ title: "Course Objectives" },
						{ 
							title: "Six thinking hats",
							children: [
								{ title: "Facts (white)" },
								{ title: "Feelings (red)" },
								{ title: "Control (blue)" },
								{ title: "Creativity (green)" },
								{ title: "Positive (yellow)" },
								{ title: "Negative (black)" },
							]
						},
					]
				},
				{
					title: "Users, Design, and Information Systems",
					children: [
						{
							title: "Journal",
							children: [
								{ title: "Habits of Mind" },
								{ title: "Habits of Work" },
							]
						},
						{ title: "Mind Map" },
						{
							title: "Information Systems",
							children: [
								{ title: "Transparency / Equity" },
								{ title: "Aggregation" },
								{ title: "Information Asymmetry" },
								{ title: "Principal / Agent" },
								{ title: "Space / Time" },
								{ title: "Community" },
								{ title: "System, Not Product" },
								{ title: "Common Knowledge" },
								{ title: "Consequential / Relational" },
								{ title: "Public Knowledge" },
								{ title: "Value of Info" },
								{ title: "Encoding" },
								{ title: "Political HCD" },
								{ title: "Transmission" },
							]
						},
					]
				},
				{
					title: "HCD as Creative Problem Solving",
					children: [
						{ title: "Intentionality" },
						{
							title: "Problems and Problem Solving",
							children: [
								{ title: "Consequences" },
								{ title: "Proximate Causes" },
								{ title: "Downstream Causes" },		
							]
						},
						{
							title: "Conventional Problem Solving",
							children: [
								{ title: "Rationality" },
								{ title: "Optimization" },
								{ title: "Efficiency" },
							]
						},
						{ title: "Marginal Cost Benefit Analysis" },
						{
							title: "Creative Problem Solving",
							children: [
								{ title: "Accept" },
								{ title: "Analyze" },
								{ title: "Define" },
								{ title: "Ideate" },
								{ title: "Select" },
								{ title: "Implement" },
								{ title: "Evaluate" },
							]
						},
						{
							title: "Understanding the Problem",
							children: [
								{ title: "Five Whys" },
								{ title: "Happiness Is" },
								{ title: "Dump your aces" },
								{ title: "Forced Analogy" },
								{ title: "Matrix Analysis" },
								{ title: "How is it done now?" },
								{ title: "History and Infinitum" },
								{ title: "If we solve this, we could …" },
								{ title: "Aks (and answer) all the basic questions" },
							]
						},
					]
				},
				{
					title: "For, By, and Among Humans",
					children: [
						{
							title: "Humans Cubed",
							children: [
								{ title: "Humans for whom we design" },
								{ title: "Human context" },
								{ title: "Humans we are" }
							]
						},
						{
							title: "Introverts",
							children: [
								{ title: "Silent circuit" },
								{ title: "Musical Chairs" },
								{ title: "Get to the bottom of the stack" },
								{ title: "Office hours" },
								{ title: "The slow build" },
							]
						},
						{
							title: "Comfort Zones",
							children: [
								{ title: "Recognize When You’re Tricking Yourself" },
								{ title: "Construct a Plan That’s Unique to Your Situation" },
								{ title: "Find a Mentor or Coach" },
							]

						},
						{
							title: "Failure",
							children: [
								{ title: "Fail mindfully" },
								{ title: "Benefits and celebrating failure" },
							]
						},
						{
							title: "General Magic",
							children: [
								{ title: "Don’t be afraid to invent a new paradigm" },
								{ title: "Tackle problems in bite-sized pieces" },
								{ title: "The most important person in the room is the user" },
								{ title: "Embrace criticism" },
								{ title: "Learn from masters" },
								{ title: "Pragmatic optimism" },
								{ title: "Own tech’s failures and fight to fix them" },
							]
						},
						{
							title: "Cognitive Biases",
							children: [
								{ title: "Fundamental attribution error" },
								{ title: "Availability bias" },
								{ title: "Confirmation bias" },
								{ title: "Belief bias" },
								{ title: "Halo effect" },
								{ title: "Egocentric bias / self serving bias" },
								{ title: "Next-in-line effect" },
								{ title: "Shared information bias" },
								{ title: "Leveling and sharpening" },
								{ title: "Well-travelled-road effect" },
								{ title: "Surrogation" },
								{ title: "Survivorship bias" },
								{ title: "False consensus" },
								{ title: "Social desirability" },
								{ title: "Asymmetric insight" },
							]
						},
					]
				},
				{
					title: "Organizations, Communities & Info Systems",
					children: [
						{
							title: "Profound Points",
							children: [
								{ title: "Organizations are everywhere " },
								{ title: "Organizations are clumsy, rigid, and awkward actors" },
								{ title: "Communities of organizations, not people" },
								{ title: "Communities are full of organizational junk" },
								{ title: "Bureaucracy, please, more bureaucracy!" },
								{ title: "How can a good organization be an innovative organization?" },
							]
						},
						{
							title: "Community",
							children: [
								{ title: "Geography" },
								{ title: "Identity" },
								{ title: "Community of interest" },
								{ title: "Shared imaginary" },
								{ title: "Plurality" },
							]
						},
						{
							title: "Community Based Organizations",
							children: [
								{ title: "Volunteers not employees" },
								{ title: "Cause not profit/salary" },
								{ title: "Symbol not consequence" },
								{ title: "Low budget, low tech" },
								{ title: "Distance to “info tech as solution” greater" },
								{ title: "Diverse backgrounds = resource + impediment" },
								{ title: "Diverse timetables = coordination hard" },
							]
						},
						{
							title: "Community = community or organizations",
							children: [
								{ title: "Organizational interaction is awkward" },
								{ title: "Organizations are constrained actors" },
								{ title: "Organizations are distracted actors" },
								{ title: "Collaboration amplifies irrationality " },
								{ title: "Collaboration is an ambiguous technology" },
								{ title: "Communities are organizational junkyards" },
							]
						},
						{
							title: "Bureaucracy",
							children: [
								{ title: "Impersonality" },
								{ title: "Skills, expertise, experience" },
								{ title: "Job in a position" },
								{ title: "Hierarchy" },
								{ title: "Written records" },
								{ title: "Rules and regulations" },
							]
						},
						{
							title: "Teller’s Equations",
							children: [
								{ title: "Effort(innovation2.0) < Effort(innovation1.2)" },
								{ title: "P(innovation|Bob) > P(innovation|idea)" },
								{ title: "Idea Transplant ⇒ Innovation" },
								{ title: "Innovation(someone) ⋙Innovation(everyone) ⋙ Innovation(no one)" },
								{ title: "100 × Innovation(1) ⋙1 × Innovation(100)" },
								{ title: "!Story ⇒ !Innovation" },
								{ title: "Innovation(story)=Benefit(vision)+Product(vision)+How(vision)+Whynow(vision)" },
								{ title: "!UnderstandDetails + !Delegate ⇒ !Innovation" },
								{ title: "NewTools + New Metrics ⇒ Innovation" },
								{ title: "CleanUp(painful workarounds + rule breaking) ⇒ Innovation" },
								{ title: "Rebuild = Innovate" },
								{ title: "Technology Judo ⋙ Technology Kungfu" },
								{ title: "∆(assumptions) ⇒ Innovation" },
								{ title: "∆(assumptions)10% > Innovation > ∆(assumptions)1%" },
							]
						},
					]
				},
				{
					title: "Finding Out",
					children: [
						{
							title: "Epistemological Inventory",
							children: [
								{ title: "What do you think you know?" },
								{ title: "What do you think you don’t know?" },
								{ title: "What do you know you don’t know?" },
								{ title: "What do you not know you don’t know?" },
							]
						},
						{
							title: "Methodological Strategy",
							children: [
								{
									title: "Questions",
									children: [
										{ title: "Theory" },
										{ title: "Moral" },
										{ title: "Empirical" },
									]
								},
								{
									title: "Study",
									children: [
										{ title: "Internal states" },
										{ title: "External states" },
										{ title: "Reported behavior" },
										{ title: "Observed behaviour" },
										{ title: "Artifacts" },
										{ title: "Environment" },
									]
								},
								{
									title: "Methods",
									children: [
										{ title: "Free List" },
										{ title: "Pile Sort" },
										{ title: "Grand Tour" },
										{ title: "Get them talking" },
										{ title: "Photo diary" },
										{ title: "Show me" },
										{ title: "Empathy tagging" },
										{ title: "Unobtrusive observing" },
									]
								},
							]
						},
						{
							title: "Ethnography",
							children: [
								{ title: "Naturalistic" },
								{ title: "Holistic" },
								{ title: "Descriptive" },
								{ title: "Subjective" },
							]
						},
						{
							title: "Ethnographic Techniques",
							children: [
								{ title: "Structured Interviews" },
								{ title: "Stalking a Cyber Forum" },
								{ title: "Thinking Out Loud" },
								{ title: "Fly on the Wall" },
							]
						}
					]
				},
				{
					title: "Making Sense of Qualitative Data",
					children: [
						{
							title: "HCD Process",
							children: [
								{ title: "Problem Statement" },
								{ title: "Epistemological Inventory" },
								{ title: "Fieldwork + Interviews" },
								{ title: "Observations, Artifacts, Quotes" },
								{ title: "Themes" },
								{ title: "Insights" },
								{ title: "Empathy Map" },
								{ title: "Point-of-View" },
								{ title: "Persona" },
								{ title: "How might we …" },
							]
						},
						{
							title: "Generate Insights from observations",
							children: [
								{ title: "What workarounds have users invented?" },
								{ title: "What can’t users explain the why of?" },
								{ title: "What doesn’t work?" },
								{ title: "What IS working?" },
								{ title: "What thrills users each time?" },
								{ title: "What frustrates but is tolerated?" },
								{ title: "What “just so” stories do users tell?" },
							]
						},
						{
							title: "From P.o.V. to How might we",
							children: [
								{ title: "Amp up the good" },
								{ title: "Remove the bad" },
								{ title: "Explore the opposite" },
								{ title: "Question an assumption" },
								{ title: "Go after adjectives" },
								{ title: "ID unexpected resources" },
								{ title: "Create an analogy from need or context" },
								{ title: "Play against the challenge" },
								{ title: "Change a status quo" },
								{ title: "Break POV into pieces" },
							]
						},
					]
				},
				{
					title: "Prototyping as Finding Out",
					children: [
						{
							title: "Reasons for prototyping",
							children: [
								{ title: "Answer questions" },
								{ title: "Generate questions" },
								{ title: "Help think and create" },
								{ title: "Communicate" },
								{ title: "Fail" },
								{ title: "Force iteration" },
								{ title: "Get the world drunk and talking" }
							]
						},
						{
							title: "Prototyping for what we know",
							children: [
								{ title: "Announce" },
								{ title: "Commit" },
								{ title: "Confirm" },
								{ title: "Extend" },
							]
						},
						{
							title: "Prototyping for what we think we know",
							children: [
								{ title: "Prove null hypothesis" },
								{ title: "Compare A & B" },
							]
						},
						{
							title: "Prototyping for what we know we don't know",
							children: [
								{ title: "Explore" },
								{ title: "Stepwise Refinement" },
								{ title: "Proof of Concept" },
							]
						},
						{
							title: "Prototyping for what we don’t know we don't know",
							children: [
								{ title: "Discover" },
								{ title: "Handling" },
								{ title: "Playacting" },
							]
						}
					]
				},
				{
					title: "Contrary Views",
					children: [
						{
							title: "Design’s ROOTs",
							children: [
								{
									title: "Practices",
									children: [
										{ title: "Henry Dreyfuss - dissecting the product" },
										{ title: "Herbert Simon - changing existing situations into preferred ones" },
										{ title: "Victor Papenek - impose meaningful order" }
									]
								},
								{
									title: "Professionals",
									children: [
										{ title: "Result of an industrialized process of design" },
										{ title: "Professionalization imparts a focus on products" },
										{ title: "People as individual users of products" },
									]
								}
							]
						},
						{
							title: "Design Thinking not all it's cracked up to be",
							children: [
								{
									title: "Natasha Jen",
									children: [
										{ title: "Overly prescriptive" },
										{ title: "Prescriptions create a kind of prison" },
										{ title: "Not cross-pollinated" },
										{ title: "From ideas onto Post-its" },
										{ title: "Full of “ingroup” jargon" },
										{ title: "Reductive" },
									]
								},
								{
									title: "Iskander",
									children: [
										{ title: "Privileges the designer" },
										{ title: "Preserves the status-quo" },
										{ title: "ill-suited to rapidly changing problems" },
									]
								},
								{
									title: "McVey",
									children: [
										{ title: "Consumer waste)" },
										{ title: "hallmark of “good” design into intuitive use" },
									]
								}
							]
						},
						{
							title: "Critical Perspectives and Directions",
							children: [
								{ title: "Creating products for individuals" },
								{
									title: "Developing a larger range of actions",
									children: [
										{ title: "For community" },
										{ title: "With sustainability in mind" },
										{ title: "To bring about different futures" },
									]
								}
							]
						},
					]
				},
				{
					title: "Formal Methods of User Research",
					children: [
						{ title: "Population" },
						{
							title: "Sampling",
							children: [
								{
									title: "Probability",
									children: [
										{ title: "Simple random" },
										{ title: "Stratified" },
										{ title: "Clustered" },
									]
								},
								{
									title: "Non-Probability",
									children: [
										{ title: "Convenience" },
										{ title: "Purposive" },
										{ title: "Quota" },
										{ title: "Referral" },
										{ title: "Snowball sampling" },
									]
								},
								{
									title: "Representativeness",
									children: [
										{ title: "Bias" },
										{ title: "Dependent variable" },
									]
								},
							]
						},
						{
							title: "Random Sample",
							children: [
								{ title: "Build / Obtain Sampling frame" },
								{ title: "Build / obtain random number table" },
								{
									title: "Decide on sample size",
									children: [
										{ title: "Prevision required" },
										{ title: "Confidence level desired" },
										{ title: "Variability within population" },
										{ title: "Sampling method" },
									]
								},
							]
						},
						{
							title: "Concept are Mental Constructs",
							children: [
								{ title: "Conservatism" },
								{ title: "Willingness to buy" },
								{ title: "Frustration" },
								{ title: "Value of my time" },
								{ title: "Concern for the environment" },
							]
						},
						{
							title: "Operationalization",
							children: [
								{ title: "Observed behavior" },
								{ title: "Reported behavior" },
								{ title: "Reported attitude" },
								{ title: "Artifacts" },
							]
						},
						{
							title: "Levels of Measurement",
							children: [
								{ title: "Nominal" },
								{ title: "Ordinal" },
								{ title: "Interval" },
								{ title: "Ratio" },
							]
						},
						{
							title: "Creating Question for a Survey",
							children: [
								{ title: "Start with the concepts you want to measure" },
								{ title: "What will you ask about to detect the operationalization?" },
								{ title: "What's the best way to ask?" },
							]
						},
						{
							title: "Hints for good survey items",
							children: [
								{ title: "Avoid jargon, vagueness, and imprecision" },
								{ title: "Keep it simple" },
								{ title: "Provide frame of reference" },
								{ title: "Avoid double barrelled questions." },
								{ title: "Exhaustive & Mutually Exclusive Responses" },
								{ title: "Scales should be unambiguously ordinal" },
								{ title: "Don't use inflammatory language" },
							]
						},
						{
							title: "Properties of Measurement",
							children: [
								{ title: "Validity" },
								{ title: "Precision" },
								{ title: "Accuracy" },
								{ title: "Reliability" },
							]
						},
					]
				},
				{
					title: "Making Sense of Quantitative Data",
					children: [
						{
							title: "Probability Value",
							children: [
								{ title: "Given that the null hypothesis is true" },
								{ title: "What’s the chance of getting the observed" },
							]
						},
						{
							title: "Null Hypothesis",
							children: [
								{ title: "No difference between experimental and control outcomes" },
							]
						},
						{
							title: "Why do we care?",
							children: [
								{ title: "True positive: Benefit of change - Cost of change" },
								{ title: "False negative: forego benefit of change" },
								{ title: "False positive: Cost of change" },
								{ title: "True negative: Status quo revenue" },
							]
						},
						{
							title: "Distributions",
							children: [
								{ title: "Skew" },
								{ title: "Bimodal" },
								{ title: "U-shaped" },
								{ title: "Long tails" },
								{ title: "Uniform" },
								{ title: "Normal" },
							]
						},
						{
							title: "Bernoulli Process",
							children: [
								{ title: "Binary random variables" },
							]
						},
						{
							title: "Binomial Distribution",
							children: [
								{ title: "Sampling distribution" },
								{ title: "Central Limit Theorem" },
							]
						},
						{ title: "A/B Testing" },
					]
				}
			]
		}
	}

	TreeData = ({data}, level = 0) => {
		return (
			data.map(m => {
				return (<Tree content={m.title} open={level === 0}>
					{m.children && <this.TreeData data={m.children} level={1} />}
				</Tree>);
			})
		)
	}

	render() {

		const {data} = this.state;

		return (
			<div className='Inf2196__ctn'>

				<section className='header'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col'>
								<h1>What was this course about?</h1>
							</div>
						</div>
					</div>
				</section>

				<section className='overview'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								<h2>Overview</h2>
								<p>Visual representation of major concepts covered in INF2169 - User-Centred Information Systems Development as a sub-nested tree data structure.</p>
							</div>
						</div>
					</div>
				</section>

				<section className='tree'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								<this.TreeData data={data} />
							</div>
						</div>
					</div>
				</section>

			</div>
		);
	}
}

export default Inf2196;
