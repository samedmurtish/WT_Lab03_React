import { useState } from "react";
import TodoOge from "./bilesenler/TodoOge.jsx";
import { ORNEK_TODOLAR } from "./ornek-veri.js";
import { yeniKimlik } from "./kimlik.js";
// DENEY 3 · ADIM 2: import EklemeFormu from './bilesenler/EklemeFormu.jsx'
// DENEY 4 · ADIM 1: import FiltreCubugu, { filtrele } from './bilesenler/FiltreCubugu.jsx'
// DENEY 5 · ADIM 2: import { useKaliciState } from './hooks/useKaliciState.js'
// DENEY 5 · ADIM 3: useEffect'i de react'ten import edin

export default function App() {
  // DENEY 3 · ADIM 1: aşağıdaki satırı state'e çevirin:
  //   const [todolar, setTodolar] = useState(ORNEK_TODOLAR)
  // DENEY 5 · ADIM 2: useState'i useKaliciState('wt-lab3-todolar', ORNEK_TODOLAR) ile değiştirin
  const todolar = ORNEK_TODOLAR;

  // DENEY 4 · ADIM 1: filtre state'i: const [filtre, setFiltre] = useState('tumu')

  // DENEY 4 · ADIM 2: türetilmiş değerler (yeni state AÇMAYIN)
  //   kalan      = tamamlanmamış görev sayısı
  //   tamamlanan = todolar.length - kalan
  //   gorunen    = filtrele(todolar, filtre)
  const gorunen = todolar;

  // DENEY 5 · ADIM 3: sekme başlığı effect'i
  //   kalan > 0 ise "(2) Yapılacaklar", değilse "Yapılacaklar"

  // DENEY 3 · ADIM 2: ekle(metin) → listenin SONUNA { id: yeniKimlik(), metin, tamamlandi: false }
  // DENEY 3 · ADIM 4: degistir(id) → o görevin tamamlandi değerini tersine çevir (map)
  // DENEY 3 · ADIM 5: sil(id)      → o görevi listeden çıkar (filter)
  // DENEY 4 · ADIM 4: temizle()    → tamamlananları listeden çıkar
  // EK GÖREV:         guncelle(id, metin) → o görevin metnini değiştir

  let icerik;
  if (todolar.length === 0) {
    icerik = (
      <p className="bos">Hiç görev yok. Yukarıdan ilk görevinizi ekleyin.</p>
    );
  } else if (gorunen.length === 0) {
    icerik = <p className="bos">Bu filtrede görev yok.</p>;
  } else {
    icerik = (
      <ul className="liste">
        {/* DENEY 2 · ADIM 4: konsoldaki uyarıyı okuyun, sonra TodoOge'ye key={todo.id} verin */}
        {/* DENEY 3: onDegistir={degistir} onSil={sil} prop'larını ekleyin */}
        {gorunen.map((todo) => (
          <TodoOge todo={todo} />
        ))}
      </ul>
    );
  }

  return (
    <main className="kutu">
      <header className="ust">
        <p className="ust-kas">WEB TEKNOLOJİLERİ · LABORATUVAR 3</p>
        <h1>Yapılacaklar</h1>
        {/* DENEY 4 · ADIM 2: "{kalan} görev kaldı · {tamamlanan} tamamlandı" yazsın */}
        <p className="ozet">{todolar.length} görev</p>
      </header>

      {/* DENEY 3 · ADIM 2: <EklemeFormu onEkle={ekle} /> */}
      {/* DENEY 4 · ADIM 3: <FiltreCubugu filtre={filtre} onDegis={setFiltre}
            sayilar={{ tumu: todolar.length, aktif: kalan, tamam: tamamlanan }} /> */}
      {icerik}

      {/* DENEY 4 · ADIM 4: iki düğme
            "Tamamlananları temizle" → onClick={temizle}, tamamlanan 0 ise disabled
            "Örnek veriye dön"       → onClick={() => setTodolar(ORNEK_TODOLAR)} */}
      <footer className="alt"></footer>
    </main>
  );
}
