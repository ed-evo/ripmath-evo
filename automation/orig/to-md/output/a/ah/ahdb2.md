# [Problema:]{.text-red}

---

[In un rettangolo la differenza fra il doppio dell'altezza e la misura della base vale $18\text{ cm}$. La misura della diagonale vale $45\text{ cm}$. Determinare l'area del rettangolo]{.text-blue}

---

Costruiamo prima la figura e scriviamo per esteso tutte le relazioni che abbiamo:

**[la differenza fra il doppio dell'altezza e la misura della base vale $18\text{ cm}$]{.text-blue}**

lo traduco come:

**$\textcolor{red}{2\overline{AB} - \overline{BC} = 18\text{ cm}}$**

**[La misura della diagonale vale $45\text{ cm}$]{.text-blue}**

la traduco come:

**$\textcolor{red}{\overline{BD} = 45\text{ cm}}$**

---

> Stavolta lo facciamo con un sistema sostituendo $x$ e $y$ alle grandezze incognite $\overline{AB}$ e $\overline{BC}$.
> Con due incognite abbiamo bisogno di due relazioni: la prima va bene, per la seconda dobbiamo trovare un teorema che includa tutti i dati (comprese le incognite messe).
> Viene immediato applicare il teorema di Pitagora al triangolo $BCD$.

---

**$\textcolor{red}{\overline{AB} = x}$**
**$\textcolor{red}{\overline{BC} = y}$**

Come prima relazione ottengo:

**$\textcolor{red}{2x - y = 18}$**

Per la seconda relazione applico il teorema di Pitagora al triangolo $BCD$ ricordando che anche $\overline{BD} = x$ (nota: nel contesto del problema $\overline{BD}$ è la diagonale):

**$\textcolor{red}{\overline{BC}^2 + \overline{CD}^2 = \overline{BD}^2}$**

Sostituisco i dati e le incognite alle lettere:

**$\textcolor{red}{x^2 + y^2 = 45^2}$**

ottengo quindi il sistema di secondo grado:

$$
\textcolor{red}{\begin{cases} 2x - y = 18 \\ x^2 + y^2 = 2025 \end{cases}}
$$

ricavo la $y$ dalla prima relazione e ne sostituisco il valore nella seconda:

$$
\textcolor{red}{\begin{cases} -y = -2x + 18 \\ x^2 + y^2 = 2025 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} y = 2x - 18 \\ x^2 + y^2 = 2025 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} y = 2x - 18 \\ x^2 + (2x - 18)^2 = 2025 \end{cases}}
$$

Calcolo il quadrato:

$$
\textcolor{red}{\begin{cases} y = 2x - 18 \\ x^2 + 4x^2 - 72x + 324 = 2025 \end{cases}}
$$

sommo ed ottengo:

$$
\textcolor{red}{\begin{cases} y = 2x - 18 \\ 5x^2 - 72x - 1701 = 0 \end{cases}}
$$

La seconda è un'equazione di secondo grado, la risolvo ed ottengo come soluzioni:

**[$x_1 = 27 \quad x_2 = -\frac{63}{5}$]{.text-blue}**

Siccome devo trovare la misura $x$ dell'altezza accetto solo la radice positiva. Sostituisco il valore $27$ nel sistema:

$$
\textcolor{red}{\begin{cases} y = 2(27) - 18 = 54 - 18 = 36 \\ x = 27 \end{cases}}
$$

Quindi ottengo:

**[$\overline{AB} = 27\text{ cm}$]{.text-blue}**
**[$\overline{BC} = 36\text{ cm}$]{.text-blue}**

e l'area sarà data da:

**[$\text{Area Rettangolo} = \overline{AB} \cdot \overline{BC} = 27\text{ cm} \cdot 36\text{ cm} = 972\text{ cm}^2$]{.text-blue}**

---