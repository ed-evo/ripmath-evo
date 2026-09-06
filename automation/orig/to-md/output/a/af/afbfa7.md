# <span class="text-red-600">esercizio</span>

Discutere la seguente equazione

$$
\frac{x - 2}{a - 3} - \frac{x + 1}{2} = 1 - \frac{x + 2a}{2a - 6}
$$

Come prima cosa impongo che sia (C.R. condizioni di realtà)

$$
2a - 6 \neq 0 \text{ cioè } a \neq 3
$$

Perché per questo valore l'equazione [perde di significato](afbfa7a.html)

devo risolvere come un'espressione, prima scompongo i denominatori

$$
\frac{x - 2}{a - 3} - \frac{x + 1}{2} = 1 - \frac{x + 2a}{2(a - 3)}
$$

il minimo comune multiplo è
$2(a - 3)$

riduco allo stesso denominatore (diminuisco il carattere per non dover andare a capo)

$$
\frac{2(x - 2) - (x + 1)(a - 3)}{2(a - 3)} = \frac{2(a - 3) - (x + 2a)}{2(a - 3)}
$$

Elimino i denominatori (posso farlo per le condizioni di realtà C.R.)

$$
2(x - 2) - (x + 1)(a - 3) = 2(a - 3) - (x + 2a)
$$

Eseguo le moltiplicazioni (io faccio tutti i passaggi, tu puoi abbreviare)

$$
2x - 4 - (ax - 3x + a - 3) = 2a - 6 - x - 2a
$$

$$
2x - 4 - ax + 3x - a + 3 = 2a - 6 - x - 2a
$$

Termini con la $x$ prima e quelli senza dopo l'uguale, chi salta l'uguale cambia di segno

$$
2x - ax + 3x + x = 2a - 6 - 2a + 4 + a - 3
$$

$$
6x - ax = a - 5
$$

$$
x(6 - a) = a - 5
$$

Ora dovrei applicare il secondo principio dividendo entrambi i termini per $(6 - a)$ ma posso farlo solo se $(6 - a)$ è diverso da zero mentre se è uguale a zero avrò un'equazione o impossibile o indeterminata:
distinguo i due casi

- se $6 - a \neq 0$ (equivale a dire $a \neq 6$)
  posso dividere
  $$
  \frac{x(6 - a)}{6 - a} = \frac{a - 5}{6 - a}
  $$
  semplifico
  $$
  x = \frac{a - 5}{6 - a}
  $$

- L'altra possibilità
  se $a = 6$ sostituisco $6$ invece di applicare il secondo principio
  $$
  x(6 - 6) = 6 - 5
  $$
  $$
  0 = 1
  $$
  equazione impossibile

Raccogliendo i risultati:

<span class="text-red-600">se $a = 3$ l'equazione perde di significato</span>
<span class="text-red-600">se $a \neq 3$ e $a \neq 6 \quad x = \frac{a - 5}{6 - a}$</span>
<span class="text-red-600">se $a \neq 3$ e $a = 6$ equazione impossibile</span>