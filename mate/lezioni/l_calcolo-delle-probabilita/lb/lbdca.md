# [Esercizio di applicazione della formula di Newton]{.text-red-darken-1}

Calcolare

$\textcolor{blue}{(a+b)^{10}} =$

Consideriamo la formula di Newton sostituendo ad $n$ il valore $10$

$$
\textcolor{blue}{(a+b)^{10} = \sum_{k=0,1,\dots,10} \binom{10}{k} a^{10-k}b^k}
$$

Per calcolare i vari termini devo sostituire a $k$ i valori $0,1,2,3,\dots,9,10$ e, sommando i risultati ottengo lo sviluppo del binomio:

1. Sostituisco $0$
   $\textcolor{blue}{\binom{10}{0} a^{10-0} b^0} = \textcolor{red}{a^{10}}$ [Calcolo del coefficiente](lbdcaa.html)

2. Sostituisco $1$
   $\textcolor{blue}{\binom{10}{1} a^{10-1} b^1} = \textcolor{red}{10 a^9 b}$ [Calcolo del coefficiente](lbdcab.html)

3. Sostituisco $2$
   $\textcolor{blue}{\binom{10}{2} a^{10-2} b^2} = \textcolor{red}{45 a^8 b^2}$ [Calcolo del coefficiente](lbdcac.html)

4. Sostituisco $3$
   $\textcolor{blue}{\binom{10}{3} a^{10-3} b^3} = \textcolor{red}{120 a^7 b^3}$ [Calcolo del coefficiente](lbdcad.html)

5. Sostituisco $4$
   $\textcolor{blue}{\binom{10}{4} a^{10-4} b^4} = \textcolor{red}{210 a^6 b^4}$ [Calcolo del coefficiente](lbdcae.html)

6. Sostituisco $5$
   $\textcolor{blue}{\binom{10}{5} a^{10-5} b^5} = \textcolor{red}{252 a^5 b^5}$ [Calcolo del coefficiente](lbdcaf.html)

7. Sostituisco $6$
   $\textcolor{blue}{\binom{10}{6} a^{10-6} b^6} = \textcolor{red}{210 a^4 b^6}$

8. Sostituisco $7$
   $\textcolor{blue}{\binom{10}{7} a^{10-7} b^7} = \textcolor{red}{120 a^3 b^7}$

9. Sostituisco $8$
   $\textcolor{blue}{\binom{10}{8} a^{10-8} b^8} = \textcolor{red}{45 a^2 b^8}$

10. Sostituisco $9$
    $\textcolor{blue}{\binom{10}{9} a^{10-9} b^9} = \textcolor{red}{10 a b^9}$

11. Sostituisco $10$
    $\textcolor{blue}{\binom{10}{10} a^{10-10} b^{10}} = \textcolor{red}{b^{10}}$

> **Nota:** Dopo il sesto termine non calcolo più il coefficiente binomiale perché si ripete (il triangolo di Tartaglia è simmetrico)

Ottengo quindi lo sviluppo:

$$
\textcolor{blue}{(a+b)^{10}} = \textcolor{red}{a^{10} + 10 a^9 b + 45 a^8 b^2 + 120 a^7 b^3 + 210 a^6 b^4 + 252 a^5 b^5 + 210 a^4 b^6 + 120 a^3 b^7 + 45 a^2 b^8 + 10 a b^9 + b^{10}}
$$