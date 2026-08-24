# Potenza con base variabile

Considero la successione $s: \mathbb{N} \to \mathbb{N}$
$1^2, 2^2, 3^2, 4^2, \dots, n^2, (n+1)^2, \dots$
o meglio
$1, 4, 9, 16, \dots, n^2, (n+1)^2, \dots$

È una successione divergente.

Come ho considerato la potenza $2$ posso considerare qualunque numero naturale (diverso da zero, altrimenti otteniamo la successione costante $1, 1, 1, 1, \dots, n^0, (n+1)^0, \dots$).

Ad esempio se considero $5$ ottengo
$1^5, 2^5, 3^5, 4^5, \dots, n^5, (n+1)^5, \dots$
o meglio
$1, 32, 243, 1024, \dots, n^5, (n+1)^5, \dots$

> **Nota:** Prima di procedere conviene ripassare le potenze ad esponente frazionario, ricordando che l'esponente negativo porta la potenza al denominatore e l'esponente frazionario si può esprimere con un radicale avente indice il denominatore ed esponente il numeratore.
> 
> $$
> a^{1/4} = \sqrt[4]{a}
> $$
> 
> $$
> a^{-3/4} = \frac{1}{\sqrt[4]{a^3}}
> $$

Come ho considerato un numero naturale posso considerare un numero intero negativo, ad esempio $-2$
$1^{-2}, 2^{-2}, 3^{-2}, 4^{-2}, \dots, n^{-2}, (n+1)^{-2}, \dots$
o meglio
$1, \frac{1}{4}, \frac{1}{9}, \frac{1}{16}, \dots, \frac{1}{n^2}, \frac{1}{(n+1)^2}$

Ma anche un numero frazionario positivo oppure negativo.

Positivo, esempio $+ 3/4$
$1^{3/4}, 2^{3/4}, 3^{3/4}, 4^{3/4}, \dots, n^{3/4}, (n+1)^{3/4}, \dots$
o meglio
$1, \sqrt[4]{2^3}, \sqrt[4]{3^3}, \sqrt[4]{4^3}, \dots, \sqrt[4]{n^3}, \sqrt[4]{(n+1)^3}, \dots$

Negativo, esempio $- 3/4$
$1^{-3/4}, 2^{-3/4}, 3^{-3/4}, 4^{-3/4}, \dots, n^{-3/4}, (n+1)^{-3/4}, \dots$
o meglio
$1, \frac{1}{\sqrt[4]{8}}, \frac{1}{\sqrt[4]{27}}, \frac{1}{\sqrt[4]{64}}, \dots, \frac{1}{\sqrt[4]{n^3}}, \frac{1}{\sqrt[4]{(n+1)^3}}$
od anche (in forma un poco più comprensibile)
$1, \frac{1}{\sqrt[4]{2^3}}, \frac{1}{\sqrt[4]{3^3}}, \frac{1}{\sqrt[4]{4^3}}, \dots, \frac{1}{\sqrt[4]{n^3}}, \frac{1}{\sqrt[4]{(n+1)^3}}$

C'è da dire che, se l'esponente è positivo allora la successione è divergente, mentre se l'esponente è negativo la successione è convergente a zero.