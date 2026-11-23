// DENEY 2: tek bir görevi gösteren bileşen. Veriyi props ile alır.
// DENEY 3: olayları üst bileşene bildirir; listeyi kendisi DEĞİŞTİRMEZ.
// DENEY 3 · ADIM 4–5: props'a onDegistir ve onSil'i ekleyin: ({ todo, onDegistir, onSil })
export default function TodoOge({ todo }) {
  // DENEY 2 · ADIM 3: tamamlanmış görevde <li> className'i "oge tamam", değilse "oge" olsun
  return (
    <li className="oge">
      {/* DENEY 2 · ADIM 2: onay kutusu
            <input type="checkbox" checked={todo.tamamlandi} aria-label={`${todo.metin}: tamamlandı`} />
          DENEY 3 · ADIM 4: onChange={() => onDegistir(todo.id)} ekleyin */}
      <span className="metin">{todo.metin}</span>
      {/* DENEY 2 · ADIM 2: sil düğmesi
            <button type="button" className="sil" aria-label={`${todo.metin}: sil`}>Sil</button>
          DENEY 3 · ADIM 5: onClick={() => onSil(todo.id)} ekleyin */}
    </li>
  )
}

// EK GÖREV: çift tıklayınca metin bir <input>'a dönüşsün (useState ile "duzenleniyor").
//   Enter → kaydet (onGuncelle), Esc → vazgeç, boş bırakılırsa görev silinsin.
