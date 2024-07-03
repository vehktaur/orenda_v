import React from "react";
import bloginfoframe from "../../assets/bloginfoframe.png";
import divarrleft from "../../assets/divarrleft.png";
import divarr from "../../assets/divarr.png";
import "./Blogs.css";
import worry from "../../assets/worry.png";
import profile from "../../assets/profile.png";
import x from "../../assets/X.png";
import LinkedIn from "../../assets/LinkedIn.png";
import facebook from "../../assets/Facebook.png";
import Messages from "../../assets/Messages.png";
import blogmobile from "../../assets/blogmobile.png";

const Bloginfo = () => {
  return (
    <div>
      <div className="max-w-[1215px] mx-auto p-6 bg-white flex flex-col gap-2">
        <h4 className="flex items-center justify-center font-dm-sans text-[#757575]">
          <span>Home / Blog / Understanding Anxiety Disorders</span>
        </h4>
        <h1 className="sm:text-[28px] font-medium text-center mb-4 font-heading mt-[13px] w-[70%] mx-auto">
          Understanding Anxiety Disorders
        </h1>
        <div className="flex items-center justify-center font-dm-sans">
          <button className="px-2 py-1 bg-white text-[#2E0086] rounded-[25px] border text-[14px] j ">
            Topic A
          </button>
          <p className="text-bold  text-black flex gap-1 items-center mt-[] mb-[]">
            <img src={divarrleft} alt="" /> 30 February 2024{" "}
            <img src={divarr} alt="" />
          </p>
        </div>
        <p className="mb-4 leading-[1.9rem] text-fluid">
          Anxiety disorders affect millions worldwide, yet understanding them
          remains elusive for many. From generalized anxiety disorder to panic
          disorder, these conditions can significantly impact daily life.
          Symptoms often include persistent worry, restlessness, and physical
          manifestations like rapid heartbeat or sweating. Fortunately, online
          psychiatry practices offer accessible solutions. Through virtual
          consultations, individuals can receive tailored treatment plans,
          including therapy and medication management, empowering them to manage
          their anxiety effectively.
        </p>
        <p className="mb-4 leading-[1.9rem] text-fluid">
          Anxiety disorders are among the most common mental health conditions
          worldwide, affecting individuals of all ages, backgrounds, and walks
          of life. Despite their prevalence, anxiety disorders often remain
          misunderstood and stigmatized, leaving many individuals struggling in
          silence. In this blog, we aim to shed light on anxiety disorders,
          offering insights into their various forms, symptoms, and treatment
          options available through online psychiatry practices.
        </p>

        <h2 className=" font-semibold mb-4 text-[1.2rem] font-heading pt-6 text-center w-[70%] mx-auto">
          Types of Anxiety Disorders: Decoding the Complexity
        </h2>
        <p className="mb-4 leading-[1.9rem] text-fluid">
          Anxiety disorders encompass a wide range of conditions, each with its
          own unique features and challenges. Generalized Anxiety Disorder
          (GAD), characterized by excessive worry and tension, is one of the
          most common forms of anxiety. Other types include Panic Disorder,
          Social Anxiety Disorder, Specific Phobias, and Obsessive-Compulsive
          Disorder (OCD). While the specific symptoms may vary, they all share a
          common thread of excessive fear or apprehension that interferes with
          daily functioning.
        </p>

        <h2 className="text-[1.2rem] font-semibold mb-4 text-center md:text-left font-heading pt-6 w-[70%] mx-auto md:w-[100%]">
          Recognizing the Symptoms: Signs to Watch For
        </h2>
        <div className=" justify-between gap-16 lg:flex">
          <img src={bloginfoframe} alt=""  className=" block mx-auto sm:my-4 md:my-5 lg:my-0"/>
          <p className="leading-[1.9rem] text-fluid">
            Identifying anxiety disorders can be challenging, as symptoms may
            manifest differently from person to person. Common signs include
            persistent feelings of fear or dread, restlessness, irritability,
            muscle tension, and difficulty concentrating. Physical symptoms such
            as rapid heartbeat, sweating, and shortness of breath may also
            accompany intense anxiety or panic attacks. It's essential to
            recognize these signs and seek professional help if they persist or
            significantly impact daily life.
          </p>
        </div>

        <h2 className=" font-semibold mb-4 text-[1.2rem] font-heading text-center  w-[70%] mx-auto md:pt-10 md:w-[100%] md:text-center">
          Treatment Options: A Path to Healing
        </h2>
        <p className="mb-4 leading-[1.9rem] text-fluid ">
          Fortunately, anxiety disorders are highly treatable with the right
          support and interventions. Online psychiatry practices offer a range
          of treatment options tailored to each individual's needs.
          Cognitive-behavioral therapy (CBT), a widely recognized and effective
          approach, helps individuals identify and challenge negative thought
          patterns and develop coping strategies to manage anxiety. Medication,
          such as selective serotonin reuptake inhibitors (SSRIs) or
          benzodiazepines, may also be prescribed to alleviate symptoms and
          provide relief.
        </p>

        <h2 className=" font-semibold mb-4 text-[1.2rem] font-heading pt-6 text-center md:text-left w-[70%] mx-auto md:w-[100%]">
          The Role of Online Psychiatry: Accessible and Effective Care
        </h2>
        <p className="mb-4 leading-[1.9rem] text-fluid">
          Online psychiatry practices play a crucial role in providing
          accessible and effective care for individuals with anxiety disorders.
          Through virtual consultations, individuals can connect with licensed
          psychiatrists and therapists from the comfort and privacy of their own
          homes. Online assessments help professionals gain a comprehensive
          understanding of each individual's symptoms and needs, allowing for
          personalized treatment plans that may include therapy, medication
          management, or a combination of both. Empowering Individuals on Their
          Journey to Wellness
        </p>

        <p className="leading-[1.9rem] text-fluid">
          By understanding anxiety disorders and accessing online psychiatry
          services, individuals can embark on a journey toward improved mental
          health and well-being. Breaking the silence surrounding anxiety and
          seeking help is the first step toward healing. With the right support
          and interventions, individuals can learn to manage their symptoms,
          regain control over their lives, and experience a renewed sense of
          hope and empowerment.
        </p>
        <img className="md:hidden" src={blogmobile} alt="" />
        <img className="w-[100%] h-auto my-6 md:block hidden " src={worry} alt="Worry Less" />

        <hr className="w-[100%] h-[2px] bg-gray-400 mt-24" />

        <div className="w-[100%] mt-6 md:mt-16 md:flex-row md:items-center md:justify-between flex flex-col gap-y-5">
          <div className="flex flex-col gap-4">
            <p className="text-[15px] font-bold text-[#5C5C5C]">
              This article was written by
            </p>
            <div className="flex items-center gap-3">
              <img src={profile} alt="" />
              <h2 className="font-heading text-[20px]">Gift Okiemute</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[24px] font-medium">Share on</p>
            <img src={x} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={facebook} alt="" />
            <img src={Messages} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 ~pt-10/[4.63rem] ~pb-10/[6.75rem] px-4 mt-6 ">
        <div className="max-w-[1260px] mx-auto bg-[#ECF5EB] border border-white rounded-2xl  flex justify-center items-center flex-col py-[50px] gap-y-5">
          <h3 className=" ~text-[1.25rem]/[2.625rem] font-semibold">Do you need to see someone?</h3>
          <p className="mt-2 text-fluid mx-auto max-w-[911px] text-center">
            If anxiety is impacting your life, don't hesitate to seek help.
            Contact a mental health professional for support and guidance.
          </p>
          <button className="mt-4 w-[30%]  py-[6px] bg-none text-[#127801] border border-[#127801] rounded-[25px] hover:bg-[#127801] hover:text-[white] transition-colors duration-400">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bloginfo;
