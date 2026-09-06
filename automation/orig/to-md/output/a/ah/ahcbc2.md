# <span class="text-red-600">Problema</span>

<span class="text-blue-600">Calcolare il perimetro di un rettangolo sapendo che la base è tripla dell'altezza e che, se si diminuiscono entrambe di 1 metro la superficie del rettangolo diminuisce di $15 \text{ m}^2$</span>

Come prima cosa costruiamo la figura.

La prima relazione dice che la base è tripla dell'altezza:
$\overline{BC} = 3 \overline{AB}$

La seconda relazione dice che diminuendo di 1 sia la base che l'altezza l'area diminuisce di $15 \text{ m}^2$ [Sviluppo](ahcbc2a.html):
$(\overline{BC} - 1) \cdot (\overline{AB} - 1) = \overline{BC} \cdot \overline{AB} - 15\text{m}^2$

Per calcolare il perimetro devo trovare la misura dei lati, quindi pongo:
$\overline{BC} = x$ $\quad$ $\overline{AB} = y$

Sostituisco nella prima relazione:
$\textcolor{blue}{x = 3y}$

Sostituisco nella seconda relazione:
$(x-1)(y-1) = xy - 15$ [Calcoli](ahcbc2b.html)
$\textcolor{blue}{x + y = 16}$

Metto a sistema le due relazioni:
$$
\textcolor{blue}{\begin{cases} x = 3y \\ x + y = 16 \end{cases}}
$$

Sostituisco il valore della $x$ della prima equazione nella seconda equazione:
$$
\textcolor{blue}{\begin{cases} x = 3y \\ 3y + y = 16 \end{cases}}
$$

Sommo:
$$
\textcolor{blue}{\begin{cases} x = 3y \\ 4y = 16 \end{cases}}
$$

Nella seconda equazione divido entrambi i termini per 4:
$$
\textcolor{blue}{\begin{cases} x = 3y \\ y = 4 \end{cases}}
$$

Sostituisco il valore della $y$ che ho trovato nella prima equazione:
$$
\textcolor{blue}{\begin{cases} x = 3 \cdot 4 \\ y = 4 \end{cases}}
$$

$$
\begin{cases} x = 12 \\ y = 4 \end{cases}
$$

Quindi:
$\textcolor{blue}{\overline{BC} = x = 12 \text{ m}}$ $\quad$ $\textcolor{blue}{\overline{AB} = 4 \text{ m}}$

Devo trovare il perimetro ($\overline{AB}=\overline{CD}$ e $\overline{BC}=\overline{AD}$):
$\overline{AB} + \overline{BC} + \overline{CD} + \overline{AD} = 4\text{m} + 12\text{m} + 4\text{m} + 12\text{m} = 32\text{m}$