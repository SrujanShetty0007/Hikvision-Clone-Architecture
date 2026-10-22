export interface SelectorQuestion {
  id: string;
  question: string;
  description: string;
  options: {
    label: string;
    description: string;
    icon?: string;
    recommendationTags: string[];
  }[];
}

export const productSelectorQuestions: SelectorQuestion[] = [
  {
    id: 'environment',
    question: 'Where will your surveillance cameras be deployed?',
    description: 'Select your primary operational setting to ensure suitable weatherproofing and optical protection.',
    options: [
      {
        label: 'Outdoor Harsh Weather / Expansive Perimeter',
        description: 'Requires IP67/IK10, extreme temperature resilience (-40°C to 65°C), and long-range illumination.',
        recommendationTags: ['outdoor', 'perimeter', 'ip67'],
      },
      {
        label: 'Indoor Office, Retail or Classroom',
        description: 'Requires discreet aesthetic form factors, 4K clarity, two-way audio, and wide dynamic range.',
        recommendationTags: ['indoor', 'commercial', 'audio'],
      },
      {
        label: 'Remote Off-Grid (No Power / No Fiber)',
        description: 'Farms, pipelines, construction sites requiring solar panels, 4G LTE cellular uplink, and battery storage.',
        recommendationTags: ['solar', '4g', 'offgrid'],
      },
      {
        label: 'Highway, Roadway or Parking Entrance',
        description: 'High-speed license plate recognition (ANPR), barrier control, and vehicle color recognition.',
        recommendationTags: ['traffic', 'anpr', 'speed'],
      },
    ],
  },
  {
    id: 'lighting',
    question: 'What are your nighttime lighting requirements?',
    description: 'Choose how critical nighttime identification and color details are for your security team.',
    options: [
      {
        label: '24/7 Full Color in Pitch Darkness (ColorVu)',
        description: 'Vital to capture vehicle color, suspect clothing color, and human facial tones at night.',
        recommendationTags: ['colorvu', 'fullcolor'],
      },
      {
        label: 'Ultra-Long Distance 200m+ Night Vision (DarkFighter PTZ)',
        description: 'High-powered infrared illuminators and optical zoom for vast runways, shipyards, or logistics yards.',
        recommendationTags: ['darkfighter', 'ptz', 'longrange'],
      },
      {
        label: 'Thermal Heat Vision (Zero Illumination & Fire Warning)',
        description: 'Detects body heat and surface overheating through dense fog, smoke, rain, and complete blackout.',
        recommendationTags: ['thermal', 'fire'],
      },
    ],
  },
  {
    id: 'intelligence',
    question: 'Which AI analytics are most critical for your operations?',
    description: 'Filter real threats and automate security dispatch.',
    options: [
      {
        label: 'Human & Vehicle False Alarm Reduction (AcuSense)',
        description: 'Ignore swaying branches, rain, and cats; only notify security for human and vehicle line-crossings.',
        recommendationTags: ['acusense', 'perimeter'],
      },
      {
        label: 'Active Strobe & Siren Deterrence',
        description: 'Warn intruders away automatically before crimes occur with flashing strobe lights and custom voice alarms.',
        recommendationTags: ['active-deterrence', 'audio'],
      },
      {
        label: 'Automated License Plate Recognition (ANPR)',
        description: 'Automatically open barrier gates for authorized vehicles and record number plates.',
        recommendationTags: ['anpr', 'traffic'],
      },
      {
        label: 'Touchless Face Recognition & Temperature',
        description: 'Sub-second access control for employee turnstiles and time attendance.',
        recommendationTags: ['face-auth', 'access'],
      },
    ],
  },
];
