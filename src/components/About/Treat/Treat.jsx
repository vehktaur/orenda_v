import React from 'react';
import './Treat.css';
import bipolar from '../../../assets/bipolar.png';
import trauma from '../../../assets/trauma.png';
import adhd from '../../../assets/adhd.png';
import panic from '../../../assets/panic.png';
import depression from '../../../assets/depression.png';

const Treat = () => {
  const ailments = [
    { image: panic, text: 'Anxiety and Panic Disorders' },
    { image: adhd, text: 'Hyperactivity disorders (ADHD/ADD)' },
    { image: depression, text: 'Depression and mood Disorders' },
    { image: trauma, text: 'Trauma and PTSD' },
    { image: bipolar, text: 'Bipolar Disorder' },
    { image: trauma, text: 'Borderline Personality Disorder' },
    { image: depression, text: 'Eating and Sleeping Disorders' },
    { image: panic, text: 'Relationship Issues' },
    { image: depression, text: 'Stress Management' },
    { image: adhd, text: 'Life changes and Transitions' },
    { image: adhd, text: 'Grief and Loss' },
    { image: depression, text: 'LGBTQ+ Issues' },
    { image: trauma, text: 'Self-esteem and Identity Exploration' },
    { image: panic, text: 'Parenting and Family Dynamics' },
    { image: trauma, text: 'Work-related Stress and Burnout' }
  ];
  return (
    <div className="treat-container ~/sm:~px-1/5">
      <div className="treat-wrapper max-w-7xl mx-auto py-16">
        <div>
          <h1 className="heading mb-4">What we Treat</h1>
          <p className="px-2 font-body text-center">
            We offer therapy and medication management for a wide range of
            mental health concerns, including:
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-6 justify-items-center py-8 max-w-[61.25rem] mx-auto">
          {ailments.map((ailment) => (
            <div key={ailment.text} className="ailment w-full max-h-[10rem] sm:max-h-[unset]">
              <img src={ailment.image} alt="" />
              <p>{ailment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treat;
