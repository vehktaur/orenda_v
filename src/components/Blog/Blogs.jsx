import React, { useState } from "react";
import divarr from "../../assets/divarr.png";
import divarrleft from "../../assets/divarrleft.png";
import { Link } from "react-router-dom";


const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const blogs = [
    // (The array of blog objects remains the same)
    {
      title: "Understanding Anxiety Disorders",
      date: "30 February 2024",
      category: "Topic A",
      description:
        "Anxiety disorders affect millions worldwide, yet understanding them remains elusive for many. From generalized anxiety disorder to panic disorder, these conditions can significantly impact daily life. Symptoms often include persistent worry, restlessness, and physical manifestations like rapid heartbeat or sweating. Fortunately, online psychiatry practices offer accessible solutions. Through virtual consultations, individuals can receive tailored treatment plans, including therapy and medication management, empowering them to manage their anxiety effectively.",
    },
    {
      title: "The Role of Telepsychiatry in Mental Health",
      date: "15 January 2024",
      category: "Topic B",
      description: `In an increasingly digital world, mental health care is evolving to meet the needs of diverse populations. Telepsychiatry, the provision of psychiatric services via telecommunications technology, is at the forefront of this transformation. Through secure video conferencing and digital platforms, individuals can access a range of mental health services, from assessments to therapy sessions and medication management. This approach not only enhances accessibility but also overcomes barriers such as geographical distance and stigma. By embracing telepsychiatry, mental health care becomes more inclusive, convenient, and effective, ensuring that no one is left behind on the journey toward wellness.`,
    },
    {
      title: "Coping with Depression: Tips and Strategies",
      date: "01 January 2024",
      category: "Topic B",
      description: `Depression can cast a shadow over every aspect of life, making even the simplest tasks feel overwhelming. While seeking professional help is essential, there are also practical steps individuals can take to manage their symptoms. Incorporating self-care practices like regular exercise, adequate sleep, and healthy eating habits can make a significant difference. Additionally, engaging in activities that bring joy and seeking social support can provide much-needed comfort during difficult times. Online psychiatry practices offer a lifeline for those struggling with depression, providing personalized support and treatment options tailored to each individual's needs. By combining self-care strategies with professional guidance, individuals can navigate their journey toward recovery with hope and resilience.`,
    },
    {
      title: "Dispelling Myths About Psychiatric Medications",
      date: "13 December 2023",
      category: "Topic C",
      description: `Psychiatric medications play a vital role in treating mental health conditions, yet they are often shrouded in myths and misconceptions. One prevalent myth is that these medications are addictive. In reality, most psychiatric medications are not addictive when taken as prescribed under the supervision of a qualified healthcare provider. Another misconception is that they will fundamentally change one's personality. While these medications can alleviate symptoms, they do not alter a person's core identity. By dispelling these myths and educating ourselves about psychiatric medications, we can reduce stigma and encourage more open discussions about mental health. Through online psychiatry practices, individuals can access accurate information and personalized treatment plans, empowering them to make informed decisions about their mental health care.`,
    },
    {
      title: "Navigating ADHD in Adults",
      date: "29 November 2023",
      category: "Topic A",
      description: `Attention-deficit/hyperactivity disorder (ADHD) is often associated with childhood, but it can persist into adulthood, presenting unique challenges. Adults with ADHD may struggle with organization, time management, and maintaining focus in various aspects of their lives, from work to relationships. However, with the right support and strategies, they can thrive. Online psychiatry practices offer tailored treatment options, including medication management and therapy, to address the specific needs of adults with ADHD. Through personalized care plans and ongoing support, individuals can learn to manage their symptoms effectively, unlocking their full potential and achieving greater success in all areas of life.`,
    },
    {
      title: "Self-Care Practices for Better Mental Health",
      date: "30 September 2023",
      category: "Topic C",
      description: `In the hustle and bustle of daily life, prioritizing mental health can often take a back seat. However, self-care practices play a crucial role in maintaining emotional well-being. Simple activities like practicing mindfulness, engaging in hobbies, and spending time in nature can have profound effects on mental health. Online psychiatry practices emphasize the importance of self-care alongside professional treatment. By incorporating these practices into daily routines, individuals can cultivate resilience, reduce stress, and enhance overall quality of life. Remember, self-care isn't selfish—it's essential for nurturing a healthy mind and body.`,
    },
    {
      title: "Managing Stress in the Digital Age",
      date: "18 August 2023",
      category: "Topic A",
      description: `In today's hyperconnected world, technology offers countless benefits but also brings its fair share of stressors. From constant notifications to the pressure to always be available, digital overload can take a toll on mental health. To manage stress in the digital age, it's essential to set boundaries, practice digital detoxes, and prioritize real-life connections. Online psychiatry services provide additional support, offering strategies for stress management and coping skills tailored to modern challenges. By striking a balance between digital engagement and disconnection, individuals can reclaim control over their mental well-being in the digital age.`,
    },
    {
      title: "Understanding Bipolar Disorder: Symptoms and Management",
      date: "09 August 2023",
      category: "Topic B",
      description: `Bipolar disorder is a complex mental health condition characterized by extreme mood swings, ranging from manic highs to depressive lows. Recognizing the symptoms and understanding the different phases of the disorder are essential for effective management. Treatment typically involves a combination of medication, therapy, and lifestyle adjustments. Online psychiatry services offer comprehensive care, providing individuals with access to medication management, psychoeducation, and therapeutic support from the comfort of their own homes. By gaining a deeper understanding of bipolar disorder and seeking timely treatment, individuals can stabilize their moods and lead fulfilling lives.`,
    },
    {
      title: "Parenting a Child with Mental Health Challenges",
      date: "16 June 2023",
      category: "Topic B",
      description: `Parenting a child with mental health challenges can be both rewarding and daunting. It's essential for parents to educate themselves about their child's condition, advocate for their needs, and prioritize self-care. Online resources and support groups can provide valuable information and a sense of community for parents navigating this journey. Additionally, online psychiatry practices offer specialized services for children and adolescents, including diagnostic assessments, therapy, and medication management. By seeking professional help and building a strong support network, parents can provide their child with the love, understanding, and resources they need to thrive.`,
    },
  ];

  const filteredBlogs =
    selectedCategory === "All categories"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      <div className="max-w-7xl
      
      
      
      
      mx-auto px-4 py-8">
        <h1 className="text-black text-4xl font-bold mb-[32px] text-center font-heading mt-[120px]">
          Our Blogs
        </h1>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
            <button
              className={`px-4 py-2 ${
                selectedCategory === "All categories"
                  ? "bg-gray-100 text-[#232225]"
                  : "bg-white text-orenda-purple"
              }  rounded-[25px] border font-dm-sans flex-shrink-0`}
              onClick={() => setSelectedCategory("All categories")}
            >
              All categories
            </button>
            <button
              className={`px-4 py-2 ${
                selectedCategory === "Topic A"
                  ? "bg-gray-100 text-[#232225]"
                  : "bg-white text-orenda-purple"
              }  rounded-[25px] border text-[17px]  flex-shrink-0`}
              onClick={() => setSelectedCategory("Topic A")}
            >
              Topic A
            </button>
            <button
              className={`px-4 py-2 ${
                selectedCategory === "Topic B"
                  ? "bg-gray-100 text-[#232225]"
                  : "bg-white text-orenda-purple"
              }  rounded-[25px] border text-[17px] flex-shrink-0`}
              onClick={() => setSelectedCategory("Topic B")}
            >
              Topic B
            </button>
            <button
              className={`px-4 py-2 ${
                selectedCategory === "Topic C"
                  ? "bg-gray-100 text-[#232225]"
                  : "bg-white text-orenda-purple"
              } text-[#2E0086] rounded-[25px] border text-[17px] flex-shrink-0`}
              onClick={() => setSelectedCategory("Topic C")}
            >
              Topic C
            </button>
            <button
              className={`px-4 py-2 ${
                selectedCategory === "Topic D"
                  ? "bg-gray-100 text-[#232225]"
                  : "bg-white text-orenda-purple"
              } text-[#2E0086] rounded-[25px] border text-[17px] flex-shrink-0`}
              onClick={() => setSelectedCategory("Topic D")}
            >
              Topic D
            </button>
            <button
              className={`px-4 py-2 ${
                selectedCategory === "Topic E"
                  ? "bg-gray-100 text-[#232225]"
                  : "bg-white text-orenda-purple"
              } text-[#2E0086] rounded-[25px] border text-[17px] flex-shrink-0`}
              onClick={() => setSelectedCategory("Topic E")}
            >
              Topic E
            </button>
          </div>
        </div>
        <div
        
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="p-8 bg-[#FAFAFA] shadow-lg rounded-lg max-h-[473px] max-w-[391px] overflow-hidden border hover:bg-[#f8f8ff]"
            >
              <Link to={'/blog info'}>
                <span className="text-sm text-gray-600 bg-white px-[16px] py-[6px] w-[72px] rounded-[25px] border border-[#cccbcb]">
                  {blog.category}
                </span>
                <h2 className="~text-base/2xl font-bold my-4 font-heading leading-10 text-[28px] line-clamp-[2]">
                  {blog.title}
                </h2>
                <p className="text-gray-800 mb-4 line-clamp-[8] font-dm-sans font-medium overflow-hidden max-h-[193px]">
                  {blog.description}
                </p>
                <p className="text-sm text-gray-600 flex gap-1 items-center mt-[50.08px] mb-[25.04px]">
                  <img src={divarrleft} alt="" /> {blog.date}{" "}
                  <img src={divarr} alt="" />
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;