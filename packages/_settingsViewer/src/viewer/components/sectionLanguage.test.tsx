
import * as React from 'react';
import { AppState } from '../AppState';
import { create } from 'react-test-renderer';
import { sampleSettings } from '../samples/sampleSettings';
import { SectionLanguage } from './sectionLangauge';
import { configTargets } from '../../api/settings';

describe('SectionLanguage Verification', () => {
    it('tests the snapshots', () => {
        const appState = getSampleAppState();
        configTargets.forEach(target => {
            const panelRenderer = create(<SectionLanguage appState={appState} target={target}></SectionLanguage>).toJSON()!;
            expect(panelRenderer).toMatchSnapshot(`<SectionLanguage> for target: ${target}`);
        });
    });

    function getSampleAppState(): AppState {
        const appState: AppState = new AppState();
        appState.settings = sampleSettings;
        return appState;
    }
});
