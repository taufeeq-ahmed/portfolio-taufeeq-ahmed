import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'

const SECTIONS = [
	{
		sectionName: "About",
		sectionId: "about"
	},
	{
		sectionName: "Experience",
		sectionId: "experience"
	},
	{
		sectionName: "Projects",
		sectionId: "projects"
	}
]

function Intro() {
	const [activeSection, setActiveSection] = useState('about')

	return (
		<div className={styles.intro}>
			<div className={styles.basic_details}>
				<h1 className={styles.name}>Brittany Chiang</h1>
				<h2 className={styles.position}>Lead Engineer at Upstatement</h2>
				<p className={styles.description}>I build accessible, inclusive products and digital experiences for the web.</p>
			</div>

			<div className={styles.section_details}>
				<ul className={styles.sections}>
					{SECTIONS.map((section) =>
						<li
							className={styles.section}
							id={section.sectionId}
							key={section.sectionId}
						>
							<div
								className={`${styles.line} ${section.sectionId === activeSection && styles.active_line}`}
							/>
							<div className={styles.section_name}>
								{section.sectionName}
							</div>
						</li>
					)}
				</ul>
			</div>

		</div>
	)
}

export default Intro