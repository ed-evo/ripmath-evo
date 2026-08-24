# Sconto composto

Lo sconto si dice composto quando è calcolato ad interesse composto cioè quando per ottenere il valore nominale si applica l'interesse composto alla somma scontata.

Quindi chiamando $V$ la somma scontata e $C$ il valore nominale avremo

$$
C = V(1+i)^t
$$

Ricaviamo il valore attuale $V$

$$
V = \frac{C}{(1+i)^t}
$$

pongo

$$
\frac{1}{(1+i)^t} = (1+i)^{-t} = v^t
$$

e quindi ottengo la formula

$$
V = C v^t
$$

---

Questa formula è molto importante: essa ti mostra che per portare indietro nel tempo il capitale $C$ e farlo diventare il valore attuale $V$, nel regime ad interesse semplice, basta dividerlo per il fattore $(1+it)$ od anche moltiplicarlo per $1/(1+it) = (1+it)^{-1}$.

$$
(1+it)^{-1} = v^t
$$

si chiama **fattore di sconto composto**.

Il fattore $v^t$ ci permetterà di spostare indietro nel tempo i capitali a regime di interesse composto.

---

Se ora voglio ricavare lo sconto basterà sottrarre dal valore nominale il valore attuale

$$
S = C - V = C - C(1+i)^{-t} = C - Cv^t
$$

e raccogliendo $C$ ottengo la formula finale

$$
S = C(1 - v^t)
$$

---

Negli esercizi per calcolare lo sconto conviene prima calcolare il valore attuale con la formula $V = Cv^t$ e poi fare la differenza $S = C - V$.

Per utilizzare la formula $V = Cv^t$ si può ricorrere ai logaritmi: cioè passando ai logaritmi avremo

$$
\log V = \log C + \log (1+i)^{-t} = \log C - t \log(1+i) = \log C + t \text{CoLog}(1+i)
$$

Per fare prima è però preferibile leggere il valore di $v^t$ nelle tavole finanziarie ed eseguire la moltiplicazione; vediamo un esempio con gli stessi dati delle pagine precedenti.

---

**Esempio:** Calcolare lo sconto composto per un valore nominale di $20000\text{ €}$ pagati $2$ anni prima della scadenza al tasso del $5\%$

- $C = 20000\text{ €}$
- $i = 0,05$
- $t = 2$

Prima calcolo il valore attuale

$$
V = C(1+i)^{-t} = 20000\text{ €}(1,05)^{-2}
$$

leggo sulle tavole il valore di $(1,05)^{-2}$

$$
20000\text{ €}(1,05)^{-2} = 20000\text{ €} \cdot 0,90702948 = 18140,5896\text{ €}
$$

Ora calcolo lo sconto

$$
S = C - V = 20000\text{ €} - 18140,5896\text{ €} = 1859,4104\text{ €}
$$

approssimando al centesimo lo sconto è

$$
S = 1859,41\text{ €}
$$

---

> **Nota:** quando fai un esercizio e devi approssimare sarebbe sempre bene approssimare solamente il risultato e non i dati parziali trovati nel corso dell'esercizio stesso: qui non abbiamo approssimato il valore attuale, ma lo sconto come risultato finale