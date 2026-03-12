import React, { useContext } from 'react'
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'

import ResumeContext from '../Context/ResumeContext';
import { PropagateLoader } from "react-spinners";

const BuilderArea = (props) => {
    const { loading, handlePrint, componentRef } = useContext(ResumeContext)

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md">
                    <PropagateLoader color="#6366f1" size={25} />
                </div>
            )}

            <div className="max-w-[1600px] mx-auto px-4 py-4 md:py-8">
                <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
                    {/* Form Section */}
                    <div className="w-full lg:w-[380px] xl:w-[450px] shrink-0 order-2 lg:order-1">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200/50 dark:border-slate-800 lg:sticky lg:top-24">
                            <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-800">
                                <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Resume Editor</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Fill in your details below</p>
                            </div>
                            <div className="p-4 md:p-6 lg:h-[calc(100vh-200px)] lg:min-h-[500px] overflow-y-auto custom-scrollbar">
                                <UserDataCollect />
                            </div>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between glass p-4 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none gap-4">
                                <h2 className="text-lg font-bold text-slate-700 dark:text-slate-200">Live Preview</h2>
                                <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-center sm:justify-end">
                                    <button
                                        onClick={() => componentRef.current && handlePrint()}
                                        disabled={!componentRef.current}
                                        className="px-6 py-2.5 bg-primary-600 text-white font-bold text-sm md:text-base rounded-xl hover:bg-primary-700 transform hover:scale-[1.02] transition-all shadow-lg shadow-primary-600/30 active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Download PDF
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden relative">
                                <div className="preview-container w-full bg-slate-100 dark:bg-slate-800/50 flex justify-center p-4 md:p-8 overflow-auto">
                                    <div className="preview-scaler-wrapper bg-white shadow-lg origin-top transition-transform duration-300">
                                        <div className="w-[800px] min-h-[1132px] overflow-hidden">
                                            {props.theme}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <style jsx="true">{`
                                .preview-container {
                                    min-height: 400px;
                                }
                                .preview-scaler-wrapper {
                                    width: 800px;
                                }
                                /* Big Desktop / High Res */
                                @media (min-width: 1536px) {
                                    .preview-scaler-wrapper {
                                        transform: scale(1.1);
                                    }
                                    .preview-container {
                                        height: 1300px;
                                    }
                                }
                                /* Standard Desktop / Laptop */
                                @media (min-width: 1280px) and (max-width: 1535px) {
                                    .preview-scaler-wrapper {
                                        transform: scale(1);
                                    }
                                    .preview-container {
                                        height: 1200px;
                                    }
                                }
                                /* Small Laptop / Tablet Landscape */
                                @media (min-width: 1024px) and (max-width: 1279px) {
                                    .preview-scaler-wrapper {
                                        transform: scale(0.8);
                                    }
                                    .preview-container {
                                        height: 1000px;
                                    }
                                }
                                /* Tablet Portrait */
                                @media (min-width: 768px) and (max-width: 1023px) {
                                    .preview-scaler-wrapper {
                                        transform: scale(0.85);
                                    }
                                    .preview-container {
                                        height: 1050px;
                                    }
                                }
                                /* Mobile L */
                                @media (min-width: 481px) and (max-width: 767px) {
                                    .preview-scaler-wrapper {
                                        transform: scale(0.65);
                                    }
                                    .preview-container {
                                        height: 800px;
                                    }
                                }
                                /* Mobile S/M */
                                @media (max-width: 480px) {
                                    .preview-scaler-wrapper {
                                        transform: scale(0.42);
                                    }
                                    .preview-container {
                                        height: 550px;
                                    }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuilderArea
