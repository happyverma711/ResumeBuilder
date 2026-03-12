import React, { useState, useEffect } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { IoMoon, IoSunny } from 'react-icons/io5';
import logo from './../../Assets/logo.png';

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleColorMode = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <nav id='navbar' className="sticky top-0 z-50 glass px-4 transition-colors duration-300 shadow-lg shadow-slate-200/50 dark:shadow-none">
            <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
                <ReachLink to='/'>
                    <div className="flex items-center transition-transform hover:scale-105">
                        <img style={{ height: '40px' }} className='logo' src={logo} alt="logo" />
                        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                            ResumeBuilder
                        </span>
                    </div>
                </ReachLink>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleColorMode}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all hover:ring-2 hover:ring-primary-500/50 hover:bg-white dark:hover:bg-slate-700 shadow-sm"
                        title="Toggle Dark Mode"
                    >
                        {isDark ? <IoSunny size={18} /> : <IoMoon size={18} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}