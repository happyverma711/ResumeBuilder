import React, { useContext } from 'react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import ResumeContext from '../../Context/ResumeContext';

export default function Introduction() {
    const { setShowComponent } = useContext(ResumeContext);

    const handleStartBuilding = () => {
        setShowComponent(true);
    }

    return (
        <div className="max-w-7xl mx-auto my-1.5 md:my-16 flex flex-col md:flex-row items-center justify-between px-4">
            <div className={`w-full md:w-[50%] text-center md:text-left flex flex-col items-center md:items-start space-y-6 md:space-y-10 py-6 md:py-10`}>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight dark:text-gray-100">
                    Build your resume in{' '}
                    <span className="text-primary-600 dark:text-primary-400 italic">minutes</span>
                </h1>

                <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                    Create a professional, job-winning resume with our easy-to-use resume builder. Stand out from the crowd and get your dream job with our resume builder application.
                </p>

                <div className="grid grid-cols-1 gap-4 w-full pt-4">
                    {[
                        { step: 1, text: "Click start building button." },
                        { step: 2, text: "Enter your details in the editor." },
                        { step: 3, text: "Download your PDF instantly." }
                    ].map((item) => (
                        <div key={item.step} className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md hover:border-primary-100 dark:hover:border-primary-900/50 shadow-sm">
                            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-600 text-white rounded-lg font-bold shadow-lg shadow-primary-600/20">
                                {item.step}
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <img src={homeLogo} alt='home logo' className="my-4 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] h-auto drop-shadow-2xl animate-float" />
                <button
                    onClick={handleStartBuilding}
                    className="group relative px-8 py-3.5 bg-primary-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:pr-12 shadow-xl shadow-primary-600/25 hover:bg-primary-700 active:scale-95"
                >
                    <span className="relative z-10">Start Building</span>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
                </button>
                <style jsx="true">{`
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0px); }
                    }
                    .animate-float {
                        animation: float 4s ease-in-out infinite;
                    }
                `}</style>
            </div>
        </div>
    );
}
