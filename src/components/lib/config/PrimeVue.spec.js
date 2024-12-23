import { config } from '@vue/test-utils';
import { defaultOptions } from 'primevue2/config';

config.global.mocks['$primevue'] = {
    config: defaultOptions
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
    }))
});

describe('PrimeVue.vue', () => {
    it('should exist', async () => {});
});
