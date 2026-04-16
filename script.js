const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const heroVideo = document.querySelector(".hero-video");
const hero = document.querySelector(".hero");
const heroEnd = document.getElementById("heroEnd");
const heroRestart = document.getElementById("heroRestart");

const workflow = [
  {
    icon: "1",
    title: "Consult and test",
    text: "We consult with patients and perform clinical tests to understand the physiological state using MRI, EEG, ECG, and behavioral assessment.",
  },
  {
    icon: "2",
    title: "Integrate the data",
    text: "Multimodal signals are brought into a common framework to understand the brain circuits that are disrupted in the patient.",
  },
  {
    icon: "3",
    title: "Deliver targeted therapy",
    text: "We develop personalized neuromodulation protocols with the right targets, duration, and non-invasive stimulation strategy.",
  },
];

const unique = [
  {
    icon: "✦",
    title: "Precision Physiology–Driven Therapy",
    text: "Individualized neuromodulation based on objective brain-body biomarkers.",
  },
  {
    icon: "⚗",
    title: "Clinical–Translational Integration",
    text: "A seamless pipeline from physiological mapping to protocol design, therapy, and follow-up optimization.",
  },
  {
    icon: "❤",
    title: "Patient-Centered Neuromodulation Care",
    text: "Structured counseling, active participation, and longitudinal follow-up refine the therapy plan.",
  },
  {
    icon: "◌",
    title: "Brain–Body Systems Approach",
    text: "Integrating neurostimulation with autonomic and behavioral modulation.",
  },
];

const research = [
  {
    title: "Brain-Body Networks for Precision Therapy",
    figure: `
      <div class="lab-trio" role="img" aria-label="Brain, heart, and gut images connected by arrows">
        <div class="lab-trio-item lab-trio-brain">
          <img src="Lab/2.png" alt="Brain illustration" />
          <span>Brain</span>
        </div>
        <div class="lab-arrow" aria-hidden="true"></div>
        <div class="lab-trio-item lab-trio-heart">
          <img src="Lab/3.png" alt="Heart illustration" />
          <span>Heart</span>
        </div>
        <div class="lab-arrow" aria-hidden="true"></div>
        <div class="lab-trio-item lab-trio-gut">
          <img src="Lab/4.png" alt="Gut illustration" />
          <span>Gut</span>
        </div>
      </div>
    `,
    text: "Neurological and psychiatric disorders arise from dysfunction in distributed brain-body networks. Our research focuses on identifying which brain-body interactions have broken down. We do this by integrating multimodal neurophysiological and cardiovascular data with behavioral and clinical measures.",
    tags: ["EEG/MEG", "MRI", "ECG", "HRV", "Autonomic markers"],
    publications: [
      "Kashyap, R., Zhou C, Tsapkini K, Desmond, J. E., Chen SHA, Bharath, RD, Bhattacharjee S. (2025). Longitudinal Evaluation of Common and Unique Brain Networks in Variants of Primary Progressive Aphasia. Alzheimer's Research & Therapy.",
      "Bhattacharjee, S., Kashyap, R., Udupa, K., Bashir, S., Venkatsubramanian, G., Oishi, K., ... & Chen, S. A. (2024). Alignment of behaviour and tDCS stimulation site induces maximum response: evidence from online tDCS and ERP. Scientific Reports 14(1), 19715.",
      "Bhattacharjee, S., Chakraborty, I., Kashyap, R., Sreeraj, V. S., Arshad, F., Yamini, B. K., ... & Udupa, K. (2025). Identifying Target Regions for Non-Invasive Brain Stimulation of the Language Network in Primary Progressive Aphasia: A Narrative Review. Brain Disorders, 100255.",
      "Singh, S. R., Bhattacharjee, S., & Udupa, K. (2024). Neuromodulation Interventions in Paediatric Neurological Disorders: A Contemporary Review of Scientific Advancements. Journal of Pediatrics and Neonatal Medicine, 6(1).",
      "Kashyap, R., Bhardwaj, S., Bhattacharjee, S., Sunny, A. S., Udupa, K., Kumar, M., ... & Bharath, R. D. (2023). The Perturbational Map of Low Frequency Repetitive Transcranial Magnetic Stimulation of Primary Motor Cortex in Movement Disorders. Brain Disorders, 100071.",
      "Kashyap, R., Eng, GK., Bhattacharjee, S., Gupta B, Ho, R., Ho, C., Zhang, M., Mahendran, R., Sim K., Chen, S. A. (2021). Individual-based Approaches reveal Fronto-Striato-Limbic dissociation and Cerebellar-Visual association in Obsessive-Compulsive Disorder, Scientific Report, 11, 1354.",
      "Kashyap, R., Bhattacharjee, S., Yeo, B. T., & Chen, S. A. (2019). Maximizing dissimilarity in resting state detects heterogeneous subtypes in healthy population associated with high substance use and problems in antisocial personality. Human Brain Mapping.",
      "Kashyap, R., Bhattacharjee, S., Sommer, W., Zhou, C. (2018). Repetition Priming Effects for Famous Faces through Dynamic Causal Modelling of Latency-Corrected Event-Related Brain Potentials. European Journal of Neuroscience; 1-18.",
      "Kashyap, R., Kong, R., Bhattacharjee, S., Li, J., Zhou, Z., Yeo, T. (2018). Individual Specific fMRI Subspaces Improve Functional Connectivity Prediction of Behavior, Neuroimage, 804-812.",
      "Bhattacharjee, S., & Kashyap, R. (2017). Neuromuscular Characterization of dysphagia following stroke. International Journal of Advances in Medical Sciences, 2(2).",
      "Bhattacharjee, S. #, Mondol, M., Kashyap, R. (2016). Effect of Hypertension and Hypercholesterolemia on Auditory Brainstem Response in Adults. International Journal of Medical and Health Sciences, 5(4), 267-271.",
      "Bhattacharjee, S. # (2012). Study of anthropometric parameters along with postural changes in blood pressure in children with Autistic spectral disorders. International Journal of Basic and Applied Physiology, 1, 93.",
    ],
  },
  {
    title: "Adaptive & Personalised Neuromodulation Strategies",
    figure: "Patient, MRI, EEG",
    text: "We are working towards designing personalized, physiology-guided neuromodulation interventions that dynamically adapt to an individual's brain-body state. By integrating real-time physiological signals—including EEG, ECG, and behavioral data—with AI-driven algorithms, we develop closed-loop systems that optimize stimulation targets, duration, intensity, and the kind of stimulation to be delivered to a patient.",
    tags: ["TMS", "tDCS", "tACS", "taVNS"],
    publications: [
      "Bhattacharjee, S., Kashyap, R., Sreeraj, V. S., Sivakumar, P. T., Venkatasubramanian, G., Desmond, J. E., ... & Udupa, K. (2024). Personalized Dose Selection for Treatment of Patients with Neuropsychiatric Disorders Using tDCS. Brain Sciences 14(12), 1162.",
      "Bhattacharjee, S., Kashyap, R., Abualait, T., Annabel Chen, S. H., Yoo, W. K., & Bashir, S. (2021). The role of primary motor cortex: more than movement execution. Journal of Motor Behavior, 53(2), 258-274.",
      "Bhattacharjee, S., Sivakumar, P. T., Venkatasubramanian, G., Oishi, K., Tsapkini, K., Chen, S. H. A., Rapp, B., Desmond, J. E., Sathyaprabha, T. N., & Udupa, K, Kashyap, R. (2025). The role of structural and functional parameters in designing pathology-specific tDCS protocols for primary progressive aphasia. Alzheimer's Research & Therapy.",
      "Bhattacharjee, S. #, Kashyap, R., Goodwill, M. A., O'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2022). Sex Difference in tDCS Current Mediated by Changes in Cortical Anatomy: A Study across Young, Middle and Older adults. Brain Stimulation 15(1), 125-140.",
      "Kashyap, R., Bhattacharjee, S., Bashir, S., Oishi, K., Desmond, J. E., Chen, S. A., & Guan, C. (2022). Variation in Cerebrospinal fluid of Specific Regions regulate Focality in Transcranial Direct Current Stimulation. Frontiers of Human Neuroscience, 16.",
      "Kashyap, R., Bhattacharjee, S., Arumugam, R., Bharath, R. D., Udupa, K., Oishi, K., Desmond, J. E., & Chen, S. A. (2021). Focality Oriented Selection of Current Dose for Transcranial Direct Current Stimulation. Journal of Personalised Medicine.",
    ],
  },
  {
    title: "Clinical Trials and Technology Innovation",
    figure: "Clinical trial",
    text: "We work in close collaboration with engineers, scientists, speech language therapists, neurologists, and psychiatrists to translate advances in neuromodulation into clinically effective, scalable, and precision-guided therapies through rigorous clinical trials and the development of advanced neuromodulation technologies.",
    tags: ["Clinical trials", "TES toolboxes", "Scalable therapies"],
    publications: [
      "Bhattacharjee, S., Sivakumar, P. T., Venkatasubramanian, G., Oishi, K., Desmond, J. E., Rapp, B., Chen, S. H. A., Sathyaprabha, T. N., & Udupa, K, Kashyap, R. (2025). Personalized Transcranial Direct Current Stimulation for Behavioral and Neurophysiologic Outcomes. JAMA Network Open.",
      "Bhattacharjee, S., Kashyap, R., O'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2020). Reading Proficiency Influences the effects of Transcranial Direct Current Stimulation: Evidence from Selective Modulation of Dorsal and Ventral Pathways of reading in Bilinguals, Brain and Language, 210, 104850.",
      "Kashyap, R.*, Bhattacharjee, S.*, Arumugam, R.*, Oishi, K., Desmond, J. E., & Chen, S. A. (2020). i-SATA: A MATLAB based toolbox to estimate Current Density generated by Transcranial Direct Current Stimulation in an Individual Brain. Journal of Neural Engineering.",
      "Bhattacharjee, S., Kashyap, R., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2019). Simulation Analyses of tDCS Montages for the investigation of Dorsal and Ventral pathways. Scientific Reports, 9(1), 1-17.",
      "Bhattacharjee, S., Chew, A., Kashyap, R., Wu, C., Yeo, M., O'Brien, B., & Chen, S. (2019). Could tDCS Modulate Bilingual Reading? Brain Stimulation: Basic, Translational, and Clinical Research in Neuromodulation, 12(2), 569.",
    ],
  },
];

const bioParagraphs = [
  "Dr. Sagarika Bhattacharjee is a physician-scientist working at the intersection of neuroscience, artificial intelligence, and translational neurotechnology, with a focus on developing precision, physiology-guided neuromodulation therapies for neuropsychiatric disorders.",
  "Her research integrates neuroimaging, electrophysiology, and computational modelling to understand how individual variability in brain-body systems shapes therapeutic response, enabling adaptive and personalized brain stimulation strategies.",
  "She completed her MBBS from Silchar Medical College and MD (Physiology) from Guwahati Medical College, graduating with gold medals. She later trained in translational brain stimulation in New Zealand, obtained her PhD from Nanyang Technological University, and now serves as Assistant Professor in the department of Physiology at All India Institute of Medical Sciences Madurai.",
  "Her long-term vision is to develop scalable, clinically deployable neurotechnology platforms that enable personalized and accessible neuromodulation therapies for treatment of neuropsychiatric disorders.",
];

const bioLinks = [
  ["Google Scholar", "https://scholar.google.com"],
  ["ResearchGate", "https://www.researchgate.net/profile/Sagarika-Bhattacharjee"],
  ["ORCID", "https://orcid.org/0000-0002-7216-9900"],
  ["LinkedIn", "https://www.linkedin.com/in/sagarika-bhattacharya/"],
];

const bioInterests = [
  ["Painting", "A meditative space where colors and forms become a quiet language of inner expression."],
  ["Dance", "A celebration of rhythm and movement, bringing both energy and stillness into balance."],
  ["Cooking", "A creative and nurturing process blending flavors, memories, and cultures into meaningful experiences."],
  ["Reading & Inner Exploration", "A reflective inquiry into consciousness, self, and meaning through Sanskrit scriptures and contemporary thought."],
  ["Traveling", "An outward journey into the world that complements inner reflection and broadens understanding."],
];

const fellows = [
  {
    name: "Irtisha Chakraborty",
    text: "Former Research Fellow in precision neurostimulation; now a PhD student at BCBL, Spain, studying neural mechanisms of language and learning. She worked on physiology-guided precision neurostimulation, integrating EEG and behavioral measures to design individualized stimulation strategies in clinical populations.",
  },
  {
    name: "Tanushree L",
    text: "Former Research Fellow in the lab. Detailed profile text was not included in the source copy, so the site preserves the name as provided.",
  },
];

const interns = [
  {
    name: "Dhwani Shah",
    text: "UX and product experience designer currently working at SAP in Bengaluru. She previously interned in the lab, contributing design principles to research-driven problem solving across interdisciplinary workflows.",
  },
  {
    name: "Varsha Shree",
    text: "Neuroscience researcher with training in neuroimaging (DTI) and non-invasive neuromodulation (TMS, tDCS) in clinical populations. She is now in the translational neuroscience/psychiatry research ecosystem at NIMHANS.",
  },
  {
    name: "Anoushka",
    text: "MSc Neuropsychology trainee with experience in neuropsychological assessment, cognitive retraining, and large-scale neuroimaging research through the ENIGMA project.",
  },
];

const coreCollaborators = [
  ["Dr. Rajan Kashyap", "Computational neuroscience and AI-driven brain modelling", "https://ai-lab4bnt.github.io/LabWeb/index.html"],
  ["Dr. S H Annabel Chen", "Cognitive and clinical neuroscience, brain-behavior relationships", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Dr. John E. Desmond", "Neuroimaging and cerebellar neuroscience", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Dr. Brenda Rapp", "Cognitive neuroscience and language processing", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Dr. Kenichi Oishi", "Advanced neuroimaging and brain connectivity analysis", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Dr. Shahid Bashir", "Brain stimulation, neuroplasticity, and clinical neuromodulation", "https://www.psu.edu.sa/en/staff/shbashir"],
];

const translationalCollaborators = [
  ["Dr. Palanimuthu T. Sivakumar", "Clinical psychiatry and neuromodulation trials", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Dr. Ganesan Venkatasubramanian", "Translational psychiatry and brain stimulation research", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Dr. Kaviraja Udupa", "Department of Neurophysiology", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
];

const recognitions = [
  ["Plenary & keynote lectures", ["Indian Geriatric Mental Health Association National CME, Srinagar, May 2025", "International Conference on Neuroscience and Cognitive Rehabilitation, Bishop Heber College, April 2024"]],
  ["Invited talks & academic lectures", ["King Saud University, 2020", "Johns Hopkins University, 2018", "Cleveland Clinic, 2018", "APTCON / AICID / Srinagar 2025"]],
  ["Conference presentations", ["OHBM Annual Meeting, Seoul, 2024", "Brain Stimulation Conference, 2019", "OHBM Satellite Conference, 2018"]],
  ["Research recognition & media", ["Deccan Herald coverage on AI-assisted treatment for psychiatric disorders", "PsyPost coverage on childhood adversity and brain development", "Exceptional research nomination for OCD study", "Editor's choice / cover-page recognition for fMRI brain signatures study"]],
];

const abstracts = [
  ["2024", "Comparison of conventional and HD-tDCS for neuropsychiatric disorders. OHBM Annual Meeting, Seoul. Oral Presentation; ICMR Travel Fellowship."],
  ["2021", "Sex differences in simulated tDCS current across age groups mediated by cortical anatomy. OHBM Annual Meeting. Exceptional Abstract Award."],
  ["2019", "Gender differences in the effect of transcranial direct current stimulation on reading. OHBM Annual Meeting, Rome."],
  ["2018", "Systematic analysis of simulations for tDCS montages applied in reading. OHBM Annual Meeting, Singapore."],
  ["2014", "Understanding space life through principles of self-gravitation. International Astronautical Congress."],
  ["2011", "Finite element approach to self-gravitational bio in embryological systems. European Biophysics Congress."],
];

const gallery = [
  ["Clinical consultation", "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"],
  ["Neuroimaging workflow", "https://images.unsplash.com/photo-1517202383675-eb0a6e27775f?auto=format&fit=crop&w=1200&q=80"],
  ["Research and stimulation setup", "https://images.unsplash.com/photo-1581594693706-67c0f5f24f42?auto=format&fit=crop&w=1200&q=80"],
];

const publicationThemes = research.map((item) => ({
  title: item.title,
  figure: item.figure,
  tags: item.tags,
  items: item.publications,
}));

const personLinks = [
  ["Dr. Sagarika Bhattacharjee", "#biopic"],
  ["Bhattacharjee, S.", "#biopic"],
  ["Bhattacharjee S.", "#biopic"],
  ["Kashyap, R.", "https://ai-lab4bnt.github.io/LabWeb/index.html"],
  ["Kashyap R.", "https://ai-lab4bnt.github.io/LabWeb/index.html"],
  ["S. H. Annabel Chen", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Annabel Chen, S. H.", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Chen, S. A.", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["John E. Desmond", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Desmond, J. E.", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Brenda Rapp", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Rapp, B.", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Kenichi Oishi", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Oishi, K.", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Shahid Bashir", "https://www.psu.edu.sa/en/staff/shbashir"],
  ["Bashir, S.", "https://www.psu.edu.sa/en/staff/shbashir"],
  ["Palanimuthu T. Sivakumar", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Sivakumar, P. T.", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Ganesan Venkatasubramanian", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Venkatasubramanian, G.", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Kaviraja Udupa", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Udupa, K.", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
];

function linkNames(text, replacements) {
  return replacements
    .slice()
    .sort((left, right) => right[0].length - left[0].length)
    .reduce((output, [needle, url]) => {
      const linkAttributes = url.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      return output.replaceAll(needle, `<a href="${url}"${linkAttributes}>${needle}</a>`);
    }, text);
}

const career = [
  ["Research Fellow - Neurophysiology", "Open", "Work on EEG, ECG, and autonomic data pipelines supporting precision neuromodulation studies."],
  ["Research Intern - Visualization", "Open", "Support the lab's research communication and interface design efforts."],
];

const testimonials = [
  ["Clear communication", "Patient feedback can be highlighted here once approved for publication."],
  ["Careful follow-up", "This section is ready for consented testimonials and outcome stories."],
  ["Personalized treatment", "Anonymous patient voice or case summaries can be added here later."],
];

if (heroVideo && hero && heroEnd && heroRestart) {
  const hideHeroEnd = () => {
    hero.classList.remove("is-ended");
    heroEnd.setAttribute("aria-hidden", "true");
  };

  const showHeroEnd = () => {
    hero.classList.add("is-ended");
    heroEnd.setAttribute("aria-hidden", "false");
  };

  heroVideo.addEventListener("ended", showHeroEnd);
  heroVideo.addEventListener("play", hideHeroEnd);
  heroRestart.addEventListener("click", async () => {
    heroVideo.currentTime = 0;
    hideHeroEnd();

    try {
      await heroVideo.play();
    } catch (error) {
      showHeroEnd();
    }
  });
}

function card(title, text, extras = "", icon = "") {
  return `
    <article class="card reveal">
      ${icon ? `<div class="icon">${icon}</div>` : ""}
      <h3>${title}</h3>
      <p>${text}</p>
      ${extras}
    </article>
  `;
}

function researchCard(item) {
  return `
    <article class="research-panel reveal">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="research-figure research-figure-network">${item.figure}</div>
      <div class="research-meta">${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
      <div class="publication-list">
        ${item.publications.map((pub) => `<p>${linkNames(pub, personLinks)}</p>`).join("")}
      </div>
    </article>
  `;
}

function publicationThemeCard(theme) {
  return `
    <article class="research-panel reveal publication-theme-card">
      <h3>${theme.title}</h3>
      <div class="research-meta">${theme.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
      <div class="publication-list">
        ${theme.items.map((item) => `<p>${linkNames(item, personLinks)}</p>`).join("")}
      </div>
    </article>
  `;
}

document.getElementById("workflowGrid").innerHTML = workflow
  .map((item) => card(item.title, item.text, `<div class="research-meta"><span class="tag">${item.icon}</span></div>`, item.icon))
  .join("");

document.getElementById("uniqueGrid").innerHTML = unique
  .map((item) => card(item.title, item.text, "", item.icon))
  .join("");

document.getElementById("researchGrid").innerHTML = research
  .map((item) => researchCard(item))
  .join("");

document.getElementById("testimonialGrid").innerHTML = testimonials
  .map(
    ([title, text]) => `
      <article class="research-panel reveal">
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `
  )
  .join("");

document.getElementById("bioGrid").innerHTML = `
  <article class="research-panel reveal">
    <h3>Physician-scientist profile</h3>
    <div class="publication-list">
      ${bioParagraphs.map((paragraph) => `<p>${linkNames(paragraph, personLinks)}</p>`).join("")}
    </div>
    <div class="research-meta">
      ${bioLinks.map(([label, url]) => `<a class="pill link-pill" href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
    </div>
  </article>
  <article class="research-panel reveal">
    <h3>Interests</h3>
    <div class="publication-list">
      ${bioInterests.map(([label, text]) => `<p><strong>${label}:</strong> ${text}</p>`).join("")}
    </div>
  </article>
`;

document.getElementById("fellowGrid").innerHTML = fellows
  .map(
    (person) => `
      <article class="research-panel reveal">
        <h3>${linkNames(person.name, personLinks)}</h3>
        <p>${person.text}</p>
      </article>
    `
  )
  .join("");

document.getElementById("internGrid").innerHTML = interns
  .map(
    (person) => `
      <article class="research-panel reveal">
        <h3>${linkNames(person.name, personLinks)}</h3>
        <p>${person.text}</p>
      </article>
    `
  )
  .join("");

document.getElementById("collaboratorGrid").innerHTML = `
  <article class="research-panel reveal">
    <h3>Core collaborators</h3>
    <div class="publication-list">
      ${coreCollaborators.map(([name]) => `<p><strong>${linkNames(name, personLinks)}</strong></p>`).join("")}
    </div>
  </article>
  <article class="research-panel reveal">
    <h3>Clinical & translational collaborators</h3>
    <div class="publication-list">
      ${translationalCollaborators.map(([name]) => `<p><strong>${linkNames(name, personLinks)}</strong></p>`).join("")}
    </div>
  </article>
`;

document.getElementById("recognitionGrid").innerHTML = recognitions
  .map(
    ([title, items]) => `
      <article class="research-panel reveal">
        <h3>${title}</h3>
        <div class="publication-list ${title === "Conference presentations" ? "compact-list" : ""}">
          ${items.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </article>
    `
  )
  .join("");

document.getElementById("abstractGrid").innerHTML = abstracts
  .map(
    ([year, text]) => `
      <article class="research-panel reveal">
        <div class="publication-meta"><span class="pill">${year}</span></div>
        <p>${text}</p>
      </article>
    `
  )
  .join("");

document.getElementById("publicationThemeList").innerHTML = publicationThemes
  .map((theme) => publicationThemeCard(theme))
  .join("");

document.getElementById("careerGrid").innerHTML = career
  .map(
    ([title, status, text]) => `
      <article class="research-panel reveal">
        <div class="career-meta"><span class="pill">${status}</span></div>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `
  )
  .join("");

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const copy = [
  "Integrating EEG, ECG, autonomic markers, and clinical data to design personalized neuromodulation.",
];

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    formNote.textContent = "Please complete all fields before sending.";
    formNote.style.color = "#a44f27";
    return;
  }

  formNote.textContent = `Thanks, ${name}. Your message is ready to be sent.`;
  formNote.style.color = "#1f6b3a";
  contactForm.reset();
});