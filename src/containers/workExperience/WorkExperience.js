import React, {useContext} from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function WorkExperience() {
    const {isDark} = useContext(StyleContext)
    if(workExperiences.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experiences</h1>
                        <div className="experience-cards-div">
									<VerticalTimeline className={isDark ? 'v-line-dark' : 'v-line-light'}>
										{workExperiences.experience.map((exp, idx) => 
											<VerticalTimelineElement
												key={idx}
												className="vertical-timeline-element--work"
												contentStyle={{ background: isDark ? '#ffffff' : '#f3f3f3', color: 'black' }}
												contentArrowStyle={{ borderRight: isDark ? '7px solid  #ffffff' : '7px solid  #f3f3f3' }}
												date={exp.date}
												dateClassName={isDark ? 'date-style-dark' : 'date-style-light'}
												iconStyle={{ background: 'black', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center", fontSize: 24 }}
												icon={<i className={exp.icon}></i>}
											>
												<h3 className="vertical-timeline-element-title">{exp.role}</h3>
												<h3 className="vertical-timeline-element-subtitle company_name">{exp.company}</h3>
												<p>{exp.desc}</p>
												<ul className="vertical-timeline-sub-bullets">
													{exp.descBullets.map((d,i) => <li key={exp.date + '__' + i}>{d}</li>)}
												</ul>
											</VerticalTimelineElement>
										)}
										{/* <VerticalTimelineElement
											className="vertical-timeline-element--work"
											date="2010 - 2011"
											iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
											icon={<i className={'fab fa-react'}></i>}
										>
											<h3 className="vertical-timeline-element-title">Art Director</h3>
											<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
											<p>
												Creative Direction, User Experience, Visual Design, SEO, Online Marketing
											</p>
										</VerticalTimelineElement>
										<VerticalTimelineElement
											className="vertical-timeline-element--work"
											date="2008 - 2010"
											iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
											icon={<i className={'fab fa-react'}></i>}
										>
											<h3 className="vertical-timeline-element-title">Web Designer</h3>
											<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
											<p>
												User Experience, Visual Design
											</p>
										</VerticalTimelineElement>
										<VerticalTimelineElement
											className="vertical-timeline-element--work"
											date="2006 - 2008"
											iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
											icon={<i className={'fab fa-react'}></i>}
										>
											<h3 className="vertical-timeline-element-title">Web Designer</h3>
											<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
											<p>
												User Experience, Visual Design
											</p>
										</VerticalTimelineElement> */}
										<VerticalTimelineElement
											iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center", fontSize: 24 }}
											icon={<i className={'fas fa-graduation-cap'}></i>}
										/>
									</VerticalTimeline>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
