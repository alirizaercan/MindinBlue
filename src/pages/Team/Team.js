// Team page component
import React, { useState } from 'react';
import './Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Anna Rozkwitalska",
      title: "Psychologist, counsellor & life coach",
      image: "/images/anna.jpg",
      flags: ["🇬🇧", "🇵🇱", "🇪🇸", "🇮🇹"],
      experience: "10+ years",
      specialties: [
        "Psychodynamic Therapy", 
        "Life Coaching", 
        "Cultural Adaptation", 
        "Anxiety & Depression", 
        "Trauma Healing", 
        "Life Transitions",
        "Couples & Family Therapy",
        "Stress & Burnout",
        "Goal-Oriented Strategies"
      ],
      description: "Hello, I'm a psychologist, counselor, and life coach working with people from all around the world. I offer online sessions in English, Polish, Italian, and Spanish, supporting clients with diverse backgrounds, life stories, and challenges.\n\nOver the years, I've lived, studied, and worked in various countries, and I understand what it's like to move between cultures, face change, and adapt to new environments. These personal experiences deeply shape my approach—open-minded, flexible, and culturally sensitive—allowing me to meet each client exactly where they are, wherever they are in the world.\n\nI hold a degree in psychology from SWPS University in Sopot and completed a one-year exchange program at the University of Kent in the UK. I've completed a two-year program in psychotherapy and interpersonal training at the Psychodynamic School of Cracow, as well as a one-year course in psychotraumatology at the Triada Institute in Gdańsk.\n\nI work with adults, children, couples, and families, helping them gain clarity, build emotional resilience, and move forward in life with more self-awareness and confidence. My therapeutic approach is always tailored to the individual. I primarily use a psychodynamic perspective, while also integrating coaching techniques and goal-oriented strategies, depending on your needs and goals.\n\nTo maintain the highest professional and ethical standards, I regularly consult with a certified supervisor.",
      sessionBenefits: [
        "Deepen your self-understanding and emotional awareness",
        "Explore your relationships and patterns", 
        "Clarify what you need or want—and how to get there",
        "Work through stress, anxiety, depression, or burnout",
        "Heal from trauma or navigate life transitions",
        "Set and pursue personal or professional goals",
        "See a fuller, clearer picture of your life and choices"
      ],
      closingMessage: "Whether you're going through a difficult time, looking for support, or simply feeling the need to grow or reconnect with yourself—I'm here to help. Feel free to reach out. Let's talk.",
      email: "anna@mindinblue.com",
      languages: ["English", "Polish", "Spanish", "Italian"]
    },
    {
      id: 2,
      name: "Agata Gulbierz",
      title: "Psychologist & CBT",
      image: "/images/agata.jpg",
      flags: ["🇬🇧", "🇵🇱"],
      experience: "10+ years",
      specialties: [
        "Cognitive Behavioral Therapy (CBT)",
        "Acceptance and Commitment Therapy (ACT)",
        "Motivational Interviewing (MI)",
        "Emotion Regulation",
        "Mental Resilience Building",
        "Self-Confidence Building",
        "Relationship Improvement",
        "Adolescent Therapy (14+)",
        "Personal Growth"
      ],
      description: "I am an English-speaking psychologist, counsellor, and cognitive-behavioural therapist in training. I work both online and in person in Gdańsk.\n\nI specialise in working with adolescents (14+) and adults, supporting them in coping with life's challenges and stress. My focus is on building mental resilience — the ability to effectively manage difficult emotions and navigate life's difficulties.\n\nI work using evidence-based therapeutic approaches, including Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), and Motivational Interviewing (MI). These methods can help you manage emotions, build self-esteem, and improve your overall quality of life.\n\nIn my work, I place great importance on creating an authentic, trusting relationship based on acceptance and understanding. I aim to support you not only in overcoming difficulties but also in recognising your strengths and building greater self-confidence. My approach is always tailored to your individual needs, and sessions are conducted in a respectful and supportive atmosphere.\n\nAlongside my private practice, I have experience working with adolescents and adults at local organisations and foundations such as Niebieskie Trampki and the FOSA Foundation. I have also worked at the Psychiatric Hospital in Gdańsk. I have over ten years of experience working in a business environment in Poland, Hungary, and England.\n\nI am a member of the Polish Society for Cognitive and Behavioural Therapy and regularly participate in training and conferences to further develop my skills. I also undergo regular professional supervision to ensure high standards in my work.",
      sessionBenefits: [
        "Struggle with regulating their emotions",
        "Feel lonely or lack self-confidence",
        "Are searching for meaning or purpose in life",
        "Wish to grow personally and better understand themselves",
        "Want to improve their relationships with others"
      ],
      closingMessage: "If you are looking to improve your quality of life, deepen your self-understanding, and become a stronger, more resilient version of yourself — feel free to get in touch. I am here to support you in facing challenges and discovering your potential.",
      email: "agata@mindinblue.com",
      languages: ["English", "Polish"]
    },
    {
      id: 3,
      name: "Justyna Foster",
      title: "Social Worker & Psychotherapist",
      image: "/images/justyna.jpg",
      flags: ["🇬🇧", "🇵🇱"],
      experience: "14+ years",
      specialties: [
        "Mentalization-Based Therapy",
        "Psychodynamic Psychotherapy",
        "PTSD Treatment",
        "Attachment Trauma",
        "Personality Disorders",
        "Crisis Intervention",
        "Child Protection",
        "Adolescent Therapy",
        "Adult Therapy"
      ],
      description: "I'm an English-speaking Sociologist, Social Worker, and Psychotherapist with Master's degrees in Sociology (Gdansk University) and Social Work (Flinders University, Australia). I have extensive training in Mentalization-Based Therapy and am currently advancing my skills in Psychodynamic Psychotherapy at the Hanna Segal Institute in Gdynia.\n\nWith 14 years of experience in Child Protection in South Australia, I've supported young people in therapeutic settings, managed crisis interventions, and facilitated transitions into adulthood. Now based in Poland, I work as an occupational therapist at a psychiatric day ward in Gdynia. I also lead mental health projects and collaborate with various organizations.\n\nMy focus is on helping adolescents and adults navigate challenges like PTSD, attachment trauma, and personality disorders. I practice with a psychodynamic approach, offering a safe, supportive space for self-exploration, helping clients build the strength to face their pain and grow.",
      email: "justyna@mindinblue.com",
      languages: ["English", "Polish"]
    },
    {
      id: 4,
      name: "Monika Skwierawska",
      title: "Psychologist & Psychodynamic Psychotherapy",
      image: "/images/monika.jpg",
      flags: ["🇬🇧", "🇵🇱"],
      experience: "Multiple years",
      specialties: [
        "Psychodynamic Psychotherapy",
        "Crisis Intervention",
        "Trauma and Anxiety Therapy",
        "Motivational Interviewing",
        "Interpersonal Relationships",
        "Low Self-Esteem",
        "Mood Disorders",
        "Psychosomatic Conditions",
        "Cultural Adaptation"
      ],
      description: "I am an English-speaking, certified psychologist, a graduate of the University of Gdańsk, and a psychotherapist in training in a four-year psychotherapeutic program at the Krakowskie Centrum Psychodynamiczne (KCP), recommended by the Polish Psychological Association.\n\nMy professional experience includes working in psychological-pedagogical counseling centers, educational institutions, and private psychological and psychotherapeutic practices. I am committed to continuously expanding my knowledge by studying both Polish and international literature on psychology and psychotherapy, as well as participating in various training programs. I have completed courses on crisis intervention, trauma and anxiety therapy, and motivational interviewing.\n\nI assist adults and teenagers facing challenges in interpersonal relationships, anxiety, low self-esteem, a sense of lostness, mood disorders, trauma, psychosomatic conditions, and more. I also support clients in overcoming adaptive challenges and social difficulties, including those related to changes in their place of residence. I have experience working with children and families from diverse cultural backgrounds, including clients from Ukraine, Belarus, Armenia, the USA, and Italy.\n\nIn my practice, I follow a psychodynamic approach, where, together with the client, we not only seek solutions but also explore unconscious mechanisms and work to understand the root causes of problems for long-term positive change.\n\nI offer both in-person and online consultations in English and Polish.",
      email: "monika@mindinblue.com",
      languages: ["English", "Polish"]
    },
    {
      id: 5,
      name: "Alicja Gajewska",
      title: "Psychologist & Counsellor",
      image: "/images/alicia.jpg",
      flags: ["🇬🇧", "🇵🇱"],
      experience: "Multiple years",
      specialties: [
        "Clinical Psychology",
        "Psychotraumatology",
        "Loneliness and Isolation",
        "Relationship Difficulties",
        "Anxiety and Mood Disorders",
        "Self-Esteem Building",
        "Life Crisis Support",
        "Domestic Violence Recovery",
        "Bereavement Support"
      ],
      description: "I am an English-speaking psychologist who graduated from psychology at the SWPS University in Sopot and postgraduate studies in Clinical Psychology at the Medical University of Gdańsk. Currently, I am studying psychotraumatology at the Institute of Psychotherapy and Psychotraumatology \"Triada\" in Gdańsk.\n\nI work mainly with teenagers and adults in the Social Welfare Home in Bielawki and private practice.\n\nI gained experience at the Psychiatric Hospital in Gdańsk, Therapeutic Center \"Mrowisko\" in Sopot. In addition, I conducted consultations and therapy with victims of domestic violence at the consultation point in the Social Welfare Center in Subkowy.",
      sessionBenefits: [
        "Experience a feeling of loneliness",
        "Have difficulties in establishing relationships",
        "Experience prolonged anxiety, sadness, anger, mood swings",
        "Want to rebuild their self-esteem",
        "Struggle with a life crisis, such as domestic violence, bereavement"
      ],
      email: "alicja@mindinblue.com",
      languages: ["English", "Polish"]
    },
    {
      id: 6,
      name: "Magdalena Muskat",
      title: "Psychologist & Counsellor",
      image: "/images/magdalena.jpg",
      flags: ["🇬🇧", "🇵🇱"],
      experience: "Multiple years",
      specialties: [
        "Solution Brief Therapy",
        "Systemic Psychotherapy",
        "Cultural Adaptation",
        "Personal Growth Workshops",
        "Cross-Cultural Counselling",
        "Life Transitions",
        "Identity Development",
        "Self-Discovery",
        "Narrative Therapy"
      ],
      description: "I am Polish and English-speaking psychologist and trainer. Graduated from SWPS University in Sopot and finished Solution Brief Therapy level 1 certification, conducting growth workshops. Additionally, I am also currently gaining my experience in systemic psychotherapy.\n\nAs I personally experienced living in different countries, I understand how challenging can be facing cultural differences, adapting to a new life situation.\n\nI am emphatic and attentive specialist believing that everyone has an unique story to tell and my role is to help the client to meet with himself/herself to be able to listen more carefully his own dialogue, story.",
      closingMessage: "Feel free to get in touch with us if you have any questions or want to book a consultation session.",
      email: "magdalena@mindinblue.com",
      languages: ["English", "Polish"]
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const handleBookAppointment = (member) => {
    // Here you can integrate with booking system
    alert(`Booking appointment with ${member.name}. Redirecting to booking system...`);
  };

  return (
    <div className="team-page">
      <div className="team-container">
        <h1 className="team-title">Our Team</h1>
        <p className="team-description">
          Meet our experienced team of psychologists, counsellors, and therapists who are dedicated to providing you with the highest quality mental health care.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-member"
              onClick={() => handleMemberClick(member)}
            >
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <div className="member-flags">
                  {member.flags.map((flag, index) => (
                    <span key={index} className="flag">{flag}</span>
                  ))}
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected member */}
      {selectedMember && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <div className="modal-header">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name}
                className="modal-image"
              />
              <div className="modal-basic-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-title">{selectedMember.title}</p>
                <div className="modal-flags">
                  {selectedMember.flags.map((flag, index) => (
                    <span key={index} className="flag">{flag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>About</h3>
                {selectedMember.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                ))}
              </div>
              
              <div className="modal-section">
                <h3>Experience</h3>
                <p>{selectedMember.experience}</p>
              </div>
              
              <div className="modal-section">
                <h3>Specialties</h3>
                <ul className="specialties-list">
                  {selectedMember.specialties.map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                  ))}
                </ul>
              </div>

              {selectedMember.sessionBenefits && (
                <div className="modal-section">
                  <h3>In Our Sessions, You Can:</h3>
                  <ul className="specialties-list">
                    {selectedMember.sessionBenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="modal-section">
                <h3>Languages</h3>
                <div className="modal-flags">
                  {selectedMember.languages.map((language, index) => {
                    const flagMap = {
                      'English': '🇬🇧',
                      'Polish': '🇵🇱',
                      'Spanish': '🇪🇸',
                      'Italian': '🇮🇹'
                    };
                    return (
                      <span key={index} className="flag">{flagMap[language] || language}</span>
                    );
                  })}
                </div>
              </div>

              {selectedMember.closingMessage && (
                <div className="modal-section">
                  <div className="closing-message">
                    <p style={{ fontStyle: 'italic', color: '#3fa9f5', fontWeight: '500' }}>
                      {selectedMember.closingMessage}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="modal-footer">
              <button 
                className="book-appointment-btn"
                onClick={() => handleBookAppointment(selectedMember)}
              >
                Book Appointment
              </button>
              <a 
                href={`mailto:${selectedMember.email}`}
                className="contact-btn"
              >
                Contact via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
