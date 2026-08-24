# METODO DI TARTAGLIA PER CALCOLARE LA POTENZA DI UN BINOMIO

---

Proviamo a scrivere le potenze del binomio che conosciamo:

$$
\textcolor{red}{(a+b)^0 = 1}
$$
$$
\textcolor{red}{(a+b)^1 = a + b}
$$
$$
\textcolor{red}{(a+b)^2 = a^2 + 2ab + b^2}
$$
$$
\textcolor{red}{(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3}
$$

Possiamo subito osservare che tutti i risultati sono [polinomi ordinati](ad1c.html) secondo la potenza decrescente della lettera $$\textcolor{red}{a}$$ e secondo la potenza crescente della lettera $$\textcolor{red}{b}$$, sono anche [completi](ad1d.html) ed infine la potenza del primo termine corrisponde alla potenza del binomio; quindi se devo calcolare:

$$
\textcolor{red}{(a+b)^4 =}
$$

per la parte letterale (senza mettere i coefficienti numerici) dovrò fare:

$$
\textcolor{red}{a^4 + a^3b + a^2b^2 + ab^3 + b^4}
$$

Ora come trovare i coefficienti numerici? Proviamo a scrivere quelli che abbiamo:

$$
\textcolor{red}{(a+b)^0 = 1}
$$
$$
\textcolor{red}{(a+b)^1 = 1 \quad 1}
$$
$$
\textcolor{red}{(a+b)^2 = 1 \quad 2 \quad 1}
$$
$$
\textcolor{red}{(a+b)^3 = 1 \quad 3 \quad 3 \quad 1}
$$

I numeri sono distribuiti su di un triangolo ([Triangolo di Tartaglia](ad4cfaa.html)) [ed ogni numero sotto è somma dei 2 numeri sopra (se sono in due) oppure vale 1](ad4cfa0.html); quindi si può pensare che se devo fare:

$$
\textcolor{red}{(a+b)^4 =}
$$

i numeri saranno:

$$
\textcolor{red}{(a+b)^0 = 1}
$$
$$
\textcolor{red}{(a+b)^1 = 1 \quad 1}
$$
$$
\textcolor{red}{(a+b)^2 = 1 \quad 2 \quad 1}
$$
$$
\textcolor{red}{(a+b)^3 = 1 \quad 3 \quad 3 \quad 1}
$$
$$
\textcolor{red}{(a+b)^4 = 1 \quad 4 \quad 6 \quad 4 \quad 1}
$$

> **Nota:** Fai click [qui](ad4cfa1.html) se hai bisogno di ulteriori spiegazioni.

Quindi avrai:

$$
\textcolor{red}{(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4}
$$

Per vedere se hai capito bene fai da solo:

$$
\textcolor{red}{(a+b)^5 =}
$$

e quando hai finito confronta il [risultato](ad4cfa2.html).

---

Come utilizzare queste regole? Facciamo un esempio: se devo calcolare:

$$
\textcolor{red}{(2x+3y)^4 =}
$$

so che la regola vale:

$$
\textcolor{red}{(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4}
$$

al posto di $$\textcolor{red}{a}$$ ho $$\textcolor{red}{2x}$$ ed al posto di $$\textcolor{red}{b}$$ ho $$\textcolor{red}{3y}$$, quindi vado a sostituire:

$$
\textcolor{red}{(2x+3y)^4 = (2x)^4 + 4(2x)^3(3y) + 6(2x)^2(3y)^2 + 4(2x)(3y)^3 + (3y)^4}
$$

ed eseguendo i calcoli:

$$
\textcolor{red}{= 16x^4 + 96x^3y + 216x^2y^2 + 216xy^3 + 81y^4}
$$

> **Nota:** se hai bisogno di vedere i calcoli fai click [qui](ad4cfa3.html).

---

Fai i seguenti esercizi poi confronta con quelli che ho sviluppato io:

- $$\textcolor{red}{(x-2y)^4 =}$$ [soluzione](ad4cfa4.html)
- $$\textcolor{red}{(2x+y)^5 =}$$ [soluzione](ad4cfa5.html)
- $$\textcolor{red}{(3x-y)^5 =}$$ [soluzione](ad4cfa6.html)
- $$\textcolor{red}{(2a^2-3b)^5 =}$$ [soluzione](ad4cfa7.html)
- $$\textcolor{red}{(x-2y)^6 =}$$ [soluzione](ad4cfa8.html)
- $$\textcolor{red}{(2x^2+y^3)^6 =}$$ [soluzione](ad4cfa9.html)