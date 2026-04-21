const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const heroVideo = document.querySelector(".hero-video");
const hero = document.querySelector(".hero");
const heroEnd = document.getElementById("heroEnd");
const heroRestart = document.getElementById("heroRestart");

const workflow = [
  {
    icon: "1",
    title: "Clinical consultation and assessment",
    text: "We integrate clinical consultation with multimodal physiological assessment to define each patient's functional state. Depending on clinical need, this may include MRI, EEG, ECG, EMG, electrogastrogram, retinography, and structured behavioural profiling.",
  },
  {
    icon: "2",
    title: "Map disrupted brain-body circuits",
    text: "We synthesize these data streams in a unified analytical framework to identify disrupted brain-body networks at the individual level.",
  },
  {
    icon: "3",
    title: "Design and personalize treatment",
    text: "Building on the mapped physiology, we define stimulation targets, dose, duration, and the most appropriate non-invasive intervention strategy, then refine the plan through counselling and follow-up.",
  },
];

const unique = [
  {
    icon: "✦",
    title: "Precision Physiology-Driven Therapy",
    text: "Individualized neuromodulation based on objective brain-body biomarkers.",
  },
  {
    icon: "⚗",
    title: "Clinical-Translational Integration",
    text: "A seamless pipeline from physiological mapping to protocol design, therapy, and follow-up optimization.",
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
    text: "Neurological and psychiatric disorders arise from dysfunction in distributed brain-body networks. Our research focuses on identifying which interactions have broken down by integrating multimodal neurophysiological and cardiovascular data - EEG/MEG, MRI, ECG, EGG, heart rate variability, and autonomic markers - with behavioural and clinical measures. The disrupted network demands precision targeting and personalized neuromodulation strategies for restoring the normal working state.",
    tags: ["EEG/MEG", "MRI", "ECG", "HRV", "Autonomic markers"],
    publications: [
      "Kashyap, R., Zhou C, Tsapkini K, Desmond, J. E., Chen SHA, Bharath, RD, Bhattacharjee S. (2025). Longitudinal Evaluation of Common and Unique Brain Networks In Variants of Primary Progressive Aphasia. Alzheimer's Research & Therapy.",
      "Bhattacharjee, S., Kashyap, R., Udupa, K., Bashir, S., Venkatsubramanian, G., Oishi, K., ... & Chen, S. A. (2024). Alignment of behaviour and tDCS stimulation site induces maximum response: evidence from online tDCS and ERP. Scientific Reports 14(1), 19715.",
      "Bhattacharjee, S., Chakraborty, I., Kashyap, R., Sreeraj, V. S., Arshad, F., Yamini, B. K., ... & Udupa, K. (2025). Identifying Target Regions for Non-Invasive Brain Stimulation of the Language Network in Primary Progressive Aphasia: A Narrative Review. Brain Disorders, 100255.",
      "Singh, S. R., Bhattacharjee, S., & Udupa, K. (2024). Neuromodulation Interventions in Paediatric Neurological Disorders: A Contemporary Review of Scientific Advancements. Journal of Pediatrics and Neonatal Medicine, 6(1).",
      "Kashyap, R., Bhardwaj, S., Bhattacharjee, S., Sunny, A. S., Udupa, K., Kumar, M., ... & Bharath, R. D. (2023). The Perturbational Map of Low Frequency Repetitive Transcranial Magnetic Stimulation of Primary Motor Cortex in Movement Disorders. Brain Disorders, 100071.",
      "Kashyap, R., Eng, GK., Bhattacharjee, S., Gupta B, Ho, R., Ho, C., Zhang, M., Mahendran, R., Sim K., Chen, S. A. (2021). Individual-based Approaches reveal Fronto-Striato-Limbic dissociation and Cerebellar-Visual association in Obsessive-Compulsive Disorder, Scientific Report, 11, 1354.",
      "Kashyap, R., Bhattacharjee, S., Yeo, B. T., & Chen, S. A. (2019). Maximizing dissimilarity in resting state detects heterogeneous subtypes in healthy population associated with high substance use and problems in antisocial personality. Human Brain Mapping.",
      "Kashyap, R., Bhattacharjee, S., Sommer, W., Zhou, C. (2018). Repetition Priming Effects for Famous Faces through Dynamic Causal Modelling of Latency-Corrected Event-Related Brain Potentials. European Journal of Neuroscience; 1-18.",
      "Kashyap, R., Kong, R., Bhattacharjee, S., Li, J., Zhou, Z., Yeo, T. (2018). Individual Specific fMRI- Subspaces Improve Functional Connectivity Prediction of Behavior, Neuroimage; 804-812.",
      "Bhattacharjee, S., & Kashyap, R. (2017). Neuromuscular Characterization of dysphagia following stroke. International Journal of Advances in Medical Sciences, (ICV 2019) 2(2).",
      "Bhattacharjee, S#., Mondol, M., Kashyap, R., (2016). Effect of Hypertension and Hypercholesterolemia on Auditory Brainstem Response in Adults. International Journal of Medical and Health Sciences, 5(4), 267-271.",
      "Bhattacharjee, S.# (2012). Study of anthropometric parameters along with postural changes in blood pressure in children with Autistic spectral disorders. International journal of Basic and Applied Physiology, (ICV 2018), vol (1); page no: 93",
    ],
  },
  {
    title: "Adaptive & Personalised Neuromodulation Strategies",
    figure: `
      <div class="lab-trio" role="img" aria-label="MRI, patient, EEG, ECG, and stimulation flow">
        <div class="lab-trio-item lab-trio-brain">
          <span>MRI</span>
        </div>
        <div class="lab-arrow" aria-hidden="true"></div>
        <div class="lab-trio-item lab-trio-heart">
          <span>Patient</span>
        </div>
        <div class="lab-arrow" aria-hidden="true"></div>
        <div class="lab-trio-item lab-trio-gut">
          <span>EEG / ECG / EMG</span>
        </div>
      </div>
    `,
    text: "We are working towards designing personalized, physiology-guided neuromodulation interventions that dynamically adapt to an individual's brain-body state. By integrating real-time physiological signals - including EEG, ECG, and behavioural data - with AI-driven algorithms, we develop closed-loop systems that optimize stimulation targets, duration, intensity, and the kind of stimulation to be delivered to a patient. Our goal is to deliver state-dependent, patient-specific therapies that enhance efficacy, reduce variability in response, and minimize side effects.",
    tags: ["TMS", "tDCS", "tACS", "taVNS"],
    publications: [
      "Bhattacharjee, S., Kashyap, R., Sreeraj, V. S., Sivakumar, P. T., Venkatasubramanian, G., Desmond, J. E., ... & Udupa, K. (2024). Personalized Dose Selection for Treatment of Patients with Neuropsychiatric Disorders Using tDCS. Brain Sciences 14(12), 1162.",
      "Bhattacharjee, S., Kashyap, R., Abualait, T., Annabel Chen, S. H., Yoo, W. K., & Bashir, S. (2021). The role of primary motor cortex: more than movement execution. Journal of motor behavior, 53(2), 258-274.",
      "Bhattacharjee, S., Sivakumar, P.T., Venkatasubramanian, G., Oishi, K., Tsapkini, K., Chen, S.H.A., Rapp, B., Desmond, J.E., Sathyaprabha, T.N., & Udupa, K, Kashyap, R.(2025). The role of structural and functional parameters in designing pathology-specific tDCS protocols for primary progressive aphasia. Alzheimer's Research & Therapy.",
      "Bhattacharjee, S.#, Kashyap, R., Goodwill, M.A., O'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2022). Sex Difference in tDCS Current Mediated by Changes in Cortical Anatomy: A Study across Young, Middle and Older adults. Brain Stimulation 15(1), 125-140.",
      "Kashyap, R., Bhattacharjee, S., Bashir, S., Oishi, K., Desmond, J. E., Chen, S. A. & Guan, C. (2022). Variation in Cerebrospinal fluid of Specific Regions regulate Focality in Transcranial Direct Current Stimulation. Frontiers of Human Neuroscience. 16.",
      "Kashyap, R., Bhattacharjee, S., Arumugam, R., Bharath, R.D, Udupa, K., Oishi, K., Desmond, J. E., & Chen, S. A. (2021). Focality Oriented Selection of Current Dose for Transcranial Direct Current Stimulation. Journal of Personalised Medicine.",
    ],
  },
  {
    title: "Clinical Trials and Technology Innovation",
    figure: `
      <div class="lab-trio" role="img" aria-label="Clinical trial and toolbox development">
        <div class="lab-trio-item lab-trio-brain">
          <span>Clinical trial</span>
        </div>
        <div class="lab-arrow" aria-hidden="true"></div>
        <div class="lab-trio-item lab-trio-heart">
          <span>TES toolboxes</span>
        </div>
        <div class="lab-arrow" aria-hidden="true"></div>
        <div class="lab-trio-item lab-trio-gut">
          <span>Scalable therapy</span>
        </div>
      </div>
    `,
    text: "We work in close collaboration with engineers, scientists, clinical psychologists, speech language therapists, neurologists, and psychiatrists to translate advances in neuromodulation into clinically effective, scalable, and precision-guided therapies through rigorous clinical trials and advanced neuromodulation technologies. We conduct early-phase and controlled clinical trials to evaluate safety, efficacy, and optimization across neurological, psychiatric, and neurocardiac disorders.",
    tags: ["Clinical trials", "TES toolboxes", "Scalable therapies"],
    publications: [
      "Bhattacharjee, S., Sivakumar, P.T., Venkatasubramanian, G., Oishi, K., Desmond, J.E., Rapp, B., Chen, S.H.A., Sathyaprabha, T.N., & Udupa, K, Kashyap, R., (2025). Personalized Transcranial Direct Current Stimulation for Behavioral and Neurophysiologic Outcomes. JAMA Network Open.",
      "Bhattacharjee, S., Kashyap, R., O'Brien, B., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2020). Reading Proficiency Influences the effects of Transcranial Direct Current Stimulation: Evidence from Selective Modulation of Dorsal and Ventral Pathways of reading in Bilinguals, Brain and Language,210,p 104850.",
      "Kashyap, R.*, Bhattacharjee, S.*, Arumugam, R.*, Oishi, K., Desmond, J. E., & Chen, S. A. (2020). i-SATA: A MATLAB based toolbox to estimate Current Density generated by Transcranial Direct Current Stimulation in an Individual Brain. Journal of Neural Engineering, (impact factor:4.8).",
      "Bhattacharjee, S., Kashyap, R., Rapp, B., Oishi, K., Desmond, J. E., & Chen, S. A. (2019). Simulation Analyses of tDCS Montages for the investigation of Dorsal and Ventral pathways. Scientific reports, 9(1), 1-17.",
      "Bhattacharjee, S., Chew, A., Kashyap, R., Wu, C., Yeo, M., O'Brien, B., & Chen, S. (2019). Could tDCS Modulate Bilingual Reading? Brain Stimulation: Basic, Translational, and Clinical Research in Neuromodulation, 12(2), 569.",
    ],
  },
];

const bioParagraphs = [
  "Dr. Sagarika Bhattacharjee is a physician-scientist working at the intersection of neuroscience, artificial intelligence, and translational neurotechnology, with a focus on developing precision, physiology-guided neuromodulation therapies for neuropsychiatric disorders.",
  "Her research integrates neuroimaging, electrophysiology, and computational modelling to understand how individual variability in brain-body systems shapes therapeutic response, enabling adaptive and personalized brain stimulation strategies.",
  "She completed her MBBS from Silchar Medical College and MD (Physiology) from Guwahati Medical College, graduating with gold medals. In her early years, she gained clinical experience at Apollo Hospitals Guwahati and North Eastern Indira Gandhi Regional Institute of Health and Medical Sciences, then trained in translational brain stimulation in New Zealand before earning her PhD from Nanyang Technological University.",
  "She was awarded the Silver Medal for her PhD research, received the DBT Ramalingaswami Re-entry Fellowship, and now serves as Assistant Professor in the Department of Physiology at All India Institute of Medical Sciences Madurai. Her long-term vision is to develop scalable, clinically deployable neurotechnology platforms that enable personalized and accessible neuromodulation therapies for treatment of neuropsychiatric disorders.",
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
    text: "Former Research Fellow in precision neurostimulation; now a PhD student at BCBL, Spain, studying neural mechanisms of language and learning. She worked on physiology-guided precision neurostimulation, integrating EEG and behavioural measures to design individualized stimulation strategies in clinical populations. Her work at the lab earned her an ICMR travel fellowship in 2023.",
  },
  {
    name: "Tanushree L",
    text: "Former Research Fellow in the lab. Detailed profile text was not included in the source copy, so the site preserves the name as provided.",
  },
];

const interns = [
  {
    name: "Dhwani Shah",
    text: "UX and product experience designer currently working at SAP in Bengaluru, India. She previously interned in the lab, contributing design principles to research-driven problem solving across interdisciplinary workflows at the interface of technology and user experience.",
  },
  {
    name: "Varsha Shree",
    text: "Neuroscience researcher with an MSc in Neuroscience from the Indian Institute of Technology Gandhinagar. In the lab she received training in neuroimaging (DTI) and non-invasive neuromodulation (TMS, tDCS) in clinical populations, and is now working in the translational neuroscience/psychiatry research ecosystem at NIMHANS.",
  },
  {
    name: "Anoushka",
    text: "MSc Neuropsychology trainee at CHRIST (Deemed to be University) and former trainee neuropsychologist at NIMHANS. She has experience in neuropsychological assessment, cognitive retraining, and large-scale neuroimaging research through the ENIGMA project, with interests in neurocognitive disorders, clinical assessment, and translational neuropsychology.",
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
  ["Plenary & Keynote Lectures", ["Plenary Speaker, Indian Geriatric Mental Health Association National CME, Srinagar, May 2025 - Dementia & its Variants: Recent Advances and Innovation.", "Plenary Speaker, International Conference on Neuroscience and Cognitive Rehabilitation, Bishop Heber College, April 2024 - Emerging Paradigms in Personalized Neuromodulation."]],
  ["Invited Talks & Academic Lectures", ["Resource Person, APTCON Conference, All India Institute of Medical Sciences Madurai, 2025.", "Invited Speaker, Srinagar, Jammu & Kashmir, 2025.", "Resource Person, AICID Conference, Bishop Heber College, 2025.", "Invited Talk, Department of Neuroscience, King Saud University, November 2020.", "Invited Lecture, Department of Neurology, Johns Hopkins University, August 2018.", "Invited Lecture, Cleveland Clinic, July 2018."]],
  ["Conference Presentations", ["Oral Presentation, Organization for Human Brain Mapping Annual Meeting, Seoul, 2024 - HD-tDCS applications (supported by ICMR Travel Fellowship).", "Speaker, Brain Stimulation Conference, Lee Kong Chian School of Medicine, February 2019 - Could tDCS Modulate Bilingual Reading?", "Speaker, Brain Stimulation Satellite Conference, Organization for Human Brain Mapping, June 2018 - Effect of tDCS on Change in Blood Pressure."]],
  ["Research Recognition & Media Coverage", ["2024 - Research covered by Deccan Herald on AI-assisted treatment for psychiatric disorders.", "2024 - International media coverage in PsyPost on childhood adversity and brain development.", "2021 - Study on compensation mechanisms in obsessive compulsive disorder nominated as exceptional research.", "2020 - Study on aberrant fMRI brain signatures recognized as an editor's choice cover-page article."]],
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

const publicationYears = [
  {
    year: "2025",
    items: [
      "Bhattacharjee S, Sivakumar PT, Venkatasubramanian G, Bharath RD, Oishi K, Rapp B, et al. Personalized transcranial direct current stimulation for behavioral and neurophysiologic outcomes. JAMA Netw Open. 2025;8(8):e2526148. DOI: 10.1001/jamanetworkopen.2025.26148",
      "Bhattacharjee S, Sivakumar PT, Venkatasubramanian G, Oishi K, Tsapkini K, Chen SHA, et al. Structural and functional determinants for designing pathology-specific tDCS protocols in primary progressive aphasia. Alzheimers Res Ther. 2025;17(1):156. DOI: 10.1186/s13195-025-01737-3",
      "Kashyap R, Zhou C, Tsapkini K, Desmond JE, Chen SHA, Bharath RD, et al.; Bhattacharjee S. Longitudinal evaluation of brain networks in primary progressive aphasia. Alzheimers Res Ther. 2025;17:192. DOI: 10.1186/s13195-025-01800-z",
      "Bhattacharjee S, Chakraborty I, Kashyap R, Sreeraj VS, Arshad F, Yamini BK, et al. Identifying target regions for non-invasive brain stimulation in primary progressive aphasia: A narrative review. Brain Disord. 2025;100255. DOI: 10.1016/j.braindis.2025.100255",
    ],
  },
  {
    year: "2024",
    items: [
      "Bhattacharjee S, Kashyap R, Sreeraj VS, Sivakumar PT, Venkatasubramanian G, Desmond JE, et al. Personalized dose selection for treatment of patients with neuropsychiatric disorders using tDCS. Brain Sci. 2024;14(12):1162. DOI: 10.3390/brainsci14121162",
      "Bhattacharjee S, Kashyap R, Udupa K, Bashir S, Venkatasubramanian G, Oishi K, et al. Alignment of behaviour and tDCS stimulation site induces maximum response: evidence from online tDCS and ERP. Sci Rep. 2024;14:19715. DOI: 10.1038/s41598-024-68691-2",
      "Kashyap R, Holla B, Bhattacharjee S, Sharma E, Mehta UM, Vaidya N, et al. Childhood adversities characterize heterogeneity in neurodevelopmental brain patterns. Psychol Med. 2024. DOI: 10.1017/S0033291724000710",
      "Singh SR, Bhattacharjee S, Udupa K. Neuromodulation interventions in paediatric neurological disorders: A contemporary review. J Pediatr Neonatal Med. 2024;6(1).",
    ],
  },
  {
    year: "2023",
    items: [
      "Kashyap R, Bhardwaj S, Bhattacharjee S, Sunny AS, Udupa K, Kumar M, et al. Perturbational map of low-frequency repetitive transcranial magnetic stimulation of primary motor cortex in movement disorders. Brain Disord. 2023;100071. DOI: 10.1016/j.braindis.2023.100071",
    ],
  },
  {
    year: "2022",
    items: [
      "Bhattacharjee S, Kashyap R, Goodwill MA, O'Brien BA, Rapp B, Oishi K, Desmond JE, Chen SA. Sex difference in tDCS current mediated by cortical anatomy across the lifespan. Brain Stimul. 2022;15(1):125-140. DOI: 10.1016/j.brs.2021.11.012",
      "Kashyap R, Bhattacharjee S, Bashir S, Oishi K, Desmond JE, Chen SA, Guan C. Variation in cerebrospinal fluid regulates focality in transcranial direct current stimulation. Front Hum Neurosci. 2022;16. DOI: https://doi.org/10.3389/fnhum.2022.952602",
    ],
  },
  {
    year: "2021",
    items: [
      "Bhattacharjee S, Kashyap R, Abualait T, Chen SHA, Yoo WK, Bashir S. The role of primary motor cortex: more than movement execution. J Mot Behav. 2021;53(1):1-17. DOI: 10.1080/00222895.2020.1865082",
      "Kashyap R, Bhattacharjee S, Arumugam R, Bharath RD, Udupa K, Oishi K, Desmond JE, Chen SA. Focality-oriented selection of current dose for transcranial direct current stimulation. J Pers Med. 2021;11(6):11090940. DOI: 10.3390/jpm11060520",
      "Kashyap R, Eng GK, Bhattacharjee S, Gupta B, Ho R, Ho C, Zhang MW, Mahendran R, Sim K, Chen SA. Individual-based approaches reveal fronto-striato-limbic dissociation in obsessive-compulsive disorder. Sci Rep. 2021;11:1354. DOI: 10.1038/s41598-021-81361-3",
    ],
  },
  {
    year: "2020",
    items: [
      "Bhattacharjee S, Kashyap R, O'Brien BA, Rapp B, Oishi K, Desmond JE, Chen SA. Reading proficiency influences the effects of transcranial direct current stimulation in bilinguals. Brain Lang. 2020;210:104850. DOI: 10.1016/j.bandl.2020.104850",
      "Kashyap R, Bhattacharjee S, Arumugam R, Oishi K, Desmond JE, Chen SA. i-SATA: A MATLAB-based toolbox to estimate current density generated by transcranial direct current stimulation in individual brains. J Neural Eng. 2020;17(1):016050. DOI: 10.1088/1741-2552/ab5c9c",
      "Kashyap R, Bhattacharjee S, Yeo BTT, Chen SHA. Maximizing dissimilarity in resting state detects heterogeneous subtypes in healthy population associated with high substance use and problems in antisocial personality. Hum Brain Mapp. 2020;41:1261-1273. DOI: 10.1002/hbm.24873",
    ],
  },
  {
    year: "2019",
    items: [
      "Bhattacharjee S, Kashyap R, Rapp B, Oishi K, Desmond JE, Chen SA. Simulation analyses of tDCS montages for investigating dorsal and ventral pathways. Sci Rep. 2019;9:12315. DOI: 10.1038/s41598-019-47654-y",
      "Kashyap R, Bhattacharjee S, Sommer W, Zhou C. Repetition priming effects for famous faces through dynamic causal modelling of latency-corrected event-related brain potentials. Eur J Neurosci. 2019;49:1330-1347. DOI: 10.1111/ejn.14303",
      "Bhattacharjee S, Chew A, Kashyap R, Wu CY, Yeo M, O'Brien BA, et al. Could tDCS modulate bilingual reading? Brain Stimul. 2019;12(2):569. DOI: 10.1016/j.brs.2018.12.",
    ],
  },
  {
    year: "2018",
    items: [
      "Kashyap R, Bhattacharjee S, Sommer W, Zhou C. Repetition priming effects for famous faces using dynamic causal modelling of ERP. Eur J Neurosci. 2018;48(5): DOI: 10.1111/ejn.",
      "Kashyap R, Kong R, Bhattacharjee S, Li J, Zhou J, Yeo BTT. Individual-specific fMRI subspaces improve functional connectivity prediction of behavior. NeuroImage. 2018;XXXX:804-812. DOI: 10.1016/j.neuroimage.2018.",
    ],
  },
  {
    year: "2017 and earlier",
    items: [
      "Bhattacharjee S, Kashyap R. Neuromuscular characterization of dysphagia following stroke. Int J Adv Med Sci. 2017;2(2).",
      "Bhattacharjee S, Mondol M, Kashyap R. Effect of hypertension and hypercholesterolemia on auditory brainstem response in adults. Int J Med Health Sci. 2016;5(4):267-271.",
      "Bhattacharjee S. Anthropometric parameters and postural blood pressure changes in children with autism spectrum disorders. Int J Basic Appl Physiol. 2012;1:93.",
    ],
  },
];

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
    title: "Research Interns / Project Scientists",
    status: "Open",
    summary: "We are seeking applicants with backgrounds in Medical Science and Technology, Physics, Mathematics, Cognitive Science, Psychology, Data Science, or related disciplines.",
    items: ["Programming experience in Python or MATLAB is preferred.", "The role supports EEG, ECG, and autonomic data workflows across precision neuromodulation projects."],
  },
  {
    title: "PhD Positions",
    status: "Open",
    summary: "We welcome highly motivated students from cognitive neuroscience, systems neuroscience, psychology, medical backgrounds, engineering, computer science, AI, and data science.",
    items: ["Applicants should apply through the institute PhD programs.", "Please indicate Sagarika Bhattacharjee as a potential supervisor when applicable and email your CV and research interests for consideration."],
  },
  {
    title: "Postdoctoral Positions",
    status: "Open",
    summary: "We are looking for postdoctoral fellows with a PhD or DM in related neuroscientific disciplines.",
    items: ["Priority areas include biomarker discovery, risk factor analysis, disease progression, non-invasive brain stimulation, and closed-loop brain-machine interfaces.", "Current focus areas include neurodevelopmental and speech disorders, aging, and neuropsychiatric disorders such as aphasia, dementia, schizophrenia, and OCD."],
  },
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

function publicationYearCard(group) {
  return `
    <article class="research-panel reveal publication-year-card">
      <div class="publication-meta"><span class="pill">${group.year}</span></div>
      <ol class="publication-year-list">
        ${group.items.map((item) => `<li>${linkNames(item, personLinks)}</li>`).join("")}
      </ol>
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
      ${coreCollaborators.map(([name, description, url]) => `<p><strong><a href="${url}" target="_blank" rel="noreferrer">${name}</a></strong><br />${description}</p>`).join("")}
    </div>
  </article>
  <article class="research-panel reveal">
    <h3>Clinical & translational collaborators</h3>
    <div class="publication-list">
      ${translationalCollaborators.map(([name, description, url]) => `<p><strong><a href="${url}" target="_blank" rel="noreferrer">${name}</a></strong><br />${description}</p>`).join("")}
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

document.getElementById("publicationThemeList").innerHTML = publicationYears
  .map((group) => publicationYearCard(group))
  .join("");

document.getElementById("careerGrid").innerHTML = career
  .map(
    (item) => `
      <article class="research-panel reveal">
        <div class="career-meta"><span class="pill">${item.status}</span></div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="publication-list compact-list">
          ${item.items.map((line) => `<p>${line}</p>`).join("")}
        </div>
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