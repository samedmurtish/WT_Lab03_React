import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Docker Desktop'ta (Windows/macOS) bağlanan klasördeki değişiklik olayları konteynere
// her zaman ulaşmaz. WATCH_POLLING=true ise Vite dosyaları kısa aralıklarla kendisi yoklar.
// compose.yaml bu değişkeni geliştirme konteynerinde açar; kendi bilgisayarınızda gerekmez.
const yoklama = process.env.WATCH_POLLING === 'true'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    watch: yoklama ? { usePolling: true, interval: 300 } : undefined,
  },
  preview: { port: 4173, strictPort: true },
})
