// RICORDA! IL NOME del file deve seguire la nomenclatura PascalCase(cioé
// anche l'iniziale va in MAIUSCOLO)

// 1 file --- 1 componente react

// un componente React puó benissimo essere anche solamente una funzione JS
// che ritorna un po' di JSX

const FirstPart = function () {
  // nome funzione === nome file
  return (
    <div>
      <h2>TITOLO PAGINA</h2>
    </div>
  )
}

//una volta DICHIARATA la funzione del componente react
//la dovete ESPORTARE

export default FirstPart
// la esportiamo come "default", significa che sará la cosa "PRINCIPALE" esportata
// da questo file
