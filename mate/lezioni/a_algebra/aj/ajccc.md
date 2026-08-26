# Se in un determinante due righe (due colonne) sono proporzionali il determinante vale zero

> **Dimostrazione:**
> 
> Dimostriamolo in un determinante $3\times3$: supponiamo che la terza riga si ottenga dalla prima moltiplicandola per il numero $b$
> 
> $$
> \begin{vmatrix}
> a_{1,1} & a_{1,2} & a_{1,3} \\
> a_{2,1} & a_{2,2} & a_{2,3} \\
> ba_{1,1} & ba_{1,2} & ba_{1,3}
> \end{vmatrix} =
> $$
> 
> Sviluppo secondo la prima riga:
> 
> $$
> \begin{vmatrix}
> a_{1,1} & a_{1,2} & a_{1,3} \\
> a_{2,1} & a_{2,2} & a_{2,3} \\
> ba_{1,1} & ba_{1,2} & ba_{1,3}
> \end{vmatrix} = a_{1,1} \cdot \begin{vmatrix}
> a_{2,2} & a_{2,3} \\
> ba_{1,2} & ba_{1,3}
> \end{vmatrix} - a_{1,2} \cdot \begin{vmatrix}
> a_{2,1} & a_{2,3} \\
> ba_{1,1} & ba_{1,3}
> \end{vmatrix} + a_{1,3} \cdot \begin{vmatrix}
> a_{2,1} & a_{2,2} \\
> ba_{1,1} & ba_{1,2}
> \end{vmatrix} =
> $$
> 
> $$
> = a_{1,1} \cdot (a_{2,2}ba_{1,3} - a_{2,3}ba_{1,2}) - a_{1,2} \cdot (a_{2,1}ba_{1,3} - a_{2,3}ba_{1,1}) + a_{1,3} \cdot (a_{2,1}ba_{1,2} - a_{2,2}ba_{1,1}) =
> $$
> 
> $$
> = \textcolor{red}{b a_{1,1} a_{2,2} a_{1,3}} \textcolor{blue}{- b a_{1,1} a_{2,3} a_{1,2}} - b a_{1,2} a_{2,1} a_{1,3} \textcolor{blue}{+ b a_{1,2} a_{2,3} a_{1,1}} + b a_{1,3} a_{2,1} a_{1,2} \textcolor{red}{- b a_{1,3} a_{2,2} a_{1,1}} =
> $$
> 
> $$
> = 0
> $$
> 
> sono fattori a due a due uguali e di segno contrario