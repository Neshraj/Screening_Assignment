// Base URL without limit — limit is passed dynamically
export const API_BASE_URL = 'https://picsum.photos/v2/list';

// Preset options shown in the dropdown
export const LIMIT_OPTIONS = [30, 50, 80, 100];

// Default on first load
export const DEFAULT_LIMIT = 30;

// Build full URL with limit
export const buildApiUrl = (limit) => `${API_BASE_URL}?limit=${limit}`;