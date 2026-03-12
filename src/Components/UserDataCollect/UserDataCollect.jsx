import React, { useContext, useEffect, useState } from 'react'
import './userCollectData.css'
import { IoMdCloudUpload } from 'react-icons/io'
import ResumeContext from '../../Context/ResumeContext'

const UserDataCollect = () => {

    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext)

    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: './public/ProfilePic.png', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', })
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })

    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }

    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = { ...projectData }
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData(tempProjectData)
        setThemeData({ ...themeData, projectData: tempProjectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <div key={`proj-${i}`} className="space-y-4 my-4">
                <input
                    disabled={checkProj}
                    id={`pTitle${i}`}
                    name='pName'
                    onChange={handleChangeProject}
                    type='text'
                    placeholder='Enter Project Title'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] placeholder-gray-400 dark:placeholder-gray-200 disabled:bg-gray-100"
                    required
                />
                <textarea
                    disabled={checkProj}
                    id={`pDescription${i}`}
                    name='pDescription'
                    onChange={handleChangeProject}
                    placeholder='Use comma to separate Description'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] placeholder-gray-400 dark:placeholder-gray-200 disabled:bg-gray-100"
                    required
                />
            </div>
        )
        setProjArrTemplate([...projArrTemplate, template])
        setProjectCount(i)
    }

    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = { ...educationData }
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData(tempEducationData)
    }

    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount
        ++i;
        const template = (
            <div key={`edu-${i}`} className="space-y-4 my-4">
                <input
                    id={`eTitle${i}`}
                    name='eName'
                    onChange={handleChangeEducation}
                    type='text'
                    placeholder='Enter Title'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] placeholder-gray-400 dark:placeholder-gray-200"
                    required
                />
                <textarea
                    id={`eDescription${i}`}
                    name='eDescription'
                    onChange={handleChangeEducation}
                    placeholder='Use comma to separate Description'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] placeholder-gray-400 dark:placeholder-gray-200"
                    required
                />
            </div>
        )
        setEducationArrTemplate([...educationArrTemplate, template])
        setEducationCount(i)
    }

    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        let tempWorkData = { ...workData }
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData(tempWorkData)
    }

    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount
        ++i;
        const template = (
            <div key={`work-${i}`} className="space-y-4 my-4">
                <input
                    id={`wTitle${i}`}
                    name='wName'
                    onChange={handleChangeWork}
                    type='text'
                    placeholder='Enter Job Title'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] placeholder-gray-400 dark:placeholder-gray-200"
                    required
                />
                <textarea
                    id={`wDescription${i}`}
                    name='wDescription'
                    onChange={handleChangeWork}
                    placeholder='Use comma to separate Description'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] placeholder-gray-400 dark:placeholder-gray-200"
                    required
                />
            </div>
        )
        setWorkArrTemplate([...workArrTemplate, template])
        setWorkCount(i)
    }

    const handleChangeAwards = (e) => {
        const { name, value } = e.target
        setAwardData({ ...awardData, [name]: value })
    }

    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [personalData, projectData, educationData, workData, awardData, setThemeData])

    return (
        <div id="form-collect" className="space-y-6">
            {/* Personal Details Area  */}
            <section id="form-personal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 dark:text-gray-100">Personal Details</h4>
                <hr className="mb-4" />

                <div className="space-y-4">
                    <div className='flex flex-col items-center justify-center space-y-4 py-4'>
                        <div className="relative group">
                            <label htmlFor='input-file' className="flex items-center justify-center w-32 h-32 rounded-full cursor-pointer bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-[#7c3aed] hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all overflow-hidden">
                                {personalData.profileImage ? (
                                    <img
                                        className="w-full h-full object-cover"
                                        src={personalData.profileImage}
                                        alt="profile"
                                    />
                                ) : (
                                    <IoMdCloudUpload size={40} className="text-[#4f46e5]" />
                                )}
                                <div className="absolute border-[#4f46e5] inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <IoMdCloudUpload size={30} className="text-white" />
                                </div>
                            </label>
                            <input
                                accept="image/*"
                                name='profileImage'
                                onChange={handleChangePersonal}
                                id='input-file'
                                type='file'
                                className="hidden"
                            />
                        </div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Click to change photo</p>
                    </div>
                    <input name='name' onChange={handleChangePersonal} type='text' placeholder='Your Name' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
                    <input name='summary' onChange={handleChangePersonal} type='text' placeholder='Your Summary' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
                    <input name='profile' onChange={handleChangePersonal} type='text' placeholder='Work Profile' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
                    <input name='address' onChange={handleChangePersonal} type='text' placeholder='Address' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
                    <input name='phone' onChange={handleChangePersonal} type='tel' placeholder='Phone number' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
                    <input name='email' onChange={handleChangePersonal} type='email' placeholder='Email id' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
                </div>
            </section>

            {/* Skills Area  */}
            <section id="form-personal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 dark:text-gray-100">Technical Skills</h4>
                <hr className="mb-4" />
                <input name='skill' onChange={handleChangePersonal} type='text' placeholder='Separate skills by comma' className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200" required />
            </section>

            {/* Education Area  */}
            <section id="form-personal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 dark:text-gray-100">Education</h4>
                <hr className="mb-4" />
                <button onClick={handleEducationClick} className="w-full mt-4 bg-[#4f46e5] text-white font-bold py-2 rounded-md hover:bg-[#4338ca] transition-colors">Add Education</button>
                <div className="mt-4">
                    {educationCount > 0 && educationArrTemplate}
                </div>
            </section>

            {/* Projects Area  */}
            <section id="form-personal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold dark:text-gray-100">Projects</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!checkProj} onChange={() => setCheckProj(!checkProj)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4f46e5] dark:peer-focus:ring-[#4338ca] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4338ca]"></div>
                    </label>
                </div>
                <hr className="mb-4" />
                <button disabled={checkProj} onClick={handleProjectClick} className="w-full mt-4 bg-[#4f46e5] text-white font-bold py-2 rounded-md hover:bg-[#4338ca] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Add Projects</button>
                <div className="mt-4">
                    {projectCount > 0 && projArrTemplate}
                </div>
            </section>

            {/* Work Experience Area  */}
            <section id="form-personal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold dark:text-gray-100">Work Experience</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!checkWork} onChange={() => setCheckWork(!checkWork)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4f46e5] dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4338ca]"></div>
                    </label>
                </div>
                <hr className="mb-4" />
                <button disabled={checkWork} onClick={handleWorkClick} className="w-full mt-4 bg-[#4f46e5] text-white font-bold py-2 rounded-md hover:bg-[#4338ca] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Add Experience</button>
                <div className="mt-4">
                    {workCount > 0 && workArrTemplate}
                </div>
            </section>

            {/* Awards & Achievement  */}
            <section id="form-personal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold dark:text-gray-100">Awards & Achievement</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!checkAward} onChange={() => setCheckAward(!checkAward)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4f46e5] dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4338ca]"></div>
                    </label>
                </div>
                <hr className="mb-4" />
                <textarea
                    name='awards'
                    disabled={checkAward}
                    onChange={handleChangeAwards}
                    placeholder='Use comma to separate Achievement'
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f46e5] bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-600"
                    required
                />
            </section>
        </div>
    )
}

export default UserDataCollect
