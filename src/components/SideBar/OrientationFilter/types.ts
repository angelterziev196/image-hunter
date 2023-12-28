import { ChangeEvent } from 'react';

export interface OrientationFilters {
  orientationChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
