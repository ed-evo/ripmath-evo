# Permutazioni con oggetti ripetuti

Facciamo un esempio con $4$ oggetti di cui $3$ uguali:
$\textcolor{red}{a \quad b \quad b \quad b}$

Se fossero oggetti diversi le permutazioni sarebbero $\textcolor{red}{P_4 = 4! = 24}$ e precisamente (per fartelo vedere bene coloro diversamente le lettere $b$):

$a \textcolor{red}{b} \textcolor{green}{b} \textcolor{blue}{b} \quad \textcolor{red}{b} a \textcolor{green}{b} \textcolor{blue}{b} \quad \textcolor{red}{b} \textcolor{green}{b} a \textcolor{blue}{b} \quad \textcolor{red}{b} \textcolor{green}{b} \textcolor{blue}{b} a$
$a \textcolor{red}{b} \textcolor{blue}{b} \textcolor{green}{b} \quad \textcolor{red}{b} a \textcolor{blue}{b} \textcolor{green}{b} \quad \textcolor{red}{b} \textcolor{blue}{b} a \textcolor{green}{b} \quad \textcolor{red}{b} \textcolor{blue}{b} \textcolor{green}{b} a$
$a \textcolor{green}{b} \textcolor{red}{b} \textcolor{blue}{b} \quad \textcolor{blue}{b} a \textcolor{red}{b} \textcolor{green}{b} \quad \textcolor{green}{b} \textcolor{red}{b} a \textcolor{blue}{b} \quad \textcolor{green}{b} \textcolor{red}{b} \textcolor{blue}{b} a$
$a \textcolor{blue}{b} \textcolor{red}{b} \textcolor{green}{b} \quad \textcolor{green}{b} a \textcolor{red}{b} \textcolor{blue}{b} \quad \textcolor{blue}{b} \textcolor{red}{b} a \textcolor{green}{b} \quad \textcolor{blue}{b} \textcolor{red}{b} \textcolor{green}{b} a$
$a \textcolor{green}{b} \textcolor{blue}{b} \textcolor{red}{b} \quad \textcolor{green}{b} a \textcolor{blue}{b} \textcolor{red}{b} \quad \textcolor{blue}{b} \textcolor{green}{b} a \textcolor{red}{b} \quad \textcolor{green}{b} \textcolor{blue}{b} \textcolor{red}{b} a$
$a \textcolor{blue}{b} \textcolor{green}{b} \textcolor{red}{b} \quad \textcolor{blue}{b} a \textcolor{green}{b} \textcolor{red}{b} \quad \textcolor{blue}{b} \textcolor{green}{b} a \textcolor{red}{b} \quad \textcolor{blue}{b} \textcolor{green}{b} \textcolor{red}{b} a$

> **Osservazione:** In ogni colonna ci sono le $6$ permutazioni per i tre colori della lettera $b$ ($P_3 = 3! = 6$).

Nella prima colonna la $a$ è al primo posto e permutiamo le tre $b$.
Nella seconda colonna la $a$ è al secondo posto e permutiamo le tre $b$.
Nella terza colonna la $a$ è al terzo posto e permutiamo le tre $b$.
Nella quarta colonna la $a$ è al quarto posto e permutiamo le tre $b$.

Ma se non ho i colori le lettere $b$ sono indistinguibili tra loro e pertanto ogni colonna diventa un termine singolo:
$\textcolor{red}{a \ b \ b \ b} \quad \textcolor{red}{b \ a \ b \ b} \quad \textcolor{red}{b \ b \ a \ b} \quad \textcolor{red}{b \ b \ b \ a}$

Allora per avere le permutazioni su $4$ oggetti di cui $3$ identici dovrò fare le permutazioni su $4$ oggetti e dividerle per le permutazioni su tre oggetti:

$$
\textcolor{red}{P_{4;3} = \frac{P_4}{P_3} = \frac{4!}{3!} = \frac{24}{6} = 4}
$$