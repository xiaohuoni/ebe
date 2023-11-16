import type { IProjectSchema } from '../types';

export interface ICompAnalyzeResult {
  isUsingRef: boolean;
}

export type TComponentAnalyzer = (
  container: IProjectSchema,
) => ICompAnalyzeResult;
