/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DiscoveryEngineWorkbench } from './components/DiscoveryEngineWorkbench';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F6F9] flex flex-col font-sans text-slate-900 selection:bg-[#00D09C] selection:text-slate-950">
      {/* Standalone Groww AI Discovery Engine */}
      <main className="flex-1 flex flex-col">
        <DiscoveryEngineWorkbench />
      </main>
    </div>
  );
}
