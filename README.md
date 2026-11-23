# Web Teknolojileri · Laboratuvar 3 · React ile Yapılacaklar Listesi

Bu paket laboratuvarın başlangıç iskeletidir. Adımlar deney föyündedir; kodda her adımın yeri
`DENEY n · ADIM m` yorumuyla işaretlidir (VS Code'da Ctrl+Shift+F ile `DENEY 3` aratın).

Sürümler (Kasım 2026): React 19.3, Vite 8.3.

## Çalıştırma: iki yoldan biri

**A. Node.js ile** (Node 22.12 ya da üstü; 24 veya 26 LTS önerilir)

```bash
npm install      # yalnızca bir kez
npm run dev      # → http://localhost:5173
```

**B. Docker ile** (Node kurmadan; ön hazırlık paketindeki adımlar)

```bash
docker compose up --build      # → http://localhost:5173
```

İkisini aynı anda çalıştırmayın: ikisi de 5173 portunu ister.

## Dosya haritası

| Dosya | Durum | Deney |
|---|---|---|
| `src/bilesenler/TodoOge.jsx` | Tamamlanacak | 2, 3 (ek görev) |
| `src/bilesenler/EklemeFormu.jsx` | Tamamlanacak | 3 |
| `src/bilesenler/FiltreCubugu.jsx` | Tamamlanacak | 4 |
| `src/hooks/useKaliciState.js` | Yazılacak | 5 |
| `src/App.jsx` | Adım adım değişecek | 2–5 |
| `src/ornek-veri.js`, `src/kimlik.js`, `src/main.jsx`, `src/index.css` | Hazır, değiştirmeyin | — |
| `Dockerfile.dev`, `Dockerfile`, `nginx.conf`, `compose.yaml` | Hazır (Docker yolu ve Deney 6) | 1, 6 |

## Komutlar

| Node.js | Docker | Ne yapar |
|---|---|---|
| `npm run dev` | `docker compose up --build` | Geliştirme sunucusu, http://localhost:5173 |
| `npm run build` | — | `dist/` klasörüne derler |
| `npm run preview` | `docker compose --profile yayin up --build yayin` | Derlenmiş sürüm: Node'da http://localhost:4173, Docker'da http://localhost:8080 |

## Sık sorunlar

- **Beyaz sayfa:** Tarayıcı konsolunu (F12) açın; kırmızı satır dosyayı ve satırı gösterir.
- **`npm` tanınmıyor:** Node.js kurulu değil ya da terminal kurulumdan önce açılmış. Terminali kapatıp açın ya da Docker yolunu kullanın.
- **PowerShell'de `npm.ps1 cannot be loaded`:** `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` ya da Komut İstemi (cmd).
- **`Port 5173 is in use` / `address already in use`:** Başka bir geliştirme sunucusu (Node ya da Docker) açık; kapatın.
- **Docker'da kaydettiğim değişiklik görünmüyor:** Ön hazırlık paketindeki README, 6. bölüm.
- **Örnek veriye dönmek istiyorum:** Deney 4'ten sonra "Örnek veriye dön" düğmesi; ya da F12 › Application › Local Storage › `wt-lab3-todolar` kaydını silip sayfayı yenileyin.
