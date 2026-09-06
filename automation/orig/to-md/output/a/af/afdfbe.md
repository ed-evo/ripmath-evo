# Tre radici più un'espressione senza radici

Lasceremo una radice e il termine senza radice da una parte e porteremo le altre due radici dall'altra parte facendo in modo, per semplicità, di spostare le radici dove hanno il segno positivo (se possibile).

In questo modo otteniamo un'equazione ove restano due radici (il doppio prodotto dell'elevamento a quadrato uno prima e uno dopo l'uguale) e anche i $4$ quadrati che potremo sommare per ottenere un termine unico; quindi ci rifacciamo a un caso precedente già visto (2 radici più un termine senza radici).

> **Nota:** Anche qui controlliamo la compatibilità delle soluzioni solamente sostituendole nell'espressione iniziale.

Qui andiamo su esercizi chilometrici: vediamone comunque almeno uno.

$$
\sqrt{x+1} + \sqrt{x} = \sqrt{2x + 1}
$$

Elevo al quadrato da una parte e dall'altra:

$$
(\sqrt{x+1} + \sqrt{x})^2 = (\sqrt{2x + 1})^2
$$

otteniamo:

$$
x+1 + 2\sqrt{x(x+1)} + x = 2x + 2\sqrt{2x} + 1
$$

Sommo i termini simili e, fortunatamente, mi si semplificano parecchie cose. Restano solamente (ci è andata bene, abbiamo solo due termini):

$$
2\sqrt{x(x+1)} = 2\sqrt{2x}
$$

Divido per $2$ da entrambe le parti e moltiplico dentro radice.

> Siccome quasi sempre è possibile semplificare, per rendere più semplici i calcoli è necessario appena possibile semplificare i termini.

$$
\sqrt{x^2+x} = \sqrt{2x}
$$

adesso elevo al quadrato da una parte e dall'altra:

$$
(\sqrt{x^2+x})^2 = (\sqrt{2x})^2
$$

elimino le radici con i quadrati ed ottengo:

$$
x^2 + x = 2x
$$
$$
x^2 + x - 2x = 0
$$
$$
x^2 - x = 0
$$

è un'equazione spuria: raccolgo la $x$:

$$
x(x - 1) = 0
$$

ottengo le soluzioni:
- $x = 0$
- $x - 1 = 0 \implies x = 1$

Ora devo verificare se le soluzioni vanno bene nell'equazione di partenza o sono dovute all'elevamento a quadrato.

- <span class="text-purple-700">Verifica per $x = 0$</span>
  Sostituisco nell'equazione iniziale alla $x$ il valore $0$:
  $$
  \sqrt{0+1} + \sqrt{0} = \sqrt{2 \cdot 0 + 1}
  $$
  $$
  1 = 1
  $$
  Avendo ottenuto un'uguaglianza la soluzione $x=0$ è accettabile.

- <span class="text-purple-700">Verifica per $x = 1$</span>
  Sostituisco nell'equazione iniziale alla $x$ il valore $1$:
  $$
  \sqrt{1+1} + \sqrt{1} = \sqrt{2 \cdot 1 + 1}
  $$
  $$
  \sqrt{2} + 1 = \sqrt{2} + 1
  $$
  Essendo questa un'uguaglianza valida anche la soluzione $x=1$ è accettabile.

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](afdfbf.html) | [Pagina precedente](afdfbd.html)