# [Anello]{.text-red-darken-1}

Veniamo quindi ad una struttura più complessa che corrisponde alla struttura dell'insieme $$\mathbb{Z}$$ con le due operazioni di addizione e moltiplicazione: la struttura ad **anello**: consideriamo un insieme con due operazioni, una additiva ed una moltiplicativa, però per la struttura moltiplicativa gli elementi non hanno inverso; quindi tale fatto impedirà di poter considerare un gruppo moltiplicativo e potremo considerare solo un semigruppo.

Si definisce **anello ($$A ; \oplus, \otimes$$)** un insieme di enti $$A$$ su cui siano definite due operazioni $$\oplus, \otimes$$ che godano delle seguenti proprietà:

1. **($$A ; \oplus$$)** è un [gruppo](hcd.html) abeliano (commutativo)
2. **($$A ; \otimes$$)** è un [semigruppo](hcc.html)
3. L'operazione $$\otimes$$ è distributiva rispetto all'operazione $$\oplus$$, sia a destra che a sinistra, cioè:

$$
\textcolor{red}{a \otimes (b \oplus c) = (a \otimes b) \oplus (a \otimes c)}
$$

$$
\textcolor{red}{(b \oplus c) \otimes a = (b \otimes a) \oplus (c \otimes a)}
$$

> **Attenzione:** per la seconda operazione $$\otimes$$ non è richiesta né la proprietà commutativa, né che l'insieme $$A$$ abbia l'elemento neutro.
> 
> Quindi avremo:
> - Se l'operazione $$\otimes$$ è commutativa allora l'anello si dice **commutativo**
> - Se l'insieme $$A$$ è dotato di elemento neutro rispetto all'operazione $$\otimes$$ allora l'anello si dice **unitario**

> **Nota:** Facciamo il punto della situazione: le strutture sono ricavate dagli insiemi dei numeri e poi vengono applicate e ricercate in vari enti matematici; per procedere in modo logico avremo bisogno di seguire l'evoluzione dei numeri partendo dai numeri naturali, passando agli interi, ai razionali eccetera: la struttura ad anello la troviamo nell'insieme $$\mathbb{Z}$$ dei numeri interi. Proseguendo oltre $$\mathbb{Z}$$ avremo poi una struttura per i numeri razionali $$\mathbb{Q}$$: il **campo**.

Senza approfondire le proprietà degli anelli (lo farete all'università) vediamo nella prossima pagina qualche semplice esempio della struttura ad anello.