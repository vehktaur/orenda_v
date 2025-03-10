import partnersImages from "@/assets/partners/partnersImages";

export const partners = [
  {
    id: "1a2b3c4d",
    name: "NOCD",
    operatingStates: "All 50 States",
    image: partnersImages.nocd,
    treatment_categories: `OCD and related disorders - including Phobias, Skin-picking, Hair-pulling, Tics, Hoarding, Body Focused Repetitive Behaviors (no diagnosis needed)`,
    about: "OCD specialty care (insurance-covered)",
    biography: `NOCD is a specialized mental health provider group offering specialized treatment for Obsessive-Compulsive Disorder (OCD). NOCD Therapists are masters-level and PhD-level licensed therapists with specialized training in OCD and Exposure and Response Prevention (ERP) therapy, the gold standard treatment for OCD. They provide live, face-to-face video sessions for members and ongoing support between sessions through direct messaging, peer groups, and the largest, moderated OCD community in the world. NOCD Therapy is clinically proven to not only significantly reduce OCD symptoms, but also improves anxiety, depression, and one's quality of life. NOCD has over 600 specialized therapists who provide therapy in all 50 U.S. states. They accept major insurance plans across the U.S., treat ages 5 and above, and often offer sessions within the same week.`,
  },
  {
    id: "5e6f7g8h",
    name: "Greenpoint Psychotherapy",
    operatingStates: "New York, California",
    image: partnersImages.greenpoint,
    about: "Psychotherapy and Counseling",
    biography: `Greenpoint Psychotherapy is a mental health practice providing comprehensive therapeutic services, including individual, couples, and family therapy. They focus on creating a safe, supportive environment where clients can explore their challenges, heal emotional wounds, and foster personal growth. Their approach is integrative, tailoring therapeutic methods like cognitive-behavioral therapy (CBT), mindfulness, and psychodynamic therapy to fit the needs of each individual. The therapists at Greenpoint are trained to address a range of issues, including anxiety, depression, trauma, and relationship concerns.Greenpoint Psychotherapy is dedicated to fostering inclusivity, compassion, and social justice in mental health care. Committed to challenging structural inequalities, they embrace intersectionality and community healing, providing a supportive space for honest dialogue and personal growth.`,
    referral: {
      label: "To Greenpoint Psychotherapy",
      link: "https://docs.google.com/forms/d/13Q6OZGpfuEHaOPJY8lRFaUP76cBCe4nORppurFeoDzU/viewform?edit_requested=true",
    },
  },
  {
    id: "9i0j1k2l",
    name: "Charlie Health",
    operatingStates: "United States",
    image: partnersImages.charlie_health,
    about: "Intensive out-patient care",
    biography: `Charlie Health is an intensive outpatient mental health care provider designed specifically for adolescents and adults up to 50. They offer personalized, evidence-based care through group, individual, and family therapy, tailored to those facing complex mental health challenges such as depression, anxiety, trauma, and substance use disorders. Charlie Health is available across the U.S. and uses telehealth services to make treatment more accessible. Their team of licensed professionals also emphasize family involvement and community support as integral parts of the healing process.
`,
  },
  {
    id: "k2l",
    name: "Wondermed",
    operatingStates: "New York",
    image: partnersImages.wondermed,
    about: "Ketamine therapy for treatment-resistant conditions",
    biography:
      "Wondermed offers a unique, science-based approach to mental health care through ketamine-assisted therapy. Their platform provides clients with guided therapeutic sessions that utilize ketamine, a well-researched psychedelic medication, to help treat conditions like anxiety and depression. Wondermed combines telemedicine with personalized care, offering online consultations, virtual support, and comprehensive monitoring by licensed professionals. Their mission is to unlock mental wellness through innovative, alternative therapies grounded in scientific research.",
  },
  {
    id: "j1kl",
    name: "Mountainside",
    operatingStates: "New York, Connecticut, New Jersey, Massachusetts",
    image: partnersImages.mountainside,
    about: "Addiction treatment and recovery support",
    biography: `Mountainside Treatment Center offers in-patient detox and residential services, out-patient and recovery coaching programs.
    Mountainside has locations in Canaan, CT, Wilton, CT, Chappaqua, NY, New York, NY, Huntington, NY, and Ramsey, NJ.  They serve Massachusetts virtually.
    
    Mountainside Treatment Center is a nationally acclaimed behavioral health network specializing in individualized alcohol and drug rehabilitation programs and services. They respect each client’s recovery journey and for over 25 years, have proudly served thousands of people in need of holistic addiction treatment. By combining innovative clinical and complementary wellness therapies with a data-driven approach, they empower clients to completely transform their lives and achieve long-term recovery.`,
    referral: {
      label: "To Mountainside Treatment Center",
      link: "https://www.mountainside.com/admissions/",
      extra: (
        <p>
          or call Debra Forman at <a href="tel:8609213663">860-921-3663.</a>
        </p>
      ),
    },
  },
  {
    id: "9i0j",
    name: "The Renfrew Center",
    operatingStates:
      "Nationwide (Multiple locations and virtual treatment options)",
    image: partnersImages.renfrew,
    about: "Eating Disorder Treatment Center",
    biography:
      "The Renfrew Center specializes in eating disorder treatment, dedicated to empowering women, adolescents, transgender, and non-binary individuals toward recovery. Established in 1985, it has treated over 100,000 individuals through evidence-based programs that emphasize respect for the unique psychology of each person and the importance of collaborative therapeutic relationships. With residential centers in Philadelphia, PA, and Coconut Creek, FL, and multiple outpatient sites nationwide, Renfrew offers a range of services, including inpatient and outpatient programs, specialized offerings for various populations, and virtual treatment options.",
  },
];
