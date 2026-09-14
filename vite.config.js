import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this app from https://<user>.github.io/favourite-students-app/
// so all asset URLs must be prefixed with the repo name. Without this, index.html
// (and everything built from it) references assets at "/assets/..." which resolves
// to the domain root instead of the repo subpath, causing a blank white screen.
// If your GitHub repository name is different from "favourite-students-app",
// change the string below to match it exactly (case-sensitive).
export default defineConfig({
  plugins: [react()],
  base: '/favourite-students-app/',
})
