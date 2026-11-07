/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode } from './types';
import { SlideViewer } from './components/SlideViewer';
import { DiscoveryEngineWorkbench } from './components/DiscoveryEngineWorkbench';
import { PaceMakerSimulator } from './components/PaceMakerSimulator';
import { EvidenceLogView } from './components/EvidenceLogView';
import { PrimaryResearchView } from './components/PrimaryResearchView';
import { Download, Sparkles } from 'lucide-react';
import { Groww3DLogo } from './components/CuteAssets';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('engine');

  return (
    <div className="min-h-screen bg-[#0E1117] flex flex-col font-sans text-slate-100 selection:bg-[#00D09C] selection:text-slate-950">
      {/* Top tabular navigation bar hidden/removed per user request to keep just the standalone AI Discovery Engine */}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentView === 'engine' && (
          <DiscoveryEngineWorkbench onOpenDeck={() => setCurrentView('slides')} />
        )}
        {currentView === 'slides' && (
          <SlideViewer
            onOpenEngine={() => setCurrentView('engine')}
            onOpenMvp={() => setCurrentView('mvp')}
          />
        )}
        {currentView === 'mvp' && <PaceMakerSimulator />}
        {currentView === 'evidence' && <EvidenceLogView />}
        {currentView === 'research' && <PrimaryResearchView />}
      </main>
    </div>
  );
}
