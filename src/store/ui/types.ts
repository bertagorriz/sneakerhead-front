export interface UiStateStructure {
  isLoading: boolean;
  isError: boolean;
  message: string;
}

export interface UiLoaderStateStructure {
  isLoading: boolean;
}

export interface UiFeedbackStateStructure {
  isError: false;
  message: string;
}
