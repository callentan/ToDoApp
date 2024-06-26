export interface Application {
  id?: number;
  syngoAppId: string;
  name: string;
  status: ApplicationStatus;
  endpoint: string;
  description: string;
}

export enum ApplicationStatus {
  connected = 'Connected',
  disconnected = 'Disconnected',
  connecting = 'Connecting',
}
