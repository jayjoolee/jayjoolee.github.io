import { communicationPsychology, learningItems, thailand } from './personal';
import {
  claudeVoiceMemo,
  contextTrails,
  dopamind,
  githubUpdates,
  photoTripTimeline,
  workflowAuditKit,
} from './work';

export * from './personal';
export * from './types';
export * from './work';

export const latestTrailBase = [
  githubUpdates[0],
  contextTrails,
  communicationPsychology,
  learningItems[1],
  learningItems[2],
  learningItems[3],
] as const;

export const gardenTrailBase = [
  communicationPsychology,
  learningItems[1],
  learningItems[2],
  learningItems[3],
  thailand,
] as const;

export const publicWork = [
  contextTrails,
  photoTripTimeline,
  workflowAuditKit,
  claudeVoiceMemo,
  dopamind,
] as const;
