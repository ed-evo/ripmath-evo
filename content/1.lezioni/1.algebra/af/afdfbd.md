# [Tre radici]{.text-red}

Lasceremo una radice da una parte e porteremo le altre due dall'altra parte facendo in modo, per semplicità, di spostare le radici dove hanno il segno positivo.

In questo modo otteniamo un'equazione ove resta una sola radice (il doppio prodotto dell'elevamento a quadrato), inoltre dei termini fuori radice che potremo sommare per ottenere un termine unico e ci rifacciamo a un caso precedente già visto.

> **Nota:** Anche qui controlliamo la compatibilità delle soluzioni solamente sostituendole nell'espressione iniziale.

Vediamo il procedimento su un esempio:

$$
\textcolor{red}{\sqrt{x + 5} - \sqrt{x} = \sqrt{2x - 7}}
$$

Lascio una radice prima dell'uguale:

$$
\textcolor{red}{\sqrt{x + 5} = \sqrt{x} + \sqrt{2x - 7}}
$$

Elevo al quadrato da una parte e dall'altra:

$$
\textcolor{red}{[\sqrt{x + 5}]^2 = [\sqrt{x} + \sqrt{2x - 7}]^2}
$$

Nel primo termine semplifico la radice con il quadrato, nel secondo eseguo il quadrato di un binomio:

$$
\textcolor{red}{x + 5 = x + 2\sqrt{x \cdot (2x - 7)} + 2x - 7}
$$

Isolo la radice lasciandola dopo l'uguale (perché lì è positiva) e dentro la radice eseguo la moltiplicazione:

$$
\textcolor{red}{x + 5 - x - 2x + 7 = 2\sqrt{2x^2 - 7x}}
$$

$$
\textcolor{red}{12 - 2x = 2\sqrt{2x^2 - 7x}}
$$

Osserviamo che possiamo semplificare tutta l'equazione per due (è una cosa abbastanza comune in queste equazioni il poter semplificare: conviene farlo sempre per rendere più semplice il successivo elevamento a quadrato):

$$
\textcolor{red}{6 - x = \sqrt{2x^2 - 7x}}
$$

La radice è già isolata, quindi elevo a quadrato da entrambe le parti:

$$
\textcolor{red}{(6 - x)^2 = [\sqrt{2x^2 - 7x}]^2}
$$

$$
\textcolor{red}{36 - 12x + x^2 = 2x^2 - 7x}
$$

Ottengo l'equazione:

$$
\textcolor{red}{x^2 + 5x - 36 = 0}
$$

Risolvo:

$$
\textcolor{red}{x_1 = 4}
$$
$$
\textcolor{red}{x_2 = -9}
$$

Ora devo verificare se le soluzioni vanno bene nell'equazione di partenza o sono dovute all'elevamento a quadrato:

- [Verifica per $$x = 4$${.text-purple}]
  Sostituisco nell'equazione iniziale alla $$x$$ il valore $$4$$:
  $$
  \textcolor{red}{\sqrt{4 + 5} - \sqrt{4} = \sqrt{2 \cdot 4 - 7}}
  $$
  $$
  \textcolor{red}{3 - 2 = 1}
  $$
  Avendo ottenuto un'uguaglianza la soluzione $$x = 4$$ è accettabile.

- [Verifica per $$x = -9$${.text-purple}]
  Sostituisco nell'equazione iniziale alla $$x$$ il valore $$-9$$:
  $$
  \textcolor{red}{\sqrt{-9 + 5} - \sqrt{-9} = \sqrt{2 \cdot (-9) - 7}}
  $$
  Avendo ottenuto radici con argomento negativo la soluzione $$x = -9$$ non è accettabile.