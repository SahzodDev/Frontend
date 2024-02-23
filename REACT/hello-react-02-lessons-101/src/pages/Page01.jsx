
import Link from "../components/Link"

export default function Page01() {
  return (
    <section>
      <h1>Jsx Kuralları</h1>
      <ul>
        <li>
          <Link to="/01"> Jsx Kuralları</Link>
        </li>
        <li>
          <Link to="/02">  Jsx içerisinde süslü parantez ile js expression'ları yazmak</Link>
        </li>
        <li>
          <Link to="/03">
            Bir komponente özellik geçirebilmek-passing props to a component</Link>
        </li>
        <li>
          <Link to="/04">
            Koşullu render etmek - conditional rendering
          </Link>

        </li>
      </ul>



      
    </section>
  )
}



/*
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
              class yerine className property'si tercih edilmelidir.
            </li>
            <li>Koşullu render etmek - conditional rendering</li>
*/

