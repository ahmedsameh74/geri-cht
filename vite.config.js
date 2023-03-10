import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   appType: "mpa",
// });

import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default {
  plugins: [pluginRewriteAll(), react()]
}
