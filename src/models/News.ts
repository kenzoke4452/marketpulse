export interface News {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  author: string;
}

export class CreateNewsDTO {
  title: string;
  content: string;
  author: string;
}

export interface NewsFilter {
  author?: string;
  dateRange?: { start: Date; end: Date; };
}