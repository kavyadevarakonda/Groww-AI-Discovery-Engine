# 🌱 Groww AI Discovery Engine & Executive Product Deck

> **SIP Retention & Continuity Intelligence Platform**  
> Synthesizing **3,420 retail investor reviews** across Google Play, Reddit India, App Store, YouTube, TradingQ&A, and Social Media using **Groq Llama-3.3-70B** and **FAISS Vector RAG**.

---

## 🔗 Quick Links & Live Demos

- **Live Application (AI Discovery Engine):** [https://groww-review-ai.streamlit.app](https://groww-review-ai.streamlit.app)
- **Google Drive Demo Video Folder:** [https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing](https://drive.google.com/drive/folders/17ILnWf9KcG-DlCeDNdqptIYSp2wL1tNB?usp=sharing)
- **Downloadable 10-Slide Deck:** `NL_Groww.pdf` (< 40 MB vector PDF, strict Figma 26px / PPT 14pt typography)

---

## 🚀 Key Modules

### 1. ⚡ Automated Synthesis Workflow
- **Live Empirical Pipeline:** Real-time review filtering and thematic classification.
- **Dynamic Horizon Charts:** Proportional distribution across 5 core continuity breakdown themes:
  1. *Salary Clash & Bounce Penalty* (35%)
  2. *Mandate Lock & Freeze* (22.5%)
  3. *Micro-Corpus Fatigue* (15%)
  4. *Pause Amnesia* (7.5%)
  5. *Volatility Anxiety* (5%)
- **Source Configurator:** Dynamic platform IDs mapped to official bundle and community IDs (`com.nextbillion.groww`, `r/IndiaInvestments`, etc.).

### 2. 💬 Research RAG Chat (Llama-3.3-70B)
- Grounded conversational QA against all **3,420 review records**.
- Provides multi-source attribution, real user quotes, and actionable product recommendations.

### 3. 🔍 Full Review Explorer
- Multi-token keyword search and cross-channel filtering across 3,420 authentic retail investor records.

### 4. 📊 10-Slide Executive Presentation Deck
- Built-in slide deck with keyboard navigation (<kbd>←</kbd> / <kbd>→</kbd> / <kbd>Space</kbd>).
- Strict typography compliance (Plus Jakarta Sans & JetBrains Mono embedded natively).
- 1-click **NL_Groww.pdf** export and print functionality.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons
- **PDF Engine:** jsPDF, html-to-image with native SVG foreignObject rasterization
- **Python Edition:** Streamlit (`streamlit_app.py`), Pandas, Plotly

---

## 💻 How to Run Locally

### React / TypeScript Web App
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Streamlit Python Edition
```bash
# 1. Install Python packages
pip install -r requirements.txt

# 2. Run Streamlit app
streamlit run streamlit_app.py
```

---

## ☁️ Deployment Instructions

### Deploy to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Groww AI Discovery Engine & Executive Deck"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Deploy to Streamlit Community Cloud (Free)
1. Go to [share.streamlit.io](https://share.streamlit.io) and log in with your GitHub account.
2. Click **New app** and select your repository.
3. Set the Main file path to `streamlit_app.py`.
4. Click **Deploy**!

### Deploy to Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and import your GitHub repository.
2. Vercel automatically detects Vite and builds the project.
3. Click **Deploy**!
