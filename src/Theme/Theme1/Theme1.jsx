import React, { useContext } from 'react'
import './theme1.css'
import './theme1.css'
import ResumeContext from '../../Context/ResumeContext'

const Theme1 = (props) => {
    const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
    const { themeData, componentRef } = props;
    const { name, profile, summary, address, phone, email, skill, profileImage } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <div id="section-to-print" ref={componentRef} className="bg-white p-12 min-h-[1120px] font-sans text-slate-900">
            <div id="theme1" className="max-w-[850px] mx-auto bg-white">
                
                {/* Header Section */}
                <header className="flex justify-between items-start pb-8 border-b-2 border-slate-950 mb-10">
                    <div className="flex-1 pr-12">
                        <h1 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">{name}</h1>
                        <h2 className="text-xl font-bold text-slate-800 mb-3 tracking-wide">{profile}</h2>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{summary}</p>
                    </div>
                    {profileImage && (
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-100 shadow-xl shrink-0">
                            <img src={profileImage} alt={name} className="w-full h-full object-cover" />
                        </div>
                    )}
                </header>

                <div className="flex">
                    {/* Left Sidebar Column - Contact & Skills */}
                    <div className="w-[30%] shrink-0 space-y-12 pr-10 border-r-2 border-slate-950 min-h-[700px]">
                        
                        {/* Contact Section */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-950 mb-6 tracking-widest">CONTACT</h3>
                            <div className="space-y-5">
                                <div>
                                    <p className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] mb-1">PHONE</p>
                                    <p className="text-sm text-slate-700">{phone}</p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] mb-1">EMAIL</p>
                                    <p className="text-sm text-slate-700 break-all">{email}</p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-950 uppercase tracking-[0.2em] mb-1">ADDRESS</p>
                                    <p className="text-sm text-slate-700 leading-tight">{address}</p>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-950 mb-6 tracking-widest">SKILLS</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.split(',').map((element, index) => (
                                    <span key={index} className="bg-slate-50 text-slate-800 px-3 py-1 rounded border border-slate-200 text-[12px] font-medium shadow-sm">
                                        {element.trim()}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Main Column - Content */}
                    <div className="flex-1 pl-12 space-y-12">
                        
                        {/* Education Section */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-950 mb-6 tracking-widest">EDUCATION</h3>
                            <div className="space-y-8">
                                {Object.entries(educationTitles).map((element, index) => (
                                    <div key={index}>
                                        <h4 className="font-bold text-slate-900 text-[15px] mb-2">{element[1]}</h4>
                                        <ul className="list-disc ml-5 space-y-1.5 marker:text-slate-900">
                                            {Object.entries(educationDesc)[index] && Object.entries(educationDesc)[index][1].split(',').map((desc, i) => (
                                                <li key={i} className="text-sm text-slate-700 leading-relaxed">{desc.trim()}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects Section */}
                        {!checkProj && (
                            <section>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-widest">PROJECTS</h3>
                                <div className="space-y-8">
                                    {Object.entries(projectTitles).map((element, index) => (
                                        <div key={index}>
                                            <h4 className="font-bold text-slate-900 text-[15px] mb-2">{element[1]}</h4>
                                            <ul className="list-disc ml-5 space-y-1.5 marker:text-slate-900">
                                                {Object.entries(projectDesc)[index] && Object.entries(projectDesc)[index][1].split(',').map((desc, i) => (
                                                    <li key={i} className="text-sm text-slate-700 leading-relaxed">{desc.trim()}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Work Experience Section */}
                        {!checkWork && (
                            <section>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-widest">WORK EXPERIENCE</h3>
                                <div className="space-y-8">
                                    {Object.entries(workTitles).map((element, index) => (
                                        <div key={index}>
                                            <h4 className="font-bold text-slate-900 text-[15px] mb-2">{element[1]}</h4>
                                            <ul className="list-disc ml-5 space-y-1.5 marker:text-slate-900">
                                                {Object.entries(workDesc)[index] && Object.entries(workDesc)[index][1].split(',').map((desc, i) => (
                                                    <li key={i} className="text-sm text-slate-700 leading-relaxed">{desc.trim()}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Awards Section */}
                        {!checkAward && (
                            <section>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-widest uppercase">AWARDS & ACHIEVEMENT</h3>
                                <ul className="list-disc ml-5 space-y-2 marker:text-slate-900">
                                    {awards.split(',').map((element, index) => (
                                        <li key={index} className="text-sm text-slate-700 leading-relaxed">{element.trim()}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theme1
