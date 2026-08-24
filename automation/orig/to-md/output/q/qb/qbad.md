# [Conoscendo il termine di posto $h$ e la ragione trovare il termine di posto $k$]{.text-red}

In pratica è l'inverso di quello che abbiamo fatto nella pagina precedente.
Vediamo, anche qui, sullo stesso esempio della pagina precedente, come procedere.
Supponiamo di conoscere il terzo termine $a_3 = 8$ e la ragione $4$, troviamo il settimo termine $a_7 = 24$.

Per ottenere il settimo termine partendo dal terzo devo aggiungere al terzo la ragione per 4 volte $(7-3)$.
Quindi:

$$
a_7 = a_3 + 4 \cdot 4 = 8 + 16 = 24
$$

Adesso facciamo lo stesso ragionamento con due termini generici, in modo da avere la formula generale.

Supponiamo di conoscere il termine $a_h$ e la ragione $d$.
Supponiamo anche $h < k$ (siccome se $h < k$ la differenza diventa negativa la formula è comunque valida: infatti se $h < k$ invece di aggiungere devo sottrarre).
Allora per ottenere $a_k$ partendo da $a_h$, dovrò aggiungere a tale termine la ragione $d$ moltiplicata per $(k - h)$.

$$
\textcolor{red}{a_k = a_h + d \cdot (k - h)}
$$

> **Esempio:** Anche qui riferiamoci allo stesso esempio della pagina precedente.
>
> Dato il quinto termine $a_5 = -2$ e la ragione $d = 3/2$, trovare il venticinquesimo termine $a_{25}$.
>
> Applico la formula:
>
> $$
> a_{25} = a_5 + \frac{3}{2} \cdot (25 - 5) = -2 + \frac{3}{2} \cdot 20 = -2 + 30 = 28
> $$
>
> Quindi $a_{25} = 28$.