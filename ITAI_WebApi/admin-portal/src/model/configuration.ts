export interface Configuration {
  autoDeletion: AutoDeletion;
}

export interface AutoDeletion {
  isEnabled: boolean;
  days: number;
}
