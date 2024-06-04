import React from 'react';
import './Treat.css';
import bipolar from '../../../assets/bipolar.png';
import trauma from '../../../assets/trauma.png';
import adhd from '../../../assets/adhd.png';
import panic from '../../../assets/panic.png';
import depression from '../../../assets/depression.png';

const Treat = () => {
  return (
    <div className="treat-container px-5">
      <div className="treat-wrapper">
        <div className="txtss">
          <h1 className="heading mb-4">What we Treat</h1>
          <p className='font-body text-center'>
            We offer therapy and medication management for a wide range of
            mental health concerns, including:
          </p>
        </div>

        <div className="stick-cards grid grid-cols-3 lg:grid-cols-5 justify-items-center content-center justify-center">
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={panic} alt="" />
            <p>Anxiety and Panic Disorders</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={adhd} alt="" />
            <p>Hyperactivity disorders (ADHD/ADD)</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={depression} alt="" />
            <p>Depression and mood Disorders</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={trauma} alt="" />
            <p>Trauma and PTSD</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={bipolar} alt="" />
            <p>Bipolar Disorder</p>
          </div>

          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={trauma} alt="" />
            <p>Borderline Personality Disorder</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={depression} alt="" />
            <p>Eating and Sleeping Disorders</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={panic} alt="" />
            <p>Relationship Issues</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={depression} alt="" />
            <p>Stress Management</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={adhd} alt="" />
            <p>Life changes and Transitions</p>
          </div>

          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={adhd} alt="" />
            <p>Grief and Loss</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={depression} alt="" />
            <p>LGBTQ+ Issues</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={trauma} alt="" />
            <p>Self-esteem and Identity Exploration</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={panic} alt="" />
            <p>Parenting and Family Dynamics</p>
          </div>
          <div className="stickyy ~w-[7.875rem]/[12.25rem] ~h-[7.25rem]/[11.25rem]">
            <img src={trauma} alt="" />
            <p>Work-related Stress and Burnout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treat;
