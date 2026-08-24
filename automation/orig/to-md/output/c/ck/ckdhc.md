# [Scomposizione di una frazione polinomiale nella somma di più frazioni elementari]{.text-red}

Questa parte riguarda solamente i polinomi, ma viene studiata ora perché serve principalmente per l'integrazione.

---

Il sistema migliore di vedere il metodo è di fare prima un esempio, poi ne scriveremo i punti principali:

Scomporre come somma di frazioni elementari la frazione:
*(È quella che abbiamo lasciato in sospeso nell'introduzione)*

$$
\textcolor{blue}{\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2}}
$$

Considero

$$
\textcolor{blue}{x^3 - 2x^2 - x + 2 =}
$$

Scompongo (calcoli)

$$
\textcolor{blue}{= (x - 1)(x + 1)(x - 2)}
$$

Le tre radici (reali e distinte) del denominatore sono $1$, $-1$, $2$.
Posso scrivere la frazione come somma delle tre frazioni:

$$
\textcolor{blue}{\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{A}{x - 1} + \frac{B}{x + 1} + \frac{C}{x - 2}}
$$

Devo trovare $A$, $B$ e $C$.
A destra faccio il minimo comune multiplo:

$$
\textcolor{blue}{\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{A(x + 1)(x - 2) + B(x - 1)(x - 2) + C(x - 1)(x + 1)}{(x - 1)(x + 1)(x - 2)}}
$$

Dopo un po' di calcoli ottengo (calcoli):

$$
\textcolor{blue}{\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{x^2(A + B + C) + x(-A - 3B) - 2A + 2B - C}{(x - 1)(x + 1)(x - 2)}}
$$

Vale il

> **[Principio di identità dei polinomi:]{.text-red-darken-1}**
> [Due polinomi sono uguali se e solo se sono uguali tutti i termini dello stesso grado]{.text-red-darken-1}

Quindi, essendo uguali i denominatori, perché anche i numeratori siano uguali deve essere:

$$
\textcolor{blue}{A + B + C = -4}
$$
$$
\textcolor{blue}{-A - 3B = -6}
$$
$$
\textcolor{blue}{- 2A + 2B - C = 7}
$$

Pongo a sistema le tre equazioni per calcolare $A$, $B$ e $C$:

$$
\textcolor{blue}{\begin{cases} A + B + C = -4 \\ -A - 3B = -6 \\ - 2A + 2B - C = 7 \end{cases}}
$$
(calcoli)

Ed ottengo:

$$
\textcolor{blue}{\begin{cases} A = 3/2 \\ B = 3/2 \\ C = -7 \end{cases}}
$$

Quindi posso scrivere:

$$
\textcolor{blue}{\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{3/2}{x - 1} + \frac{3/2}{x + 1} + \frac{-7}{x - 2}}
$$

O meglio:

$$
\textcolor{blue}{\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{3}{2(x - 1)} + \frac{3}{2(x + 1)} - \frac{7}{x - 2}}
$$

---

**Riassumendo:**
- Trovo le radici del denominatore.
- Pongo la frazione uguale ad una somma di frazioni elementari dipendenti dalle radici trovate.
- Faccio il minimo comune multiplo fra le frazioni elementari e calcolo il numeratore.
- Pongo ogni termine del numeratore trovato uguale ad ogni termine del numeratore del polinomio di partenza (principio di identità dei polinomi): ottengo tante equazioni in $A, B, C...$ quante sono le incognite.
- Metto a sistema le equazioni trovate per trovare il valore di $A, B, C...$.
- Sostituisco i valori trovati nelle frazioni elementari.

---

Ora si tratta di vedere come integrare le funzioni elementari.