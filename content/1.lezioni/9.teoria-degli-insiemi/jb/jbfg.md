# Differenza simmetrica

> È un'operazione poco usata, ma in qualche liceo scientifico si fa, quindi definiamola

Si definisce **differenza simmetrica** fra due insiemi l'insieme che contiene come elementi l'unione tra:

- gli elementi del primo insieme che non appartengono al secondo
- e gli elementi del secondo insieme che non appartengono al primo

e si indica come $$\textcolor{red}{A \Delta B}$$

Dati gli insiemi:

$$
\textcolor{red}{A = \{1, 2, 3, 4\}}
$$

$$
\textcolor{red}{B = \{3, 4, 5, 6\}}
$$

$$
\textcolor{red}{A \Delta B = \{1, 2, 5, 6\}}
$$

devo prendere tutti gli elementi che appartengono solo ad $$A$$ e non a $$B$$ **o anche** quelli che appartengono solo a $$B$$ e non ad $$A$$

Vediamo mediante i diagrammi

> In azzurro l'insieme differenza simmetrica

Possiamo anche dire che valgono le seguenti relazioni

Dalla definizione segue:

$$
\textcolor{red}{A \Delta B = (A \setminus B) \cup (B \setminus A)}
$$

Dal diagramma segue che dall'unione devi togliere l'intersezione:

$$
\textcolor{red}{A \Delta B = (A \cup B) \setminus (A \cap B)}
$$

e per la proprietà transitiva seguirà l'uguaglianza notevole:

$$
\textcolor{red}{(A \setminus B) \cup (B \setminus A) = (A \cup B) \setminus (A \cap B)}
$$