interface Page {
  pageId: string;
  pagePath: string;
  currentPageVersionId: string;
  searchParams?: any;
}
interface Modal {
  pageId: string;
  pagePath: string;
  currentPageVersionId: string;
  compStates?: any;
}

export interface FuncCode {
  code: string;
  originCode: string;
}

type DataBindType = FuncCode | string | undefined;

export interface ContentClick {
  content?: DataBindType;
  clickType?: string;
  page?: Page;
  modal?: Modal;
  openType?: string;
  fileIds?: DataBindType;
  filename?: DataBindType;
  previewType?: string;
  downloadUrl?: DataBindType;
}

export interface ContentStyle extends ContentClick {
  formatStyle: number;
  contentType: string;
  fontColor: string;
  borderColor: string;
  backgroundColor: string;
  modalWidth?: number;
  modalHeight?: number;
}
