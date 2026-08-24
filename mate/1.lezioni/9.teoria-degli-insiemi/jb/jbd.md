# Sottoinsiemi di un insieme

Definiamo sottoinsieme di un insieme dato un nuovo insieme che abbia come elementi degli elementi presenti nell'insieme di partenza: ad esempio dato

$$
\textcolor{red}{A = \{ 1, 2, 3, 4 \}}
$$

l'insieme

$$
\textcolor{red}{B = \{ 1, 3 \}}
$$

è un sottoinsieme dell'insieme $$A$$.

***

Dato un insieme definito mediante caratteristica per ottenerne un sottoinsieme basta aggiungere una proprietà: ad esempio se considero l'insieme dei numeri naturali minori di $$5$$

$$
\textcolor{red}{A = \{ x \in \mathbb{N} : x < 5 \} = \{ 1, 2, 3, 4 \}}
$$

ed aggiungo l'insieme dei numeri naturali minori di $$5$$ e non divisibili per $$2$$ ottengo

$$
\textcolor{red}{B = \{ x \in \mathbb{N} : x < 5; x \text{ non divisibile per } 2 \} = \{ 1, 3 \}}
$$

***

Per indicare che $$B$$ è sottoinsieme dell'insieme $$A$$ useremo la notazione di inclusione

$$
\textcolor{red}{B \subset A}
$$

che si legge **l'insieme $$B$$ è contenuto nell'insieme $$A$$**.

Per indicare che $$A$$ ha come sottoinsieme $$B$$ useremo invece la notazione

$$
\textcolor{red}{A \supset B}
$$

che si legge anche dicendo che $$A$$ è un sovrainsieme di $$B$$ o che **l'insieme $$A$$ contiene l'insieme $$B$$**.

***

Però posso aggiungere una proprietà impossibile, come ad esempio l'insieme dei numeri naturali minori di $$5$$ e divisibili per $$7$$ ottengo un insieme senza elementi

$$
\textcolor{red}{B = \{ x \in \mathbb{N} : x < 5; x \text{ è divisibile per } 7 \} = \emptyset}
$$

$$\emptyset$$ sarà anche chiamato **insieme vuoto** ed è un sottoinsieme per ogni insieme: basta aggiungere alla caratteristica dell'insieme una proprietà impossibile.

***

Come abbiamo aggiunto una proprietà impossibile possiamo aggiungere una proprietà ovvia e quindi otterremo come sottoinsieme l'insieme di partenza: esempio se considero l'insieme dei numeri naturali minori di $$5$$ e multipli di $$1$$ ottengo lo stesso insieme di partenza

$$
\textcolor{red}{B = \{ x \in \mathbb{N} : x < 5; x \text{ è multiplo di } 1 \} = A}
$$

In questo caso per indicare che considero l'insieme di partenza come sottoinsieme di sé stesso lo chiamerò **sottoinsieme improprio**.

***

Siccome quando indicheremo genericamente un sottoinsieme di un insieme potrebbe trattarsi anche dell'insieme improprio allora per considerare anche questa possibilità indicheremo che $$B$$ è sottoinsieme di $$A$$ in questo modo

$$
\textcolor{red}{B \subseteq A}
$$

che si legge **l'insieme $$B$$ è contenuto od uguale all'insieme $$A$$**.