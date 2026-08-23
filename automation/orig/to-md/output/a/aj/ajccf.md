# [Il valore del determinante non cambia se sommo (sottraggo) ad una riga (colonna) una qualunque riga (colonna) parallela moltiplicata per un numero reale $$C$$]{.text-red}

> Questa è la regola che ci permetterà di ottenere righe o colonne con più elementi nulli e quindi ci permetterà di sviluppare determinanti complessi in modo abbastanza semplificato

La regola dice che:

$$
\textcolor{blue}{\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = \begin{vmatrix} a+kd & b+ke & c+kf \\ d & e & f \\ g & h & i \end{vmatrix}}
$$

con $$k$$ numero reale

Infatti per la regola precedente abbiamo

$$
\textcolor{blue}{\begin{vmatrix} a+kd & b+ke & c+kf \\ d & e & f \\ g & h & i \end{vmatrix} = \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} + \begin{vmatrix} kd & ke & kf \\ d & e & f \\ g & h & i \end{vmatrix}}
$$

Ma per la regola sulle righe proporzionali il secondo determinante è nullo quindi la proprietà è dimostrata