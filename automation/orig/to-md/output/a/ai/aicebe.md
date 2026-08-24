dimostriamo la formula

$$
\textcolor{red}{x^4 + y^4 = (x + y)^4 - 4xy(x+y)^2 + 2x^2y^2}
$$

Partiamo dall'[uguaglianza](../ad/ad4cfa.html) (Potenza quarta del binomio)

$$
\textcolor{blue}{(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4}
$$

leggiamo a rovescio

$$
\textcolor{blue}{x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4 = (x + y)^4}
$$

considero il termine centrale nel primo membro come differenza:

$$
\textcolor{blue}{6x^2y^2 = 8x^2y^2 - 2x^2y^2}
$$

in questo modo posso pensare $8x^2y^2$ come un doppio prodotto di un quadrato (dopo aver raccolto)

$$
\textcolor{blue}{x^4 + 4x^3y + 8x^2y^2 - 2x^2y^2 + 4xy^3 + y^4 = (x + y)^4}
$$

Adesso raggruppo entro parentesi i termini che mi interessano

$$
\textcolor{blue}{x^4 + (4x^3y + 8x^2y^2 + 4xy^3) - 2x^2y^2 + y^4 = (x + y)^4}
$$

Tra i termini entro parentesi raccolgo $4xy$

$$
\textcolor{blue}{x^4 + 4xy(x^2 + 2xy + y^2) - 2x^2y^2 + y^4 = (x + y)^4}
$$

Adesso il termine entro parentesi è il quadrato di un binomio

$$
\textcolor{blue}{x^4 + 4xy(x + y)^2 - 2x^2y^2 + y^4 = (x + y)^4}
$$

e adesso lasciando a destra solamente $x^4 + y^4$ e trasportando gli altri termini dopo l'uguale ottengo

$$
\textcolor{red}{x^4 + y^4 = (x + y)^4 - 4xy(x+y)^2 + 2x^2y^2}
$$