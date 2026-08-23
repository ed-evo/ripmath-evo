# [Disposizioni semplici]{.text-red}

Le disposizioni semplici su $$n$$ oggetti sono i numeri delle coppie ordinate $$\textcolor{red}{D_{n;2}}$$, terne ordinate $$\textcolor{red}{D_{n;3}}$$, quaterne ordinate $$\textcolor{red}{D_{n;4}}$$, ..., k-uple ordinate $$\textcolor{red}{D_{n;k}}$$ che posso formare con $$n$$ oggetti;

Per trovare la formula procediamo con ordine, ad esempio su $$5$$ oggetti:
$$\textcolor{red}{a_1}$$, $$\textcolor{red}{a_2}$$, $$\textcolor{red}{a_3}$$, $$\textcolor{red}{a_4}$$, $$\textcolor{red}{a_5}$$

se considero gli elementi uno ad uno allora ho $$5$$ possibilità:
$$\textcolor{red}{a_1} \quad \textcolor{red}{a_2} \quad \textcolor{red}{a_3} \quad \textcolor{red}{a_4} \quad \textcolor{red}{a_5}$$
$$\textcolor{red}{D_{5;1} = 5}$$

se considero le coppie ordinate, allora ad ogni elemento precedente ne devo aggiungere $$4$$ (uno alla volta):
$$\textcolor{red}{a_1 a_2} \quad \textcolor{red}{a_1 a_3} \quad \textcolor{red}{a_1 a_4} \quad \textcolor{red}{a_1 a_5}$$
$$\textcolor{red}{a_2 a_1} \quad \textcolor{red}{a_2 a_3} \quad \textcolor{red}{a_2 a_4} \quad \textcolor{red}{a_2 a_5}$$
$$\textcolor{red}{a_3 a_1} \quad \textcolor{red}{a_3 a_2} \quad \textcolor{red}{a_3 a_4} \quad \textcolor{red}{a_3 a_5}$$
$$\textcolor{red}{a_4 a_1} \quad \textcolor{red}{a_4 a_2} \quad \textcolor{red}{a_4 a_3} \quad \textcolor{red}{a_4 a_5}$$
$$\textcolor{red}{a_5 a_1} \quad \textcolor{red}{a_5 a_2} \quad \textcolor{red}{a_5 a_3} \quad \textcolor{red}{a_5 a_4}$$
cioè:
$$\textcolor{red}{D_{5;2} = 5 \cdot 4}$$

Se poi voglio le terne ordinate ogni coppia mi genererà tre possibili terne (mi restano tre numeri perché due sono già nella coppia):
$$\textcolor{red}{D_{5;3} = 5 \cdot 4 \cdot 3}$$
così se voglio le quaterne ordinate ad ogni terna potrò aggiungere $$2$$ oggetti diversi perché $$3$$ sono già nelle terne:
$$\textcolor{red}{D_{5;4} = 5 \cdot 4 \cdot 3 \cdot 2}$$
concludendo se voglio le cinquine ordinate ad ogni quaterna potrò aggiungere solo $$1$$ oggetto perché $$4$$ sono già nelle quaterne:
$$\textcolor{red}{D_{5;5} = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}$$

> **Nota:** Da notare che le disposizioni semplici di $$5$$ oggetti presi $$5$$ a $$5$$ corrispondono alle permutazioni su $$5$$ oggetti:
> $$\textcolor{red}{D_{5;5} = P_5 = 5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}$$
> Le permutazioni sono le disposizioni che posso fare considerando di prendere tutti gli oggetti.

Facciamo ora un riepilogo cercando la formula:
$$\textcolor{red}{D_{5;1} = 5}$$
$$\textcolor{red}{D_{5;2} = 5 \cdot 4}$$
$$\textcolor{red}{D_{5;3} = 5 \cdot 4 \cdot 3}$$
$$\textcolor{red}{D_{5;4} = 5 \cdot 4 \cdot 3 \cdot 2}$$
$$\textcolor{red}{D_{5;5} = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}$$

Il primo numero della $$\textcolor{red}{D}$$ corrisponde al primo numero del prodotto dopo l'uguale, dobbiamo trovare la corrispondenza fra il secondo numero prima dell'uguale ed un numero dopo l'uguale.
osserviamo che:
$$\textcolor{red}{5 - 1 + 1 = 5}$$
$$\textcolor{red}{5 - 2 + 1 = 4}$$
$$\textcolor{red}{5 - 3 + 1 = 3}$$
$$\textcolor{red}{5 - 4 + 1 = 2}$$
$$\textcolor{red}{5 - 5 + 1 = 1}$$

Quindi per ottenere l'ultimo numero del prodotto dopo l'uguale basta fare la differenza dei due numeri prima dell'uguale ed aumentarla di $$1$$.
Questo ci porta alla formula:

$$
\textcolor{red}{D_{n;k} = n \cdot (n-1) \cdot \dots \cdot (n-k+1)}
$$

cioè:
**Il numero delle disposizioni semplici di $$n$$ oggetti presi $$k$$ a $$k$$ è uguale al prodotto di tutti i numeri naturali compresi fra $$n$$ ed $$(n-k+1)$$**

> Chiamiamo "terna ordinata" un insieme di $$3$$ numeri in cui conta l'ordine, cioè $$60, 30, 90$$ è una terna diversa da $$90, 60, 30$$.
>
> Per esercizio troviamo tutte le terne ordinate che possono uscire in un'estrazione su una ruota del lotto: sono le terne che possiamo formare con $$90$$ oggetti, cioè le disposizioni semplici di $$90$$ oggetti presi tre a tre:
> $$\textcolor{red}{D_{90;3} = 90 \cdot 89 \cdot \dots \cdot (90-3+1) = 90 \cdot 89 \cdot 88 = 704880}$$
> Prova ora a calcolare il numero delle cinquine ordinate che possono uscire in una estrazione del lotto.