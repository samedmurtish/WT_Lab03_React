// DENEY 4: filtre düğmeleri. Seçili filtre üst bileşenin (App) state'indedir.
const SECENEKLER = [
  { deger: 'tumu', ad: 'Tümü' },
  { deger: 'aktif', ad: 'Aktif' },
  { deger: 'tamam', ad: 'Tamamlanan' },
]

export default function FiltreCubugu({ filtre, onDegis, sayilar }) {
  // DENEY 4 · ADIM 3: SECENEKLER'den birer <button> üretin (key={s.deger})
  //   - yazı: "Tümü (4)" gibi, sayı sayilar[s.deger]'den
  //   - aria-pressed={filtre === s.deger}  (seçili düğme koyu görünür)
  //   - onClick={() => onDegis(s.deger)}
  return <nav className="filtre" aria-label="Görev filtresi"></nav>
}

// DENEY 4 · ADIM 2: filtreye göre görünen listeyi döndürün
//   'aktif' → tamamlanmamışlar · 'tamam' → tamamlananlar · 'tumu' → hepsi
export function filtrele(todolar, filtre) {
  return todolar
}
