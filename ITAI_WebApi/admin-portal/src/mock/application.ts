import { Application, ApplicationStatus } from '../model/application';

export const applications: Application[] = [
  {
    id: 1,
    syngoAppId: '06559691c0a4',
    name: 'app#1',
    status: ApplicationStatus.connected,
    endpoint: '//10.82.195.1/dicom',
    description: 'Transformer',
  },
  {
    id: 2,
    syngoAppId: '5045015a37f7',
    name: 'app#2',
    status: ApplicationStatus.connecting,
    endpoint: '//10.82.195.2/dicom',
    description: 'EfficientNet',
  },
  {
    id: 3,
    syngoAppId: '1884c74e8e6b',
    name: 'app#3',
    status: ApplicationStatus.disconnected,
    endpoint: '//10.82.195.3/dicom',
    description: 'Tacotron',
  },
  {
    id: 4,
    syngoAppId: '413ca6c5279f',
    name: 'app#4',
    status: ApplicationStatus.connected,
    endpoint: '//10.82.195.4/dicom',
    description: 'BERT',
  },
];
