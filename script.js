const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const heroVideo = document.querySelector(".hero-video");
const hero = document.querySelector(".hero");
const heroEnd = document.getElementById("heroEnd");
const heroRestart = document.getElementById("heroRestart");

const unique = [
  {
    icon: "✦",
    title: "Precision Physiology-Driven Therapy",
    text: "Individualized neuromodulation based on objective brain-body biomarkers.",
  },
  {
    icon: "⚗",
    title: "Clinical-Translational Integration",
    text: "A seamless pipeline from physiological mapping to protocol design and therapy delivery.",
  },
  {
    icon: "❤",
    title: "Patient-Centered Neuromodulation Care",
    text: "Structured patient counselling and education ensure treatment rationale, expected outcomes, and active participation, with longitudinal follow-up to refine and optimize therapy.",
  },
  {
    icon: "◌",
    title: "Brain-Body Systems Approach",
    text: "Integrating neurostimulation with autonomic and behavioural modulation.",
  },
];

const research = [
  {
    title: "Brain-Body Networks for Precision Therapy",
    slides: [
      { src: "Lab/5.png", alt: "Slide 5", caption: "Slide 5" },
      { src: "Lab/6.png", alt: "Slide 6", caption: "Slide 6" },
      { src: "Lab/7.png", alt: "Slide 7", caption: "Slide 7" },
      { src: "Lab/8.png", alt: "Slide 8", caption: "Slide 8" },
      { src: "Lab/9.png", alt: "Slide 9", caption: "Slide 9" },
      { src: "Lab/10.png", alt: "Slide 10", caption: "Slide 10" },
    ],
    text: "Neurological and psychiatric disorders arise from dysfunction in distributed brain–body networks. Our research focuses on identifying which brain–body interactions have broken down. We do this by integrating multimodal neurophysiological and cardiovascular data- (EEG/MEG, MRI, ECG, EGG, heart rate variability, autonomic markers) with behavioral and clinical measures. The disrupted network demand precision targeting and personalized neuromodulation strategies for reverting to normal working state. We have seen this in several brain disorders and some of our works are highlighted below.",
    tags: ["EEG/MEG", "MRI", "ECG", "HRV", "Autonomic markers"],
    publications: [
      "Kashyap, R., Zhou C, Tsapkini K, Desmond, J. E., Chen SHA, Bharath, RD, Bhattacharjee S, (2025). Longitudinal Evaluation of Common and Unique Brain Networks In Variants of Primary Progressive Aphasia. Alzheimer's Research & Therapy.",
      "Bhattacharjee, S., Kashyap, R., Udupa, K., Bashir, S., Venkatsubramanian, G., Oishi, K., ... & Chen, S. A. (2024). Alignment of behaviour and tDCS stimulation site induces maximum response: evidence from online tDCS and ERP. Scientific Reports 14(1), 19715.",
      "Bhattacharjee, S., Chakraborty, I., Kashyap, R., Sreeraj, V. S., Arshad, F., Yamini, B. K., ... & Udupa, K. (2025). Identifying Target Regions for Non-Invasive Brain Stimulation of the Language Network in Primary Progressive Aphasia: A Narrative Review. Brain Disorders, 100255.",
      "Singh, S. R., Bhattacharjee, S., & Udupa, K. (2024). Neuromodulation Interventions in Paediatric Neurological Disorders: A Contemporary Review of Scientific Advancements. Journal of Pediatrics and Neonatal Medicine, 6(1).",
      "Kashyap, R., Bhardwaj, S., Bhattacharjee, S., Sunny, A. S., Udupa, K., Kumar, M., ... & Bharath, R. D. (2023). The Perturbational Map of Low Frequency Repetitive Transcranial Magnetic Stimulation of Primary Motor Cortex in Movement Disorders. Brain Disorders, 100071.",
      "Kashyap, R., Eng, GK., Bhattacharjee, S., Gupta B, Ho, R., Ho, C., Zhang, M., Mahendran, R., Sim K., Chen, S. A.(2021) Individual-based Approaches reveal Fronto-Striato-Limbic dissociation and Cerebellar-Visual association in Obsessive-Compulsive Disorder, Scientific Report , 11, 1354.",
      "Kashyap, R., Bhattacharjee, S., Yeo, B. T., & Chen, S. A. (2019). Maximizing dissimilarity in resting state detects heterogeneous subtypes in healthy population associated with high substance use and problems in antisocial personality. Human Brain Mapping.",
      "Kashyap, R., Bhattacharjee, S., Sommer, W., Zhou, C., (2018). Repetition Priming Effects for Famous Faces through Dynamic Causal Modelling of Latency-Corrected Event-Related Brain Potentials. European Journal of Neuroscience; 00: 1– 18.",
      "Kashyap, R., Kong, R., Bhattacharjee, S., Li, J., Zhou, Z., Yeo ,T., (2018) Individual Specific fMRI- Subspaces Improve Functional Connectivity Prediction of Behavior, Neuroimage ; 804-812.",
      "Bhattacharjee, S., & Kashyap, R. (2017). Neuromuscular Characterization of dysphagia following stroke. International Journal of Advances in Medical Sciences, (ICV 2019) 2(2).",
      "Bhattacharjee, S#., Mondol, M., Kashyap, R., (2016). Effect of Hypertension and Hypercholesterolemia on Auditory Brainstem Response in Adults. International Journal of Medical and Health Sciences, 5(4), 267-271.",
      "Bhattacharjee, S.# (2012). Study of anthropometric parameters along with postural changes in blood pressure in children with Autistic spectral disorders. International journal of Basic and Applied Physiology, (ICV 2018), vol (1); page no: 93.",
    ],
  },
  {
    title: "Adaptive & Personalised Neuromodulation Strategies",
    slides: [
      { src: "Lab/58.jpeg", alt: "Slide 58", caption: "Slide 58" },
      { src: "Lab/21.png", alt: "Slide 21", caption: "Slide 21" },
      { src: "Lab/22.png", alt: "Slide 22", caption: "Slide 22" },
      { src: "Lab/23.png", alt: "Slide 23", caption: "Slide 23" },
      { src: "Lab/24.png", alt: "Slide 24", caption: "Slide 24" },
      { src: "Lab/25.png", alt: "Slide 25", caption: "Slide 25" },
      { src: "Lab/26.png", alt: "Slide 26", caption: "Slide 26" },
      { src: "Lab/27.png", alt: "Slide 27", caption: "Slide 27" },
      { src: "Lab/28.png", alt: "Slide 28", caption: "Slide 28" },
      { src: "Lab/29.png", alt: "Slide 29", caption: "Slide 29" },
      { src: "Lab/30.png", alt: "Slide 30", caption: "Slide 30" },
      { src: "Lab/31.png", alt: "Slide 31", caption: "Slide 31" },
    ],
    text: "We are working towards designing personalized, physiology-guided neuromodulation interventions that dynamically adapt to an individual's brain–body state. By integrating real-time physiological signals—including EEG, ECG, and behavioral data—with AI-driven algorithms, we develop closed-loop systems that optimize stimulation targets, duration, intensity and kind of stimulation (either TMS, or tDCS or taVNS) to be delivered to a patient. Our goal is to deliver state-dependent, patient-specific therapies that enhance efficacy, reduce variability in response, and minimize side effects, enabling precision in neuromodulation required in clinical practice.",
    tags: ["TMS", "tDCS", "tACS", "taVNS"],
    publications: [
      "Bhattacharjee, S, Kashyap, R., Sreeraj, V. S., Sivakumar, P. T., Venkatasubramanian, G., Desmond, J. E., ... & Udupa, K. (2024). Personalized Dose Selection for Treatment of Patients with Neuropsychiatric Disorders Using tDCS. Brain Sciences 14(12), 1162.",
      "Bhattacharjee, S., Kashyap, R., Abualait, T., Annabel Chen, S. H., Yoo, W. K., & Bashir, S. (2021). The role of primary motor cortex: more than movement execution. Journal of motor behavior, 53(2), 258-274.",
      "Bhattacharjee, S., Sivakumar, P.T., Venkatasubramanian, G., Oishi, K., Tsapkini, K., Chen, S.H.A., Rapp, B., Desmond, J.E., Sathyaprabha, T.N., & Udupa, K, Kashyap, R.(2025). The role of structural and functional parameters in designing pathology-specific tDCS protocols for primary progressive aphasia. Alzheimer's Research & Therapy.",
      "Bhattacharjee, S.#, Kashyap, R., Goodwill, M.A., O'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2022). Sex Difference in tDCS Current Mediated by Changes in Cortical Anatomy: A Study across Young, Middle and Older adults. Brain Stimulation 15(1), 125-140.",
      "Kashyap, R., Bhattacharjee, S., Bashir, S., Oishi, K., Desmond, J. E., Chen, S. A. & Guan, C. (2022). Variation in Cerebrospinal fluid of Specific Regions regulate Focality in Transcranial Direct Current Stimulation. Frontiers of Human Neuroscience. 16.",
      "Kashyap, R., Bhattacharjee, S., Arumugam, R., Bharath, R.D, Udupa, K., Oishi, K., Desmond, J. E., & Chen, S. A. (2021). Focality Oriented Selection of Current Dose for Transcranial Direct Current Stimulation. Journal of Personalised Medicine.",
    ],
  },
  {
    title: "Clinical Trials and Technology Innovation",
    slides: [
      { src: "Lab/57.jpeg", alt: "Slide 57", caption: "Slide 57" },
      { src: "Lab/32.png", alt: "Slide 32", caption: "Slide 32" },
      { src: "Lab/33.png", alt: "Slide 33", caption: "Slide 33" },
      { src: "Lab/34.png", alt: "Slide 34", caption: "Slide 34" },
      { src: "Lab/35.png", alt: "Slide 35", caption: "Slide 35" },
      { src: "Lab/36.png", alt: "Slide 36", caption: "Slide 36" },
      { src: "Lab/37.png", alt: "Slide 37", caption: "Slide 37" },
    ],
    text: "We work in close collaboration with engineers, scientists, clinical psychologists, speech language therapists, neurologists, and psychiatrists to focus on translating advances in neuromodulation into clinically effective, scalable, and precision-guided therapies through rigorous clinical trials and development of advanced neuromodulation technologies. We conduct early-phase and controlled clinical trials to evaluate safety, efficacy, and optimization of interventions across neurological, psychiatric, and neurocardiac disorders. We collaborate closely with experts from AI Lab for Brain Network Therapeutics to develop toolboxes for transcranial electric stimulation (TES) that can personalise the neuromodulation based on the anatomy of an individuals brain. These Systematic approach for TES analysis (SATA) toolboxes are widely downloaded (> 2000 times) and used by the community.",
    toolboxes: [
      { year: "2026", title: "iSATA Network", description: "Personalised network based stimulation of the brain", url: "https://github.com/suklamaa/iSATA_Network" },
      { year: "2021", title: "iSATA (MNI)", description: "Individual-Systematic Approach for tDCS analysis in MNI space (DOWNLOADED > 100 times)", url: "https://doi.org/10.21979/N9/KWTCWK" },
      { year: "2020", title: "iSATA (Talairach)", description: "Individual-Systematic Approach for tDCS analysis in Talairach space (DOWNLOADED > 1500 times)", url: "https://doi.org/10.21979/N9/5W3RIM" },
      { year: "2019", title: "SATA", description: "Systematic Approach for tDCS analysis for standard head model (DOWNLOADED > 750 times)", url: "https://doi.org/10.21979/N9/DMWPZK" },
    ],
    tags: ["Clinical trials", "TES toolboxes", "Scalable therapies"],
    publications: [
      "Bhattacharjee, S., Sivakumar, P.T., Venkatasubramanian, G., Oishi, K., Desmond, J.E., Rapp, B., Chen, S.H.A., Sathyaprabha, T.N., & Udupa, K, Kashyap, R., (2025).Personalized Transcranial Direct Current Stimulation for Behavioral and Neurophysiologic Outcomes. JAMA Network Open.",
      "Bhattacharjee, S., Kashyap, R., O'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2020). Reading Proficiency Influences the effects of Transcranial Direct Current Stimulation: Evidence from Selective Modulation of Dorsal and Ventral Pathways of reading in Bilinguals, Brain and Language,210,p 104850.",
      "Kashyap, R.*, Bhattacharjee, S.*, Arumugam, R.*, Oishi, K., Desmond, J. E., & Chen, S. A. (2020). 𝓲-SATA: A MATLAB based toolbox to estimate Current Density generated by Transcranial Direct Current Stimulation in an Individual Brain. Journal of Neural Engineering , (impact factor:4.8).",
      "Bhattacharjee, S., Kashyap, R., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2019). Simulation Analyses of tDCS Montages for the investigation of Dorsal and Ventral pathways. Scientific reports, 9(1), 1-17.",
      "Bhattacharjee, S., Chew, A., Kashyap, R., Wu, C., Yeo, M., O'Brien, B., & Chen, S. (2019). Could tDCS Modulate Bilingual Reading? Brain Stimulation: Basic, Translational, and Clinical Research in Neuromodulation, 12(2), 569.",
    ],
  },
];

const bioParagraphs = [
  "Dr. Sagarika Bhattacharjee is a physician-scientist working at the intersection of neuroscience, artificial intelligence, and translational neurotechnology, with a focus on developing precision, physiology-guided neuromodulation therapies for neuropsychiatric disorders.",
  "Her research integrates neuroimaging, electrophysiology, and computational modelling to understand how individual variability in brain-body systems shapes therapeutic response, enabling adaptive and personalized brain stimulation strategies.",
  "She completed her MBBS from Silchar Medical College and MD (Physiology) from Guwahati Medical College, graduating with gold medals. In her early years, she gained extensive clinical experience working at Apollo Hospitals Guwahati and North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences. She then moved to New Zealand for translational training in brain stimulation at the Rose Centre for Stroke Recovery and Research, St George's Hospital, and University of Canterbury.",
  "She obtained her PhD from Nanyang Technological University, where she was awarded the Silver Medal for her PhD research and worked in the Clinical Brain Lab, enhancing her skills in the field of precision neuromodulation. She was awarded the prestigious DBT Ramalingaswami Re-entry Fellowship to start her research lab as Assistant Professor of Neurophysiology at National Institute of Mental Health and Neurosciences. She moved her lab to All India Institute of Medical Sciences Madurai where she serves as Assistant Professor in the Department of Physiology.",
  "Her research focuses on multimodal brain–body network modelling (EEG, MRI, autonomic signals) to design personalized neuromodulation strategies using techniques such as transcranial electrical stimulation (tES), transcranial magnetic stimulation (TMS), and vagus nerve stimulation (VNS). Her work contributes to the development of AI-driven diagnostic, prognostic, and therapeutic systems, aligning with emerging paradigms in precision medicine.",
  "Dr. Bhattacharjee's work has been published in leading journals including JAMA Network Open, Alzheimer's Research & Therapy, and Brain Stimulation, and has received international recognition through awards, fellowships, and invited talks. Her long-term vision is to develop scalable, clinically deployable neurotechnology platforms that enable personalized and accessible neuromodulation therapies for treatment of neuropsychiatric disorders.",
];

const bioLinks = [
  ["Google Scholar", "https://scholar.google.com"],
  ["ResearchGate", "https://www.researchgate.net/profile/Sagarika-Bhattacharjee"],
  ["ORCID", "https://orcid.org/0000-0002-7216-9900"],
  ["LinkedIn", "https://www.linkedin.com/in/sagarika-bhattacharya/"],
];

const bioInstitutionLinks = [
  ["Silchar Medical College", "https://silchar-mch.assam.gov.in/"],
  ["Guwahati Medical College", "https://gmchassam.gov.in"],
  ["Apollo Hospitals Guwahati", "https://www.apollohospitals.com/locations/guwahati/"],
  ["North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences", "https://neigrihms.gov.in"],
  ["Rose Centre for Stroke Recovery and Research", "https://www.canterbury.ac.nz/research/about-uc-research/research-groups-and-centres/rose-centre-for-stroke-recovery-and-research"],
  ["St George's Hospital", "https://www.stgeorges.org.nz/"],
  ["University of Canterbury", "https://www.ucic.ac.nz/"],
  ["Nanyang Technological University", "https://www.ntu.edu.sg"],
  ["Clinical Brain Lab", "https://www.clinicalbrain.org/author/sagarika-bhattacharjee/"],
  ["National Institute of Mental Health and Neurosciences", "https://nimhans.ac.in"],
  ["All India Institute of Medical Sciences Madurai", "https://www.aiimsmadurai.edu.in/dr.sagarika.php"],
];

const bioInterests = [
  ["Painting", "A meditative space where colors and forms become a quiet language of inner expression."],
  ["Dance", "A celebration of rhythm and movement, bringing both energy and stillness into balance."],
  ["Cooking", "A creative and nurturing process blending flavors, memories, and cultures into meaningful experiences."],
  ["Reading & Inner Exploration", "A natural inclination toward reflection and inquiry draws her inward—to explore consciousness, self, and meaning. Inspired by her father and grandfather, she engages with decoding ancient Sanskrit scriptures and contemporary thought. This inward journey is deepened by her father-in-law's perspective of viewing gravitational force as an analogy for the unseen forces shaping human experience—bridging science with inner awareness."],
  ["Traveling", "Mirroring this inward quest, travel unfolds as an outward journey into the world. Through places, people, food and cultures, it expands understanding, offering lived experiences that complement inner reflection."],
];

const fellows = [
  {
    name: "Tanushree L",
    text: "Former Research Fellow in the lab contributing to precision neuromodulation research and clinical translational work.",
    isExpanded: true,
    expandedBio: "Tanushree is a dynamic researcher focused on developing AI-driven solutions from large-scale data. She has developed models to estimate brain age using MRI data. Her work combines hands-on expertise in building AI models with experimental validation using MRI, FMRI, DTI, and tDCS, bridging computational approaches with real-world neuroimaging and neuromodulation applications.",
    expandedBio2: "Tanushree was selected as the <strong>FOSSEE Summer Fellow 2023 at IIT Bombay</strong>, where she published <strong>15 projects in mathematical modeling</strong> using GeoGebra on the FOSSEE open-source platform. Her expertise lies in the application of <strong>Mathematics and Science</strong>, bridging interactive visualization such as 3D Augmented Reality (AR) with computational modeling.",
    expandedBio3: "Her passion for AI in healthcare was sparked during her MSc thesis, where she developed an <strong>\"FFT Based Algorithm in Smart Watches for Disabled Persons.\"</strong> This work, which focused on signal processing for assistive technology, was presented at an <strong>International Conference</strong> and laid the foundation for her transition into computational neuroscience.",
    expandedBio4: "<strong>Moving forward</strong>, she aims to develop AI models, non-invasive treatment strategies for neuropsychiatric disorders and build personalized neuromodulation softwares to improve patient outcomes.",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/tanushree-logukavi/"],
      ["Github", "https://github.com/TanushreeLogukavi"],
      ["Website", "https://tanushreelogukavi.github.io"]
    ],
    images: ["Lab/31.jpg", "Lab/32.jpg", "Lab/33.jpg", "Lab/34.jpg"],
    interests: [
      ["Outdoor Enthusiast 🌄", "Loves travelling, volunteering, trekking, and cycling (with a personal record of 55km, currently working toward 100km)."],
      ["Sports 🏸", "An active sportsperson enjoying Badminton and Cricket (as a spinner)."],
      ["Creative 🎨", "A creative at heart (Created this website 😂), she enjoys reading, writing poems, and unique experiences like bathing elephants. She has published four anthology poems and is the author of the anthology book \"Spellbound,\" available on Amazon."]
    ]
  },
  {
    name: "Irtisha Chakraborty",
    text: "Former Research Fellow in precision neurostimulation; now a PhD student at BCBL, Spain studying neural mechanisms of language and learning. Irtisha is a cognitive neuroscience researcher who worked on physiology-guided precision neurostimulation, integrating EEG and behavioural measures to design individualized stimulation strategies in clinical populations. She is currently a PhD student at the Basque Center on Cognition, Brain and Language (BCBL), Spain, focusing on the neural mechanisms of language and learning. Her work at the lab earned her an ICMR travel fellowship in 2023. She bridges neurophysiology and behaviour, with an emphasis on individualized, translational approaches.",
  },
  
];

const interns = [
  {
    name: "Dhwani Shah",
    text: "Dhwani Shah is a UX and product experience designer currently working at SAP in Bengaluru, India. She specializes in human-centered design, crafting intuitive and scalable digital experiences, particularly within enterprise platforms such as SuccessFactors. She was previously an intern in our lab, where she contributed to applying design principles to research-driven problem solving, gaining exposure to interdisciplinary workflows at the interface of technology and user experience.",
  },
  {
    name: "Varsha Shree",
    text: "Varsha Shree Gandhimathinathan is a neuroscience researcher whose interest in psychological disorders and behaviour led her to pursue a bachelor's degree in Psychology at PSG College of Arts and Science. She completed an MSc in Cognitive Science at Indian Institute of Technology Gandhinagar to better understand brain and cognitive processes. During this time, she interned in the lab in the Department of Neurophysiology, where she learnt about neuromodulation and worked on a pilot study examining personalised tDCS dosage and its effects on reading performance alongside TMS measures. Her master's thesis with Prof. Leslee Lazar explored how short-term tool use influences body representations. She is currently working as a Project Associate in the Department of Psychiatry at NIMHANS.",
    images: ["Lab/Photo.JPG"],
  },
  {
    name: "Anoushka",
    text: "Anoushka is an MSc Neuropsychology trainee at CHRIST (Deemed to be University), and worked as a Trainee Neuropsychologist at National Institute of Mental Health and Neurosciences. She has experience in neuropsychological assessments and cognitive retraining across geriatric, pediatric, and psycho-oncology populations, with involvement in large-scale neuroimaging research (ENIGMA project). Her interests lie in neurocognitive disorders, clinical assessments, and translational neuropsychology.",
  },
];

const coreCollaborators = [
  ["Dr. Rajan Kashyap", "Computational neuroscience and AI-driven brain modelling", "https://ai-lab4bnt.github.io/LabWeb/index.html"],
  ["Dr. S H Annabel Chen", "Cognitive and clinical neuroscience, brain-behavior relationships | Nanyang Technological University", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Dr. John E. Desmond", "Neuroimaging and cerebellar neuroscience | Johns Hopkins University", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Dr. Brenda Rapp", "Cognitive neuroscience and language processing | Johns Hopkins University", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Dr. Kenichi Oishi", "Advanced neuroimaging and brain connectivity analysis | Johns Hopkins University", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Dr. Shahid Bashir", "Brain stimulation, neuroplasticity, and clinical neuromodulation | Saudi Arabia", "https://www.psu.edu.sa/en/staff/shbashir"],
];

const translationalCollaborators = [
  ["Dr. Palanimuthu T. Sivakumar", "Clinical psychiatry and neuromodulation trials | NIMHANS", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Dr. Ganesan Venkatasubramanian", "Translational psychiatry and brain stimulation research | NIMHANS", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Dr. Kaviraja Udupa", "Department of Neurophysiology | NIMHANS", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
];

function getCollaboratorLogoUrl(url, name) {
  const sourceUrl = String(url || "");
  const collaboratorName = String(name || "");

  // Explicit local mappings for known collaborators
  if (collaboratorName === "Dr. Rajan Kashyap") return "Lab/AI4BNT.png";

  if (
    collaboratorName === "Dr. John E. Desmond" ||
    collaboratorName === "Dr. Brenda Rapp" ||
    collaboratorName === "Dr. Kenichi Oishi"
  )
    return "Lab/jhu-logo.png";

  // Prefer the local NIMHANS jpeg provided by the user
  if (
    collaboratorName === "Dr. Palanimuthu T. Sivakumar" ||
    collaboratorName === "Dr. Ganesan Venkatasubramanian" ||
    collaboratorName === "Dr. Kaviraja Udupa"
  )
    return "Lab/NIMHANS.jpeg";

  // Map NTU-affiliated collaborator(s) to the provided NTU image
  if (
    collaboratorName === "Dr. S H Annabel Chen" ||
    collaboratorName === "Annabel Chen, S. H." ||
    collaboratorName === "Chen SHA" ||
    collaboratorName === "Chen, S. A."
  )
    return "Lab/NTU.png";

  // Also check hostname hints and prefer local assets when possible
  try {
    const parsedUrl = new URL(sourceUrl);
    const host = parsedUrl.hostname.replace(/^www\./, "");
    if (host.includes("nimhans")) return "Lab/NIMHANS.jpeg";
    if (host.includes("johns") || host.includes("hopkins") || host.includes("johnshopkins")) return "Lab/jhu-logo.png";
    if (host.includes("psu") || host.includes("saudi") || host.endsWith(".sa")) return "Lab/SA.jpeg";
  } catch (error) {
    // ignore parsing errors and fall through to fallback
  }

  // Final fallback: use the project's generic logo
  return "Lab/logo.png";
}

function getCollaboratorInitials(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function collaboratorLogoMarkup(name, url) {
  const logoUrl = getCollaboratorLogoUrl(url, name);
  const initials = getCollaboratorInitials(name);

  return `
    <div class="collaboration-logo" aria-hidden="true">
      <img src="${logoUrl}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" />
      <span class="collaboration-logo-fallback" hidden>${initials}</span>
    </div>
  `;
}

const personLinks = [
  ["Dr. Sagarika Bhattacharjee", "#biopic"],
  ["Bhattacharjee, S.", "#biopic"],
  ["Bhattacharjee S.", "#biopic"],
  ["Kashyap, R.", "https://ai-lab4bnt.github.io/LabWeb/index.html"],
  ["Kashyap R.", "https://ai-lab4bnt.github.io/LabWeb/index.html"],
  ["S. H. Annabel Chen", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Annabel Chen, S. H.", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Chen SHA", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["Chen, S. A.", "https://www.ntu.edu.sg/medicine/about-us/faculty/annabel-chen"],
  ["John E. Desmond", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Desmond, J. E.", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Desmond JE", "https://pure.johnshopkins.edu/en/persons/john-desmond"],
  ["Brenda Rapp", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Rapp, B.", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Rapp B", "https://cogsci.jhu.edu/directory/brenda-rapp/"],
  ["Kenichi Oishi", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Oishi, K.", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Oishi K", "https://www.hopkinsmedicine.org/profiles/details/kenichi-oishi"],
  ["Shahid Bashir", "https://www.psu.edu.sa/en/staff/shbashir"],
  ["Bashir, S.", "https://www.psu.edu.sa/en/staff/shbashir"],
  ["Bashir S", "https://www.psu.edu.sa/en/staff/shbashir"],
  ["Palanimuthu T. Sivakumar", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Sivakumar, P. T.", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Sivakumar PT", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Ganesan Venkatasubramanian", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Venkatasubramanian, G.", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Venkatasubramanian G", "https://nimhans.ac.in/doctor/dr-ganesan-venkatasubramanian/"],
  ["Kaviraja Udupa", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Udupa, K.", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
  ["Udupa K", "https://nimhans.ac.in/doctor/dr-p-sivakumar/"],
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
  {
    title: "Research Interns/Project Scientists",
    status: "Open",
    summary: "We are seeking applicants with backgrounds in Medical Science and Technology, Physics, Mathematics, Cognitive Science, Psychology, Data Science, or related disciplines.",
    items: [
      "Candidates with Bachelor's or Master's degree and some programming experience in Python or MATLAB are preferred.",
      "The role supports EEG, ECG, and autonomic data workflows across precision neuromodulation projects.",
      "Opportunity to gain exposure to clinical-translational neuroscience at the intersection of technology and patient care.",
    ],
  },
  {
    title: "PhD Positions",
    status: "Open",
    summary: "We welcome highly motivated students from cognitive neuroscience, systems neuroscience, psychology, medical backgrounds (MBBS/MD), engineering, computer science, AI, and data science.",
    items: [
      "Applicants should apply through the institute PhD programs and indicate Sagarika Bhattacharjee as a potential supervisor.",
      "Email your CV and research interests directly for consideration.",
      "Our lab offers a highly interdisciplinary and flexible research environment, with close collaboration with several engineering labs, clinicians, psychologists and speech language therapists.",
    ],
  },
  {
    title: "Postdoctoral Positions",
    status: "Open",
    summary: "We are looking for postdoctoral fellows with a PhD or DM in related neuroscientific disciplines.",
    items: [
      "Priority areas: Biomarker discovery, risk factor analysis, disease progression, non-invasive brain stimulation (tDCS, tACS, TMS, taVNS), and closed-loop brain-machine interfaces.",
      "Current focus areas: Neurodevelopmental and speech disorders, aging, and neuropsychiatric disorders (aphasia, dementia, schizophrenia, OCD).",
      "Opportunity to develop personalized neuromodulation protocols and contribute to scalable clinical technologies.",
    ],
  },
];

const testimonialSlides = [
  "Lab/9.jpeg",
  "Lab/1.jpg",
  "Lab/2.jpg",
  "Lab/3.jpg",
  "Lab/4.jpg",
  "Lab/5.jpg",
  "Lab/6.jpeg",
  "Lab/7.jpeg",
  "Lab/8.jpeg",
  "Lab/10.jpeg",
].map((src) => ({ src }));

const testimonialLeftSlides = [
  "Lab/22.jpg",
  "Lab/21.jpg",
  "Lab/23.jpg",
  "Lab/24.jpg",
  "Lab/25.jpg",
].map((src) => ({ src }));

const startLabSlides = [
  "Lab/41.jpeg",
  "Lab/48.jpeg",
  "Lab/49.jpeg",
  "Lab/45.jpeg",
  "Lab/46.jpeg"
  
  
].map((src) => ({ src }));

const recognitions = {
  plenaryLectures: [
    { year: "2025", title: "Plenary Speaker", event: "Indian Geriatric Mental Health Association National CME, Srinagar", month: "May", topic: "Dementia & its Variants: Recent Advances and Innovation.", icon: "🧠" },
    { year: "2024", title: "Plenary Speaker", event: "International Conference on Neuroscience and Cognitive Rehabilitation, Bishop Heber College", month: "April", topic: "Emerging Paradigms in Personalized Neuromodulation.", icon: "✨" },
    { year: "2024", title: "Plenary Speaker", event: "Tanushree L - Emerging Research in AI-Driven Neuroscience", month: "November", topic: "AI Models for Brain Age Estimation and Personalized Neuromodulation.", icon: "🤖" },
  ],
  invitedTalks: [
    { year: "2025", event: "APTCON Conference, All India Institute of Medical Sciences Madurai", title: "Resource Person", icon: "🎤" },
    { year: "2025", event: "Srinagar, Jammu & Kashmir", title: "Invited Speaker", icon: "📍" },
    { year: "2025", event: "AICID Conference, Bishop Heber College", title: "Resource Person", topic: "Emerging Trends in AI-Driven Approaches for Chronic and Infectious Diseases.", icon: "🧬" },
    { year: "2020", month: "November 14", event: "Department of Neuroscience, King Saud University", title: "Invited Talk", topic: "Towards Personalization of Brain Stimulation: Advances and Approaches.", icon: "🧩" },
    { year: "2018", month: "August", event: "Department of Neurology, Johns Hopkins University", title: "Invited Lecture", topic: "Effect of tDCS on Bilingual Reading.", icon: "📘" },
    { year: "2018", month: "July", event: "Cleveland Clinic", title: "Invited Lecture", topic: "Computational Approach to tDCS.", icon: "💻" },
  ],
  conferencePresentations: [
    { year: "2024", event: "Organization for Human Brain Mapping Annual Meeting, Seoul", title: "Oral Presentation", topic: "HD-tDCS applications", award: "ICMR Travel Fellowship", icon: "📊" },
    { year: "2019", month: "February", event: "Brain Stimulation Conference, Lee Kong Chian School of Medicine", title: "Speaker", topic: "Could tDCS Modulate Bilingual Reading?", icon: "🧪" },
    { year: "2018", month: "June", event: "Brain Stimulation Satellite Conference, Organization for Human Brain Mapping", title: "Speaker", topic: "Effect of tDCS on Change in Blood Pressure.", icon: "📈" },
  ],
  mediaRecognition: [
    { year: "2024", title: "Deccan Herald", description: "Research covered on AI-assisted treatment for psychiatric disorders", url: "https://www.deccanherald.com/india/karnataka/bengaluru/boost-for-treating-psychiatric-disorders-as-ai-meets-medicine-3230847", icon: "📰" },
    { year: "2024", title: "PsyPost", description: "International media coverage of work on childhood adversity impact on brain development", url: "https://www.psypost.org/new-study-reveals-lasting-impact-of-childhood-adversity-on-brain-development/", icon: "🌍" },
    { year: "2021", title: "Faculty Opinions", description: "Study on OCD compensation mechanisms nominated as Exceptional research", url: "https://facultyopinions.com/article/739373355", icon: "⭐" },
    { year: "2020", title: "Human Brain Mapping Journal", description: "Study on aberrant fMRI brain signatures selected as Cover-page Editor's choice", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/hbm.24649", icon: "📚" },
  ],
};

const publications = [
  { year: "2025", items: [
    "1. Bhattacharjee S, Sivakumar PT, Venkatasubramanian G, Bharath RD, Oishi K, Rapp B, et al. Personalized transcranial direct current stimulation for behavioral and neurophysiologic outcomes. JAMA Netw Open. 2025;8(8):e2526148. DOI: 10.1001/jamanetworkopen.2025.26148",
    "2. Bhattacharjee S, Sivakumar PT, Venkatasubramanian G, Oishi K, Tsapkini K, Chen SHA, et al. Structural and functional determinants for designing pathology-specific tDCS protocols in primary progressive aphasia. Alzheimers Res Ther. 2025;17(1):156. DOI: 10.1186/s13195-025-01737-3",
    "3. Kashyap R, Zhou C, Tsapkini K, Desmond JE, Chen SHA, Bharath RD, et al.; Bhattacharjee S. Longitudinal evaluation of brain networks in primary progressive aphasia. Alzheimers Res Ther. 2025;17:192. DOI: 10.1186/s13195-025-01800-z",
    "4. Bhattacharjee S, Chakraborty I, Kashyap R, Sreeraj VS, Arshad F, Yamini BK, et al. Identifying target regions for non-invasive brain stimulation in primary progressive aphasia: A narrative review. Brain Disord. 2025;100255. DOI: 10.1016/j.braindis.2025.100255",
  ]},
  { year: "2024", items: [
    "5. Bhattacharjee S, Kashyap R, Sreeraj VS, Sivakumar PT, Venkatasubramanian G, Desmond JE, et al. Personalized dose selection for treatment of patients with neuropsychiatric disorders using tDCS. Brain Sci. 2024;14(12):1162. DOI: 10.3390/brainsci14121162",
    "6. Bhattacharjee S, Kashyap R, Udupa K, Bashir S, Venkatasubramanian G, Oishi K, et al. Alignment of behaviour and tDCS stimulation site induces maximum response: evidence from online tDCS and ERP. Sci Rep. 2024;14:19715. DOI: 10.1038/s41598-024-68691-2",
    "7. Kashyap R, Holla B, Bhattacharjee S, Sharma E, Mehta UM, Vaidya N, et al. Childhood adversities characterize heterogeneity in neurodevelopmental brain patterns. Psychol Med. 2024. DOI: 10.1017/S0033291724000710",
    "8. Singh SR, Bhattacharjee S, Udupa K. Neuromodulation interventions in paediatric neurological disorders: A contemporary review. J Pediatr Neonatal Med. 2024;6(1).",
  ]},
  { year: "2023", items: [
    "9. Kashyap R, Bhardwaj S, Bhattacharjee S, Sunny AS, Udupa K, Kumar M, et al. Perturbational map of low-frequency repetitive transcranial magnetic stimulation of primary motor cortex in movement disorders. Brain Disord. 2023;100071. DOI: 10.1016/j.braindis.2023.100071",
  ]},
  { year: "2022", items: [
    "10. Bhattacharjee S, Kashyap R, Goodwill MA, O'Brien BA, Rapp B, Oishi K, Desmond JE, Chen SA. Sex difference in tDCS current mediated by cortical anatomy across the lifespan. Brain Stimul. 2022;15(1):125–140. DOI: 10.1016/j.brs.2021.11.012",
    "11. Kashyap R, Bhattacharjee S, Bashir S, Oishi K, Desmond JE, Chen SA, Guan C. Variation in cerebrospinal fluid regulates focality in transcranial direct current stimulation. Front Hum Neurosci. 2022;16. DOI: https://doi.org/10.3389/fnhum.2022.952602",
  ]},
  { year: "2021", items: [
    "12. Bhattacharjee S, Kashyap R, Abualait T, Chen SHA, Yoo WK, Bashir S. The role of primary motor cortex: more than movement execution. J Mot Behav. 2021;53(1):1–17. DOI: 10.1080/00222895.2020.1865082",
    "13. Kashyap R, Bhattacharjee S, Arumugam R, Bharath RD, Udupa K, Oishi K, Desmond JE, Chen SA. Focality-oriented selection of current dose for transcranial direct current stimulation. J Pers Med. 2021;11(6): 11090940 DOI: 10.3390/jpm11060520",
    "14. Kashyap R, Eng GK, Bhattacharjee S, Gupta B, Ho R, Ho C, Zhang MW, Mahendran R, Sim K, Chen SA. Individual-based approaches reveal fronto-striato-limbic dissociation in obsessive-compulsive disorder. Sci Rep. 2021;11:1354. DOI: 10.1038/s41598-021-81361-3",
  ]},
  { year: "2020", items: [
    "15. Bhattacharjee S, Kashyap R, O'Brien BA, Rapp B, Oishi K, Desmond JE, Chen SA. Reading proficiency influences the effects of transcranial direct current stimulation in bilinguals. Brain Lang. 2020;210:104850. DOI: 10.1016/j.bandl.2020.104850",
    "16. Kashyap R, Bhattacharjee S, Arumugam R, Oishi K, Desmond JE, Chen SA. i-SATA: A MATLAB-based toolbox to estimate current density generated by transcranial direct current stimulation in individual brains. J Neural Eng. 2020;17(1):016050. DOI: 10.1088/1741-2552/ab5c9c",
    "17. Kashyap R, Bhattacharjee S, Yeo BTT, Chen SHA. Maximizing dissimilarity in resting state detects heterogeneous subtypes in healthy population associated with high substance use and problems in antisocial personality. Hum Brain Mapp. 2020;41:1261–1273. https://doi.org/10.1002/hbm.24873",
  ]},
  { year: "2019", items: [
    "17. Bhattacharjee S, Kashyap R, Rapp B, Oishi K, Desmond JE, Chen SA. Simulation analyses of tDCS montages for investigating dorsal and ventral pathways. Sci Rep. 2019;9:12315. DOI: 10.1038/s41598-019-47654-y",
    "18. Kashyap R, Bhattacharjee S, Sommer W, Zhou C. Repetition priming effects for famous faces through dynamic causal modelling of latency-corrected event-related brain potentials. Eur J Neurosci. 2019;49:1330–1347. DOI https://doi.org/10.1111/ejn.14303",
    "19. Kashyap, R., Kong, R., Bhattacharjee, S., Li, J., Zhou, J., & Yeo, B. T. (2019). Individual-specific fMRI-Subspaces improve functional connectivity prediction of behavior. NeuroImage, 189, 804-812.",
    "20. Bhattacharjee S, Chew A, Kashyap R, Wu C, Yeo M, O'Brien BA, et al. Could tDCS modulate bilingual reading? Brain Stimul. 2019;12(2):569. DOI: 10.1016/j.brs.2018.12.",
  ]},
  { year: "2018", items: [
    "20. Kashyap R, Bhattacharjee S, Sommer W, Zhou C. Repetition priming effects for famous faces using dynamic causal modelling of ERP. Eur J Neurosci. 2018;48(5): DOI: 10.1111/ejn.",
    "21. Kashyap R, Kong R, Bhattacharjee S, Li J, Zhou J, Yeo BTT. Individual-specific fMRI subspaces improve functional connectivity prediction of behavior. NeuroImage. 2018;XXXX:804–812. DOI: 10.1016/j.neuroimage.2018.",
  ]},
  { year: "2017 and earlier", items: [
    "22. Bhattacharjee S, Kashyap R. Neuromuscular characterization of dysphagia following stroke. Int J Adv Med Sci. 2017;2(2)",
    "23. Bhattacharjee S, Mondol M, Kashyap R. Effect of hypertension and hypercholesterolemia on auditory brainstem response in adults. Int J Med Health Sci. 2016;5(4):267–271",
    "24. Bhattacharjee S. Anthropometric parameters and postural blood pressure changes in children with autism spectrum disorders. Int J Basic Appl Physiol. 2012;1:93.",
  ]},
];

const conferenceAbstracts = [
  { year: "2024", items: [
    { authors: "1. Chakraborty I, Kashyap R, Sreeraj VS, Arshad F, Yamini BK, Bharath RD, Sivakumar PT, Venkatasubramanian G, Alladi S, Oishi K, Desmond JE, Chen SHA, Sathyaprabha TN, Udupa K, Bhattacharjee S", title: "Comparison of conventional and HD-tDCS for neuropsychiatric disorders", conference: "Organization for Human Brain Mapping (OHBM) Annual Meeting", location: "Seoul, South Korea", type: "Oral Presentation", award: "ICMR Travel Fellowship" },
  ]},
  { year: "2021", items: [
    { authors: "2. Bhattacharjee S, Kashyap R, O'Brien BA, Rapp B, Oishi K, Desmond JE, Chen SA", title: "Sex differences in simulated tDCS current across age groups mediated by cortical anatomy", conference: "Organization for Human Brain Mapping (OHBM) Annual Meeting", year_details: "2021", award: "Exceptional Abstract Award" },
  ]},
  { year: "2019", items: [
    { authors: "3. Bhattacharjee S, Kashyap R, Chew A, Desmond JE, Chen SA", title: "Gender differences in the effect of transcranial direct current stimulation on reading", conference: "25th Annual Meeting of the Organization for Human Brain Mapping (OHBM)", location: "Rome, Italy" },
    { authors: "4. Bhattacharjee S, Chew A, Kashyap R, Wu CY, Yeo M, O'Brien BA, Rapp B, McCloskey M, Oishi K, Desmond JE, Chen SA", title: "Could transcranial direct current stimulation modulate bilingual reading?", conference: "Brain Stimulation", pages: "12(2):569" },
  ]},
  { year: "2018", items: [
    { authors: "5. Bhattacharjee S, Kashyap R, Desmond JE, Rapp B, Oishi K, Chen SA", title: "Systematic analysis of simulations for tDCS montages applied in reading", conference: "Organization for Human Brain Mapping (OHBM) Annual Meeting", location: "Singapore" },
  ]},
  { year: "2014", items: [
    { authors: "6. Bhattacharjee IR, Shaptadvipa B, Bhattacharjee S, Kashyap R", title: "Understanding space life through principles of self-gravitation", conference: "65th International Astronautical Congress" },
    { authors: "7. Bhattacharjee IR, Shaptadvipa B, Bhattacharjee S, Kashyap R", title: "Self-gravitation bio: Evidence supporting astrophysical principles in biological systems", conference: "18th International Biophysics Congress (IUPAB)", location: "Brisbane, Australia" },
  ]},
  { year: "2011", items: [
    { authors: "8. Kashyap R, Bhattacharjee S, Bhattacharjee IR", title: "Finite element approach to self-gravitational bio in embryological systems", conference: "8th European Biophysics Congress", location: "Budapest, Hungary" },
    { authors: "9. Bhattacharjee IR, Kashyap R, Bhattacharjee S", title: "Finite element modeling of self-gravitation bio and macromolecular crowding", conference: "17th International Biophysics Congress (IUPAB)" },
    { authors: "10. Kashyap R, Bhattacharjee S, Bhattacharjee IR", title: "Mathematical modeling of embryogenesis based on self-gravitation bio", conference: "17th International Biophysics Congress (IUPAB)", location: "Beijing, China" },
  ]},
];

const treatmentVideos = [
  {
    label: "Before",
    title: "Baseline assessment",
    src: "OOLNjCOzbFs",
  },
  {
    label: "During",
    title: "In-session treatment",
    src: "kSNh930AsBM",
  },
  {
    label: "After",
    title: "Follow-up review",
    src: "9_crUh9vyQk",
  },
];

const aboutSections = [
  {
    title: "Principal Investigator",
    body: bioParagraphs.map((paragraph) => `<p>${linkNames(paragraph, bioInstitutionLinks)}</p>`).join(""),
    extras: bioLinks.map(([label, url]) => `<a class="pill link-pill" href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join(""),
  },
  {
    title: "Interests",
    body: bioInterests.map(([label, text]) => `<p><strong>${label}:</strong> ${text}</p>`).join(""),
  },
  {
    title: "Research Fellows",
    body: fellows
      .map(
        (person) => `
          <p><strong>${linkNames(person.name, personLinks)}</strong><br />${person.text}</p>
        `
      )
      .join(""),
  },
  {
    title: "Interns",
    body: interns
      .map(
        (person) => `
          <p><strong>${linkNames(person.name, personLinks)}</strong><br />${person.text}</p>
        `
      )
      .join(""),
  },
];

function linkifyExternalReferences(text) {
  return text
    .replace(/(https?:\/\/[^\s)]+)(?=[\s)]|$)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
    .replace(/DOI:\s*(10\.\d{4,9}\/[A-Za-z0-9._;()/:+-]+)/gi, (_match, doi) => {
      const cleanDoi = String(doi).replace(/[.,;]+$/, "");
      return `DOI: <a href="https://doi.org/${cleanDoi}" target="_blank" rel="noreferrer">${cleanDoi}</a>`;
    });
}

function extractPublicationLink(text) {
  const explicitUrl = text.match(/https?:\/\/[^\s)]+/i);
  if (explicitUrl) {
    return explicitUrl[0].replace(/[.,;]+$/, "");
  }

  const doiMatch = text.match(/DOI:\s*(10\.\d{4,9}\/[A-Za-z0-9._;()/:+-]+)/i);
  if (doiMatch) {
    return `https://doi.org/${String(doiMatch[1]).replace(/[.,;]+$/, "")}`;
  }

  return "";
}

function publicationListItem(text) {
  const link = extractPublicationLink(text);
  const segments = text.split(". ");

  if (!link || segments.length < 2) {
    return `<li class="publication-entry">${linkifyExternalReferences(text)}</li>`;
  }

  const authors = segments[0];
  const title = segments[1].replace(/\.$/, "");
  const rest = segments.slice(2).join(". ");
  return `<li class="publication-entry">${authors}. <a class="paper-title-link" href="${link}" target="_blank" rel="noreferrer">${title}</a>${rest ? `. ${linkifyExternalReferences(rest)}` : ""}</li>`;
}

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
    <article class="research-panel research-theme-card reveal">
      <div class="research-theme-grid">
        <div class="research-theme-media">
          ${researchCarousel(item.slides, item.title)}
        </div>
        <div class="research-theme-copy">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <div class="research-meta">${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
        </div>
      </div>
    </article>
  `;
}

function researchCarousel(slides, title) {
  const slideSrcs = (slides && slides.length)
    ? slides.map((s) => s.src)
    : [];

  const slidesJson = JSON.stringify(slideSrcs);

  return `
    <div class="research-carousel" data-slides='${slidesJson}' aria-roledescription="carousel" aria-label="${title} slides">
      <div class="carousel-frame">
        <img class="carousel-image" src="${slideSrcs[0] || ''}" alt="${title} slide" />
      </div>
      <div class="carousel-controls">
        <button class="carousel-prev" type="button" aria-label="Previous slide">‹</button>
        <button class="carousel-next" type="button" aria-label="Next slide">›</button>
      </div>
    </div>
  `;
}

function initializeResearchCarousel(container) {
  if (!container) return;
  const img = container.querySelector(".carousel-image");
  const prev = container.querySelector(".carousel-prev");
  const next = container.querySelector(".carousel-next");

  let slides = [];
  try {
    slides = JSON.parse(container.dataset.slides || "[]");
  } catch (e) {
    slides = [];
  }

  if (!slides.length) {
    // nothing to show
    container.classList.add("no-slides");
    return;
  }

  let index = 0;

  function show(i) {
    index = (i + slides.length) % slides.length;
    img.src = slides[index];
  }

  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));

  // initial state
  show(0);
}

function publicationCard(item) {
  const toolboxesHtml = item.toolboxes ? `
    <div class="toolboxes-section">
      <h4>TES Analysis Toolboxes</h4>
      <div class="toolboxes-list">
        ${item.toolboxes.map((tb) => `
          <div class="toolbox-item">
            <strong>${tb.year} - ${tb.title}</strong><br />
            ${tb.description}
            <br /><a href="${tb.url}" target="_blank" rel="noreferrer" style="color: var(--cta); text-decoration: underline;">View →</a>
          </div>
        `).join("")}
      </div>
    </div>
  ` : "";
  
  return `
    <article class="research-panel reveal">
      <h3>Publications in this theme</h3>
      ${toolboxesHtml}
      <ul class="publication-year-list publication-theme-bullets">
        ${item.publications.map((pub) => publicationListItem(pub)).join("")}
      </ul>
    </article>
  `;
}

const researchContent = document.getElementById("researchContent");
const researchPublications = document.getElementById("researchPublications");
const researchTabButtons = document.querySelectorAll(".research-tab-btn");

function renderResearchTheme(index) {
  const safeIndex = Number.isFinite(index) ? Math.max(0, Math.min(research.length - 1, index)) : 0;
  const currentTheme = research[safeIndex];

  if (researchContent) {
    researchContent.querySelectorAll(".research-carousel").forEach((el) => {
      if (el._carouselInterval) {
        clearInterval(el._carouselInterval);
        el._carouselInterval = null;
      }
    });
  }

  if (researchContent) {
    researchContent.innerHTML = researchCard(currentTheme);
  }

  if (researchPublications) {
    researchPublications.innerHTML = publicationCard(currentTheme);
  }

  // initialize carousel for this theme (if present)
  const carouselEl = researchContent ? researchContent.querySelector(".research-carousel") : null;
  if (carouselEl) initializeResearchCarousel(carouselEl);

  document.querySelectorAll("#researchContent .reveal, #researchPublications .reveal").forEach((el) => el.classList.add("is-visible"));
}

if (researchTabButtons.length) {
  researchTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.theme ?? 0);
      researchTabButtons.forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      renderResearchTheme(nextIndex);
    });
  });
}

renderResearchTheme(0);

const startLabCarousel = document.getElementById("startLabCarousel");
if (startLabCarousel) {
  startLabCarousel.innerHTML = researchCarousel(startLabSlides, "Lab highlights");
  const startCarousel = startLabCarousel.querySelector(".research-carousel");
  if (startCarousel) {
    initializeResearchCarousel(startCarousel);
  }
}

const uniqueGrid = document.getElementById("uniqueGrid");
if (uniqueGrid) {
  uniqueGrid.innerHTML = unique
    .map((item, idx) => `
      <article class="accordion-item reveal">
        <button class="accordion-header" data-index="${idx}" aria-expanded="false">
          <div class="accordion-header-content">
            ${item.icon ? `<span class="accordion-icon">${item.icon}</span>` : ""}
            <h3>${item.title}</h3>
          </div>
          <span class="accordion-toggle">+</span>
        </button>
        <div class="accordion-content" style="display: none;">
          <p>${item.text}</p>
        </div>
      </article>
    `)
    .join("");

  // Add click handlers for accordion items
  const accordionHeaders = uniqueGrid.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const toggle = header.querySelector(".accordion-toggle");
      const isOpen = content.style.display !== "none";
      
      // Close all other items
      uniqueGrid.querySelectorAll(".accordion-content").forEach((c) => c.style.display = "none");
      uniqueGrid.querySelectorAll(".accordion-toggle").forEach((t) => t.textContent = "+");
      uniqueGrid.querySelectorAll(".accordion-header").forEach((h) => h.setAttribute("aria-expanded", "false"));
      
      // Toggle current item
      if (!isOpen) {
        content.style.display = "block";
        toggle.textContent = "−";
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}

const testimonialGrid = document.getElementById("testimonialGrid");
if (testimonialGrid) {
  // Render a left-side and right-side image slider
  testimonialGrid.innerHTML = `
    <div class="testimonial-slider" id="testimonialLeftCarouselContainer">
      ${researchCarousel(testimonialLeftSlides, "Patient highlights")}
    </div>
    <div class="testimonial-slider" id="testimonialCarouselContainer">
      ${researchCarousel(testimonialSlides, "Patient testimonial")}
    </div>
  `;

  // Hide the existing content container if it exists
  const contentContainer = document.getElementById("testimonialContentContainer");
  if (contentContainer) {
    contentContainer.style.display = "none";
  }


  const testimonialLeftCarousel = document.getElementById("testimonialLeftCarouselContainer")?.querySelector(".research-carousel");
  if (testimonialLeftCarousel) {
    initializeTestimonialCarousel(testimonialLeftCarousel);
  }

  const testimonialCarousel = document.getElementById("testimonialCarouselContainer")?.querySelector(".research-carousel");
  if (testimonialCarousel) {
    initializeTestimonialCarousel(testimonialCarousel);
  }

}

function initializeTestimonialCarousel(container) {
  initializeResearchCarousel(container);
}

const aboutGrid = document.getElementById("aboutGrid");
if (aboutGrid) {
  const interestIcons = {
    Painting: "🎨",
    Dance: "💃",
    Cooking: "🍳",
    "Reading & Inner Exploration": "📚",
    Traveling: "✈",
  };

  const fellowCards = fellows
    .map(
      (person) => {
        if (person.isExpanded) {
          const linksHtml = person.links?.map(([label, url]) => `<a href="${url}" target="_blank" style="color: #7c3aed; text-decoration: none; border-bottom: 2px solid #7c3aed; padding-bottom: 2px;">${label}</a>`).join('<span style="color: rgba(0,0,0,0.5);"> | </span>') || '';
          
          const sliderImages = person.images?.map((src, idx) => `<img src="${src}" alt="${person.name} image ${idx + 1}" class="tanushree-slider-image" style="width: 100%; height: 100%; display: ${idx === 0 ? 'block' : 'none'}; object-fit: contain; position: ${idx === 0 ? 'relative' : 'absolute'}; top: 0; left: 0;">`).join('') || '';
          
          const sliderHtml = person.images ? `
            <div class="tanushree-slider" style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; border-radius: 8px; background: #f5f5f5;">
              ${sliderImages}
              <button type="button" class="tanushree-slider-prev" aria-label="Previous image" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 2; border: 0; border-radius: 999px; width: 34px; height: 34px; background: rgba(0, 0, 0, 0.42); color: #fff; cursor: pointer;">‹</button>
              <button type="button" class="tanushree-slider-next" aria-label="Next image" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 2; border: 0; border-radius: 999px; width: 34px; height: 34px; background: rgba(0, 0, 0, 0.42); color: #fff; cursor: pointer;">›</button>
            </div>
          ` : '';
          
          const interestsHtml = person.interests ? `
            <div class="tanushree-interests">
              <p style="font-weight: bold; margin-bottom: 0.8rem; color: var(--primary-color);">Interests</p>
              <div style="text-align: justify; font-size: 0.9rem; color: var(--text-light);">
                ${person.interests.map(([label, value]) => `<p style="margin-bottom: 0.8rem;"><strong>${label}</strong> - ${value}</p>`).join('')}
              </div>
            </div>
          ` : '';
          
          return `
        <article class="research-panel reveal about-fellow-card">
          <div class="about-fellow-copy">
            <h3>👩‍🔬 ${linkNames(person.name, personLinks)}</h3>
            <div class="publication-list">
              <p>${person.expandedBio}</p>
              <p>${person.expandedBio2}</p>
              <p>${person.expandedBio3}</p>
              <p>${person.expandedBio4}</p>
              <div style="display: flex; gap: 1rem; justify-content: flex-start; flex-wrap: wrap; margin-top: 1rem;">
                ${linksHtml}
              </div>
            </div>
          </div>
          <div class="about-fellow-side">
            ${sliderHtml}
            ${interestsHtml}
          </div>
        </article>
      `;
        }
        return `
        <article class="research-panel reveal about-member-card">
          <h3>👩‍🔬 ${linkNames(person.name, personLinks)}</h3>
          <div class="publication-list">
            <p>${person.text}</p>
          </div>
        </article>
      `;
      }
    )
    .join("");

  const otherMemberCards = interns
    .map(
      (person) => {
        const sliderImages = person.images?.map((src, idx) => `<img src="${src}" alt="${person.name} image ${idx + 1}" class="tanushree-slider-image" style="width: 100%; height: 100%; display: ${idx === 0 ? 'block' : 'none'}; object-fit: contain; position: ${idx === 0 ? 'relative' : 'absolute'}; top: 0; left: 0;">`).join('') || '';

        const sliderHtml = person.images ? `
          <div class="tanushree-slider intern-member-media" style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; border-radius: 8px; background: #f5f5f5;">
            ${sliderImages}
            <button type="button" class="tanushree-slider-prev" aria-label="Previous image" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 2; border: 0; border-radius: 999px; width: 34px; height: 34px; background: rgba(0, 0, 0, 0.42); color: #fff; cursor: pointer;">‹</button>
            <button type="button" class="tanushree-slider-next" aria-label="Next image" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 2; border: 0; border-radius: 999px; width: 34px; height: 34px; background: rgba(0, 0, 0, 0.42); color: #fff; cursor: pointer;">›</button>
          </div>
        ` : '';

        if (!sliderHtml) {
          return `
            <article class="research-panel reveal about-member-card">
              <h3>🧠 ${linkNames(person.name, personLinks)}</h3>
              <div class="publication-list">
                <p>${person.text}</p>
              </div>
            </article>
          `;
        }

        return `
          <article class="research-panel reveal intern-member-card has-image">
            <div class="intern-member-copy">
              <h3>🧠 ${linkNames(person.name, personLinks)}</h3>
              <div class="publication-list">
                <p>${person.text}</p>
              </div>
            </div>
            <div class="intern-member-image">${sliderHtml}</div>
          </article>
        `;
      }
    )
    .join("");

  const piSliderHtml = `
    <div class="pi-slider-wrapper" aria-label="PI image slider" style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="pi-slider" style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; border-radius: 8px; background: #f5f5f5;">
        <img src="Lab/56.jpeg" alt="PI image 56" class="pi-slider-image active" style="width: 100%; height: 100%; display: block; object-fit: contain; transition: opacity 0.5s ease;">
        <img src="Lab/51.jpeg" alt="PI image 51" class="pi-slider-image" style="width: 100%; height: 100%; display: none; object-fit: contain; transition: opacity 0.5s ease; position: absolute; top: 0; left: 0;">
        <img src="Lab/52.jpeg" alt="PI image 52" class="pi-slider-image" style="width: 100%; height: 100%; display: none; object-fit: contain; transition: opacity 0.5s ease; position: absolute; top: 0; left: 0;">
        <img src="Lab/53.jpeg" alt="PI image 53" class="pi-slider-image" style="width: 100%; height: 100%; display: none; object-fit: contain; transition: opacity 0.5s ease; position: absolute; top: 0; left: 0;">
        <img src="Lab/54.jpeg" alt="PI image 54" class="pi-slider-image" style="width: 100%; height: 100%; display: none; object-fit: contain; transition: opacity 0.5s ease; position: absolute; top: 0; left: 0;">
        <img src="Lab/55.jpeg" alt="PI image 55" class="pi-slider-image" style="width: 100%; height: 100%; display: none; object-fit: contain; transition: opacity 0.5s ease; position: absolute; top: 0; left: 0;">
        <button type="button" class="pi-slider-prev" aria-label="Previous PI image" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 2; border: 0; border-radius: 999px; width: 36px; height: 36px; background: rgba(0, 0, 0, 0.45); color: #fff; cursor: pointer;">‹</button>
        <button type="button" class="pi-slider-next" aria-label="Next PI image" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 2; border: 0; border-radius: 999px; width: 36px; height: 36px; background: rgba(0, 0, 0, 0.45); color: #fff; cursor: pointer;">›</button>
      </div>
    </div>
  `;

  const piInterestsHtml = `
    <div class="pi-interests">
      <p style="font-weight: bold; margin-bottom: 0.8rem; color: var(--primary-color);">Interests</p>
      <div style="text-align: justify; font-size: 0.9rem; color: var(--text-light);">
        ${bioInterests.map(([label, value]) => `<p style="margin-bottom: 0.8rem;"><strong>${label} ${interestIcons[label] ?? "•"}</strong> - ${value}</p>`).join("")}
      </div>
    </div>
  `;

  aboutGrid.innerHTML = `
    <article class="research-panel reveal about-pi-card">
      <div class="about-pi-copy">
        <h3>${aboutSections[0].title}</h3>
        <p class="principal-investigator-name">👩‍⚕️ Dr. Sagarika Bhattacherjee</p>
        <div class="publication-list">${aboutSections[0].body}</div>
        <div class="research-meta" style="margin-top: 1rem;">${aboutSections[0].extras}</div>
      </div>
      <div class="about-pi-side">
        ${piSliderHtml}
        ${piInterestsHtml}
      </div>
    </article>
    <article class="research-panel reveal">
      <h3>🎓 Research Fellows</h3>
      <p>Current and former fellows contributing to precision neuromodulation research.</p>
    </article>
    ${fellowCards}
    <article class="research-panel reveal">
      <h3>👥 PhD & Other Members</h3>
      <p>Additional members and trainees in the lab.</p>
    </article>
    ${otherMemberCards}
  `;

  // Initialize PI slider - manual arrows only
  const piSlider = aboutGrid.querySelector(".pi-slider");
  if (piSlider) {
    const images = piSlider.querySelectorAll(".pi-slider-image");
    const prevButton = piSlider.querySelector(".pi-slider-prev");
    const nextButton = piSlider.querySelector(".pi-slider-next");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, idx) => {
        if (idx === 0) {
          img.style.display = index === 0 ? "block" : "none";
          img.style.position = index === 0 ? "relative" : "absolute";
        } else {
          img.style.display = (idx === index) ? "block" : "none";
          img.style.position = (idx === index) ? "relative" : "absolute";
        }
      });
      currentIndex = (index + images.length) % images.length;
    }

    showImage(0);

    prevButton?.addEventListener("click", () => showImage(currentIndex - 1));
    nextButton?.addEventListener("click", () => showImage(currentIndex + 1));
  }

  // Initialize Tanushree image slider - manual arrows only
  const tanushreeSliders = aboutGrid.querySelectorAll(".tanushree-slider");
  tanushreeSliders.forEach((slider) => {
    const images = slider.querySelectorAll(".tanushree-slider-image");
    const prevButton = slider.querySelector(".tanushree-slider-prev");
    const nextButton = slider.querySelector(".tanushree-slider-next");

    if (images.length > 0) {
      let currentIndex = Math.min(1, images.length - 1);

      function showImage(index) {
        const nextIndex = (index + images.length) % images.length;
        images.forEach((img, idx) => {
          img.style.display = idx === nextIndex ? "block" : "none";
          img.style.position = idx === nextIndex ? "relative" : "absolute";
        });
        currentIndex = nextIndex;
      }

      showImage(currentIndex);

      prevButton?.addEventListener("click", () => showImage(currentIndex - 1));
      nextButton?.addEventListener("click", () => showImage(currentIndex + 1));
    }
  });
}

const treatmentVideoGrid = document.getElementById("treatmentVideoGrid");
if (treatmentVideoGrid) {
  const isYouTubeId = (s) => typeof s === "string" && /^[a-zA-Z0-9_-]{11}$/.test(s);

  treatmentVideoGrid.innerHTML = treatmentVideos
    .map((item) => {
      if (isYouTubeId(item.src)) {
        const id = item.src;
        return `
        <button class="video-card reveal" type="button" data-youtube-id="${id}" aria-label="Play ${item.label} video with audio">
          <div class="video-card-media youtube-thumb" style="background-image:url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')" aria-hidden="true"></div>
          <div class="video-card-overlay">
            <span class="pill">${item.label}</span>
            <h3>${item.title}</h3>
            <span class="video-card-action">Tap to play</span>
          </div>
        </button>
      `;
      }

      return `
        <button class="video-card reveal" type="button" aria-label="Play ${item.label} video with audio">
          <video class="video-card-media" preload="auto" autoplay loop muted playsinline aria-hidden="true">
            <source src="${item.src}" type="video/mp4" />
          </video>
          <div class="video-card-overlay">
            <span class="pill">${item.label}</span>
            <h3>${item.title}</h3>
            <span class="video-card-action">Tap to hear audio</span>
          </div>
        </button>
      `;
    })
    .join("");

  const treatmentVideoCards = Array.from(treatmentVideoGrid.querySelectorAll(".video-card"));

  const resetAll = () => {
    treatmentVideoCards.forEach((otherCard) => {
      const otherVideo = otherCard.querySelector("video");
      if (otherVideo) {
        otherVideo.pause();
        otherVideo.currentTime = 0;
        otherVideo.muted = true;
        otherCard.classList.remove("is-playing");
      }

      const iframeWrap = otherCard.querySelector(".youtube-iframe-wrap");
      if (iframeWrap) {
        // remove iframe and restore thumbnail
        iframeWrap.remove();
        const id = otherCard.getAttribute("data-youtube-id");
        const thumb = document.createElement("div");
        thumb.className = "video-card-media youtube-thumb";
        thumb.style.backgroundImage = `url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')`;
        otherCard.insertBefore(thumb, otherCard.firstChild);
        otherCard.classList.remove("is-playing");
      }
    });
  };

  treatmentVideoCards.forEach((card) => {
    const video = card.querySelector("video");
    const ytId = card.getAttribute("data-youtube-id");

    if (video) {
      video.addEventListener("play", () => card.classList.add("is-playing"));
      video.addEventListener("pause", () => card.classList.remove("is-playing"));
      video.addEventListener("ended", () => {
        card.classList.remove("is-playing");
        video.currentTime = 0;
        video.muted = true;
      });

      card.addEventListener("click", async () => {
        resetAll();
        if (video.paused) {
          video.muted = false;
          video.volume = 1;
          try {
            await video.play();
          } catch (e) {
            video.muted = true;
          }
          card.classList.add("is-playing");
          return;
        }

        if (video.muted) {
          video.muted = false;
          video.volume = 1;
          card.classList.add("is-playing");
          return;
        }

        video.pause();
        video.currentTime = 0;
        video.muted = true;
        card.classList.remove("is-playing");
      });

      return;
    }

    if (ytId) {
      card.addEventListener("click", () => {
        const alreadyPlaying = card.querySelector(".youtube-iframe-wrap");
        if (alreadyPlaying) {
          // stop it
          resetAll();
          return;
        }

        resetAll();

        // remove thumbnail
        const thumb = card.querySelector(".youtube-thumb");
        if (thumb) thumb.remove();

        const wrap = document.createElement("div");
        wrap.className = "youtube-iframe-wrap";
        wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`;
        card.insertBefore(wrap, card.firstChild);
        card.classList.add("is-playing");
      });
    }
  });
}

const careerGrid = document.getElementById("careerGrid");
if (careerGrid) {
  const icons = ["🔬", "🎓", "📊"];
  careerGrid.innerHTML = `
    ${career.map((item, idx) => `
      <article class="research-panel reveal career-card">
        <div class="career-card-head">
          <div class="career-card-title-row">
            <div class="career-card-icon">${icons[idx]}</div>
            <h3>${item.title}</h3>
          </div>
          <span class="pill" style="background: var(--cta); color: white;">${item.status}</span>
        </div>
        <p class="career-card-summary">${item.summary}</p>
        <ul class="career-card-list">
          ${item.items.map((line) => `<li style="margin: 0.3rem 0;">${line}</li>`).join("")}
        </ul>
      </article>
    `).join("")}
  `;
}

const recognitionsContainer = document.getElementById("recognitionsContainer");
if (recognitionsContainer) {
  recognitionsContainer.innerHTML = `
    <div class="recognitions-layout">
      <article class="research-panel reveal recognition-card">
        <div class="recognition-card-head">
          <span class="recognition-card-icon">🎓</span>
          <h3>Plenary & Keynote</h3>
        </div>
        <div class="recognition-list">
          ${recognitions.plenaryLectures.map(lec => `
            <div class="recognition-item-box">
              <div class="recognition-item-top">
                <strong>${lec.title}</strong>
                <span style="background: var(--primary); color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">${lec.year}</span>
              </div>
              <div class="recognition-item-meta">${lec.event} · ${lec.month}</div>
              <div class="recognition-item-topic"><span class="recognition-topic-icon">${lec.icon || "•"}</span><span>${lec.topic}</span></div>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="research-panel reveal recognition-card">
        <div class="recognition-card-head">
          <span class="recognition-card-icon">🎙️</span>
          <h3>Invited Talks</h3>
        </div>
        <div class="recognition-item-grid">
          ${recognitions.invitedTalks.map(talk => `
            <div class="recognition-item-box">
              <div class="recognition-item-top">
                <strong>${talk.title}</strong>
                <span style="background: var(--primary); color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">${talk.year}</span>
              </div>
              <div class="recognition-item-meta">${talk.event}</div>
              ${talk.topic ? `<div class="recognition-item-topic"><span class="recognition-topic-icon">${talk.icon || "•"}</span><span>${talk.topic}</span></div>` : ""}
            </div>
          `).join("")}
        </div>
      </article>

      <article class="research-panel reveal recognition-card">
        <div class="recognition-card-head">
          <span class="recognition-card-icon">🏛️</span>
          <h3>Conferences</h3>
        </div>
        <div class="recognition-list">
          ${recognitions.conferencePresentations.map(conf => `
            <div class="recognition-item-box">
              <div class="recognition-item-top">
                <strong>${conf.title}</strong>
                <span style="background: var(--primary); color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">${conf.year}</span>
              </div>
              <div class="recognition-item-meta">${conf.event}</div>
              <div class="recognition-item-topic"><span class="recognition-topic-icon">${conf.icon || "•"}</span><span>${conf.topic}</span></div>
              ${conf.award ? `<div class="recognition-item-award">🏆 ${conf.award}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </article>

      <article class="research-panel reveal recognition-card">
        <div class="recognition-card-head">
          <span class="recognition-card-icon">📰</span>
          <h3>Media Coverage</h3>
        </div>
        <div class="recognition-list">
          ${recognitions.mediaRecognition.map(media => `
            <div class="recognition-item-box">
              <div class="recognition-item-top">
                <a href="${media.url}" target="_blank" rel="noreferrer" style="color: var(--cta); text-decoration: none; font-weight: 500; flex: 1;">${media.title}</a>
                <span style="background: var(--primary); color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">${media.year}</span>
              </div>
              <div class="recognition-item-meta"><span class="recognition-topic-icon">${media.icon || "🗞️"}</span><span>${media.description}</span></div>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
  `;
}

const publicationsArchive = document.getElementById("publicationsArchive");
if (publicationsArchive) {
  publicationsArchive.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      ${publications.map((yearBlock) => `
        <article class="research-panel reveal">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <h3 style="margin: 0; padding: 0.5rem 1rem; background: linear-gradient(135deg, var(--primary), #1f5978); color: white; border-radius: 8px; font-size: 1rem;">${yearBlock.year}</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.8rem;">
            <ul class="publication-year-list" style="padding: 0; margin: 0;">
              ${yearBlock.items.map((pub) => publicationListItem(pub)).join("")}
            </ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

// Populate Collaboration section
const collaborationContainer = document.getElementById("collaborationContainer");
if (collaborationContainer) {
  const seen = new Set();
  const dedupe = (list) => list.filter(([name]) => {
    const key = String(name).toLowerCase();
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });

  const dedupedCore = dedupe(coreCollaborators);
  const dedupedTranslational = dedupe(translationalCollaborators);

  collaborationContainer.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: start;">
      <article class="research-panel reveal" style="align-self: start; justify-content: flex-start;">
        <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem; justify-content: flex-start;">
          <span style="font-size: 2rem;">🌐</span>
          <h3 style="margin: 0; font-size: 1.1rem;">Core Collaborators</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${dedupedCore.map(([name, description, url]) => `
            <div class="collaboration-item collaboration-item-core">
              ${collaboratorLogoMarkup(name, url)}
              <div class="collaboration-item-copy">
                <a href="${url}" target="_blank" rel="noreferrer" style="color: var(--primary); text-decoration: none; font-weight: 500; display: block; margin-bottom: 0.3rem;">${name}</a>
                <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">${description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
      
      <article class="research-panel reveal" style="align-self: start; justify-content: flex-start;">
        <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem; justify-content: flex-start;">
          <span style="font-size: 2rem;">🏥</span>
          <h3 style="margin: 0; font-size: 1.1rem;">Clinical & Translational</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${dedupedTranslational.map(([name, description, url]) => `
            <div class="collaboration-item collaboration-item-translational">
              ${collaboratorLogoMarkup(name, url)}
              <div class="collaboration-item-copy">
                <a href="${url}" target="_blank" rel="noreferrer" style="color: var(--primary); text-decoration: none; font-weight: 500; display: block; margin-bottom: 0.3rem;">${name}</a>
                <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">${description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
  `;
}
const revealElements = document.querySelectorAll('.reveal');
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

  // Send to Formspree endpoint
  formNote.textContent = `Sending message...`;
  formNote.style.color = "var(--muted)";

  fetch("https://formspree.io/f/xvzybyrv", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok || data.success || resOk(data)) {
        formNote.textContent = `Thanks, ${name}. Your message has been sent.`;
        formNote.style.color = "#1f6b3a";
        contactForm.reset();
      } else {
        throw new Error("send-failed");
      }
    })
    .catch(() => {
      formNote.textContent = `Sorry, ${name}. We couldn't send your message right now.`;
      formNote.style.color = "#a44f27";
    });

  // Helper to handle some Formspree response shapes
  function resOk(d) {
    try {
      if (typeof d === "object") return d.ok === true || d.success === true;
    } catch (e) {}
    return false;
  }
});

// Mobile nav toggle (append at end)
(() => {
  const siteHeader = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (!siteHeader || !navToggle || !siteNav) return;

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteHeader.classList.toggle('nav-open', !expanded);
  });

  // Close on nav link click (mobile)
  siteNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && window.innerWidth < 900) {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Deferred section behavior: show only home, vision and unique on initial load
document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.querySelector('.site-header');
  const allSections = document.querySelectorAll('main > .section');
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"], .brand');

  const updateHeaderOffset = () => {
    const headerHeight = siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 0;
    document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`);
  };

  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);

  const showSection = (targetId) => {
    let targetFound = false;

    allSections.forEach(section => {
      // When home is selected, show both #home and #vision sections
      if (targetId === 'home' && (section.id === 'home' || section.id === 'vision')) {
        section.classList.add('is-active');
        section.style.display = 'block';
        section.style.paddingTop = ''; // use original layout padding
        targetFound = true;
      } else if (section.id === targetId) {
        section.classList.add('is-active');
        section.style.display = 'block';
        section.style.paddingTop = 'var(--header-offset, 112px)';
        targetFound = true;
      } else {
        section.classList.remove('is-active');
        section.style.display = 'none';
      }
    });

    if (!targetFound && targetId !== 'home') {
      showSection('home');
      return;
    }

    // Update active nav link
    document.querySelectorAll('.site-nav a:not(.button)').forEach(link => {
      if (link.getAttribute('href') === `#${targetId}`) {
        link.style.color = 'var(--primary)';
      } else {
        link.style.color = '';
      }
    });

    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const targetId = href.slice(1) || 'home';
      showSection(targetId);
      history.pushState(null, null, href);
    });
  });

  window.addEventListener('popstate', () => {
    const targetId = location.hash ? location.hash.slice(1) : 'home';
    showSection(targetId);
  });

  // Initial load
  const initialTarget = location.hash ? location.hash.slice(1) : 'home';
  showSection(initialTarget);
});
