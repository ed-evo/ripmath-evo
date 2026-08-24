# Determinazione della formula

Per semplicità supponiamo di considerare per ora l'anno come misura intera, cioè di versare, ad esempio, in banca un capitale il primo gennaio; vedremo successivamente come adattare poi i dati a periodi frazionari.

***

> **Esempio pratico:** consideriamo numeri molto semplici anche se lontani dalla realtà.
> Supponiamo di impiegare un capitale di $1000$ euro al tasso del $10\%$ ($I = 0,10$) per $2$ anni.
>
> Avremo:
> - Dopo $1$ anno: $M_1 = C(1+i) = 1000(1+0,10) = 1000 \cdot 1,1 = 1100€$
> - Dopo $2$ anni: $M_2 = M_1(1+i) = 1100(1+0,10) = 1100 \cdot 1,1 = 1210€$
>
> Cioè il secondo anno l'interesse è calcolato sul montante del primo anno ($1100$ euro) e pertanto anche sull'interesse già maturato viene calcolato l'interesse per il nuovo anno.

Vediamo quindi di trovare la formula generale.

Se impiego un capitale $C$ ad un dato tasso per un anno alla fine dell'anno otterrò il montante $M_1$:

$$
M_1 = C(1+i)
$$
(essendo $1$ anno il tempo vale $1$)

Lascio i soldi in banca; $M_1$ diventa il nuovo capitale e alla fine del secondo anno otterrò il montante $M_2$:

$$
M_2 = M_1(1+i) = C(1+i)(1+i) = C(1+i)^2
$$

Lascio i soldi in banca; $M_2$ diventa il nuovo capitale e alla fine del terzo anno otterrò il montante $M_3$:

$$
M_3 = M_2(1+i) = C(1+i)^2(1+i) = C(1+i)^3
$$

E così via posso continuare. Quindi abbiamo:

- **Primo anno**: $M_1 = C(1+i)$
- **Secondo anno**: $M_2 = C(1+i)^2$
- **Terzo anno**: $M_3 = C(1+i)^3$
- **Quarto anno**: $M_4 = C(1+i)^4$
- ...

Quindi per un numero $t$ di anni avremo la formula:

$$
M_t = C(1+i)^t
$$

***

Per gli esercizi possiamo procedere in modi diversi:

- Se il numero di anni è piccolo (ad esempio $2$) possiamo calcolare il montante per il primo, poi il montante per il secondo anno.
- Possiamo applicare la formula e, con una buona calcolatrice (io uso la calcolatrice in dotazione al computer) trovare il risultato con un'approssimazione alla decima cifra decimale (metodo consigliato).
- Possiamo applicare la formula e utilizzare le tavole logaritmiche a $7$ cifre decimali utilizzando il metodo visto per l'interpolazione in modo da avere un errore dell'ordine di $1$ su un milione (un centesimo ogni diecimila euro).
- Possiamo utilizzare un prontuario per i calcoli finanziari.

Per il calcolo basta una buona calcolatrice in cui vi siano anche le potenze (tasto $x^y$); una volta per periodi di anni lunghi venivano usati i logaritmi, oggi, almeno per questa formula, non ne vedo l'utilità e il loro utilizzo costituirebbe ormai, secondo me, solamente un inutile appesantimento della materia; comunque, se a qualcuno può interessare, ho aggiunto all'inizio di matematica finanziaria alcune pagine sull'uso delle tavole logaritmiche.

Vediamo, a scopo didattico, un [esercizio risolto nei quattro modi](nbacaa.html).