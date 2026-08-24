# Ordinamento

È fondamentale in informatica considerare l'ordine in cui vengono date le informazioni: ho già detto che, semplificando, è come un lungo nastro di dati che scorre davanti ad un lettore, di conseguenza i dati dovranno essere ordinati per poter essere utilizzati.

Ripartiamo dal concetto di relazione d'ordine e vediamo il concetto di **ordine parziale**.
Diremo che una relazione $$R$$ su un insieme $$A$$ è una relazione di **ordine** se è:

- riflessiva
- antisimmetrica
- transitiva

> **Nota:** E qui sarebbe meglio ripassare tutto il capitolo sulle relazioni.

Diremo che una relazione è di **ordine totale** su un insieme $$B$$ se dati comunque due elementi $$a$$ e $$b$$ appartenenti a $$B$$ vale sempre:

$$
\text{o } aRb \text{ oppure } bRa
$$

Cioè tutti gli elementi sono confrontabili fra loro secondo la relazione.

> **Esempio:** l'insieme dei numeri naturali $$N$$ con la relazione $$<$$ è un insieme totalmente ordinato perché per due qualunque numeri naturali $$a$$ e $$b$$ posso sempre dire se vale $$a < b$$ oppure $$b < a$$.

Se però esistono elementi di $$B$$ fra loro non confrontabili secondo la relazione allora la relazione si dice di **ordine parziale** e l'insieme $$B$$ si dice **parzialmente ordinato**.

> **Esempio:** L'insieme degli esseri umani con la relazione "è antenato o identico di" è solo di ordine parziale perché due che siano fratelli non appartengono alla relazione.

Ripassiamo le relazioni nei particolari:

I. **Riflessiva:**
$$
a \le a \quad \forall a \in B
$$
Si legge $$a$$ è minore od uguale ad $$a$$ per ogni elemento $$a$$ appartenente a $$B$$.
Cioè, in $$B$$ ogni elemento è minore od uguale a se stesso (oppure, che è la stessa cosa, non è superiore a se stesso).

II. **Antisimmetrica:**
$$
\text{se } a \le b \text{ e } b \le a \Rightarrow a = b \quad \forall a, b \in B
$$
Si legge: se $$a$$ è minore od uguale a $$b$$ e $$b$$ è minore od uguale ad $$a$$, allora $$a$$ è uguale a $$b$$ per ogni coppia di elementi $$a, b$$ appartenenti a $$B$$.
Cioè se $$a$$ non è maggiore di $$b$$ e $$b$$ non è maggiore di $$a$$ allora $$a$$ e $$b$$ sono uguali.

III. **Transitiva:**
$$
a \le b, b \le c \Rightarrow a \le c \quad \forall a, b, c \in B
$$
Si legge se $$a$$ è minore od uguale a $$b$$ e $$b$$ è minore od uguale a $$c$$ allora $$a$$ è minore od uguale a $$c$$ per ogni terna di elementi $$a, b, c$$ appartenenti a $$B$$.

Le algebre di Boole sono parzialmente ordinate a causa del teorema:

**Sia $$B$$ un'algebra di Boole, allora $$B$$ è un insieme parzialmente ordinato con $$a \le b$$ se e solo se $$a + b = b$$**

> **Dimostrazione:** Dimostriamolo "alla buona" con una dimostrazione non rigorosa, ma efficace, valida solo per l'algebra binaria di Boole (abbiamo solo gli elementi $$0$$ ed $$1$$).
> La condizione è necessaria e sufficiente (corrisponde a **se e solo se**).
> 
> **Dimostrazione diretta:**
> Ipotesi: supponiamo che nell'algebra binaria valga $$a + b = b$$.
> Tesi: devo dimostrare che vale $$a \le b$$.
> 
> L'ipotesi significa: $$0 + 0 = 0$$, $$0 + 1 = 1$$, $$1 + 1 = 1$$.
> Cioè la somma equivale al secondo addendo se sono contemporaneamente nulli entrambi gli addendi oppure se il secondo addendo vale $$1$$.
> Di conseguenza segue per ogni elemento $$a$$ (che può essere $$0$$ od $$1$$):
> - se $$a = 0$$ e se $$b = 0 \Rightarrow 0 \le 0$$, cioè $$a \le b$$
> - se $$a = 0$$ e se $$b = 1 \Rightarrow 0 \le 1$$, cioè $$a \le b$$
> - se $$a = 1$$ e se $$b = 1 \Rightarrow 1 \le 1$$, cioè $$a \le b$$
> 
> Quindi $$a \le b$$.
> 
> **Dimostrazione inversa:**
> Ipotesi: supponiamo che in $$B$$ valga $$a \le b$$.
> Tesi: devo dimostrare che vale $$a + b = b$$.
> 
> Gli unici elementi dell'insieme $$B$$ sono $$0$$ ed $$1$$.
> Vale: $$0 \le 0$$, $$0 \le 1$$, $$1 \le 1$$.
> Quindi si ha, considerando i casi possibili:
> - se $$a = 0$$ e se $$b = 0 \Rightarrow 0 + 0 = 0 = a + b = b$$
> - se $$a = 0$$ e se $$b = 1 \Rightarrow 0 + 1 = 1 = a + b = b$$
> - se $$a = 1$$ e se $$b = 1 \Rightarrow 1 + 1 = 1 = a + b = b$$
> ($$a = 1$$ e $$b = 0$$ non lo posso considerare perché contrario all'ipotesi)
> 
> Il che equivale a dire $$a + b = b$$, come volevamo.