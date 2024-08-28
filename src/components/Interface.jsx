import React, { useEffect, useState } from 'react';

import image from '../Image/balaport2.jpg';
import menubar from '../Image/menubar.png';
import resume from '../Image/BalaHariHaran Resume.pdf';
import cancel from '../Image/cancel.png';
import graphic from '../Image/graphic.png';
import database from '../Image/database.png';
import programmer from '../Image/programmer.png';
import wordpress from '../Image/wordpress.png';
import webdesigner from '../Image/web.png';
import home from '../Image/home.png'
import email from '../Image/email.png'
import phone from '../Image/phone.png'

// ---------marquee images---------
import css from '../Image/css.png'
import html from '../Image/html.png'
import tailwind from '../Image/tailwind.png'
import react from '../Image/react.png'
import express from '../Image/express.png'
import mongodb from '../Image/mongodb.png'
import node from '../Image/node.png'
import js from '../Image/js.png'
import photoshop from '../Image/photoshop.png'
import figma from '../Image/figma.png'
import postman from '../Image/postman.png'
import wp from '../Image/wp.png'
// -------------------------------------------------

import styles from '../css/Interface.module.css'

const useTypingEffect = (texts, speed) => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];
      setCurrentText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, textIndex, texts, speed]);

  return currentText;
};

const Interface = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const texts = ["Full Stack Developer", "Web Designer", "Photographer"];
  const typingSpeed = 100;
  const typedText = useTypingEffect(texts, typingSpeed);
  const [activeSection, setActiveSection] = useState(null);


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      {/* Header */}
      <div className='sticky top-0 z-10 bg-white text-gray-900 shadow-md'>
        <div className='h-[10%] p-2 flex justify-between items-center md:p-4'>
          <h1 className='text-2xl font-bold text-blue-600'>Portfolio</h1>
          <nav className='hidden md:flex gap-6 text-lg'>
            <a href="#home" className='hover:text-blue-400'>Home</a>
            <a href="#about" className='hover:text-blue-400'>About</a>
            <a href="#education" className='hover:text-blue-400'>Education</a>
            <a href="#skills" className='hover:text-blue-400'>Skills</a>
            <a href="#contact" className='hover:text-blue-400'>Contact</a>
          </nav>
          <img src={menubar} alt="Menu" className='w-6 h-5 md:hidden cursor-pointer' onClick={toggleSidebar} />
        </div>
      </div>

      {/* Main Content */}
      <div className='w-full h-screen bg-gray-100 text-gray-800 relative overflow-x-auto'>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-8/12 bg-gray-200 text-gray-900 z-20 transition-transform duration-400 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <nav className='flex flex-col p-10 w-full h-full gap-6 text-lg relative'>
            <img src={cancel} alt="Close Menu" className='absolute right-3 top-3 w-6 cursor-pointer' onClick={toggleSidebar} />
            <a href="#home" className='hover:text-blue-400'>Home</a>
            <a href="#about" className='hover:text-blue-400'>About</a>
            <a href="#education" className='hover:text-blue-400'>Education</a>
            <a href="#skills" className='hover:text-blue-400'>Skills</a>
            <a href="#contact" className='hover:text-blue-400'>Contact</a>
          </nav>
        </div>

        {/* Hero Section */}
        <div className='flex flex-col md:flex-row h-[88%] p-5 md:h-[100%]'>
          <div className='flex-1 flex justify-center items-center'>
            <img src={image} alt="Profile" className='rounded-full shadow-lg object-cover w-72 h-72 md:w-[300px] md:h-[300px]' />
          </div>
          <div className='flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
            <h1 className='text-2xl md:text-4xl font-bold'>Hello Everyone!</h1>
            <h2 className='text-xl md:text-3xl font-semibold mt-2'>
              I'm <span className='text-blue-600'>Bala Hariharan</span>
            </h2>
            <p className='mt-2 text-lg md:text-2xl text-green-600'>{typedText}|</p>
            <p className='mt-4 text-sm md:text-lg max-w-md'>
              I am a passionate Full Stack Developer from India, dedicated to creating beautiful, functional, and user-friendly websites. Let's collaborate and bring your ideas to life!
            </p>
            <div className='mt-6 flex gap-6'>
              <a href={resume} download="BalaHariHaran_Resume.pdf" className='bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition'>
                Download CV
              </a>
              <a href="mailto:balahariharan.mca@gmail.com" className='bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition'>
                Hire Me
              </a>
            </div>
          </div>
        </div>


        {/* About Section */}
        <div className='w-full flex justify-center items-center py-10 px-5 md:py-28 bg-gray-50'>
          <div className='max-w-5xl'>
            <div  className='text-center'>
              <p className='tracking-[10px] text-gray-500 text-xl'>ABOUT ME</p>
              <h1 className='mt-10 text-3xl md:text-4xl font-bold underline'>
                Who Am I?
              </h1>
            </div>
            <div className='mt-6 text-lg leading-relaxed text-gray-700'>
              <p>
                Hi! I am <b className='text-xl text-gray-900'>Bala</b>, a versatile and passionate Full Stack Developer, Web Designer, Photographer, and Video Editor. I specialize in creating fully-fledged websites that not only showcase technical expertise but also deliver exceptional user experiences. My goal is to craft interactive and visually appealing solutions that satisfy customer needs and exceed expectations.
              </p>

            </div>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-5 gap-6'>

              <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300'>
                <img src={programmer} alt="Web Developer" className='w-16 h-16' />
                <h1 className='mt-2 text-sm font-semibold text-gray-900 md:text-xl'>Web Developer</h1>
              </div>

              <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300'>
                <img src={graphic} alt="Graphic Designer" className='w-16 h-16' />
                <h1 className='mt-2 text-sm font-semibold text-gray-900 md:text-xl'>Graphic Designer</h1>
              </div>

              <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300'>
                <img src={webdesigner} alt="Web Designer" className='w-16 h-16' />
                <h1 className='mt-2 text-sm font-semibold text-gray-900 md:text-xl'>Web Designer</h1>
              </div>

              <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300'>
                <img src={database} alt="Database Management" className='w-16 h-16' />
                <h1 className='mt-2 text-sm font-semibold text-gray-900 md:text-xl'>Database Management</h1>
              </div>

              <div className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300'>
                <img src={wordpress} alt="WordPress" className='w-16 h-16' />
                <h1 className='mt-2 text-sm font-semibold text-gray-900 md:text-xl'>WordPress</h1>
              </div>
            </div>
          </div>
        </div>


        {/* --------------------About Us section finish Here----------------- */}

        {/* ------------------------Education Section------------------------- */}

        <div className='w-full h-screen flex justify-center flex-col items-center bg-gray-100 overscroll-x-auto'>
          <div className='w-full h-full py-20 px-5 flex items-center flex-col md:px-20'>
            <div className='text-center mt-1 md:mt-0'>
              <p className='tracking-[10px] text-gray-600 text-lg'>EDUCATION</p>
              <h1 className='mt-5 text-3xl md:text-4xl font-bold text-gray-800 underline'>My Education</h1>
            </div>

            <div className='mt-10 w-full space-y-8'>

              {/* Post Graduation */}
              <div className='bg-white shadow-md rounded-lg transition-all'>
                <div
                  className='flex justify-between items-center p-5 bg-red-500 cursor-pointer rounded-t-lg'
                  onClick={() => toggleSection('postGrad')}
                >
                  <h1 className='text-white text-xl font-semibold'>POST GRADUATION</h1>
                  <span className='text-white text-2xl'>{activeSection === 'postGrad' ? '-' : '+'}</span>
                </div>
                {activeSection === 'postGrad' && (
                  <div className='p-5 bg-gray-50 rounded-b-lg transition-all'>
                    <h1 className='text-gray-800 text-lg font-semibold'>MASTER OF COMPUTER APPLICATION</h1>
                    <ul className='list-disc list-inside mt-2 text-gray-700'>
                      <li>J.J. College of Arts & Science</li>
                      <li>Year of Passing: Pursuing</li>
                      <li>CGPA: 8.6</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Under Graduation */}
              <div className='bg-white shadow-md rounded-lg transition-all'>
                <div
                  className='flex justify-between items-center p-5 bg-blue-500 cursor-pointer rounded-t-lg'
                  onClick={() => toggleSection('underGrad')}
                >
                  <h1 className='text-white text-xl font-semibold'>UNDER GRADUATION</h1>
                  <span className='text-white text-2xl'>{activeSection === 'underGrad' ? '-' : '+'}</span>
                </div>
                {activeSection === 'underGrad' && (
                  <div className='p-5 bg-gray-50 rounded-b-lg transition-all'>
                    <h1 className='text-gray-800 text-lg font-semibold'>BACHELOR OF COMMERCE WITH COMPUTER APPLICATION</h1>
                    <ul className='list-disc list-inside mt-2 text-gray-700'>
                      <li>Vidhya Giri College of Arts & Science</li>
                      <li>Year of Passing: 2023</li>
                      <li>CGPA: 7.8</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* HSC */}
              <div className='bg-white shadow-md rounded-lg transition-all'>
                <div
                  className='flex justify-between items-center p-5 bg-green-500 cursor-pointer rounded-t-lg'
                  onClick={() => toggleSection('hsc')}
                >
                  <h1 className='text-white text-xl font-semibold'>HSC</h1>
                  <span className='text-white text-2xl'>{activeSection === 'hsc' ? '-' : '+'}</span>
                </div>
                {activeSection === 'hsc' && (
                  <div className='p-5 bg-gray-50 rounded-b-lg transition-all'>
                    <h1 className='text-gray-800 text-lg font-semibold'>Commerce with Computer Application</h1>
                    <ul className='list-disc list-inside mt-2 text-gray-700'>
                      <li>Alagappa Model Higher Secondary School</li>
                      <li>Year of Passing: 2020</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------Education section finish here-------------------------- */}

        {/* ---------------------------skill section---------------------------------- */}


        <div className='w-full bg-white'>
          <div className='w-full h-full' >
            <div className='flex justify-center'>
              <h1 className='text-lg mt-24 tracking-[10px] text-gray-600'>Skills</h1>
            </div>
            <div className='mt-10 bg-gray-100 py-5'>
              <div className='overflow-x-auto whitespace-nowrap'>
                <div className={styles.marquee}>
                  <img src={html} alt="HTML Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={css} alt="CSS Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={js} alt="JavaScript Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={tailwind} alt="Tailwind Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={react} alt="React Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={express} alt="Express Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={node} alt="Node Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={mongodb} alt="MongoDB Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={photoshop} alt="Photoshop Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={figma} alt="Figma Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={postman} alt="Postman Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                  <img src={wp} alt="WordPress Icon" className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain inline-block' />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
              <div className='p-4'>
                <h1 className='text-xl font-semibold mb-4'>FRONTEND</h1>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    HTML <span>100%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    CSS <span>100%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    TAILWIND CSS <span>100%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    JAVASCRIPT <span>84%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    REACT JS <span>87%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <h1 className='text-xl font-semibold mb-4'>BACKEND</h1>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    EXPRESS JS <span>90%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    NODE JS <span>78%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    SQL <span>76%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    MONGODB <span>93%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '93%' }}></div>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <h1 className='text-xl font-semibold mb-4'>DESIGNING</h1>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    FIGMA <span>96%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    PHOTOSHOP <span>99%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '99%' }}></div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h2 className='font-medium flex justify-between'>
                    WORDPRESS <span>67%</span>
                  </h2>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* ------------------------------------------------------------------------------------------------------------------ */}

{/* ------------------------------------------------------------------------------------------------------------------ */}

<div className="w-full h-screen flex items-center justify-center bg-gray-100 md:px-10 py-10">
  <div className="max-w-4xl w-full overflow-hidden bg-white p-8 rounded-lg shadow-lg">
    <div className="text-center mb-8">
      <h1 className="text-xl tracking-[10px] text-gray-600">Contact</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-start">
          <img src={home} alt="Home-Icon" className="w-8 h-8 mr-4" />
          <div>
            <h1 className="font-semibold text-lg text-gray-700">Our Location</h1>
            <a href="https://www.google.com/maps/search/No:1,Keelatheru,Karaikudi+-+630001" target="_blank" className="text-gray-600 hover:underline">No:1, Keelatheru, Karaikudi - 630001</a>
          </div>
        </div>
        <div className="flex items-start">
          <img src={phone} alt="Phone-Icon" className="w-8 h-8 mr-4" />
          <div>
            <h1 className="font-semibold text-lg text-gray-700">Phone Number</h1>
            <a href="tel:+918667371564" className="text-gray-600 hover:underline">+91 8667371564</a>
          </div>
        </div>
        <div className="flex items-start">
          <img src={email} alt="E-mail Icon" className="w-8 h-8 mr-4" />
          <div>
            <h1 className="font-semibold text-lg text-gray-700">Email Address</h1>
            <a href="mailto:balahariharan.mca@gmail.com" className="text-gray-600 hover:underline">balahariharan.mca@gmail.com</a>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
            <input type="number" name="phone" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea name="message" cols="20" rows="5" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div>
            <button className='px-5 bg-blue-600 py-1 text-white rounded-lg'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default Interface;
