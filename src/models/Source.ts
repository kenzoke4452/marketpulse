// src/models/Source.ts

export interface Source {
    id: string;
    name: string;
    description?: string;
}

export interface CreateSourceDTO {
    name: string;
    description?: string;
}