# Weekly Planner (PWA)

This is a lightweight, offline-capable weekly planner built as a Progressive Web App (PWA).  
It allows you to plan and edit weekly schedules in a browser and install it as a mobile/desktop app.

## 🧩 Features
- Editable weekly time slots (Monday to Friday, 9am–5pm)
- Offline functionality using a service worker
- Installs to your home screen on iOS/Android
- Stores data locally in your browser (via localStorage)

## 🚀 Usage
1. Open `index.html` in a browser (preferably served from a local server).
2. Click any cell to edit and save text.
3. Your data will be saved automatically to your browser.
4. To install as an app, open on mobile and select "Add to Home Screen".

## 🛠 Hosting (Optional)
To serve the app properly and enable install features:
- Use a local server (`python -m http.server`) or
- Deploy to GitHub Pages, Netlify, or similar.

## 📁 File Structure
- `index.html` — Main UI
- `planner.js` — Grid logic and localStorage functionality
- `manifest.json` — PWA metadata
- `service-worker.js` — Offline caching
- `icon-192.png`, `icon-512.png` — App icons

---

**Note:** This version does not use a database. All data is stored in the browser and cleared if localStorage is reset.
