import { OpaqueToken } from '@angular/core';

export const BACKEND_CONFIG = new OpaqueToken('BACKEND_CONFIG');
export interface BackendConfig {
    baseUrl: string;
}