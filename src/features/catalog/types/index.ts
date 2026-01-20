import type { basicInfoCDType } from '../../cd/types/cds.types';

export type magazinesType = {
  edition: string;
  cover: string;
  published: string;
  cds: basicInfoCDType[];
  video?: string;
  description: string;
};
