import React from "react";
import "./Treat.css";
import bipolar from "../../../assets/bipolar.png";
import trauma from "../../../assets/trauma.png";
import adhd from "../../../assets/adhd.png";
import panic from "../../../assets/panic.png";
import depression from "../../../assets/depression.png";
import call from "../../../assets/call.png";

const Treat = () => {
  return (
    <div className="treat-container">
      <div className="treat-wrapper">
        <div className="txtss">
          <h1>What we Treat</h1>
          <p>
            We offer therapy and medication management for a wide range of mental
            health concerns, including:
          </p>
        </div>

        <div className="stick-cards">
          <div className="stckers">
            <div className="sticky">
              <img src={panic} alt="" />
              <p>Anxiety and Panic Disorders</p>
            </div>
            <div className="sticky">
              <img src={adhd} alt="" />
              <p>Hyperactivity disorders (ADHD/ADD)</p>
            </div>
            <div className="sticky">
              <img src={depression} alt="" />
              <p>Depression and mood Disorders</p>
            </div>
            <div className="sticky">
              <img src={trauma} alt="" />
              <p>Trauma and PTSD</p>
            </div>
            <div className="sticky">
              <img src={bipolar} alt="" />
              <p>Bipolar Disorder</p>
            </div>
          </div>

          <div className="stckers">
            <div className="sticky">
              <img src={trauma} alt="" />
              <p>Borderline Personality Disorder</p>
            </div>
            <div className="sticky">
              <img src={depression} alt="" />
              <p>Eating and Sleeping Disorders</p>
            </div>
            <div className="sticky">
              <img src={panic} alt="" />
              <p>Relationship Issues</p>
            </div>
            <div className="sticky">
              <img src={depression} alt="" />
              <p>Stress Management</p>
            </div>
            <div className="sticky">
              <img src={adhd} alt="" />
              <p>Life changes and Transitions</p>
            </div>
          </div>

          <div className="stckers">
            <div className="sticky">
              <img src={adhd} alt="" />
              <p>Grief and Loss</p>
            </div>
            <div className="sticky">
              <img src={depression} alt="" />
              <p>LGBTQ+ Issues</p>
            </div>
            <div className="sticky">
              <img src={trauma} alt="" />
              <p>Self-esteem and Identity Exploration</p>
            </div>
            <div className="sticky">
              <img src={panic} alt="" />
              <p>Parenting and Family Dynamics</p>
            </div>
            <div className="sticky">
              <img src={trauma} alt="" />
              <p>Work-related Stress and Burnout</p>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Treat;
