# [QUOZIENTE DI POTENZE]{.text-red}

> [**AVVERTENZA:** purtroppo non so come scrivere le frazioni in linguaggio "html" quindi userò come notazione a/b utilizzando le parentesi, quando utile, anche se non necessarie nella notazione di frazione, per comprendere meglio il testo. Ad esempio scriverò $$\textcolor{red}{(}$$ab $$\textcolor{red}{)}$$ / $$\textcolor{red}{(}$$bc $$\textcolor{red}{)}$$ piuttosto che ab/bc e significherà ab fratto bc. Scriverò le parentesi con un altro colore per indicarti che nella forma normale di frazione puoi non metterle]{.text-purple}

Se devo dividere

$$
\textcolor{red}{2^8 : 2^5}
$$

poiché

$$
\textcolor{red}{2^8 = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2}
$$

e

$$
\textcolor{red}{2^5 = 2 \times 2 \times 2 \times 2 \times 2}
$$

otterrai

$$
\textcolor{red}{2^8 / 2^5 = \textcolor{magenta}{(}2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2\textcolor{magenta}{)} / \textcolor{magenta}{(}2 \times 2 \times 2 \times 2 \times 2\textcolor{magenta}{)}}
$$

ricordando che nelle frazioni puoi togliere sopra e sotto gli stessi fattori [ (solo quando il numeratore e il denominatore sono in forma di prodotto)]{.text-purple} restano solo tre $$2$$ al numeratore (sopra)

$$
\textcolor{red}{= 2 \times 2 \times 2 = 2^3 = 2^{8-5}}
$$

quindi per fare il quoziente quando hanno la stessa base basta sottrarre gli esponenti. Ora rendiamo il risultato più generale possibile usando le lettere:

$$
\textcolor{red}{a^r / a^s = \textcolor{magenta}{(}a \cdot a \cdot \dots \cdot a\textcolor{magenta}{)} / \textcolor{magenta}{(}a \cdot a \cdot \dots \cdot a\textcolor{magenta}{)}}
$$

dalle $$r$$ lettere di sopra devo togliere le $$s$$ lettere di sotto [ (ciò potrò farlo solo se $$r$$ è più grande di $$s$$)]{.text-purple} resterà quindi

$$
\textcolor{red}{= a \cdot a \cdot \dots \cdot a = a^{r-s}}
$$

Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza: se $$\textcolor{red}{r > s}$$ allora $$\textcolor{red}{a^r / a^s = a^{r-s}}$$

> [**REGOLA:** il quoziente di due potenze con la stessa base è una potenza che ha per base la stessa base e per esponente la differenza degli esponenti.]{.text-purple}

se hai bisogno di aiuto per leggere la regola fai click [qui](aa3a.html)

Però in matematica quando si trova una regola essa deve essere resa più generale possibile; noi abbiamo trovato una regola che vale solo quando il primo esponente $$r$$ è maggiore del secondo esponente $$s$$. Quindi ora occorre vedere cosa si può fare quando $$r$$ è uguale ad $$s$$ ed anche quando $$r$$ è minore di $$s$$.