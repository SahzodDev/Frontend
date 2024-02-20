export default function Page01() {
    return (
        <section>
          <h1>Jsx Kuralları</h1>
          <ul>
            <li>Bütün etiketler kapatılmalı. Self closing de olsa, iki parçalı etiket de olsa kapatılmalı.</li>
            <li>
              Komşu jsx elemanları, onları saran tek bir jsx elemanı içinde olmalıdır.
            </li>
            <li>
              Komşu elemanları sarmak için fazladan eleman istemiyorsak, React.Fragment kullanabiliriz.
            </li>
            <li>
              jsx elemanları üzerine property-value çiftleri konabilir.
            </li>
            <li>
              Neredeyse tüm property adları camel-case kullanılır.
            </li>
            <li>
              class yerine className proeprty'si tercih edilmelidir.
            </li>
          </ul>

          <img src="/vite.svg" alt="vite" />
        </section>
    )
}