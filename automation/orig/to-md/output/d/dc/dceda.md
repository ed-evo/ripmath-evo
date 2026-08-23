# [Fascio di rette proprio]{.text-red}

È l'insieme di tutte le rette che passano per un punto.

Per determinare l'equazione di un fascio di rette chiamiamo $$\textcolor{blue}{(x_0, y_0)}$$ il centro del fascio e $$\textcolor{blue}{(x, y)}$$ il punto generico di una retta qualunque del fascio.

Se $$m$$ è il coefficiente angolare della retta che considero avrò che vale:

$$
\textcolor{blue}{m = \frac{y - y_0}{x - x_0}}
$$

E siccome per ogni $$m$$ diverso avrò una retta diversa del fascio, ne segue che questa è l'equazione del fascio di rette; senza denominatori ottengo:

$$
\textcolor{blue}{y - y_0 = m(x - x_0)}
$$

> Veramente esiste una retta del fascio che non è compresa nell'equazione: la retta per cui $$m$$ vale infinito, essendo infinito un valore che ancora non è possibile considerare. In analisi si potrà rimediare a questa piccola incongruenza.

Troviamo, come esempio, l'equazione del fascio di rette di centro [A(2,3)]{.text-red}. Applico la formula:

$$
\textcolor{red}{y - y_0 = m(x - x_0)}
$$

sapendo che $$x_0 = 2$$ e $$y_0 = 3$$:

$$
\textcolor{red}{y - 3 = m(x - 2)}
$$

Visto che siamo in argomento diciamo che un fascio di rette può rappresentarsi come [combinazione lineare](dceda.html) di due rette del fascio (che poi saranno le rette base corrispondenti ai valori zero ed infinito del parametro).

Ad esempio se considero le rette:

$$
\textcolor{red}{y - 2x - 3 = 0}
$$
$$
\textcolor{red}{2x + 3y + 4 = 0}
$$

il fascio sarà dato da:

$$
\textcolor{red}{y - 2x - 3 + s(2x + 3y + 4) = 0}
$$

al variare del valore di $$\textcolor{red}{s}$$.

> Al solito sono individuate tutte le rette del fascio ad eccezione della retta per cui $$s$$ vale infinito (cioè $$2x + 3y + 4 = 0$$), quindi qualche libro in vena di precisione scrive il fascio di rette in questo modo:
>
> $$
> \begin{cases} 
> \textcolor{red}{y - 2x - 3 + s(2x + 3y + 4) = 0} & \text{per } \textcolor{red}{s \in \mathbb{R}} \\
> \textcolor{red}{2x + 3y + 4 = 0}
> \end{cases}
> $$