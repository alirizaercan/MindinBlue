// Team page component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Team.css";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(false);
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();

  // Helper function to get translated content
  const getTranslatedContent = (member, field) => {
    // Special handling for team members
    if (member.name === "Anna Rozkwitalska") {
      if (field === "description" && currentLanguage === "PL") {
        return t("annarozkwitalskadescription");
      }
      if (field === "closingMessage" && currentLanguage === "PL") {
        return t("annarozkwitalskaclosingmessage");
      }
      if (field === "specialties" && currentLanguage === "PL") {
        return t("annarozkwitalskaaspecialties");
      }
      if (field === "title" && currentLanguage === "PL") {
        return t("annaTitle");
      }
    }

    if (member.name === "Agata Gulbierz") {
      if (field === "description" && currentLanguage === "PL") {
        return t("agatagulbierzdescription");
      }
      if (field === "closingMessage" && currentLanguage === "PL") {
        return t("agatagulbierzclosingmessage");
      }
      if (field === "specialties" && currentLanguage === "PL") {
        return t("agatagulbierzspecialties");
      }
      if (field === "title" && currentLanguage === "PL") {
        return t("agatagulbierztitle");
      }
    }

    if (member.name === "Justyna Foster") {
      if (field === "description" && currentLanguage === "PL") {
        return t("justynafosterdescription");
      }
      if (field === "specialties" && currentLanguage === "PL") {
        return t("justynafosterspecialties");
      }
      if (field === "title" && currentLanguage === "PL") {
        return t("justynafostertitle");
      }
    }

    if (member.name === "Monika Skwierawska") {
      if (field === "description" && currentLanguage === "PL") {
        return t("monikaskwierawskadescription");
      }
      if (field === "specialties" && currentLanguage === "PL") {
        return t("monikaskwierawskaspecialties");
      }
      if (field === "title" && currentLanguage === "PL") {
        return t("monikaskwierawskatitle");
      }
    }

    if (member.name === "Alicja Gajewska") {
      if (field === "description" && currentLanguage === "PL") {
        return t("alicjagajewskadescription");
      }
      if (field === "specialties" && currentLanguage === "PL") {
        return t("alicjagajewskaspecialties");
      }
      if (field === "title" && currentLanguage === "PL") {
        return t("alicjagajewskatitle");
      }
    }

    if (member.name === "Magdalena Muskat") {
      if (field === "description" && currentLanguage === "PL") {
        return t("magdalenamuskatdescription");
      }
      if (field === "specialties" && currentLanguage === "PL") {
        return t("magdalenamuskatspecialties");
      }
      if (field === "closingMessage" && currentLanguage === "PL") {
        return t("magdalenamuskatclosingmessage");
      }
      if (field === "title" && currentLanguage === "PL") {
        return t("magdalenamuskatitle");
      }
    }

    // Return original for all other cases
    return member[field];
  };

  const teamMembers = [
    {
      id: 1,
      name: "Anna Rozkwitalska",
      title: "Founder & Client Coordinator",
      image: "/images/anna.jpg",
      flags: ["🇬🇧", "🇵🇱", "🇪🇸", "🇮🇹"],
      experience: "10+ years",
      specialties: [
        "Psychodynamic Therapy",
        "Cultural Adaptation",
        "Anxiety & Depression",
        "Trauma Healing",
        "Life Transitions",
        "Couples & Family Therapy",
        "Stress & Burnout",
        "Goal-Oriented Strategies",
      ],
      description:
        "Hello, I’m Anna, founder of Mind in Blue. I coordinate our clinic and am your first point of contact when you reach out to us. I’ll listen to your needs, answer your questions, and connect you with one of our therapists.\n\nHaving lived, studied, and worked in several countries, I understand the unique challenges of adapting to new cultures, navigating life changes, and building a sense of belonging far from home. This experience inspired me to create Mind in Blue—a safe, culturally sensitive space where people can find support in English without worrying about not being understood.\n\nOur team offers therapy in English and Polish, both online and in person. I make sure you feel understood and supported from the very first conversation.\n\nIf you’re ready to take the next step, I’ll be here to guide you through the process and arrange your first session.\n",
      sessionBenefits: [
        "Deepen your self-understanding and emotional awareness",
        "Explore your relationships and patterns",
        "Clarify what you need or want—and how to get there",
        "Work through stress, anxiety, depression, or burnout",
        "Heal from trauma or navigate life transitions",
        "Set and pursue personal or professional goals",
        "See a fuller, clearer picture of your life and choices",
      ],
      closingMessage:
        "Whether you're going through a difficult time, looking for support, or simply feeling the need to grow or reconnect with yourself—I'm here to help. Feel free to reach out. Let's talk.",
      closingMessagePL:
        "Niezależnie od tego, czy przechodzisz przez trudny czas, szukasz wsparcia, czy po prostu czujesz potrzebę rozwoju lub ponownego połączenia z sobą - jestem tutaj, aby pomóc. Skontaktuj się ze mną. Porozmawiajmy.",
      email: "anna@mindinblue.com",
      languages: ["English", "Polish", "Spanish", "Italian"],
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
        "Personal Growth",
      ],
      description:
        "I’m an English-speaking psychologist, counsellor, and CBT therapist in training, working online and in person in Gdańsk. I specialise in supporting adolescents (14+) and adults in managing stress, difficult emotions, and life challenges, with a focus on building mental resilience.\n\nI use evidence-based methods such as CBT, ACT, and Motivational Interviewing to help clients improve emotional regulation, self-esteem, and relationships. My approach is based on trust, acceptance, and understanding, always tailored to individual needs.\n\nI have experience in local organisations, foundations, and the Psychiatric Hospital in Gdańsk, as well as over 10 years in business environments in Poland, Hungary, and England. As a member of the Polish Society for Cognitive and Behavioural Therapy, I regularly train and work under professional supervision to maintain high standards.\n\nIf you’re ready to strengthen your mental health and quality of life, get in touch — I’m here to help.\n\n\n\n",
      sessionBenefits: [
        "Struggle with regulating their emotions",
        "Feel lonely or lack self-confidence",
        "Are searching for meaning or purpose in life",
        "Wish to grow personally and better understand themselves",
        "Want to improve their relationships with others",
      ],
      closingMessage:
        "If you are looking to improve your quality of life, deepen your self-understanding, and become a stronger, more resilient version of yourself — feel free to get in touch. I am here to support you in facing challenges and discovering your potential.",
      email: "agata@mindinblue.com",
      languages: ["English", "Polish"],
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
        "Adult Therapy",
      ],
      description:
        "I’m an English-speaking Sociologist, Social Worker, and Psychotherapist with Master’s degrees from the University of Gdańsk and Flinders University in Australia. Trained in Mentalization-Based Therapy and currently specialising in Psychodynamic Psychotherapy, I have 14 years’ experience in Child Protection in South Australia, supporting young people, managing crises, and guiding transitions to adulthood.\n\nNow based in Poland, I work as an occupational therapist in a psychiatric day ward, lead mental health projects, and collaborate with organisations. I help adolescents and adults facing PTSD, attachment trauma, and personality disorders, providing a safe, supportive space for self-exploration and growth.\n\n",
      email: "justyna@mindinblue.com",
      languages: ["English", "Polish"],
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
        "Cultural Adaptation",
      ],
      description:
        "I’m an English-speaking certified psychologist, graduate of the University of Gdańsk, and a psychotherapist in training at the Krakowskie Centrum Psychodynamiczne (KCP). I have experience in counseling centers, schools, and private practice, and have completed training in crisis intervention, trauma and anxiety therapy, and motivational interviewing.\n\nI work with adults and teenagers dealing with relationship issues, anxiety, low self-esteem, mood disorders, trauma, psychosomatic conditions, and adaptation challenges, including those related to relocation. I have experience with clients from diverse cultural backgrounds, including Ukraine, Belarus, Armenia, the USA, and Italy.\n\nUsing a psychodynamic approach, I help clients not only find solutions but also understand the deeper causes of their difficulties for lasting change. I offer in-person and online consultations in English and Polish.\n\n\n\n",
      email: "monika@mindinblue.com",
      languages: ["English", "Polish"],
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
        "Bereavement Support",
      ],
      description:
        "I’m an English-speaking psychologist, graduate of SWPS University in Sopot and postgraduate studies in Clinical Psychology at the Medical University of Gdańsk. I’m currently studying psychotraumatology at the Triada Institute in Gdańsk.\n\nI work with teenagers and adults at the Social Welfare Home in Bielawki and in private practice. My experience includes work at the Psychiatric Hospital in Gdańsk, the “Mrowisko” Therapeutic Center in Sopot, and providing therapy for victims of domestic violence at the Social Welfare Center in Subkowy.\n\nI help clients facing loneliness, relationship difficulties, prolonged anxiety, sadness, anger, mood swings, low self-esteem, and life crises such as domestic violence or bereavement.",
      sessionBenefits: [
        "Experience a feeling of loneliness",
        "Have difficulties in establishing relationships",
        "Experience prolonged anxiety, sadness, anger, mood swings",
        "Want to rebuild their self-esteem",
        "Struggle with a life crisis, such as domestic violence, bereavement",
      ],
      email: "alicja@mindinblue.com",
      languages: ["English", "Polish"],
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
        "Narrative Therapy",
      ],
      description:
        "I’m a Polish- and English-speaking psychologist and trainer, graduate of SWPS University in Sopot, with certification in Solution Brief Therapy (level 1) and experience leading growth workshops. I’m currently expanding my skills in systemic psychotherapy.\n\nHaving lived in different countries, I understand the challenges of cultural differences and adapting to new situations. I’m an empathetic and attentive specialist who believes everyone has a unique story — my role is to help you connect with yourself and hear your own inner voice more clearly.\n\nFeel free to get in touch if you have questions or want to book a session.",
      closingMessage:
        "Feel free to get in touch with us if you have any questions or want to book a consultation session.",
      email: "magdalena@mindinblue.com",
      languages: ["English", "Polish"],
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const handleBookAppointment = (member) => {
    // Navigate to contact page for booking appointment
    navigate("/contact");
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setEnlargedImage(true);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(false);
  };

  return (
    <div className="team-page">
      <div className="team-container">
        <h1 className="team-title">{t("teamPageTitle")}</h1>
        <p className="team-description">{t("teamPageSubtitle")}</p>

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
                <p className="member-title">
                  {getTranslatedContent(member, "title")}
                </p>
                <div className="member-flags">
                  {member.flags.map((flag, index) => (
                    <span key={index} className="flag">
                      {flag}
                    </span>
                  ))}
                </div>
                <button className="view-profile-btn">{t("viewProfile")}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected member */}
      {selectedMember && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modal-header">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="modal-image"
                onClick={handleImageClick}
              />
              <div className="modal-basic-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-title">
                  {getTranslatedContent(selectedMember, "title")}
                </p>
                <div className="modal-flags">
                  {selectedMember.flags.map((flag, index) => (
                    <span key={index} className="flag">
                      {flag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>{t("about")}</h3>
                {getTranslatedContent(selectedMember, "description")
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: "1rem" }}>
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div className="modal-section">
                <h3>{t("experience")}</h3>
                <p>
                  {selectedMember.experience === "Multiple years"
                    ? t("multipleYears")
                    : selectedMember.experience}
                </p>
              </div>

              <div className="modal-section">
                <h3>{t("specialties")}</h3>
                <ul className="specialties-list">
                  {(
                    getTranslatedContent(selectedMember, "specialties") ||
                    selectedMember.specialties
                  ).map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                  ))}
                </ul>
              </div>

              {selectedMember.sessionBenefits && (
                <div className="modal-section">
                  <h3>{t("sessionBenefits")}</h3>
                  <ul className="specialties-list">
                    {(() => {
                      // Special handling for team members' sessionBenefits translation
                      if (
                        selectedMember.name === "Anna Rozkwitalska" &&
                        currentLanguage === "PL"
                      ) {
                        const translated = t("annaSessionBenefits");
                        if (Array.isArray(translated)) {
                          return translated.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ));
                        }
                      }
                      if (
                        selectedMember.name === "Alicja Gajewska" &&
                        currentLanguage === "PL"
                      ) {
                        const translated = t("alicjagajewskasessionbenefits");
                        if (Array.isArray(translated)) {
                          return translated.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ));
                        }
                      }
                      // Default to original sessionBenefits
                      return selectedMember.sessionBenefits.map(
                        (benefit, index) => <li key={index}>{benefit}</li>
                      );
                    })()}
                  </ul>
                </div>
              )}

              {selectedMember.closingMessage && (
                <div className="modal-section">
                  <div className="closing-message">
                    <p
                      style={{
                        fontStyle: "italic",
                        color: "#3fa9f5",
                        fontWeight: "500",
                      }}
                    >
                      {getTranslatedContent(selectedMember, "closingMessage")}
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
                {t("bookAppointment")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged image overlay */}
      {selectedMember && enlargedImage && (
        <div
          className={`enlarged-image-overlay ${enlargedImage ? "active" : ""}`}
          onClick={handleCloseEnlarged}
        >
          <img
            src={selectedMember.image}
            alt={selectedMember.name}
            className="enlarged-image"
          />
        </div>
      )}
    </div>
  );
};

export default Team;
