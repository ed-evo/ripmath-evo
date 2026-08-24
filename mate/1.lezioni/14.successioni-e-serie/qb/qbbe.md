# Somma di n termini di una progressione geometrica

La somma di $$n$$ termini di una progressione geometrica è alla base del calcolo di una rata, quindi fondamentale in matematica finanziaria ed attuariale.

Vogliamo sommare $$n$$ termini di una progressione geometrica data, la somma sarà data da
**$$S_n = a_1 + a_2 + a_3 + \dots + a_{n-2} + a_{n-1} + a_n$$**

Moltiplicando tutti i termini sia prima che dopo l'uguale per la ragione $$q$$ ottengo

**$$S_n \cdot q = a_1 \cdot q + a_2 \cdot q + a_3 \cdot q + \dots + a_{n-2} \cdot q + a_{n-1} \cdot q + a_n \cdot q$$**

Siccome ogni termine della progressione moltiplicato per $$q$$ mi dà il termine successivo posso scrivere

**$$S_n \cdot q = a_2 + a_3 + a_4 + \dots + a_{n-1} + a_n + a_n \cdot q$$**
L'ultimo termine lo scrivo $$a_n \cdot q$$ invece che $$a_{n+1}$$.

Adesso faccio la differenza fra questa uguaglianza e quella iniziale

$$
\textcolor{red}{S_n \cdot q = a_2 + a_3 + a_4 + \dots + a_{n-1} + a_n + a_n \cdot q}
$$
$$
\textcolor{red}{- S_n = a_1 + a_2 + a_3 + \dots + a_{n-2} + a_{n-1} + a_n}
$$
$$
\textcolor{red}{\hline}
$$
$$
\textcolor{red}{S_n \cdot q - S_n = -a_1 + a_n \cdot q}
$$

infatti gli altri termini si eliminano fra loro.
Adesso la tratto come un'equazione per calcolare $$S_n$$.

Raccolgo $$S_n$$
**$$S_n \cdot (q - 1) = a_n \cdot q - a_1$$**

ma
**$$a_n = a_1 \cdot q^{n-1}$$**

ottengo
**$$S_n \cdot (q - 1) = a_1 \cdot q^{n-1} \cdot q - a_1$$**

Cioè
**$$S_n \cdot (q - 1) = a_1 \cdot q^n - a_1$$**

raccolgo anche $$a_1$$
**$$S_n \cdot (q - 1) = a_1 \cdot (q^n - 1)$$**

divido entrambi i membri per $$(q-1)$$ ed ottengo la formula finale

$$
S_n = \frac{a_1(q^n - 1)}{q - 1}
$$

o meglio

$$
\textcolor{red}{S_n = a_1 \cdot \frac{q^n - 1}{q - 1}}
$$

> **Nota:** se la ragione è minore di $$1$$ di solito si usa la formula equivalente
> $$
> \textcolor{red}{S_n = a_1 \cdot \frac{1 - q^n}{1 - q}}
> $$
> che si ottiene semplicemente cambiando di segno sia il numeratore che il denominatore: in questo modo, anche se la ragione è minore di $$1$$, sia il numeratore che il denominatore sono positivi.

Esempio: calcoliamo la somma dei primi $$10$$ termini della progressione geometrica
**$$3, 6, 12, 24, 48, 96, 192, 384, 768, 1536$$**

la ragione $$q$$ vale $$2$$ (per trovarla basta dividere il secondo termine per il primo $$6 : 3 = 2$$)
quindi applico la formula

$$
S_{10} = a_1 \cdot \frac{q^n - 1}{q - 1} = 3 \cdot \frac{2^{10} - 1}{2 - 1} = 3 \cdot (2^{10} - 1) = 3 \cdot (1024 - 1) = 3(1023) = 3069
$$

quindi **$$S_{10} = 3069$$**